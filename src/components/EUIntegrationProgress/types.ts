export interface Stage {
    number: number;
    title: string;
    description: string;
  }
  
  export interface NavigationProps {
    onPrevious: () => void;
    onNext: () => void;
    canGoPrevious: boolean;
    canGoNext: boolean;
  }
  
  export interface NumberIndicatorProps {
    number: number;
    isActive: boolean;
  }
  