import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Layout } from "./layouts/Layout.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import CartProvider from './context/CartProvider.jsx';
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop />
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>



)
