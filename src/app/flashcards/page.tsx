'use client';

import { useState } from 'react';
import { RotateCcw, Volume2, CheckCircle, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface FlashcardData {
  id: string;
  amazighWord: string;
  translation: string;
  pronunciation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isLearned: boolean;
}

export default function FlashcardsPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');

  const flashcards: FlashcardData[] = [
    {
      id: '1',
      amazighWord: 'Azul',
      translation: 'Hello',
      pronunciation: 'ah-ZOOL',
      category: 'GREETINGS',
      difficulty: 'easy',
      isLearned: true
    },
    {
      id: '2',
      amazighWord: 'Tanemmirt',
      translation: 'Thank you',
      pronunciation: 'tah-nem-MEERT',
      category: 'GREETINGS',
      difficulty: 'easy',
      isLearned: false
    },
    {
      id: '3',
      amazighWord: 'Tawacult',
      translation: 'Family',
      pronunciation: 'tah-wah-COOLT',
      category: 'FAMILY',
      difficulty: 'medium',
      isLearned: false
    },
    {
      id: '4',
      amazighWord: 'Akal',
      translation: 'Land/Earth',
      pronunciation: 'ah-KAHL',
      category: 'NATURE',
      difficulty: 'medium',
      isLearned: false
    },
    {
      id: '5',
      amazighWord: 'Tafukt',
      translation: 'Sun',
      pronunciation: 'tah-FOOKT',
      category: 'NATURE',
      difficulty: 'easy',
      isLearned: true
    }
  ];

  const categories = ['ALL', 'GREETINGS', 'FAMILY', 'NATURE', 'FOOD', 'NUMBERS'];
  const difficulties = ['ALL', 'easy', 'medium', 'hard'];

  const filteredCards = flashcards.filter(card => {
    const categoryMatch = selectedCategory === 'ALL' || card.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'ALL' || card.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const currentCard = filteredCards[currentCardIndex];

  const handleNext = () => {
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDifficultyResponse = (difficulty: 'easy' | 'medium' | 'hard') => {
    console.log(`Marked as ${difficulty} for card:`, currentCard.id);
    // Here you would update the spaced repetition algorithm
    handleNext();
  };

  const playPronunciation = () => {
    // Here you would play the audio pronunciation
    console.log('Playing pronunciation for:', currentCard.amazighWord);
  };

  if (filteredCards.length === 0) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Flashcards
          </h1>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No flashcards available
            </h3>
            <p className="text-gray-600">
              No flashcards match your current filters. Try adjusting your selection.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Flashcards
          </h1>
          <p className="text-gray-600">
            Practice vocabulary with spaced repetition for optimal learning
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className="input-field"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'ALL' ? 'All Categories' : category.charAt(0) + category.slice(1).toLowerCase()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => {
                  setSelectedDifficulty(e.target.value);
                  setCurrentCardIndex(0);
                  setIsFlipped(false);
                }}
                className="input-field"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'ALL' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Card {currentCardIndex + 1} of {filteredCards.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentCardIndex + 1) / filteredCards.length) * 100)}% Complete
            </span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentCardIndex + 1) / filteredCards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-8">
          <div 
            className={clsx('flashcard mx-auto max-w-md', isFlipped && 'flipped')}
            onClick={handleFlip}
          >
            {/* Front */}
            <div className="flashcard-face bg-gradient-to-br from-amazigh-blue-500 to-amazigh-green-500 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-4">{currentCard.amazighWord}</div>
                <div className="text-sm opacity-90 mb-4">/{currentCard.pronunciation}/</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playPronunciation();
                  }}
                  className="inline-flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Listen</span>
                </button>
                <div className="mt-6 text-sm opacity-75">
                  Click to reveal translation
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="flashcard-face flashcard-back bg-white border-2 border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-4">{currentCard.translation}</div>
                <div className="text-lg text-amazigh-blue-600 mb-4">{currentCard.amazighWord}</div>
                <div className="text-sm text-gray-600 mb-6">/{currentCard.pronunciation}/</div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="px-2 py-1 bg-gray-100 rounded-full">{currentCard.category}</span>
                  <span className={clsx(
                    'px-2 py-1 rounded-full text-white',
                    currentCard.difficulty === 'easy' && 'bg-green-500',
                    currentCard.difficulty === 'medium' && 'bg-yellow-500',
                    currentCard.difficulty === 'hard' && 'bg-red-500'
                  )}>
                    {currentCard.difficulty}
                  </span>
                  {currentCard.isLearned && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrevious}
            className="btn-outline inline-flex items-center space-x-2"
            disabled={filteredCards.length <= 1}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleFlip}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isFlipped ? 'Show Front' : 'Show Back'}</span>
          </button>

          <button
            onClick={handleNext}
            className="btn-outline inline-flex items-center space-x-2"
            disabled={filteredCards.length <= 1}
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Difficulty Response (only show when flipped) */}
        {isFlipped && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              How well did you know this word?
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleDifficultyResponse('hard')}
                className="flex flex-col items-center space-y-2 p-4 border-2 border-red-200 hover:border-red-400 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-red-500" />
                <span className="text-sm font-medium text-red-700">Hard</span>
                <span className="text-xs text-gray-500">Show again soon</span>
              </button>
              
              <button
                onClick={() => handleDifficultyResponse('medium')}
                className="flex flex-col items-center space-y-2 p-4 border-2 border-yellow-200 hover:border-yellow-400 hover:bg-yellow-50 rounded-lg transition-colors"
              >
                <RotateCcw className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-700">Medium</span>
                <span className="text-xs text-gray-500">Show again later</span>
              </button>
              
              <button
                onClick={() => handleDifficultyResponse('easy')}
                className="flex flex-col items-center space-y-2 p-4 border-2 border-green-200 hover:border-green-400 hover:bg-green-50 rounded-lg transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-sm font-medium text-green-700">Easy</span>
                <span className="text-xs text-gray-500">Show much later</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
