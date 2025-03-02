export interface TimelineItem {
    date: string;
    content: string;
    image: {
      src: string;
      alt: string;
      caption: string;
    };
  }
  
  export interface TimelineNavigationProps {
    items: TimelineItem[];
    activeIndex: number;
    onSelect: (index: number) => void;
  }
  
  export interface TimelineContentProps {
    item: TimelineItem;
  }
  
  export interface NavigationControlsProps {
    onPrevClick: () => void;
    onNextClick: () => void;
    canGoPrev: boolean;
    canGoNext: boolean;
  }
  