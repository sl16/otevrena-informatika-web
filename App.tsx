
import React from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MaterialsList from './pages/MaterialsList';
import MaterialDetail from './pages/MaterialDetail';
import AppsList from './pages/AppsList';
import AppDetail from './pages/AppDetail';
import AppRunner from './pages/AppRunner';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import GetInvolved from './pages/GetInvolved';
import Curriculum from './pages/Curriculum';
import AuthorDetail from './pages/AuthorDetail';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // Keep native anchor behavior when navigating to hash fragments.
    if (hash) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  // Use MemoryRouter in blob/preview environments to avoid "Access denied" errors,
  // but use BrowserRouter for the actual deployment on GitHub Pages with custom domain.
  const isBlob = window.location.protocol === 'blob:';
  const Router = isBlob ? MemoryRouter : BrowserRouter;

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/materialy" element={<MaterialsList />} />
          <Route path="/materialy/:id" element={<MaterialDetail />} />
          <Route path="/tematicke-plany" element={<Curriculum />} />
          <Route path="/aplikace" element={<AppsList />} />
          <Route path="/aplikace/:id" element={<AppDetail />} />
          <Route path="/app/:id" element={<AppRunner />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/zapojte-se" element={<GetInvolved />} />
          <Route path="/autori/:id" element={<AuthorDetail />} />
          <Route path="*" element={<div className="py-24 text-center"><h1 className="text-4xl font-bold">404 - Nenalezeno</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
