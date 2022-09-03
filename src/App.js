import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Memotest from "./components/game/Memotest";
import NavBar from "./components/NavBar";
import topicObject from "./topics/topicObject";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {topicObject.map( ruta => <Route key={ruta.url} path={ruta.url} element={<Memotest topicCards = {ruta.name}/>}/>)}
            </Routes>
        </div>
    );
}

export default App;
