import React from "react";
import { Link } from "react-router-dom";
import TopicCover from "./TopicCover";
import pokemonCover from "../images/pokemon/pokemonCover.jpg";
import dinosaurCover from "../images/dinosaurs/dinosaursCover.jpg";
import pawPatrolCover from "../images/pawpatrol/pawPatrolCover.jpg";
import sonicCover from "../images/sonic/sonicCover.jpg";
import toystoryCover from "../images/toystory/toystoryCover.webp";

const Home = () => {
    return (
        <div className="container">
            <div className="cover-wrapper">
                <Link to={"/pokemon"}>
                    <TopicCover label={"easy"} src={pokemonCover} />
                </Link>
                <Link to={"/pawpatrol"}>
                    <TopicCover label={"medium"}  src={pawPatrolCover} />
                </Link>
                <Link to={"/dinosaur"}>
                    <TopicCover label={"hard"}  src={dinosaurCover} />
                </Link>
                <Link to={"/sonic"}>
                    <TopicCover label={"medium"}  src={sonicCover} />
                </Link>
                <Link to={"/toystory"}>
                    <TopicCover label={"easy"}  src={toystoryCover} />
                </Link>
            </div>
        </div>
    );
};

export default Home;
