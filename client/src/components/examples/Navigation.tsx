import Navigation from '../Navigation';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}
