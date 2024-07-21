
import { useState } from "react";

export default function useExpensive() {
    const [score, setScore] = useState(0);
    let i=0;
    while(i < 1000000000) {
        i++;
    }
    i = 0;
    while(i < 1000000000) {
        i++;
    } 
     i = 0;
    while(i < 1000000000) {
        i++;
    } 
 

    function increaseScore() {
       
        setScore(score+10);
    }

    return {score, increaseScore}
}