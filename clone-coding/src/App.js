import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/main" element={<MainPage />}/>
    </Routes>
  );
}

export default App;