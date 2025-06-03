'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, Bot, User, Mic, Volume2 } from 'lucide-react';
import { clsx } from 'clsx';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTranslated?: boolean;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Azul! Welcome to your Amazigh conversation practice. I\'m here to help you practice speaking and understanding Amazigh. What would you like to talk about today?',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDialect, setSelectedDialect] = useState('KABYLE');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const dialects = [
    { id: 'KABYLE', name: 'Kabyle' },
    { id: 'CHAOUI', name: 'Chaoui' },
    { id: 'MOZABITE', name: 'Mozabite' },
    { id: 'TARIFIT', name: 'Tarifit' },
    { id: 'TASHELHIT', name: 'Tashelhit' },
  ];

  const conversationTopics = [
    'Greetings and introductions',
    'Family and relationships',
    'Daily activities',
    'Food and cooking',
    'Weather and seasons',
    'Travel and directions',
    'Shopping and markets',
    'Work and professions'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response (in a real app, this would call your AI API)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    // Simple mock responses - in a real app, this would be handled by your AI backend
    const responses = [
      'That\'s great! In Kabyle, we would say "Yelha!" which means "That\'s good!" Can you try repeating that?',
      'I understand you\'re learning about family. In Amazigh, "family" is "tawacult". Would you like to learn more family-related words?',
      'Your pronunciation is improving! Let\'s practice some more phrases. Try saying "Azul fellak" which means "Hello to you".',
      'Excellent question! In Amazigh culture, greetings are very important. We often ask about family and health when we meet someone.',
      'Let me help you with that grammar. In Amazigh, the word order can be different from English. Would you like me to explain?'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleTopicClick = (topic: string) => {
    setInputMessage(`I'd like to practice talking about ${topic.toLowerCase()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold text-gray-900 mb-2">
                AI Conversation Practice
              </h1>
              <p className="text-gray-600">
                Practice speaking Amazigh with our AI tutor
              </p>
            </div>
            
            {/* Dialect Selector */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Dialect:</label>
              <select
                value={selectedDialect}
                onChange={(e) => setSelectedDialect(e.target.value)}
                className="input-field min-w-32"
              >
                {dialects.map((dialect) => (
                  <option key={dialect.id} value={dialect.id}>
                    {dialect.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex max-w-6xl mx-auto w-full">
        {/* Conversation Topics Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Conversation Topics</h3>
          <div className="space-y-2">
            {conversationTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleTopicClick(topic)}
                className="w-full text-left p-3 rounded-lg text-sm text-gray-700 hover:bg-white hover:shadow-sm transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-amazigh-blue-50 rounded-lg">
            <h4 className="font-medium text-amazigh-blue-900 mb-2">Tips for Practice</h4>
            <ul className="text-sm text-amazigh-blue-700 space-y-1">
              <li>• Start with simple phrases</li>
              <li>• Don't worry about mistakes</li>
              <li>• Ask for pronunciation help</li>
              <li>• Practice daily conversations</li>
            </ul>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  'flex items-start space-x-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 bg-amazigh-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={clsx(
                    'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
                    message.role === 'user'
                      ? 'bg-amazigh-blue-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={clsx(
                      'text-xs',
                      message.role === 'user' ? 'text-amazigh-blue-100' : 'text-gray-500'
                    )}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {message.role === 'assistant' && (
                      <button className="text-gray-400 hover:text-gray-600">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-amazigh-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amazigh-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message in English or Amazigh..."
                  className="input-field resize-none"
                  rows={2}
                />
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="btn-primary p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
