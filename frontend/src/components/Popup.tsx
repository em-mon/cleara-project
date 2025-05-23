import { useEffect, useState } from "react";
import Grow from "@mui/material/Grow";
import Searchbar from "./Searchbar";
import Results from "./Results";

type PopupAct = {
  onClose: () => void;
};

export default function Popup({ onClose }: PopupAct) {
    const [visible, setVisible] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const resultsOpen = () => {
        setVisible(false);
        
        setTimeout(() => {
            setShowResults(true); 
        }, 700);
    }

    const resultsClose = () => {
        setShowResults(false);
        setVisible(true);
    }

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));
    }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <Grow in={visible} timeout={600}>
            <div className="inset-shadow-sm inset-shadow-indigo-600 flex border-4 border-violet-200 bg-white p-6 rounded-lg shadow-lg mr-8 w-1/2 h-1/2 transition-all duration-300 transform scale-100">
                <button
                onClick={onClose}
                className="inset-shadow-sm inset-shadow-purple-400 bg-purple-50 w-6 h-6 rounded-full bg-[url('./media/closeButton.png')] bg-contain bg-no-repeat bg-center float-left mt-1"
                ></button>
                <Searchbar />
            </div>
        </Grow>
        <Grow in={visible} timeout={900} style={{ transformOrigin: "0 0 0" }}>
            <div className="inset-shadow-sm inset-shadow-indigo-600 relative justify-center items-center border-4 border-violet-200 bg-white p-6 rounded-lg shadow-lg ml-8 h-1/2 w-1/4 transition-all duration-300 transform scale-100">
                <p className="mt-2 border-b border-fuchsia-400 border-solid bg-transparent font-normal text-fuchsia-400">
                    Current list of products:
                </p>
                <button onClick={resultsOpen} className="inset-shadow-sm inset-shadow-fuchsia-400 absolute px-8 rounded-lg text-fuchsia-700 left-1/2 transform -translate-x-1/2 bottom-3 bg-fuchsia-100">Enter</button>
            </div>
        </Grow>

        {showResults && <Results resultsClose={resultsClose}/>}
    </div>
  );
}