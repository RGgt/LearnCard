import _ from 'lodash';

import useFetch from '../../hooks/useFetch';
import { LoadingSkeleton } from '../card-view/LoadingSkeleton';
import { SetCardViewer } from './SetCardViewer';
import { ErrorView } from '../card-view/ErrorView';

interface RandomizedCardSetProps {
  topicId: string;
  collectionId: string;
  handId: string;
  onScoringCompleted: () => void;
  onScoringProgress: (event: ScoringProgressEvent) => void;
}
interface ScoringProgressEvent {
  percent: number;
}
interface HandCardData {
  cardId: string;
  avers: string;
  revers: string;
}

export function RandomizedCardSet(props: RandomizedCardSetProps) {
  const {
    topicId,
    collectionId,
    handId,
    onScoringCompleted,
    onScoringProgress,
  } = props;
  if (!topicId || !collectionId || !handId)
    return <ErrorView error={new Error('Missing path segments!')} />;
  const FETCH_URL = `decks/${topicId}/${collectionId}/${handId}.json`;
  const { data, error } = useFetch<HandCardData[]>(FETCH_URL);
  if (error) return <ErrorView error={error} />;
  if (!data) return <LoadingSkeleton />;
  if (!data || !data.length)
    return <ErrorView error={new Error('Empty list!')} />;
  const allCards = _.shuffle(data);
  const allScores = allCards.map((x) => {
    return { cardId: x.cardId, score: -1 };
  });

  return (
    <SetCardViewer
      allCards={allCards}
      allScores={allScores}
      onScoringCompleted={onScoringCompleted}
      onScoringProgress={onScoringProgress}
      key={Math.random().toString()}
    />
  );
}
