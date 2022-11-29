import { Link } from 'react-router-dom';

export function ExperimentalPage() {
  return (
    <>
      {/* <div class="w-80 bg-purple-300">Centered using Tailwind Grid</div>
      <div class="grid h-screen w-screen place-items-center bg-green-300">
        Centered using Tailwind Grid
      </div> */}

      <br />
      <Link to="/">GO HOME</Link>

      {/* <div class=" flex flex h-screen w-screen flex-col place-items-center bg-purple-300 md:flex-row">
        <div class="hidden  h-14 w-14 flex-none bg-green-300 md:inline-flex">
          01
        </div>
        <div class=" h-14 grow bg-blue-300">02</div>
        <div class=" h-14 w-14 flex-none bg-red-300">03</div>
      </div> */}
    </>
  );
  // <h1>Tests here</h1>;
}
