import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Lookbook from './pages/Lookbook';
import Library from './pages/Library';
import Collaboration from './pages/Collaboration';
import Store from './pages/Store';
import About from './pages/About';
import CGV from './pages/CGV';
import Dealer from './pages/Dealer';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductsDetails from './pages/ProductsDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/library" element={<Library />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/dealer" element={<Dealer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
