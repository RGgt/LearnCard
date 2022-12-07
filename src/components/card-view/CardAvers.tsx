import MarkdownToHtml from '../../components/markdown/markdownToHtml';
import './CardAvers.css';

export function CardAvers(props: CardAversProps) {
  const { cardId, avers, toggleFlipped } = props;
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toggleFlipped();
    }
  };

  return (
    <div
      key={cardId}
      className="absolute m-auto flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-t from-blue-700 to-blue-500 p-0 text-center text-slate-100 shadow-lg backface-hidden"
      onClick={toggleFlipped}
      onKeyPress={handleKeyPress}
    >
      <MarkdownToHtml>{avers}</MarkdownToHtml>
    </div>
  );
}
