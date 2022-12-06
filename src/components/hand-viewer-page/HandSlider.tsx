import { useRef, useState } from 'react';
import MarkdownToHtml from '../markdown/markdownToHtml';
import { CardViewer } from './CardViewer';

interface HandSliderProps {
  allCards: HandCardData[];
  allScores: HandScoreData[];
  onScoringCompleted: () => void;
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
export function HandSlider(props: HandSliderProps) {
  const { allCards, allScores, onScoringCompleted } = props;
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
    }
  };

  if (!crtCardId) return <p>oups</p>;
  const card = allCards.find((x) => x.cardId === crtCardId);
  if (!card) return <p>oups</p>;
  const cardWScore = allScores.find((x) => x.cardId === crtCardId);
  let cardScore = 0;
  if (cardWScore) cardScore = cardWScore.score;

  return (
    <>
      <CardViewer
        cardId={crtCardId}
        key={crtCardId}
        avers={card.avers}
        revers={card.revers}
        score={cardScore}
        onCardRated={onCardRated}
      />
    </>
    // <p className=" bg-yellow-400 ">
    //   Card ID: {crtCardId}
    //   <br />
    //   <button
    //     className="btn-primary btn"
    //     type="button"
    //     onClick={() => {
    //       if (crtCardId) onCardRated(crtCardId, 1);
    //     }}
    //   >
    //     Mastered Perfectly
    //   </button>
    //   <br />
    //   <button
    //     className="btn-secondary btn"
    //     type="button"
    //     onClick={() => {
    //       if (crtCardId) onCardRated(crtCardId, 0);
    //     }}
    //   >
    //     Not Mastered Yet
    //   </button>
    //   <br />
    //   Question:{' '}
    //   {crtCardId && allCards.find((x) => x.cardId === crtCardId)?.avers}
    //   <br />
    //   Answer:{' '}
    //   {crtCardId && allCards.find((x) => x.cardId === crtCardId)?.revers}
    // </p>
  );
}
