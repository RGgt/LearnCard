import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import useFetch from '../hooks/useFetch';
import { CancelButton } from '../components/hand-viewer-page/CancelButton';
import { ProcessingProgress } from '../components/hand-viewer-page/ProcessingProgress';
import { LoadingSkeleton } from '../components/hand-viewer-page/LoadingSkeleton';
import { ErrorView } from '../components/hand-viewer-page/ErrorView';
import { HandViewer } from '../components/hand-viewer-page/HandViewer';
import { HandViewerSocket } from '../components/hand-viewer-page/HandViewerSocket';

interface HandCardData {
  cardId: string;
  avers: string;
  revers: string;
}
interface DisplayedCardData {
  cardId: string;
  rating: number;
}
export function HandViewerPage() {
  const navigate = useNavigate();
  const { topic, collection, hand } = useParams();
  const [cardsDisplayed, setCardsDisplayed] = useState<DisplayedCardData[]>([
    { cardId: 'card-001', rating: 1 },
  ]);
  const url = `decks/${topic}/${collection}/${hand}.json`;
  const { data, error } = useFetch<HandCardData[]>('decks/german/test01.json');
  const cardsToDisplay = _.shuffle(data);
  const percentCardsDisplayed = Math.round(
    (100 * cardsDisplayed.length) / cardsToDisplay.length,
  );
  if (!topic || !collection || !hand)
    return <ErrorView error={new Error('Missing path segments!')} />;
  if (error) return <ErrorView error={error} />;
  if (!data) return <LoadingSkeleton />;

  const onScoringCancelled = () => {
    navigate('/');
    console.log('cancelled');
  };
  const onScoringCancelledClicked = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    onScoringCancelled();
  };
  const onScoringCompleted = () => {
    navigate('/');
  };
  const onCardRated = (ratedCardId: string, rating: number) => {
    cardsToDisplay.shift();
    setCardsDisplayed((prevState) => [
      ...prevState,
      { cardId: ratedCardId, rating },
    ]);
  };

  return (
    <>
      <div className="flex h-screen w-screen flex-col bg-slate-500 p-0">
        <div className="navbar items-center justify-center bg-transparent p-0">
          <div className="flex w-2/3 flex-row items-center justify-center bg-slate-500 p-0">
            <div className="flex w-fit items-start justify-start  bg-slate-500 p-0">
              <CancelButton callback={onScoringCancelledClicked} />
            </div>
            <div className="flex w-full items-center justify-end bg-slate-500 pl-4">
              <ProcessingProgress progressPercent={percentCardsDisplayed} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-slate-700">
          <div className="flex h-2/3 w-2/3 items-center justify-center rounded-2xl bg-slate-700  bg-[url('/card-top.jpg')] shadow-lg">
            {/* <div className="m-auto flex">
              <h3>
                Conjugarea verbului <strong>a fi</strong> la timpul prezent
              </h3>
              <HandViewerSocket
                topicId={topic}
                collectionId={collection}
                handId={hand}
                onScoringCompleted={onScoringCompleted}
              />
            </div> */}
            <HandViewerSocket
              topicId={topic}
              collectionId={collection}
              handId={hand}
              onScoringCompleted={onScoringCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
}
