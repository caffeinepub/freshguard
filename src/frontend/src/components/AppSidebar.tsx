import {
  DollarSign,
  Home,
  Presentation,
  ShoppingCart,
  Vote,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";

type Page = "home" | "store" | "vote";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function AppSidebar({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}: AppSidebarProps) {
  const sidebarRef = useRef<HTMLDialogElement>(null);

  const scrollTo = (id: string) => {
    if (currentPage !== "home") {
      onNavigate("home");
      // Wait for home page to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  const navItems: NavItem[] = [
    {
      label: "The Pitch",
      icon: <Presentation size={20} />,
      action: () => scrollTo("hero"),
    },
    {
      label: "Business Plan",
      icon: <Home size={20} />,
      action: () => scrollTo("company-info"),
    },
    {
      label: "How It Works",
      icon: <Wrench size={20} />,
      action: () => scrollTo("how-it-works"),
    },
    {
      label: "Financials",
      icon: <DollarSign size={20} />,
      action: () => scrollTo("financials"),
    },
    {
      label: "Shop",
      icon: <ShoppingCart size={20} />,
      action: () => {
        onNavigate("store");
        onClose();
      },
    },
    {
      label: "Sharks Vote",
      icon: <Vote size={20} />,
      action: () => {
        onNavigate("vote");
        onClose();
      },
    },
  ];

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        aria-hidden="true"
      />

      {/* Sidebar drawer */}
      <dialog
        ref={sidebarRef}
        aria-modal="true"
        aria-label="Navigation menu"
        open={isOpen}
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out m-0 p-0 border-0 max-h-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-black text-charcoal">
              Fresh<span className="text-brand">Guard</span>
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-charcoal transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={item.action}
              className="flex items-center gap-4 w-full text-left px-4 py-4 rounded-xl text-charcoal font-medium text-base hover:bg-brand/8 hover:text-brand transition-all duration-200 group"
            >
              <span className="text-gray-400 group-hover:text-brand transition-colors">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            FreshGuard Inc. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </dialog>
    </>
  );
}
