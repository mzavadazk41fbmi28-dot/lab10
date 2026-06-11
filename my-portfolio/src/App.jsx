import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';

function App() {
    return (

        <BrowserRouter basename="/lab10">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;