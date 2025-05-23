import { useEffect, useState } from "react";
import Grow from "@mui/material/Grow";

type ResultsAct = {
    resultsClose: () => void;
}

export default function Results({ resultsClose }: ResultsAct) {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));
    }, []);
    
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <Grow in={visible} timeout={600}>
                <div className="inset-shadow-sm inset-shadow-indigo-600 flex border-4 border-violet-200 bg-white p-6 rounded-lg shadow-lg mr-8 w-1/2 h-1/2 transition-all duration-300 transform scale-100">
                    <button
                        onClick={resultsClose}
                        className="inset-shadow-sm inset-shadow-purple-400 bg-purple-50 rounded w-20 h-8 text-black float-left mt-1"
                    >
                        Go back
                    </button>
                </div>
            </Grow>
        </div>
    );
}