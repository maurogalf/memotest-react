import React from "react";
import useMemotestGameState from "./useMemotestGameState";
import cx from "classnames";
import ReactCardFlip from "react-card-flip";
import topicPokemon from "../../topics/pokemonImages";
import topicPawPatrol from "../../topics/pawPatrolImages";
import topicDinosaur from "../../topics/dinosaurs";
import topicSonic from "../../topics/sonic";
import topicToyStory from "../../topics/toyStory";


const WinerCard = ({ show, restartGame, clickCount }) => {
    return (
        <div className={cx("win-card", { "win-card-hidden": !show })}>
            <span>The game has ended!</span>
            <span>You needed {clickCount} to finish.</span>
            <button className="btn-play-again" onClick={restartGame}>
                Play again?
            </button>
        </div>
    );
};


const Carta = ({ name, src, flipped, onClick, flipedCard, topic }) => {
    return (
        <div className="memotest-card">
            <ReactCardFlip flipSpeedFrontToBack={0.3} flipSpeedBackToFront={0.3} isFlipped={!flipped}>
                <div className="memotest-img-wrapper">
                    <img className={`memotest-img ${topic}`} src={src} alt={name} />
                </div>

                <div onClick={onClick} className="memotest-img-wrapper">
                    <img className={`memotest-img ${topic}`} src={flipedCard} alt={name} />
                </div>
            </ReactCardFlip>
        </div>
    );
};


const Memotest = ( {topicCards} ) => {
    let cards = [];
    if(topicCards === "pokemon") {
        cards = topicPokemon;
    } else if(topicCards === "pawpatrol") {
        cards = topicPawPatrol;
    } else if(topicCards === "dinosaur") {
        cards = topicDinosaur;
    } else if(topicCards === "sonic") {
        cards = topicSonic;
    } else if(topicCards === "toystory") {
        cards = topicToyStory;
    }

    const gameCards = cards.cards

    const {
        initialCards,
        flipped,
        onClickCard,
        wonPairs,
        gameEnded,
        restartGame,
        clickCount
    } = useMemotestGameState( gameCards );
    return (
        <div className="memotest-wrapper">
            <WinerCard show={gameEnded} restartGame={restartGame} clickCount= { clickCount } />
            {initialCards.map(({ src, name, key }) => (
                <Carta
                    topic={topicCards}
                    key={key}
                    src={src}
                    name={name}
                    flipedCard={cards.flipCard}
                    onClick={() => onClickCard(key)}
                    flipped={wonPairs.includes(name) || flipped.includes(key)}
                />
            ))}
        </div>
    );
};

export default Memotest;
