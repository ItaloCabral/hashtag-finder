import { About, Home } from 'pages';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

export const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}> {/* Essa propriedade será útil quando subirmos para o GH-Pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
