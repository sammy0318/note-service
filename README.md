// README.md

# Note Service

A simple and elegant note-taking application built with React, Vite, and Material UI.

## Features

- Add and view notes with a clean, modern interface
- Client-side storage using localStorage
- Responsive design that works on all devices
- Material UI components for a professional look and feel
- Smooth animations and transitions
- Loading and error states for better user experience

## Setup & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Decisions

- **Storage Strategy**: Using localStorage with a dedicated key ('note-service-notes') for persistence. This allows the app to work offline and maintain state between sessions without requiring backend infrastructure. It's perfect for small to medium-sized data collections like personal notes.

- **Component Design**: Separated components by responsibility (AddNote, NotesList, NoteItem, etc.) following the single responsibility principle. This makes the code more maintainable and reusable. Used controlled components for form inputs to enable validation and clear form state management.

- **State Management**: Used React's useState and a custom hook (useNotes) to manage application state. This provides a clean API for components while encapsulating the storage logic. useState is sufficient for this app's complexity level without needing Redux or Context API.

- **Styling**: Material UI was chosen for its comprehensive component library, consistent design language, and built-in responsiveness. The theme customization allows for a unique look while maintaining Material Design principles. The animation effects on cards provide subtle feedback to improve user experience.

- **Navigation**: Used a simple tab-based navigation system for switching between views. This is intuitive, takes minimal screen space, and provides clear visual feedback about the current view without adding the complexity of a router.
