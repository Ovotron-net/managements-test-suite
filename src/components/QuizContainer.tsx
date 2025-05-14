
import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import StartScreen from './StartScreen';
import { questions } from '../data/questions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Answer = {
  questionId: number;
  selectedOption: string;
  correct: boolean;
};

const QuizContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const handleAnswer = (questionId: number, selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswer === selectedOption;
    
    setAnswers([...answers, {
      questionId,
      selectedOption,
      correct: isCorrect
    }]);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 500);
    } else {
      setTimeout(() => setQuizCompleted(true), 500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(-1);
    setAnswers([]);
    setQuizCompleted(false);
  };

  // Calculate progress
  const progress = currentQuestionIndex >= 0 
    ? ((currentQuestionIndex + 1) / questions.length) * 100 
    : 0;

  // Render appropriate screen
  if (currentQuestionIndex === -1) {
    return <StartScreen onStart={startQuiz} />;
  }

  if (quizCompleted) {
    return <QuizResult answers={answers} onReset={resetQuiz} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-6 shadow-lg">
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </Card>

      <div className="mt-4 text-right">
        <Button variant="outline" onClick={resetQuiz} className="text-gray-500">
          Reset Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizContainer;
