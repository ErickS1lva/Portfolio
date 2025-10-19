import ColorPalette from '../ColorPalette';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function ColorPaletteExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <ColorPalette />
      </div>
    </ThemeProvider>
  );
}
