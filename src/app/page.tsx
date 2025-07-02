'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  MessageCircle,
  CreditCard,
  BarChart3,
  Play,
  // Star,
  Users,
  Globe,
  Award,
  TrendingUp
} from 'lucide-react';

// Custom Typing Animation Component
interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

function TypingAnimation({ text, speed = 100, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="typing-cursor text-amazigh-blue-500">|</span>
    </span>
  );
}

export default function Home() {
  const [selectedDialect, setSelectedDialect] = useState('KABYLE');

  const dialects = [
    { id: 'KABYLE', name: 'Kabyle', region: 'Algeria', speakers: '5M+' },
    { id: 'CHAOUI', name: 'Chaoui', region: 'Algeria', speakers: '2M+' },
    { id: 'MOZABITE', name: 'Mozabite', region: 'Algeria', speakers: '150K+' },
    { id: 'TARIFIT', name: 'Tarifit', region: 'Morocco', speakers: '4M+' },
    { id: 'TASHELHIT', name: 'Tashelhit', region: 'Morocco', speakers: '8M+' },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Lessons',
      description: 'Structured lessons with audio, video, and interactive exercises',
      color: 'amazigh-blue'
    },
    {
      icon: CreditCard,
      title: 'Smart Flashcards',
      description: 'Spaced repetition system for optimal vocabulary retention',
      color: 'amazigh-green'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Practice',
      description: 'Practice conversations with our AI tutor in real-time',
      color: 'amazigh-yellow'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics',
      color: 'amazigh-blue'
    }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Learners' },
    { icon: Globe, value: '5', label: 'Dialects Supported' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: TrendingUp, value: '4.9', label: 'User Rating' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Azul!</span>
              <br />
              Welcome to Amazigh Learning
            </h1>
            <div className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              <p className="mb-4">Hello! Let&apos;s start learning with the Amazigh letters:</p>
              <div className="text-3xl md:text-3xl font-bold text-amazigh-blue-500 mb-6 min-h-[55px] flex items-center justify-center">
                <TypingAnimation
                  text="ⴰ ⴱ ⴳ ⴷ ⴻ ⴼ ⴳ ⵀ ⵉ ⵊ ⴽ ⵍ ⵎ ⵏ ⵓ ⵔ ⵙ ⵜ ⵓ ⵡ ⵅ ⵢ ⵣ"
                  speed={150}
                  className="tifinagh-letters font-display tracking-wider"
                />
              </div>
              <p className="text-lg">
                Master the ancient language of North Africa with our comprehensive platform.
                Interactive lessons, AI-powered conversations, and cultural immersion await you.
              </p>
            </div>

            {/* Dialect Selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-4">Choose your dialect:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {dialects.map((dialect) => (
                  <button
                    key={dialect.id}
                    onClick={() => setSelectedDialect(dialect.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedDialect === dialect.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {dialect.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lessons"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-3"
              >
                <Play className="w-5 h-5" />
                <span>Start Learning</span>
              </Link>
              <Link
                href="/chat"
                className="btn-gradient-border text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Try AI Chat</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amazigh-blue-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-amazigh-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Everything You Need to Master Amazigh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines traditional learning methods with modern AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${feature.color}-100 rounded-lg mb-4`}>
                    <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
