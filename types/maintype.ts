export interface Board {
    id: number;
    name: string;
    createdAt: string;
    bcfs: BCF[];
  }
  
  export interface BCF {
    id: number;
    name: string;
    createdAt: string;
    bcfBoards?: BCFBoard[];
  }
  
  export interface BCFBoard {
    id: number;
    name: string;
    createdAt: string;
  }
  
  export interface Prompt {
    id: number;
    name: string;
    createdAt: string;
  }
  