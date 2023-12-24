import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import CardsPage from './components/CardsPage';

function Layout() {
  return <>
    <Navbar />
    <Outlet />
  </>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flashs" element={<CardsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
