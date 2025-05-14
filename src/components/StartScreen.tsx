
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  // Count questions by category
  const categoryCount: Record<string, number> = {};
  questions.forEach(q => {
    categoryCount[q.category] = (categoryCount[q.category] || 0) + 1;
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Card className="p-8 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Software Engineering Management Test
          </h1>
          <p className="text-gray-600 mt-4">
            Test your knowledge in software project management, team leadership,
            and engineering practices with this comprehensive assessment.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">This test includes:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span>{questions.length} multiple choice questions</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span>Immediate feedback after each question</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span>Comprehensive performance analytics</span>
            </li>
            <li className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
              <span>Detailed explanations for each question</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(categoryCount).map(([category, count]) => (
              <div key={category} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                <span>{category}</span>
                <span className="font-medium text-blue-600">{count} questions</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
          <p className="text-gray-700">
            Read each question carefully and select the best answer. You'll receive 
            immediate feedback after submitting your answer. At the end of the test, 
            you'll get a detailed breakdown of your performance by category.
          </p>
        </div>

        <div className="flex justify-center">
          <Button onClick={onStart} className="px-8 py-6 text-lg">
            Start Test
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StartScreen;
