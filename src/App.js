import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Submit from './submit/submit';
import ComingSoon from './comingsoon/comingsoon';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
