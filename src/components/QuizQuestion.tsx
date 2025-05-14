
import React, { useState } from 'react';
import { Question } from '../data/questions';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (questionId: number, selectedOption: string) => void;
}

const QuizQuestion = ({ question, onAnswer }: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  
  const handleOptionChange = (value: string) => {
    if (!answered) {
      setSelectedOption(value);
    }
  };

  const handleSubmit = () => {
    if (selectedOption && !answered) {
      setAnswered(true);
      onAnswer(question.id, selectedOption);
    }
  };

  const getOptionClassName = (option: string) => {
    if (!answered || selectedOption !== option) return "";
    
    return selectedOption === question.correctAnswer 
      ? "bg-green-100 border-green-500" 
      : "bg-red-100 border-red-500";
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

      <RadioGroup value={selectedOption || ""} onValueChange={handleOptionChange}>
        <div className="space-y-3">
          {question.options.map((option) => (
            <div
              key={option.value}
              className={cn(
                "flex items-start p-4 border rounded-lg transition-colors",
                getOptionClassName(option.value),
                selectedOption === option.value && "border-blue-500 bg-blue-50"
              )}
            >
              <RadioGroupItem value={option.value} id={`option-${question.id}-${option.value}`} disabled={answered} />
              <Label 
                htmlFor={`option-${question.id}-${option.value}`}
                className="flex-grow ml-2 font-normal cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>

      <div className="pt-4">
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedOption || answered} 
          className="w-full"
        >
          Submit Answer
        </Button>
      </div>

      {answered && (
        <div className={cn(
          "p-4 rounded-md mt-4",
          selectedOption === question.correctAnswer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        )}>
          <p className="font-semibold">
            {selectedOption === question.correctAnswer 
              ? "Correct!" 
              : "Incorrect. The right answer is:"}
          </p>
          {selectedOption !== question.correctAnswer && (
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
      )}
    </div>
  );
};

export default QuizQuestion;
