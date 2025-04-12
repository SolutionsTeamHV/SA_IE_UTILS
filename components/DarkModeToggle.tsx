"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Import ShadCN Button

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Check localStorage for theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="text-sm bg-gray-200 dark:bg-gray-700 dark:text-white"
      onClick={toggleTheme}
    >
      {isDark ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </Button>
  );
};

export default DarkModeToggle;
