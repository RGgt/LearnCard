interface ProcessingProgressProps {
  progressPercent: number;
}
export function ProcessingProgress(props: ProcessingProgressProps) {
  const { progressPercent } = props;
  return (
    <progress
      className="progress progress-primary w-full"
      value={progressPercent.toString()}
      max="100"
    />
  );
}
