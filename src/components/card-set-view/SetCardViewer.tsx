import { useState } from 'react';
import { CardView } from '../card-view/CardView';
import { ErrorView } from '../card-view/ErrorView';

interface SetCardViewerProps {
  allCards: HandCardData[];
  allScores: HandScoreData[];
  onScoringCompleted: () => void;
  onScoringProgress: (event: ScoringProgressEvent) => void;
}
interface ScoringProgressEvent {
  percent: number;
}

interface HandCardData {
  cardId: string;
  avers: string;
  revers: string;
}
interface HandScoreData {
  cardId: string;
  score: number;
}
export function SetCardViewer(props: SetCardViewerProps) {
  const { allCards, allScores, onScoringCompleted, onScoringProgress } = props;
  const defaultCardId = allScores[0].cardId;
  const [crtCardId, setCardId] = useState<string>(defaultCardId);

  const findCardScoreIndex = (ratedCardId: string): number => {
    const index = allScores.findIndex((x) => x.cardId === ratedCardId);
    if (index < 0) throw new Error('Invalid card id!');
    return index;
  };

  const onCardRated = (ratedCardId: string, rating: number) => {
    const index = findCardScoreIndex(ratedCardId);
    allScores[index].score = rating;
    if (index + 1 === allScores.length) {
      onScoringCompleted();
    } else {
      setCardId(allScores[index + 1].cardId);
      const scoredCards = allScores.reduce(
        (total, e) => (e.score === -1 ? total : total + 1),
        0,
      );
      const percentCardsDisplayed = Math.round(
        (100 * scoredCards) / allCards.length,
      );
      onScoringProgress({ percent: percentCardsDisplayed });
    }
  };

  if (!crtCardId) return <ErrorView error={new Error('No card specified!')} />;
  const card = allCards.find((x) => x.cardId === crtCardId);
  if (!card) return <ErrorView error={new Error('Card ot found!')} />;
  const cardWScore = allScores.find((x) => x.cardId === crtCardId);
  let cardScore = 0;
  if (cardWScore) cardScore = cardWScore.score;

  return (
    <>
      <CardView
        cardId={crtCardId}
        key={crtCardId}
        avers={card.avers}
        revers={card.revers}
        score={cardScore}
        onCardRated={onCardRated}
      />
    </>
  );
}
