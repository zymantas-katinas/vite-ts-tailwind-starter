import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Component: React.FC = () => {
  return (
    <div className="bg-primary w-screen h-screen flex justify-center items-center">
      <h1 className="text-5xl font-medium tracking-wider animate-pulse">
        Vite + Typescript + Tailwind
      </h1>
    </div>
  );
};

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Component />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
