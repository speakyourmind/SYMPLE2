export interface Cell {
  key: string;
  backgroundColor: string;
  displayText: string;
  speakable?: boolean;
  typeable?: boolean;
  selectable?: boolean;
  route?: string;
}
