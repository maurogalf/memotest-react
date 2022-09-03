import React from "react";
import { Link } from "react-router-dom";
import TopicCover from "./TopicCover";
import topicObject from "../topics/topicObject.js";

const Home = () => {
    return (
        <div className="container">
            <div className="cover-wrapper">
                {topicObject.map((topic) => {
                    return (
                        <Link key={topic.url} to={topic.url}>
                            <TopicCover label={topic.level} src={topic.cover} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
