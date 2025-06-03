# Amazigh Learning Platform

A comprehensive web-based platform for learning the Amazigh (Berber) language with AI integration. This platform helps users master the ancient language of North Africa through interactive lessons, AI-powered conversations, and cultural immersion.

## 🌟 Features

### Core Learning Features
- **Interactive Lesson System**: Structured lessons organized by proficiency levels (beginner, intermediate, advanced)
- **Multi-Dialect Support**: Learn Kabyle, Chaoui, Mozabite, Tarifit, and Tashelhit dialects
- **Smart Flashcards**: Spaced repetition system for optimal vocabulary retention
- **AI Chat Practice**: Interactive conversations with AI tutor for real-time practice
- **Progress Tracking**: Detailed analytics and achievement system
- **Audio Integration**: Native speaker pronunciations and audio lessons

### Technical Features
- **Modern UI/UX**: Clean, responsive design with Amazigh cultural color scheme
- **Mobile-First**: Optimized for all devices
- **Real-time Updates**: Hot reload and instant feedback
- **Accessibility**: Built with accessibility best practices
- **Dark Mode Support**: Comfortable learning in any lighting

## 🎨 Design

The platform features a beautiful design inspired by the Amazigh flag colors:
- **Blue** (#3b82f6): Primary actions and navigation
- **Green** (#22c55e): Success states and progress indicators
- **Yellow** (#eab308): Accent colors and highlights
- **White**: Clean backgrounds and content areas

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amazigh-learning-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── chat/              # AI chat practice page
│   ├── flashcards/        # Vocabulary flashcards
│   ├── lessons/           # Interactive lessons
│   ├── progress/          # Learning analytics
│   ├── settings/          # User preferences
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── navigation.tsx     # Main navigation
│   └── providers.tsx      # Context providers
└── types/                 # TypeScript type definitions
    └── index.ts           # Main type definitions

prisma/
└── schema.prisma          # Database schema

public/                    # Static assets
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Amazigh theme
- **Icons**: Lucide React
- **Database**: Prisma (SQLite for development)
- **State Management**: Zustand (planned)
- **Authentication**: NextAuth.js (planned)
- **AI Integration**: OpenAI API (planned)

## 📚 Learning Modules

### 1. Interactive Lessons
- Structured curriculum from beginner to advanced
- Audio pronunciations by native speakers
- Interactive exercises and quizzes
- Progress tracking and completion certificates

### 2. Vocabulary Flashcards
- Spaced repetition algorithm (similar to Anki)
- Topic-based organization (family, food, work, etc.)
- Audio pronunciations and visual aids
- Personal progress tracking

### 3. AI Chat Practice
- Real-time conversation practice
- Grammar correction and suggestions
- Topic-based conversations
- Translation assistance

### 4. Progress Analytics
- Learning streaks and goals
- Detailed statistics and insights
- Achievement system
- Weekly/monthly progress reports

## 🌍 Supported Dialects

- **Kabyle** (Taqbaylit) - Algeria
- **Chaoui** (Tašawit) - Algeria
- **Mozabite** (Tumzabt) - Algeria
- **Tarifit** (Tarifit) - Morocco
- **Tashelhit** (Taclḥit) - Morocco

## 🎯 Roadmap

### Phase 1: Core Platform ✅
- [x] Project setup and basic UI
- [x] Navigation and layout
- [x] Homepage with dialect selection
- [x] Lessons page with filtering
- [x] Flashcards with spaced repetition
- [x] AI chat interface
- [x] Progress tracking dashboard
- [x] Settings and preferences

### Phase 2: Backend Integration (Planned)
- [ ] Database setup with Prisma
- [ ] User authentication system
- [ ] Lesson content management
- [ ] Progress persistence
- [ ] Audio file integration

### Phase 3: AI Features (Planned)
- [ ] OpenAI integration for chat
- [ ] Grammar correction system
- [ ] Pronunciation assessment
- [ ] Personalized learning paths

### Phase 4: Advanced Features (Planned)
- [ ] Community features
- [ ] Live classes integration
- [ ] Mobile app development
- [ ] Offline learning capabilities

## 🤝 Contributing

We welcome contributions to help preserve and promote the Amazigh language! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Amazigh cultural communities for language preservation efforts
- Native speakers who contribute pronunciations and cultural context
- Open source community for the amazing tools and libraries

---

**Azul! Welcome to learning Amazigh!** 🏔️
