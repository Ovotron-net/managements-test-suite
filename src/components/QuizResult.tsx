
import React, { useMemo } from 'react';
import { questions } from '../data/questions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Cell,
  Tooltip
} from 'recharts';

type Answer = {
  questionId: number;
  selectedOption: string;
  correct: boolean;
};

interface QuizResultProps {
  answers: Answer[];
  onReset: () => void;
}

type CategoryScore = {
  category: string;
  correct: number;
  total: number;
  percentage: number;
};

const QuizResult = ({ answers, onReset }: QuizResultProps) => {
  const score = answers.filter(answer => answer.correct).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Calculate category scores
  const categoryScores = useMemo(() => {
    const categories: Record<string, { correct: number; total: number }> = {};

    // Initialize categories
    questions.forEach(question => {
      if (!categories[question.category]) {
        categories[question.category] = { correct: 0, total: 0 };
      }
      categories[question.category].total += 1;
    });

    // Calculate correct answers by category
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && answer.correct) {
        categories[question.category].correct += 1;
      }
    });

    // Convert to array for chart
    return Object.entries(categories).map(([category, { correct, total }]) => ({
      category,
      correct,
      total,
      percentage: Math.round((correct / total) * 100)
    }));
  }, [answers]);

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "Excellent! You have mastered software engineering management.";
    if (percentage >= 80) return "Great job! You have strong knowledge in software engineering management.";
    if (percentage >= 70) return "Good work! You understand most software engineering management concepts.";
    if (percentage >= 60) return "You passed, but there's room for improvement.";
    return "You might need more study in software engineering management concepts.";
  };

  const getScoreBadgeColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-green-400";
    if (percentage >= 70) return "bg-yellow-500";
    if (percentage >= 60) return "bg-yellow-400";
    return "bg-red-500";
  };

  const getCategoryColor = (score: number) => {
    if (score >= 90) return "#22c55e"; // green-500
    if (score >= 80) return "#4ade80"; // green-400
    if (score >= 70) return "#eab308"; // yellow-500
    if (score >= 60) return "#facc15"; // yellow-400
    return "#ef4444"; // red-500
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Card className="p-6 shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Results</h2>
          
          <div className="flex flex-col items-center gap-2">
            <div className={`${getScoreBadgeColor(percentage)} text-white text-4xl font-bold h-24 w-24 rounded-full flex items-center justify-center`}>
              {percentage}%
            </div>
            <div className="text-gray-600">
              You scored {score} out of {totalQuestions}
            </div>
          </div>
          
          <p className="mt-4 text-lg">{getScoreMessage(percentage)}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance by Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryScores}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <XAxis 
                  dataKey="category" 
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 100]}
                />
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name]}
                  labelFormatter={(label) => `Category: ${label}`}
                />
                <Bar dataKey="percentage" name="Score" radius={[4, 4, 0, 0]}>
                  {categoryScores.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getCategoryColor(entry.percentage)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold text-gray-800">Detailed Results</h3>
          
          <div className="space-y-2">
            {categoryScores.map((category) => (
              <div key={category.category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">{category.category}</span>
                <div className="flex items-center gap-4">
                  <span>
                    <span className="font-semibold">{category.correct}</span>/{category.total}
                  </span>
                  <span className={`px-2 py-1 rounded text-white text-sm ${getCategoryColor(category.percentage)} bg-opacity-90`}>
                    {category.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={onReset} className="px-8">
            Take Quiz Again
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuizResult;
