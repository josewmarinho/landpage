import { Route, Routes, useLocation } from 'react-router-dom';
import { FloatingCta, Footer, Navbar, ScrollToTop } from '@/components/layout';
import { HomePage } from '@/pages/home/HomePage';
import { PetitionPage } from '@/pages/petition/PetitionPage';

export function App() {
  const { pathname } = useLocation();
  const isPetition = pathname.startsWith('/abaixo-assinado');

  return (
    <>
      <ScrollToTop />
      {!isPetition && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abaixo-assinado" element={<PetitionPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      {!isPetition && <FloatingCta />}
    </>
  );
}
