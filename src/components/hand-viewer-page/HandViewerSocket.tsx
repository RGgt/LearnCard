import _ from 'lodash';

import useFetch from '../../hooks/useFetch';
import { LoadingSkeleton } from './LoadingSkeleton';
import { ErrorView } from './ErrorView';
import { HandSlider } from './HandSlider';

interface HandViewerSocketProps {
  topicId: string;
  collectionId: string;
  handId: string;
  onScoringCompleted: () => void;
}
interface HandCardData {
  cardId: string;
  avers: string;
  revers: string;
}

export function HandViewerSocket(props: HandViewerSocketProps) {
  const { topicId, collectionId, handId, onScoringCompleted } = props;
  const url = `decks/${topicId}/${collectionId}/${handId}.json`;
  const { data, error } = useFetch<HandCardData[]>(url);
  if (error) return <ErrorView error={error} />;
  if (!data) return <LoadingSkeleton />;
  if (!data || !data.length)
    return <ErrorView error={new Error('Empty list!')} />;
  const allCards = _.shuffle(data);
  const allScores = allCards.map((x) => {
    return { cardId: x.cardId, score: -1 };
  });

  return (
    <HandSlider
      allCards={allCards}
      allScores={allScores}
      onScoringCompleted={onScoringCompleted}
      key={Math.random().toString()}
    />
  );
}
