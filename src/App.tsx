import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Path } from './paths';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={Path.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
