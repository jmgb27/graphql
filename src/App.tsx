import { Route, Routes } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";
import CharacterList from "./pages/CharacterList";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/:id" element={<Character />} />
            </Routes>
        </div>
    );
}

export default App;
