## New-Portfolio
My Personal Portfolio Page

## Source Controll
    - git add .
    - git commit -m "Update & Changes Made"
    - git push
    - git status
    - git pull origin

#  Create a Vite/React App
    - npm create vite@latest
    - Framework : React
    - Variant : Javascript

# Build a Vite/React app
    - npm install

# Start a local Server
    - npm run dev

# Install React Router
    - npm install react-router-dom

# Creating App component
    - Make sure all components are like this to start
        const App = () => {
            return (
                <>
                </>
            );
        };
        export default App;

# Adding Route's elements in App.jsx
    - Add import's to App.jsx
        + import { BrowserRouter, Route, Routes } from "react-router-dom";
        + import Navbar from "./components/NavBar";
        + import Landing from "./pages/Landing/Landing";