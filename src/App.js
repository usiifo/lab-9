import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './components/Home';
import RecipeDetails from './components/RescipesDetails'


function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
