# 📝 Note Service

A **simple** and **elegant** note-taking app built with **React**, **Vite**, and **Material UI**.  
Take notes effortlessly with a smooth and modern interface! ✨

---

## 🚀 Features

- ➕ **Add** and 📄 **View** notes with a clean, responsive UI
- 🗄️ **Client-side storage** with `localStorage` (works offline)
- 📱 **Responsive design** for mobile, tablet, and desktop
- 🎨 **Material UI** components for a professional look and feel
- 🎥 **Smooth animations** and transitions for better UX
- ⚡ **Loading** and 🚨 **Error states** for graceful user experience

---

## 📸 Screenshots

### 🖼️ Home Screen

![Home Screen](./screenshots/SS1.png)

### 🖼️ Add Note Screen

![Add Note Screen](./screenshots/SS2.png)

---

## 🛠️ Tech Stack

| Technology      | Description                        |
| --------------- | ---------------------------------- |
| ⚛️ React        | Frontend library                   |
| ⚡ Vite         | Next-gen build tool                |
| 🎨 Material UI  | UI components and theming          |
| 🧠 JavaScript   | Core programming language          |
| 💾 localStorage | Data persistence (offline support) |

---

## 🛠️ Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🎨 Design Decisions

🗄️ Storage Strategy
Using localStorage under the key 'note-service-notes', ensuring persistence across sessions and offline usability. Ideal for lightweight personal note apps without needing a backend.

🧩 Component Design
Followed Single Responsibility Principle by creating small reusable components (AddNote, NotesList, NoteItem, etc.).
Used controlled components for forms to easily handle validation and resets.

⚙️ State Management
Leveraged React's useState and a custom useNotes hook to abstract all note handling logic, keeping the app simple and clean without introducing complex state libraries like Redux.

🎨 Styling
Chose Material UI for its polished components, responsive design out of the box, and easy theming.
Added hover animations and subtle transitions for delightful interactions.

🧭 Navigation
Implemented tab-based navigation (no router needed) to switch between Note List and Add Note views.
It keeps the UX minimalistic, intuitive, and user-friendly.

---
