import pokemonCover from "../images/pokemon/pokemonCover.jpg";
import dinosaurCover from "../images/dinosaurs/dinosaursCover.jpg";
import pawPatrolCover from "../images/pawpatrol/pawPatrolCover.jpg";
import sonicCover from "../images/sonic/sonicCover.jpg";
import toystoryCover from "../images/toystory/toystoryCover.webp";
import carsCover from "../images/cars/carsCover.jpg";
import princessCover from "../images/princess/princessCover.jpg";
import lolCover from "../images/lol/lolCover.jpg";
import marvelCover from "../images/marvel/marvelCover.jpg";
import frozenCover from "../images/frozen/frozenCover.jpg";

const topicObject = [
    {
        name: "pokemon",
        url: "/pokemon",
        level: "easy",
        cover: pokemonCover,
    },
    {
        name: "pawpatrol",
        url: "/pawpatrol",
        level: "medium",
        cover: pawPatrolCover,
    },
    {
        name: "dinosaur",
        url: "/dinosaur",
        level: "hard",
        cover: dinosaurCover,
    },
    {
        name: "frozen",
        url: "/frozen",
        level: "easy",
        cover: frozenCover,
    },
    {
        name: "princess",
        url: "/princess",
        level: "hard",
        cover: princessCover,
    },
    {
        name: "sonic",
        url: "/sonic",
        level: "medium",
        cover: sonicCover,
    },
    {
        name: "toystory",
        url: "/toystory",
        level: "easy",
        cover: toystoryCover,
    },
    {
        name: "cars",
        url: "/cars",
        level: "medium",
        cover: carsCover,
    },
    {
        name: "lol",
        url: "/lol",
        level: "hard",
        cover: lolCover,
    },
    {
        name: "marvel",
        url: "/marvel",
        level: "easy",
        cover: marvelCover,
    },
];

export default topicObject;