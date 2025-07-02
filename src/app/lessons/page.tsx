'use client';

import { useState } from 'react';
import { BookOpen, Play, Clock, Star, CheckCircle, Lock } from 'lucide-react';
import { clsx } from 'clsx';

interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  dialect: string;
  duration: number;
  isCompleted: boolean;
  isLocked: boolean;
  order: number;
}

export default function LessonsPage() {
  const [selectedLevel, setSelectedLevel] = useState<'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'>('BEGINNER');
  const [selectedDialect, setSelectedDialect] = useState('KABYLE');

  const levels = [
    { id: 'BEGINNER', name: 'Beginner', color: 'amazigh-green' },
    { id: 'INTERMEDIATE', name: 'Intermediate', color: 'amazigh-yellow' },
    { id: 'ADVANCED', name: 'Advanced', color: 'amazigh-blue' },
  ];

  const dialects = ['KABYLE', 'CHAOUI', 'MOZABITE', 'TARIFIT', 'TASHELHIT'];

  const lessons: Lesson[] = [
    // BEGINNER LESSONS - KABYLE
    {
      id: '1',
      title: 'Tifinagh Alphabet',
      description: 'Master the ancient Tifinagh script: ⴰ ⴱ ⴳ ⴷ ⴻ ⴼ ⴳ ⵀ ⵉ ⵊ ⴽ ⵍ ⵎ ⵏ ⵓ ⵔ ⵙ ⵜ ⵓ ⵡ ⵅ ⵢ ⵣ',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 20,
      isCompleted: true,
      isLocked: false,
      order: 1
    },
    {
      id: '2',
      title: 'Basic Greetings',
      description: 'Learn essential greetings: Azul (Hello), Ar tufat (Goodbye), Tanemmirt (Thank you)',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 15,
      isCompleted: true,
      isLocked: false,
      order: 2
    },
    {
      id: '3',
      title: 'Personal Pronouns',
      description: 'Master pronouns: Nekk (I), Kečč (You-m), Kemm (You-f), Netta (He), Nettat (She)',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 18,
      isCompleted: false,
      isLocked: false,
      order: 3
    },
    {
      id: '4',
      title: 'Family Members',
      description: 'Learn family vocabulary: Baba (Father), Yemma (Mother), Gma (Brother), Weltma (Sister)',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 22,
      isCompleted: false,
      isLocked: false,
      order: 4
    },
    {
      id: '5',
      title: 'Numbers 1-20',
      description: 'Count in Amazigh: Yiwen (1), Sin (2), Kraḍ (3), Kuẓ (4), Semmus (5)...',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 25,
      isCompleted: false,
      isLocked: false,
      order: 5
    },
    {
      id: '6',
      title: 'Colors and Descriptions',
      description: 'Describe the world: Azegzaw (Blue), Azegzaw (Green), Awraɣ (Yellow), Azuggaɣ (Red)',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 20,
      isCompleted: false,
      isLocked: false,
      order: 6
    },
    {
      id: '7',
      title: 'Days and Time',
      description: 'Time expressions: Ass (Day), Iḍ (Night), Azemz (Time), Letnayen (Monday)...',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 28,
      isCompleted: false,
      isLocked: false,
      order: 7
    },
    {
      id: '8',
      title: 'Food and Drinks',
      description: 'Essential vocabulary: Aɣrum (Bread), Aman (Water), Atay (Tea), Aksum (Meat)',
      level: 'BEGINNER',
      dialect: 'KABYLE',
      duration: 25,
      isCompleted: false,
      isLocked: false,
      order: 8
    },

    // INTERMEDIATE LESSONS - KABYLE
    {
      id: '9',
      title: 'Present Tense Verbs',
      description: 'Learn verb conjugation: Ad + verb stem. Practice with common verbs like "to be", "to have"',
      level: 'INTERMEDIATE',
      dialect: 'KABYLE',
      duration: 35,
      isCompleted: false,
      isLocked: false,
      order: 9
    },
    {
      id: '10',
      title: 'Daily Activities',
      description: 'Express routines: Ffeɣ-d (I go out), Kečč (I eat), Sweɣ (I drink), Ɣriɣ (I read)',
      level: 'INTERMEDIATE',
      dialect: 'KABYLE',
      duration: 30,
      isCompleted: false,
      isLocked: false,
      order: 10
    },
    {
      id: '11',
      title: 'House and Home',
      description: 'Home vocabulary: Axxam (House), Taxxamt (Room), Tawwurt (Door), Asfaylu (Window)',
      level: 'INTERMEDIATE',
      dialect: 'KABYLE',
      duration: 32,
      isCompleted: false,
      isLocked: false,
      order: 11
    },
    {
      id: '12',
      title: 'Weather and Seasons',
      description: 'Describe weather: Lehwa (Weather), Tagrest (Winter), Anebdu (Spring), Awilan (Summer)',
      level: 'INTERMEDIATE',
      dialect: 'KABYLE',
      duration: 28,
      isCompleted: false,
      isLocked: false,
      order: 12
    },
    {
      id: '13',
      title: 'Past Tense',
      description: 'Express past actions: Perfect and imperfect tenses, time markers',
      level: 'INTERMEDIATE',
      dialect: 'KABYLE',
      duration: 40,
      isCompleted: false,
      isLocked: false,
      order: 13
    },

    // ADVANCED LESSONS - KABYLE
    {
      id: '14',
      title: 'Complex Conversations',
      description: 'Engage in detailed discussions about opinions, plans, and experiences',
      level: 'ADVANCED',
      dialect: 'KABYLE',
      duration: 45,
      isCompleted: false,
      isLocked: false,
      order: 14
    },
    {
      id: '15',
      title: 'Amazigh Culture & History',
      description: 'Learn about Amazigh traditions, festivals, and historical significance',
      level: 'ADVANCED',
      dialect: 'KABYLE',
      duration: 50,
      isCompleted: false,
      isLocked: false,
      order: 15
    },
    {
      id: '16',
      title: 'Poetry and Literature',
      description: 'Explore traditional Amazigh poetry, proverbs, and modern literature',
      level: 'ADVANCED',
      dialect: 'KABYLE',
      duration: 55,
      isCompleted: false,
      isLocked: false,
      order: 16
    },

    // BEGINNER LESSONS - TARIFIT
    {
      id: '17',
      title: 'Tifinagh Alphabet (Tarifit)',
      description: 'Learn the Tifinagh script as used in the Tarifit dialect of northern Morocco',
      level: 'BEGINNER',
      dialect: 'TARIFIT',
      duration: 20,
      isCompleted: false,
      isLocked: false,
      order: 1
    },
    {
      id: '18',
      title: 'Basic Greetings (Tarifit)',
      description: 'Essential Tarifit greetings: Azul (Hello), Ar tufat (Goodbye), Tanemmirt (Thank you)',
      level: 'BEGINNER',
      dialect: 'TARIFIT',
      duration: 15,
      isCompleted: false,
      isLocked: false,
      order: 2
    },
    {
      id: '19',
      title: 'Family Members (Tarifit)',
      description: 'Family vocabulary in Tarifit: Baba (Father), Yemma (Mother), Gma (Brother)',
      level: 'BEGINNER',
      dialect: 'TARIFIT',
      duration: 22,
      isCompleted: false,
      isLocked: false,
      order: 3
    },

    // BEGINNER LESSONS - TASHELHIT
    {
      id: '20',
      title: 'Tifinagh Alphabet (Tashelhit)',
      description: 'Master the Tifinagh script for Tashelhit, the most widely spoken Amazigh dialect',
      level: 'BEGINNER',
      dialect: 'TASHELHIT',
      duration: 20,
      isCompleted: false,
      isLocked: false,
      order: 1
    },
    {
      id: '21',
      title: 'Basic Greetings (Tashelhit)',
      description: 'Learn Tashelhit greetings: Azul (Hello), Ar tufat (Goodbye), Tanemmirt (Thank you)',
      level: 'BEGINNER',
      dialect: 'TASHELHIT',
      duration: 15,
      isCompleted: false,
      isLocked: false,
      order: 2
    },
    {
      id: '22',
      title: 'Numbers in Tashelhit',
      description: 'Count in Tashelhit: Yan (1), Sin (2), Kraḍ (3), Kuẓ (4), Semmus (5)...',
      level: 'BEGINNER',
      dialect: 'TASHELHIT',
      duration: 25,
      isCompleted: false,
      isLocked: false,
      order: 3
    },

    // BEGINNER LESSONS - CHAOUI
    {
      id: '23',
      title: 'Tifinagh Alphabet (Chaoui)',
      description: 'Learn the ancient script for the Chaoui dialect of the Aurès Mountains',
      level: 'BEGINNER',
      dialect: 'CHAOUI',
      duration: 20,
      isCompleted: false,
      isLocked: false,
      order: 1
    },
    {
      id: '24',
      title: 'Basic Greetings (Chaoui)',
      description: 'Essential Chaoui greetings and polite expressions',
      level: 'BEGINNER',
      dialect: 'CHAOUI',
      duration: 15,
      isCompleted: false,
      isLocked: false,
      order: 2
    }
  ];

  const filteredLessons = lessons.filter(
    lesson => lesson.level === selectedLevel && lesson.dialect === selectedDialect
  );

  const handleStartLesson = (lessonId: string) => {
    // Navigate to the lesson detail page
    window.location.href = `/lessons/${lessonId}`;
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Interactive Lessons
          </h1>
          <p className="text-gray-600">
            Master Amazigh through structured, interactive lessons designed for your learning level
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Learning Level
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id as 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED')}
                    className={clsx(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      selectedLevel === level.id
                        ? `bg-${level.color}-500 text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dialect Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Dialect
              </label>
              <select
                value={selectedDialect}
                onChange={(e) => setSelectedDialect(e.target.value)}
                className="input-field"
              >
                {dialects.map((dialect) => (
                  <option key={dialect} value={dialect}>
                    {dialect.charAt(0) + dialect.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-amazigh-blue-500 to-amazigh-green-500 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Your Progress</h3>
              <p className="opacity-90">
                {filteredLessons.filter(l => l.isCompleted).length} of {filteredLessons.length} lessons completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">
                {Math.round((filteredLessons.filter(l => l.isCompleted).length / filteredLessons.length) * 100)}%
              </div>
              <div className="text-sm opacity-90">Complete</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="progress-bar">
              <div 
                className="progress-fill bg-white"
                style={{ 
                  width: `${(filteredLessons.filter(l => l.isCompleted).length / filteredLessons.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className={clsx(
                'card relative',
                lesson.isLocked ? 'opacity-60' : 'card-interactive'
              )}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {lesson.isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-amazigh-green-500" />
                ) : lesson.isLocked ? (
                  <Lock className="w-6 h-6 text-gray-400" />
                ) : (
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                )}
              </div>

              {/* Lesson Content */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-5 h-5 text-amazigh-blue-500" />
                  <span className="text-sm font-medium text-amazigh-blue-600">
                    Lesson {lesson.order}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {lesson.description}
                </p>
              </div>

              {/* Lesson Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{lesson.level}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => !lesson.isLocked && handleStartLesson(lesson.id)}
                disabled={lesson.isLocked}
                className={clsx(
                  'w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors',
                  lesson.isLocked
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : lesson.isCompleted
                    ? 'bg-amazigh-green-100 text-amazigh-green-700 hover:bg-amazigh-green-200'
                    : 'btn-primary'
                )}
              >
                <Play className="w-4 h-4" />
                <span>
                  {lesson.isLocked ? 'Locked' : lesson.isCompleted ? 'Review' : 'Start Lesson'}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No lessons available
            </h3>
            <p className="text-gray-600">
              Lessons for {selectedDialect} at {selectedLevel} level are coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
