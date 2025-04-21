export interface TabProps {
  id: number;
  name?: string;
  image: {
    src: string;
    alt: string;
  };
  active: boolean;
  pinned?: boolean;
  onClick?: () => void;
  className?: string;
  path?: string;
}
export interface TooltipProps {
  message: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  image: {
    src: string;
    alt: string;
  };
}
export interface OverflowDropdownProps {
  overflowTabs: string[];
  pinnedTabs: string[];
  togglePin: (name: string) => void;
  setActiveTab: (name: string) => void;
  activeTab: string;
}
