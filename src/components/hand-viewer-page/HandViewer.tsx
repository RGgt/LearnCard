interface HandViewerProps {
  cardId: string;
  avers: string;
  revers: string;
  onCardRated: (cardId: string, rating: number) => void;
}
export function HandViewer(props: HandViewerProps) {
  const { cardId, avers, revers, onCardRated } = props;
  const rateGreen = () => {
    onCardRated(cardId, 1);
  };
  const rateRed = () => {
    onCardRated(cardId, 0);
  };
  return (
    <>
      <p>Viewing card: {cardId}</p>
      <p>Avers: {avers}</p>
      <p>Revers: {revers}</p>
      <button type="button" onClick={rateGreen}>
        Green
      </button>
      <button type="button" onClick={rateRed}>
        Red
      </button>
    </>
  );
}
