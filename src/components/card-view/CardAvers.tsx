import MarkdownToHtml from '../markdown/markdownToHtml';
import './CardAvers.css';

interface CardAversProps {
  cardId: string;
  avers: string;
}

export function CardAvers(props: CardAversProps) {
  const { cardId, avers } = props;

  return (
    <div
      key={cardId}
      className="absolute m-auto flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-t from-blue-700 to-blue-500 p-0 text-center text-slate-100 shadow-lg backface-hidden "
    >
      <MarkdownToHtml>{avers}</MarkdownToHtml>
    </div>
  );
}
