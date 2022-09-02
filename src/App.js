import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Memotest from "./components/game/Memotest";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/pokemon" element={<Memotest topicCards = "pokemon"/>}/>
                <Route path="/pawpatrol" element={<Memotest topicCards = "pawpatrol"/>}/>
                <Route path="/dinosaur" element={<Memotest topicCards = "dinosaur"/>}/>
                <Route path="/sonic" element={<Memotest topicCards = "sonic"/>}/>
                <Route path="/toystory" element={<Memotest topicCards = "toystory"/>}/>
            </Routes>
        </div>
    );
}

export default App;
