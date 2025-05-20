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
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="border-3 border-green-100 bg-white p-6 rounded-lg shadow-lg mr-8 w-1/2 h-1/2 transition-all duration-300 transform scale-100">
        <button
          onClick={onClose}
          className="w-6 h-6 rounded-full bg-[url('./media/closeButton.png')] bg-contain bg-no-repeat bg-center float-left mt-1"
        ></button>
        <Searchbar />
      </div>
      <div className="border-3 border-green-100 bg-white p-6 rounded-lg shadow-lg ml-8 h-1/2 w-1/4 transition-all duration-300 transform scale-100">
      </div>
    </div>
  );
}