import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SurveryLibrary from './pages/SurveyLibrary/SurveryLibrary';

const App: React.FC = () => {
  return (
    <Router>
      <div
        className="flex h-auto bg-gray-100"
        role="application"
      >
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main
            role="main"
            aria-label="Main Content"
          >
            <Routes>
              <Route path="/" element={<SurveryLibrary />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
