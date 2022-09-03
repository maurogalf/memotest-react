import { useState, useRef } from "react";


const useMemotestGameState = (gameCards) => {
    const createShuffleCards = () => {
    let shuffledCards = [];
    if (gameCards.length === 20) {
        shuffledCards = gameCards;
    } else {
        gameCards.map(({ name, src }) => {
            shuffledCards.push({
                name,
                src,
                key: `${name}-1`,
            });
            shuffledCards.push({
                name,
                src,
                key: `${name}-2`,
            });
        });
    }
    shuffledCards.sort(() => 0.5 - Math.random());
    return shuffledCards;
};

const [initialCards, setInitialCards] = useState(createShuffleCards);
const [flipped, setFlipped] = useState([]);
const [wonPairs, setWonPairs] = useState([]);
const timeoutRef = useRef();
const gameEnded = wonPairs.length === initialCards.length / 2;
const [clickCount , setClickCount] = useState(0);

    const onClickCard = key => {
        setClickCount(clickCount + 1);
        if (!flipped.includes(key) && flipped.length < 2) {
            setFlipped([...flipped, key]);
            if(flipped.length + 1 === 2 ) {
                let firstCard = flipped[0].split("-")
                let secondCard = key.split("-");
                if(firstCard[0] === secondCard[0]){
                    setWonPairs([...wonPairs, firstCard[0]]);
                    setFlipped([]);
                } else {
                timeoutRef.current = setTimeout(()=> {
                    setFlipped([]);
                }, 1000);
            }
            }
        } else if ( !flipped.includes(key) && flipped.length === 2 ){
            clearTimeout(timeoutRef.current);
            setFlipped([key])
        }
    };

    const restartGame = () => {
        setWonPairs([]);
        setInitialCards(createShuffleCards());
        setClickCount(0);
    }

    return { initialCards, flipped, onClickCard, wonPairs, gameEnded, restartGame, clickCount };
};

export default useMemotestGameState;
