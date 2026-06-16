"use client";

import React, { useState, useEffect } from "react";
import { Palette, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const THEMES = [
  { id: 'default', name: 'Clasnet (Default)', colors: { primary: '#0038BD', secondary: '#EF8E01', foreground: '#001a5e', background: '#eeeeee' } },
  { id: 'zero', name: 'Zero', colors: { primary: '#6c63ff', secondary: '#1a1a2e', foreground: '#2d2d44', background: '#ffffff' } },
  { id: 'one', name: 'One', colors: { primary: '#606c38', secondary: '#bc6c25', foreground: '#283618', background: '#fefae0' } },
  { id: 'two', name: 'Two', colors: { primary: '#669bbc', secondary: '#c1121f', foreground: '#003049', background: '#fdf0d5' } },
  { id: 'three', name: 'Three', colors: { primary: '#219ebc', secondary: '#fb8500', foreground: '#023047', background: '#ffffff' } },
  { id: 'five', name: 'Five', colors: { primary: '#2a9d8f', secondary: '#e76f51', foreground: '#264653', background: '#ffffff' } },
  { id: 'six', name: 'Six', colors: { primary: '#edafb8', secondary: '#4a5759', foreground: '#4a5759', background: '#f7e1d7' } },
  { id: 'seven', name: 'Seven', colors: { primary: '#14213d', secondary: '#fca311', foreground: '#000000', background: '#e5e5e5' } },
  { id: 'eight', name: 'Eight', colors: { primary: '#0a9396', secondary: '#bb3e03', foreground: '#001219', background: '#e9d8a6' } },
  { id: 'nine', name: 'Nine', colors: { primary: '#5b8e7d', secondary: '#f4a259', foreground: '#8cb369', background: '#f4e285' } },
  { id: 'ten', name: 'Ten', colors: { primary: '#277da1', secondary: '#f94144', foreground: '#577590', background: '#ffffff' } },
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('default');

  useEffect(() => {
    // Load theme from localStorage if available
    const saved = localStorage.getItem('clasnet-theme');
    if (saved) {
      const theme = THEMES.find(t => t.id === saved);
      if (theme) applyTheme(theme);
    }
  }, []);

  const applyTheme = (theme: typeof THEMES[0]) => {
    setActiveTheme(theme.id);
    localStorage.setItem('clasnet-theme', theme.id);
    
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--foreground', theme.colors.foreground);
    root.style.setProperty('--background', theme.colors.background);
    
    // Auto adjust text colors for contrast based on background brightness
    // For simplicity we just ensure dark elements on light backgrounds
    if (theme.id !== 'default') {
      root.style.setProperty('--card', theme.colors.background === '#ffffff' ? '#f8f9fa' : '#ffffff');
      root.style.setProperty('--card-foreground', theme.colors.foreground);
    } else {
      root.style.setProperty('--card', '#ffffff');
      root.style.setProperty('--card-foreground', '#001a5e');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-slate-900 border border-border shadow-2xl rounded-xl w-64 p-4 overflow-hidden animate-in slide-in-from-bottom-2 fade-in duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-sm text-foreground">Tema Warna</h3>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
            {THEMES.map(theme => (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme)}
                className={`w-full flex items-center justify-between p-2 rounded-lg border transition-all ${
                  activeTheme === theme.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-transparent hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <span className="w-5 h-5 rounded-full border border-white/50 shadow-sm" style={{ backgroundColor: theme.colors.primary }}></span>
                    <span className="w-5 h-5 rounded-full border border-white/50 shadow-sm" style={{ backgroundColor: theme.colors.secondary }}></span>
                    <span className="w-5 h-5 rounded-full border border-white/50 shadow-sm" style={{ backgroundColor: theme.colors.background }}></span>
                  </div>
                  <span className="text-xs font-medium text-foreground">{theme.name}</span>
                </div>
                {activeTheme === theme.id && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        size="icon" 
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl bg-primary text-primary-foreground transition-all hover:scale-105"
      >
        <Palette className="w-5 h-5" />
      </Button>
    </div>
  );
}
