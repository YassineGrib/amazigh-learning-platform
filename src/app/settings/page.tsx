'use client';

import { useState } from 'react';
import { 
  User, 
  Globe, 
  Volume2, 
  Bell, 
  Moon, 
  Shield, 
  Download,
  Trash2,
  Save
} from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile
    name: 'Guest User',
    email: 'guest@example.com',
    
    // Learning Preferences
    preferredDialect: 'KABYLE',
    learningGoal: 'CASUAL',
    dailyGoalMinutes: 30,
    
    // Audio & Visual
    audioEnabled: true,
    autoPlayAudio: true,
    darkMode: false,
    
    // Notifications
    dailyReminders: true,
    streakReminders: true,
    achievementNotifications: true,
    
    // Privacy
    shareProgress: false,
    dataCollection: true
  });

  const dialects = [
    { id: 'KABYLE', name: 'Kabyle' },
    { id: 'CHAOUI', name: 'Chaoui' },
    { id: 'MOZABITE', name: 'Mozabite' },
    { id: 'TARIFIT', name: 'Tarifit' },
    { id: 'TASHELHIT', name: 'Tashelhit' }
  ];

  const learningGoals = [
    { id: 'CASUAL', name: 'Casual Learning', description: '15-30 minutes per day' },
    { id: 'REGULAR', name: 'Regular Practice', description: '30-60 minutes per day' },
    { id: 'INTENSIVE', name: 'Intensive Study', description: '60+ minutes per day' }
  ];

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // Here you would save to your backend
  };

  const handleExportData = () => {
    console.log('Exporting user data...');
    // Here you would export user data
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
      // Here you would handle account deletion
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Settings
          </h1>
          <p className="text-gray-600">
            Customize your learning experience and manage your account
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-amazigh-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-amazigh-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => handleSettingChange('name', e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => handleSettingChange('email', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Learning Preferences */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-amazigh-green-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-amazigh-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Learning Preferences</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Dialect
                </label>
                <select
                  value={settings.preferredDialect}
                  onChange={(e) => handleSettingChange('preferredDialect', e.target.value)}
                  className="input-field"
                >
                  {dialects.map((dialect) => (
                    <option key={dialect.id} value={dialect.id}>
                      {dialect.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Learning Goal
                </label>
                <div className="space-y-3">
                  {learningGoals.map((goal) => (
                    <label key={goal.id} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="learningGoal"
                        value={goal.id}
                        checked={settings.learningGoal === goal.id}
                        onChange={(e) => handleSettingChange('learningGoal', e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{goal.name}</div>
                        <div className="text-sm text-gray-600">{goal.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Goal (minutes)
                </label>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="15"
                  value={settings.dailyGoalMinutes}
                  onChange={(e) => handleSettingChange('dailyGoalMinutes', parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>15 min</span>
                  <span className="font-medium">{settings.dailyGoalMinutes} min</span>
                  <span>120 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* Audio & Visual */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-amazigh-yellow-100 rounded-lg flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-amazigh-yellow-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Audio & Visual</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium text-gray-900">Audio Enabled</div>
                  <div className="text-sm text-gray-600">Enable audio pronunciation and feedback</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.audioEnabled}
                  onChange={(e) => handleSettingChange('audioEnabled', e.target.checked)}
                  className="toggle"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium text-gray-900">Auto-play Audio</div>
                  <div className="text-sm text-gray-600">Automatically play pronunciation when showing new words</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.autoPlayAudio}
                  onChange={(e) => handleSettingChange('autoPlayAudio', e.target.checked)}
                  className="toggle"
                  disabled={!settings.audioEnabled}
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">Dark Mode</div>
                    <div className="text-sm text-gray-600">Use dark theme for better night reading</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                  className="toggle"
                />
              </label>
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium text-gray-900">Daily Reminders</div>
                  <div className="text-sm text-gray-600">Get reminded to practice daily</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.dailyReminders}
                  onChange={(e) => handleSettingChange('dailyReminders', e.target.checked)}
                  className="toggle"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium text-gray-900">Streak Reminders</div>
                  <div className="text-sm text-gray-600">Get notified when your streak is at risk</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.streakReminders}
                  onChange={(e) => handleSettingChange('streakReminders', e.target.checked)}
                  className="toggle"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <div className="font-medium text-gray-900">Achievement Notifications</div>
                  <div className="text-sm text-gray-600">Celebrate when you unlock new achievements</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.achievementNotifications}
                  onChange={(e) => handleSettingChange('achievementNotifications', e.target.checked)}
                  className="toggle"
                />
              </label>
            </div>
          </div>

          {/* Privacy & Data */}
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Privacy & Data</h2>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-900">Share Progress</div>
                    <div className="text-sm text-gray-600">Allow others to see your learning progress</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.shareProgress}
                    onChange={(e) => handleSettingChange('shareProgress', e.target.checked)}
                    className="toggle"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <div className="font-medium text-gray-900">Data Collection</div>
                    <div className="text-sm text-gray-600">Help improve the platform by sharing usage data</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.dataCollection}
                    onChange={(e) => handleSettingChange('dataCollection', e.target.checked)}
                    className="toggle"
                  />
                </label>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleExportData}
                    className="btn-outline inline-flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export My Data</span>
                  </button>
                  
                  <button
                    onClick={handleDeleteAccount}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Account</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
