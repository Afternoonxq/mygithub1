import './App.css';
import Navber from './components/Navber';
import Carousel from './pages/Carousel';
import Pagepic from './text/Pagepic';
import Reserve from './page2/Reserve';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navber />

        {/* Define Routes */}
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Pagepic />
              </>
            }
          />

          {/* Reserve Page */}
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
