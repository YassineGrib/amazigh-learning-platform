'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  MessageCircle, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Home,
  Menu,
  X,
  User,
  LogOut
} from 'lucide-react';
import { clsx } from 'clsx';

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Lessons', href: '/lessons', icon: BookOpen },
  { name: 'Flashcards', href: '/flashcards', icon: CreditCard },
  { name: 'Chat Practice', href: '/chat', icon: MessageCircle },
  { name: 'Progress', href: '/progress', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={clsx(
      'bg-white border-r border-gray-200 transition-all duration-300 flex flex-col',
      isCollapsed ? 'w-16' : 'w-64'
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amazigh-blue-500 to-amazigh-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ⵣ</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-lg text-gradient-primary">
                  Amazigh
                </h1>
                <p className="text-xs text-gray-500">Learning Platform</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? (
              <Menu className="w-5 h-5 text-gray-600" />
            ) : (
              <X className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200',
                isActive
                  ? 'bg-amazigh-blue-100 text-amazigh-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-amazigh-blue-50 hover:text-amazigh-blue-600'
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className={clsx(
          'flex items-center space-x-3',
          isCollapsed && 'justify-center'
        )}>
          <div className="w-8 h-8 bg-amazigh-green-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Guest User</p>
              <p className="text-xs text-gray-500">Beginner Level</p>
            </div>
          )}
        </div>
        
        {!isCollapsed && (
          <button className="mt-3 w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        )}
      </div>
    </div>
  );
}
