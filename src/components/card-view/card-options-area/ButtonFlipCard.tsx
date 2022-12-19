import { IconFlipCard } from './IconFlipCard';

export function ButtonFlipCard(props: CardOptionAreaButtonProps) {
  const { onClick, handleKeyPress, visible } = props;
  if (!visible) return null;
  return (
    <div
      className="btn-outline  btn-info glass btn-circle btn absolute left-1/2 h-12 w-12 shadow-lg shadow-slate-800 md:h-16 md:w-16"
      role="button"
      onClick={onClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
    >
      <IconFlipCard />
    </div>
  );
}
