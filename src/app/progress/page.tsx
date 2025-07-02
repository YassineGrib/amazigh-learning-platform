'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  // Calendar, 
  // Target, 
  Award, 
  BookOpen, 
  MessageCircle, 
  CreditCard,
  Clock,
  Flame,
  Star
} from 'lucide-react';

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'year', name: 'This Year' },
    { id: 'all', name: 'All Time' }
  ];

  const stats = [
    {
      icon: BookOpen,
      title: 'Lessons Completed',
      value: '12',
      change: '+3 this week',
      color: 'amazigh-blue'
    },
    {
      icon: CreditCard,
      title: 'Vocabulary Learned',
      value: '156',
      change: '+24 this week',
      color: 'amazigh-green'
    },
    {
      icon: MessageCircle,
      title: 'Chat Sessions',
      value: '8',
      change: '+2 this week',
      color: 'amazigh-yellow'
    },
    {
      icon: Clock,
      title: 'Study Time',
      value: '24h',
      change: '+6h this week',
      color: 'amazigh-blue'
    }
  ];

  const achievements = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: '🎯',
      earned: true,
      earnedDate: '2024-05-15'
    },
    {
      id: '2',
      title: 'Vocabulary Master',
      description: 'Learn 100 new words',
      icon: '📚',
      earned: true,
      earnedDate: '2024-05-20'
    },
    {
      id: '3',
      title: 'Conversation Starter',
      description: 'Complete 5 chat sessions',
      icon: '💬',
      earned: true,
      earnedDate: '2024-05-22'
    },
    {
      id: '4',
      title: 'Streak Master',
      description: 'Maintain a 7-day learning streak',
      icon: '🔥',
      earned: false,
      progress: 5,
      total: 7
    },
    {
      id: '5',
      title: 'Polyglot',
      description: 'Learn words from 3 different dialects',
      icon: '🌍',
      earned: false,
      progress: 2,
      total: 3
    }
  ];

  const weeklyActivity = [
    { day: 'Mon', lessons: 2, vocabulary: 15, minutes: 45 },
    { day: 'Tue', lessons: 1, vocabulary: 8, minutes: 30 },
    { day: 'Wed', lessons: 3, vocabulary: 22, minutes: 60 },
    { day: 'Thu', lessons: 0, vocabulary: 0, minutes: 0 },
    { day: 'Fri', lessons: 2, vocabulary: 18, minutes: 50 },
    { day: 'Sat', lessons: 1, vocabulary: 12, minutes: 35 },
    { day: 'Sun', lessons: 3, vocabulary: 25, minutes: 75 }
  ];

  const currentStreak = 5;
  const longestStreak = 12;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Your Progress
          </h1>
          <p className="text-gray-600">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Period Selector */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === period.id
                    ? 'bg-amazigh-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-2">{stat.title}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </div>
            );
          })}
        </div>

        {/* Streak Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Current Streak</h3>
                <p className="text-sm text-gray-600">Days in a row</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentStreak} days</div>
            <div className="text-sm text-gray-600">Keep it up! 2 more days for a new record.</div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Longest Streak</h3>
                <p className="text-sm text-gray-600">Personal best</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-500 mb-2">{longestStreak} days</div>
            <div className="text-sm text-gray-600">Achieved on March 15, 2024</div>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="card mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Activity</h3>
          <div className="grid grid-cols-7 gap-4">
            {weeklyActivity.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-gray-700 mb-2">{day.day}</div>
                <div className="space-y-2">
                  <div 
                    className="bg-amazigh-blue-500 rounded-sm mx-auto"
                    style={{ 
                      height: `${Math.max(day.lessons * 20, 4)}px`,
                      width: '20px'
                    }}
                    title={`${day.lessons} lessons`}
                  />
                  <div className="text-xs text-gray-600">{day.lessons}L</div>
                </div>
                <div className="space-y-2 mt-3">
                  <div 
                    className="bg-amazigh-green-500 rounded-sm mx-auto"
                    style={{ 
                      height: `${Math.max(day.vocabulary * 2, 4)}px`,
                      width: '20px'
                    }}
                    title={`${day.vocabulary} words`}
                  />
                  <div className="text-xs text-gray-600">{day.vocabulary}W</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amazigh-blue-500 rounded-sm"></div>
              <span>Lessons</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amazigh-green-500 rounded-sm"></div>
              <span>Vocabulary</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  achievement.earned
                    ? 'border-amazigh-green-200 bg-amazigh-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      achievement.earned ? 'text-amazigh-green-800' : 'text-gray-700'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${
                      achievement.earned ? 'text-amazigh-green-600' : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.earned ? (
                      <div className="flex items-center space-x-1 mt-2">
                        <Star className="w-4 h-4 text-amazigh-green-500" />
                        <span className="text-xs text-amazigh-green-600">
                          Earned on {new Date(achievement.earnedDate!).toLocaleDateString()}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.total}</span>
                        </div>
                        <div className="progress-bar h-1">
                          <div 
                            className="progress-fill h-1"
                            style={{ width: `${(achievement.progress! / achievement.total!) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
