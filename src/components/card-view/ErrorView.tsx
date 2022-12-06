interface ErrorViewProps {
  error: Error;
}
export function ErrorView(props: ErrorViewProps) {
  const { error } = props;
  return (
    <p>
      Error: <strong>{error.message}</strong>
    </p>
  );
}
