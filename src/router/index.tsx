import { About, Home } from 'pages';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
