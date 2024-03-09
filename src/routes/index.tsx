import { Routes, BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './public';
import PrivateRoutes from './private';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        {PrivateRoutes}
        {PublicRoutes}
      </Routes>
    </Router>
  );
};

export default AllRoutes;
