import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="fixed top-5 left-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-brand/20 shadow-md hover:shadow-brand-glow hover:border-brand/50 text-charcoal hover:text-brand transition-all duration-200"
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}
