import { useRef, useState } from 'react';
import MarkdownToHtml from '../markdown/markdownToHtml';
import './CardViewer.css';
import './CardViewerTable.css';

interface CardViewerProps {
  cardId: string;
  avers: string;
  revers: string;
  score: number;
  onCardRated: (ratedCardId: string, rating: number) => void;
}

export function CardViewer(props: CardViewerProps) {
  const { avers, revers, score, onCardRated } = props;
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
          <div className="absolute m-auto flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-t from-blue-700 to-blue-500 p-0 text-center text-slate-100 shadow-lg backface-hidden ">
            {/* <p>
              1. Conjugarea verbului <strong>a fi</strong> la timpul prezent
            </p> */}
            <MarkdownToHtml>{avers}</MarkdownToHtml>
          </div>
          <div className="absolute m-auto flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-t from-blue-700 to-blue-500 p-0 text-center text-slate-100  shadow-lg backface-hidden rotate-x-180">
            <MarkdownToHtml>{revers}</MarkdownToHtml>
          </div>
        </div>
      </div>
    </>
  );
}
