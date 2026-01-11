// Color Theme Configuration
// Based on: 80e2ff, 9cecff, bdf2ff, ba9fe7, 9e74d0

export const colors = {
  // Cyan/Blue shades (primary accent colors)
  cyan: {
    light: '#bdf2ff',    // Very light cyan
    medium: '#9cecff',    // Medium cyan
    dark: '#80e2ff',      // Darker cyan
  },
  
  // Purple shades (primary brand colors)
  purple: {
    light: '#ba9fe7',     // Light purple
    medium: '#9e74d0',    // Medium purple
    dark: '#8b5fc7',      // Darker purple (derived)
    darker: '#7a4ab8',   // Even darker (derived)
  },
  
  // Neutral colors (for text and backgrounds)
  neutral: {
    white: '#ffffff',
    light: '#f8fafc',
    gray: '#475569',      // For text (maintains contrast)
    dark: '#1e293b',      // For dark text
    black: '#0f172a',    // For very dark backgrounds
  },
  
  // Semantic colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
}

// Helper function to convert hex to rgba
export const hexToRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// Gradient presets
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.purple.medium} 0%, ${colors.purple.dark} 100%)`,
  primaryHover: `linear-gradient(135deg, ${colors.purple.dark} 0%, ${colors.purple.darker} 100%)`,
  accent: `linear-gradient(135deg, ${colors.cyan.medium} 0%, ${colors.cyan.dark} 100%)`,
  hero: `linear-gradient(135deg, ${colors.cyan.light} 0%, ${colors.purple.light} 100%)`,
  dark: `linear-gradient(135deg, ${colors.neutral.dark} 0%, ${colors.neutral.black} 60%)`,
}

