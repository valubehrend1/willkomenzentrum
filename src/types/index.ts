export interface ContentItem {
    id: string;
    title: string;
    content?: string;
    items?: ContentItem[];
    expanded?: boolean;
  }
  
  export interface NavItem {
    id: string;
    title: string;
    path: string;
    active?: boolean;
  }