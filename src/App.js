import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import About from './pages/About'
import ProductsPage from './pages/ProductsPage.js';
import './App.css';

function App() {
    return (
        <Router>
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={< Home />}/>
                <Route path="/about" element={< About />}/>
                <Route path="/products" element={< ProductsPage />}/>
            </Routes>
        </div>
        </Router>
    );
    }

export default App;
