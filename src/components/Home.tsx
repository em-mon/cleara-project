import { useState } from "react";
import Popup from "./Popup";

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const onOpen = () => {
        setShowPopup(true);
    }

    const onClose = () => {
        setShowPopup(false);
    }

    return (
    <div className="relative bg-[url('./media/background.png')] bg-cover bg-center h-screen">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className="text-fuchsia-900 mb-4 text-center mb-15 text-4xl w-1/2">
                    Drop your routine. <br></br>We'll spot any bad mixes.
                </p>
                <button  onClick={onOpen} className="inset-shadow-sm inset-shadow-purple-400 rounded-lg bg-purple-50 text-fuchsia-900 px-7 py-3">
                    Get your results now!
                </button>
        </div>

        {showPopup && <Popup onClose={onClose}/>}
    </div>
    );
}