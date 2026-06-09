# Caden Project Description

## Overview

Caden is a simple React + Vite web application focused on personal financial tracking. It allows users to manage and track their financial activities like income and expenses. The application saves data to `localStorage`.

## Technologies Used

- **Core**: React 19, React Router v7, React Context API for state management.
- **Styling**: Tailwind CSS v4, `tailwind-merge`, `clsx`.
- **Icons**: `lucide-react`.
- **Charts**: `chart.js`, `react-chartjs-2`.
- **Build Tool**: Vite.
- **Code Quality**: ESLint, Prettier.

## Architecture and File Structure

- `src/`
  - `components/`: Contains reusable UI components (`Layout/`, `ui/`). Includes `Button`, `Input`, `TransactionCard`, `SelectDropdown`, `ChartComponent`.
  - `context/`: Context API logic (`AppContext`, `AppProvider`, `TransactionContext`, `TransactionProvider`).
  - `features/`: Feature-specific components (`auth/`, `TransactionModal/`).
  - `hooks/`: Custom hooks like `useAppContext`, `useTransactionContext`.
  - `pages/`: Page components (`Dashboard.jsx`, `Transactions.jsx`, `Settings.jsx`, `Login.jsx`).
  - `services/` & `lib/`: LocalStorage utilities and API abstraction (`localStorage.js`, `storage.js`).
  - `router.jsx`: Handles routing using React Router.
  - `main.jsx`: Entry point.

## Features

1. **Authentication (Mock)**: A simple login screen where a user enters a username.
2. **Dashboard**: Shows Net Balance, Total Income, Total Expense for the current month. Also features a bar chart for past months' transactions and a recent transactions list.
3. **Transactions**: A page to view all transactions. Includes a search functionality placeholder.
4. **Transaction Addition**: A modal to add new income/expense entries.
5. **Settings**: A screen to select preferences like display currency and theme, as well as signing out and wiping all user data.
6. **Data Persistence**: Uses `localStorage` to persist user profiles, settings, and transactions.

## Areas for Improvement (for "Eden")

- **UI/UX**: Implement a more premium, glassmorphic, and dynamic design as per the guidelines. Use subtle micro-animations and a better color palette.
- **Code Quality**:
  - The logic inside `Dashboard.jsx` (e.g. `calcNet`, `getGraphData`) should be extracted into utility files or custom hooks.
  - `AppProvider` and `TransactionProvider` could be optimized or combined logically.
  - Fix hardcoded values and improve component reusability.
  - Add real filtering and searching logic in the `Transactions` page.
- **Responsiveness**: Ensure the layout is flawlessly responsive across all screen sizes.
- **State Management**: Consolidate localStorage reads/writes to reduce redundancy.
