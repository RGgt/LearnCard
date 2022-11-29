export function Tests() {
  return (
    <>
      {/* <div class="w-80 bg-purple-300">Centered using Tailwind Grid</div>
      <div class="grid h-screen w-screen place-items-center bg-green-300">
        Centered using Tailwind Grid
      </div> */}

      <div class="flex space-x-32 bg-red-500">
        <div>
          <a
            class="mr-1.5 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Link with href
          </a>
          <button
            class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            Button with data-bs-target
          </button>

          <div
            class="offcanvas offcanvas-start invisible fixed bottom-0 top-0 left-0 flex w-96 max-w-full flex-col border-none bg-white bg-clip-padding text-gray-700 shadow-sm outline-none transition duration-300 ease-in-out"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header flex items-center justify-between p-4">
              <h5
                class="offcanvas-title mb-0 font-semibold leading-normal"
                id="offcanvasExampleLabel"
              >
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close -my-5 -mr-2 box-content h-4 w-4 rounded-none border-none p-2 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body flex-grow overflow-y-auto bg-green-300 p-4">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class=" flex flex h-screen w-screen flex-col place-items-center bg-purple-300 md:flex-row">
        <div class="hidden  h-14 w-14 flex-none bg-green-300 md:inline-flex">
          01
        </div>
        <div class=" h-14 grow bg-blue-300">02</div>
        <div class=" h-14 w-14 flex-none bg-red-300">03</div>
      </div> */}
    </>
  );
  //<h1>Tests here</h1>;
}
