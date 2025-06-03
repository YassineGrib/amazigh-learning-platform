'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Volume2,
  BookOpen,
  MessageCircle,
  Award
} from 'lucide-react';

interface LessonContent {
  id: string;
  title: string;
  description: string;
  level: string;
  dialect: string;
  duration: number;
  sections: LessonSection[];
}

interface LessonSection {
  id: string;
  type: 'vocabulary' | 'grammar' | 'practice' | 'audio';
  title: string;
  content: any;
}

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sample lesson content - in a real app, this would come from an API
  const lessonContent: LessonContent = {
    id: params.id as string,
    title: 'Tifinagh Alphabet',
    description: 'Master the ancient Tifinagh script used to write Amazigh languages',
    level: 'BEGINNER',
    dialect: 'KABYLE',
    duration: 20,
    sections: [
      {
        id: '1',
        type: 'vocabulary',
        title: 'Introduction to Tifinagh',
        content: {
          text: 'Tifinagh is the ancient script of the Amazigh people. Each letter represents a sound in the Amazigh language.',
          letters: [
            { symbol: 'ⴰ', name: 'Ya', sound: 'a' },
            { symbol: 'ⴱ', name: 'Yab', sound: 'b' },
            { symbol: 'ⴳ', name: 'Yag', sound: 'g' },
            { symbol: 'ⴷ', name: 'Yad', sound: 'd' },
            { symbol: 'ⴻ', name: 'Ye', sound: 'e' },
            { symbol: 'ⴼ', name: 'Yaf', sound: 'f' }
          ]
        }
      },
      {
        id: '2',
        type: 'practice',
        title: 'Letter Recognition',
        content: {
          instructions: 'Click on the correct letter when you hear the sound',
          exercises: [
            { sound: 'a', options: ['ⴰ', 'ⴱ', 'ⴳ'], correct: 'ⴰ' },
            { sound: 'b', options: ['ⴰ', 'ⴱ', 'ⴳ'], correct: 'ⴱ' },
            { sound: 'g', options: ['ⴱ', 'ⴳ', 'ⴷ'], correct: 'ⴳ' }
          ]
        }
      },
      {
        id: '3',
        type: 'vocabulary',
        title: 'First Words',
        content: {
          text: 'Now let\'s learn some basic words using these letters:',
          words: [
            { tifinagh: 'ⴰⵣⵓⵍ', latin: 'Azul', meaning: 'Hello', pronunciation: 'ah-ZOOL' },
            { tifinagh: 'ⴰⴳⴰ', latin: 'Aga', meaning: 'Here', pronunciation: 'ah-GAH' },
            { tifinagh: 'ⴰⴷ', latin: 'Ad', meaning: 'Will (future)', pronunciation: 'ahd' }
          ]
        }
      }
    ]
  };

  const handleNext = () => {
    if (currentSection < lessonContent.sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setProgress(((currentSection + 1) / lessonContent.sections.length) * 100);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setProgress((currentSection / lessonContent.sections.length) * 100);
    }
  };

  const handleComplete = () => {
    // Mark lesson as completed and navigate back
    router.push('/lessons');
  };

  const currentSectionData = lessonContent.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/lessons')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{lessonContent.title}</h1>
                <p className="text-sm text-gray-600">{lessonContent.dialect} • {lessonContent.level}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">
                {currentSection + 1} of {lessonContent.sections.length}
              </div>
              <div className="text-xs text-gray-500">{Math.round(progress)}% Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="progress-bar bg-gray-200">
              <div 
                className="progress-fill bg-gradient-to-r from-amazigh-blue-500 to-amazigh-green-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentSectionData.title}
            </h2>
          </div>

          {/* Vocabulary Section */}
          {currentSectionData.type === 'vocabulary' && (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentSectionData.content.text}
              </p>
              
              {currentSectionData.content.letters && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {currentSectionData.content.letters.map((letter: any, index: number) => (
                    <div key={index} className="card text-center p-6">
                      <div className="text-4xl font-bold text-amazigh-blue-600 mb-2 tifinagh-letters">
                        {letter.symbol}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mb-1">
                        {letter.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        Sound: "{letter.sound}"
                      </div>
                      <button className="mt-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Volume2 className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {currentSectionData.content.words && (
                <div className="space-y-4">
                  {currentSectionData.content.words.map((word: any, index: number) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="text-3xl font-bold text-amazigh-blue-600 tifinagh-letters">
                            {word.tifinagh}
                          </div>
                          <div>
                            <div className="text-xl font-semibold text-gray-900">
                              {word.latin}
                            </div>
                            <div className="text-gray-600">
                              {word.meaning}
                            </div>
                            <div className="text-sm text-gray-500">
                              Pronunciation: {word.pronunciation}
                            </div>
                          </div>
                        </div>
                        <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                          <Volume2 className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Practice Section */}
          {currentSectionData.type === 'practice' && (
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                {currentSectionData.content.instructions}
              </p>
              <div className="bg-amazigh-blue-50 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-4">Click the letter that makes the sound:</div>
                  <div className="text-2xl font-bold text-amazigh-blue-600 mb-6">"a"</div>
                  <div className="flex justify-center space-x-4">
                    {['ⴰ', 'ⴱ', 'ⴳ'].map((letter, index) => (
                      <button
                        key={index}
                        className="w-16 h-16 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-2xl font-bold text-amazigh-blue-600 tifinagh-letters"
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentSection === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentSection === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentSection === lessonContent.sections.length - 1 ? (
              <button
                onClick={handleComplete}
                className="btn-primary flex items-center space-x-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Complete Lesson</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Next</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
