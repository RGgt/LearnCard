import MarkdownToHtml from '../markdown/markdownToHtml';
import './CardReverse.css';

interface CardReverseProps {
  cardId: string;
  revers: string;
  score: number;
  onCardRated: (ratedCardId: string, rating: number) => void;
}

export function CardReverse(props: CardReverseProps) {
  const { cardId, revers, score, onCardRated } = props;

  const onGreen = () => {
    onCardRated(cardId, 1);
  };
  const onRed = () => {
    onCardRated(cardId, 0);
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '+') {
      onGreen();
      return;
    }
    if (event.key === '-') {
      onRed();
      return;
    }
  };

  return (
    <>
      <div
        key={cardId}
        className="absolute m-auto flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-t from-blue-700 to-blue-500 p-0 text-center  text-slate-100 shadow-lg backface-hidden rotate-x-180"
      >
        <MarkdownToHtml>{revers}</MarkdownToHtml>
      </div>
      <br />
      <div
        className="flip-content h-full w-full"
        role="button"
        // onClick={() => onGreen()}
        tabIndex={0}
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown(e)}
      >
        Score: {score}
      </div>
    </>
  );
}
