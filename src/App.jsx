import { useState } from 'react';
import { COLORS } from './theme';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Suppliers from './pages/Suppliers';

export default function App() {
  const [page, setPage] = useState('dashboard');

  const pages = {
    dashboard: <Dashboard />,
    products: <Products />,
    categories: <Categories />,
    suppliers: <Suppliers />,
  };

  return (
    <div dir="rtl" style={{ display: 'flex', minHeight: '100vh', background: COLORS.bg, color: COLORS.text, fontFamily: "'Vazirmatn', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        input::placeholder { color: ${COLORS.text3}; }
      `}</style>

      <Sidebar page={page} setPage={setPage} />

      <div style={{ flex: 1, padding: '2rem 2.2rem', overflowY: 'auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>{pages[page]}</div>
      </div>
    </div>
  );
}
