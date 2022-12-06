import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { CancelButton } from '../components/hand-viewer-page/CancelButton';
import { ProcessingProgress } from '../components/hand-viewer-page/ProcessingProgress';
import { ErrorView } from '../components/card-view/ErrorView';
import { RandomizedCardSet } from '../components/card-set-view/RandomizedCardSet';

export function HandViewerPage() {
  const navigate = useNavigate();
  const { topic, collection, hand } = useParams();
  const [progressPercent, setProgressPercent] = useState<number>(0);

  if (!topic || !collection || !hand)
    return <ErrorView error={new Error('Missing path segments!')} />;

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
  interface ScoringProgressEvent {
    percent: number;
  }
  const onScoringProgress = (event: ScoringProgressEvent) => {
    console.log('pace noted progress: ' + event.percent);
    setProgressPercent(event.percent);
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
              <ProcessingProgress progressPercent={progressPercent} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-slate-700">
          <div className="flex h-2/3 w-2/3 items-center justify-center rounded-2xl bg-slate-700  shadow-lg">
            <RandomizedCardSet
              key={`${topic}-${collection}-${hand}`}
              topicId={topic}
              collectionId={collection}
              handId={hand}
              onScoringCompleted={onScoringCompleted}
              onScoringProgress={onScoringProgress}
            />
          </div>
        </div>
      </div>
    </>
  );
}
