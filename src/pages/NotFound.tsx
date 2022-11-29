import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      {' '}
      <h1>Content not found</h1>
      <Link to="/">GO HOME</Link>
    </>
  );
}
