interface CardSetViewProps {
  topicId: string;
  collectionId: string;
  handId: string;
  myKey: string;
  allCards: HandCardData[];
  allScores: HandScoreData[];
  onClosing: () => void;
  onCompleted: () => void;
}
interface CardViewProps {
  cardData: HandCardData;
  prevScore: number;
  rateCard: (cardId: string, rating: number) => void;
}
interface CardErrorViewProps {
  error: Error;
}
interface CardReverseProps {
  cardId: string;
  revers: string;
  score: number;
  showRating: boolean;
  showFlipCard: boolean;
  onCardRated: (ratedCardId: string, rating: number) => void;
  toggleFlipped: () => void;
}
interface CardOptionsAreaProps {
  cardId: string;
  showRating: boolean;
  showFlipCard: boolean;
  onCardRated: (ratedCardId: string, rating: number) => void;
  toggleFlipped: () => void;
}
interface CardOptionAreaButtonProps {
  onClick: () => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  visible: boolean;
}

interface CardAversProps {
  cardId: string;
  avers: string;
  toggleFlipped: () => void;
}
interface CardSetErrorViewProps {
  onClosing: () => void;
  error: Error;
  progress: number;
}
