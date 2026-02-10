import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

export interface ColorScheme {
  id: string;
  name: string;
  preview: string; // accent color for the swatch
  dark: boolean;
}

export const colorSchemes: ColorScheme[] = [
  { id: 'default-light', name: 'Mint', preview: '#2dd4a8', dark: false },
  { id: 'default-dark', name: 'Mint Dark', preview: '#2dd4a8', dark: true },
  { id: 'ocean-light', name: 'Ocean', preview: '#3b82f6', dark: false },
  { id: 'ocean-dark', name: 'Ocean Dark', preview: '#3b82f6', dark: true },
  { id: 'sunset-light', name: 'Sunset', preview: '#f97316', dark: false },
  { id: 'sunset-dark', name: 'Sunset Dark', preview: '#f97316', dark: true },
  { id: 'rose-light', name: 'Rose', preview: '#f43f5e', dark: false },
  { id: 'rose-dark', name: 'Rose Dark', preview: '#f43f5e', dark: true },
  { id: 'purple-light', name: 'Lavender', preview: '#8b5cf6', dark: false },
  { id: 'purple-dark', name: 'Lavender Dark', preview: '#8b5cf6', dark: true },
  { id: 'gold-light', name: 'Gold', preview: '#eab308', dark: false },
  { id: 'gold-dark', name: 'Gold Dark', preview: '#eab308', dark: true },
];

interface ThemeContextType {
  scheme: string;
  setScheme: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  scheme: 'default-dark',
  setScheme: () => {},
});

function getInitialScheme(): string {
  if (typeof window === 'undefined') return 'default-dark';
  const saved = localStorage.getItem('color-scheme');
  if (saved && colorSchemes.find(s => s.id === saved)) return saved;
  return 'default-dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [scheme, setSchemeState] = useState(getInitialScheme);
  const mountedRef = useRef(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-scheme', scheme);
    mountedRef.current = true;
  });

  const setScheme = (id: string) => {
    setSchemeState(id);
    document.documentElement.setAttribute('data-scheme', id);
    localStorage.setItem('color-scheme', id);
  };

  return (
    <ThemeContext.Provider value={{ scheme, setScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
