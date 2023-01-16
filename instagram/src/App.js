import {Routes, Route} from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import ProfilePage from './Page/ProfilePage';
import RandomFeedPage from './Page/RandomFeedPage';
import DirectMessagePage from './Page/DirectMessagePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/main" element={<MainPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path='/rand' element={<RandomFeedPage/>}/>
      <Route path='/dm' element={<DirectMessagePage/>}/>
    </Routes>
  );
}

export default App;
