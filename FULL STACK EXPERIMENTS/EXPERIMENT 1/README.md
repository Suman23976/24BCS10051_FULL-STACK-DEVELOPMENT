# EXPERIMENT 1

This repository contains the React.js experiments completed as part of the **Full Stack Development (FSD)** laboratory. The experiments demonstrate fundamental React concepts such as components, props, JSX, state management using Hooks, event handling, forms, and dynamic rendering.
This repository contains the React.js experiments completed as part of the **Full Stack Development (FSD)** laboratory. The experiments cover the core concepts of React including components, JSX, props, state management using Hooks, event handling, forms, API integration, conditional rendering, and dynamic list rendering.

---

## 📁 Repository Structure
# 📁 Repository Structure

```
FSD-2/
│
├── Exp1.1Easy/
│   ├── App.jsx
│   └── StudentProfile.jsx
│
├── Exp1.1Med/
│   ├── App.jsx
│   └── StudentCard.jsx
│
├── Exp1.2Easy/
│   ├── App.jsx
│   └── Counter.jsx
│
└── Exp1.2Med/
    └── App.jsx
└── Exp1/
    │
    ├── Exp1.1Easy/
    │   ├── App.jsx
    │   └── StudentProfile.jsx
    │
    ├── Exp1.1Med/
    │   ├── App.jsx
    │   └── StudentCard.jsx
    │
    ├── Exp1.1Hard/
    │   ├── App.jsx
    │   ├── Header.jsx
    │   ├── Sidebar.jsx
    │   ├── StudentCard.jsx
    │   ├── StudentList.jsx
    │   └── Footer.jsx
    │
    ├── Exp1.2Easy/
    │   ├── App.jsx
    │   └── Counter.jsx
    │
    ├── Exp1.2Med/
    │   └── App.jsx
    │
    └── Exp1.2Hard/
        └── App.jsx
```

---
@@ -33,7 +46,7 @@ FSD-2/
### Student Profile Component

### Objective
Develop a simple React component to display a student's profile.
Create a simple React functional component that displays a student's profile.

### Concepts Covered
- Functional Components
@@ -43,37 +56,60 @@ Develop a simple React component to display a student's profile.

### Features
- Displays student name
- Shows course
- Displays course
- Displays age
- Uses a reusable functional component
- Reusable functional component

---

## Experiment 1.1 (Medium)
### Student Cards using Props

### Objective
Create reusable student cards by passing data using React Props.
Create reusable student cards by passing data through React Props.

### Concepts Covered
- React Props
- Props
- Component Reusability
- Array Mapping
- Dynamic Rendering

### Features
- Displays multiple student records
- Uses `map()` to render cards
- Displays multiple student cards
- Uses `map()` to render components
- Passes data through props
- Responsive card layout

---

## Experiment 1.1 (Hard)
### Student Dashboard using Multiple Components

### Objective
Build a student dashboard by combining multiple reusable React components.

### Concepts Covered
- Component Composition
- Props
- Reusable Components
- Layout Design
- Array Mapping

### Features
- Header Component
- Sidebar Navigation
- Student List
- Student Cards
- Footer Component
- Modular Project Structure

---

## Experiment 1.2 (Easy)
### Counter Application

### Objective
Implement a counter application using React Hooks.
Develop a counter application using React Hooks.

### Concepts Covered
- useState Hook
@@ -84,7 +120,7 @@ Implement a counter application using React Hooks.
- Increment Counter
- Decrement Counter
- Reset Counter
- Dynamic color change based on counter value
- Dynamic color changes

---

@@ -110,13 +146,40 @@ Create a controlled form using React state.

---

## Experiment 1.2 (Hard)
### Student Data Table with API Fetching

### Objective
Fetch student data from an external API and display it in a searchable table.

### Concepts Covered
- useEffect Hook
- useState Hook
- Fetch API
- Asynchronous Programming
- Conditional Rendering
- List Rendering
- Search Filtering
- Error Handling

### Features
- Fetches user data from REST API
- Displays student information in a table
- Search students by name
- Loading indicator
- Error handling
- Dynamic table rendering

---

# Technologies Used

- React.js
- JavaScript (ES6+)
- JSX
- HTML5
- CSS (Inline Styling)
- Fetch API

---

@@ -125,13 +188,18 @@ Create a controlled form using React state.
- Functional Components
- JSX
- Props
- Component Composition
- State Management
- useState Hook
- useEffect Hook
- Event Handling
- Forms
- Controlled Components
- Array Mapping
- Forms
- Conditional Rendering
- Array Mapping
- API Integration
- Search Filtering
- Error Handling

---

@@ -140,12 +208,16 @@ Create a controlled form using React state.
After completing these experiments, the following concepts were understood:

- Creating reusable React components
- Building modular React applications
- Passing data using Props
- Managing state with Hooks
- Managing state using Hooks
- Handling user events
- Working with controlled forms
- Rendering lists dynamically
- Building interactive user interfaces
- Rendering dynamic lists
- Fetching data from APIs
- Implementing search functionality
- Handling loading and error states
- Building interactive React applications

---

@@ -157,7 +229,7 @@ After completing these experiments, the following concepts were understood:
git clone <repository-url>
```

### 2. Navigate to Project
### 2. Navigate to the Project

```bash
cd FSD-2
@@ -169,13 +241,15 @@ cd FSD-2
npm install
```

### 4. Start Development Server
### 4. Start the Development Server

For Vite:

```bash
npm run dev
```

or (if using Create React App)
For Create React App:

```bash
npm start
@@ -193,6 +267,6 @@ Chandigarh University

---

## License
# License

This project is created for academic and educational purposes.
This repository is created for academic and educational purposes as part of the Full Stack Development (FSD) laboratory.
