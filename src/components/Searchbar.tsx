export default function Searchbar() {
  return (
    <div className="mb-3 xl:w-96">
          <div className="relative flex ml-10 w-full">
              <input
                    type="search"
                    className="relative m-0 block flex-auto border-b border-fuchsia-400 border-solid bg-transparent bg-clip-padding px-3 text-base font-normal text-fuchsia-400 focus:outline-none"
                    placeholder="Search product names" />

              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-fuchsia-400"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>
      </div>
  );
}