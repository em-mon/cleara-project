import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

type PopupAct = {
  onClose: () => void;
};

export default function Popup({ onClose }: PopupAct) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div
        className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ${
            visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="flex border-4 border-violet-200 bg-white p-6 rounded-lg shadow-lg mr-8 w-1/2 h-1/2 transition-all duration-300 transform scale-100">
        <button
          onClick={onClose}
          className="bg-purple-50 w-6 h-6 rounded-full bg-[url('./media/closeButton.png')] bg-contain bg-no-repeat bg-center float-left mt-1"
        ></button>
        <Searchbar />
      </div>
      <div className="relative justify-center items-center border-4 border-violet-200 bg-white p-6 rounded-lg shadow-lg ml-8 h-1/2 w-1/4 transition-all duration-300 transform scale-100">
        <p className="mt-2 border-b border-fuchsia-400 border-solid bg-transparent font-normal text-fuchsia-400">
            Current list of products:
        </p>
        <button className="absolute px-8 rounded-lg text-fuchsia-700 left-1/2 transform -translate-x-1/2 bottom-3 bg-fuchsia-100">Enter</button>
      </div>
    </div>
  );
}