"use client"; // Ensure this is a client-side component

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const getThememode = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use useEffect to ensure that the theme is only accessed on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure we don't try to access the theme before the component is mounted
  if (!mounted) {
    return { isDark: false }; // Default to light mode while waiting for client-side hydration
  }

  // Return the current theme state (isDark) after the component has mounted
  const isDark = theme === "dark";

  return { isDark };
};
