import {Routes, Route} from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/main" element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
