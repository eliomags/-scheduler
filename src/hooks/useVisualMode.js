import { useState } from "react";

export default function useVisualMode (initial) {
    const [mode, setMode] = useState(initial);
    const [history, setHistory] = useState([initial]);
    
    function transition(newMode, replace=false) {
        setMode(newMode);
        // setHistory( replace===true ? [...history.slice(0, -1), newMode] : [...history, newMode]);
        setHistory(prev => replace===true ? [...prev.slice(0, -1), newMode] : [...prev, newMode]);
      }

    function back() {
        if (history.length > 1) {
        setMode(history[history.length - 2]);
        setHistory(
            history.slice(0, -1));
        }
    }
    
      return { mode, transition, back, history };
}