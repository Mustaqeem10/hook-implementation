import LandingPage from "./routes/landing-page";
import ProductList from "./routes/product-list"
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar";
import NotFound from "./routes/404";

const Layout = React.lazy(() => import('./routes/layout'))

function App() {
  return (
    <>
    <Navbar />
    <Layout />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
