import { useRef } from 'react';
import { CardAvers } from './CardAvers';
import { CardReverse } from './CardReverse';
import './CardView.css';

interface CardViewProps {
  cardId: string;
  avers: string;
  revers: string;
  score: number;
  onCardRated: (ratedCardId: string, rating: number) => void;
}

export function CardView(props: CardViewProps) {
  const { cardId, avers, revers, score, onCardRated } = props;
  const clickableFace = useRef<HTMLInputElement>(null);
  let flipped = false;
  const toggleFlipped = () => {
    const element = clickableFace.current;
    if (!element) return;
    if (flipped) {
      element.classList.remove('flipped');
      flipped = false;
    } else {
      element.classList.add('flipped');
      flipped = true;
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleFlipped();
    }
  };

  return (
    <>
      <div className="card-typography perspective-100vw h-full w-full flex-1  overflow-hidden ">
        <div
          className="flip-content h-full w-full"
          role="button"
          onClick={toggleFlipped}
          tabIndex={0}
          onKeyPress={handleKeyPress}
          ref={clickableFace}
        >
          <CardAvers cardId={cardId} avers={avers} />
          <CardReverse
            cardId={cardId}
            revers={revers}
            score={score}
            onCardRated={onCardRated}
          />
        </div>
      </div>
    </>
  );
}
