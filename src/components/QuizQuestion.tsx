import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (questionId: number, selectedOption: string) => void;
}

type OptionStyleProps = {
  isSelected: boolean;
  isAnswered: boolean;
  isCorrect: boolean;
};

const FEEDBACK_STYLES = {
  correct: {
    container: "bg-green-100 text-green-800",
    border: "bg-green-100 border-green-500",
  },
  incorrect: {
    container: "bg-red-100 text-red-800",
    border: "bg-red-100 border-red-500",
  },
};

const QuestionOptions = ({
                           question,
                           selectedOption,
                           answered,
                           onOptionChange
                         }: {
  question: Question;
  selectedOption: string | null;
  answered: boolean;
  onOptionChange: (value: string) => void;
}) => (
    <RadioGroup value={selectedOption || ""} onValueChange={onOptionChange}>
      <div className="space-y-3">
        {question.options.map((option) => {
          const styleProps: OptionStyleProps = {
            isSelected: selectedOption === option.value,
            isAnswered: answered,
            isCorrect: option.value === question.correctAnswer,
          };

          return (
              <div
                  key={option.value}
                  className={cn(
                      "flex items-start p-4 border rounded-lg transition-colors",
                      getOptionStyles(styleProps),
                      styleProps.isSelected && "border-blue-500 bg-blue-50"
                  )}
              >
                <RadioGroupItem
                    value={option.value}
                    id={`option-${question.id}-${option.value}`}
                    disabled={answered}
                />
                <Label
                    htmlFor={`option-${question.id}-${option.value}`}
                    className="flex-grow ml-2 font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
          );
        })}
      </div>
    </RadioGroup>
);

const FeedbackSection = ({
                           question,
                           selectedOption
                         }: {
  question: Question;
  selectedOption: string;
}) => {
  const isCorrect = selectedOption === question.correctAnswer;
  const feedbackStyle = isCorrect ? FEEDBACK_STYLES.correct : FEEDBACK_STYLES.incorrect;

  return (
      <div className={cn("p-4 rounded-md mt-4", feedbackStyle.container)}>
        <p className="font-semibold">
          {isCorrect ? "Correct!" : "Incorrect. The right answer is:"}
        </p>
        {!isCorrect && (
            <p className="mt-1">
              {question.options.find(o => o.value === question.correctAnswer)?.label}
            </p>
        )}
        {question.explanation && (
            <div className="mt-2 pt-2 border-t border-gray-200 text-gray-700">
              <p className="font-medium">Explanation:</p>
              <p>{question.explanation}</p>
            </div>
        )}
      </div>
  );
};

const getOptionStyles = ({isSelected, isAnswered, isCorrect}: OptionStyleProps): string => {
  if (!isAnswered || !isSelected) return "";
  return isCorrect ? FEEDBACK_STYLES.correct.border : FEEDBACK_STYLES.incorrect.border;
};

const QuizQuestion = ({question, onAnswer}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    setSelectedOption(null);
    setAnswered(false);
  }, [question]);

  const handleOptionChange = (value: string) => {
    if (!answered) {
      setSelectedOption(value);
    }
  };

  const handleSubmit = () => {
    if (!selectedOption || answered) return;

    setAnswered(true);
    onAnswer(question.id, selectedOption);
  };

  return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">
          {question.questionText}
        </h3>

        {question.scenario && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4 text-gray-700">
              <p className="italic">{question.scenario}</p>
            </div>
        )}

        <QuestionOptions
            question={question}
            selectedOption={selectedOption}
            answered={answered}
            onOptionChange={handleOptionChange}
        />

        <div className="pt-4">
          <Button
              onClick={handleSubmit}
              disabled={!selectedOption || answered}
              className="w-full"
          >
            Submit Answer
          </Button>
        </div>

        {answered && selectedOption && (
            <FeedbackSection
                question={question}
                selectedOption={selectedOption}
            />
        )}
      </div>
  );
};

export default QuizQuestion;

