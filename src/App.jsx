import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorBoundary from "./components/common/ErrorBoundary";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AnalyticsProvider>
          <Router>
            <div className="App min-h-screen flex flex-col transition-colors duration-300 dark:bg-gray-900 dark:text-white">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </AnalyticsProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;