import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import './App.css';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import Shops from './pages/global/Shops';
import { ContactUs } from './pages/global/ContactUs';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';
import MaintainCategories from './pages/admin/MaintainCategories';
import NotFound from './pages/global/NotFound';
import SingleProduct from './pages/global/SingleProduct';


function App() {  
  // Firebase üles ---> standartne
  // lisage react-toastify
  // AddProduct.js ---> toote lisamine    refreshiga läheb algusesse tagasi
  // MaintainProducts.js ---> toote kustutamine   .splice()   refreshiga läheb algusesse tagasi
  // Lisada 3,4 keel veel
  // Favicon
  // Muutke rakenduse nimetus
  // Lisage Google Font

  // Bootstrap -- kodusesse projekti (uudised)   0.5a uuesti vaja peale panna, tuleb lihtsalt meelde
  // i18next -- kodusesse projekti (uudised)     0.5a uuesti vaja peale panna, tuleb lihtsalt meelde
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            </Nav>
            <img className="lang" src="/english.png" onClick={() => changeLang("en")} alt="" />
            <img className="lang"  src="/estonian.png" onClick={() => changeLang("ee")} alt="" />
          </Container>
      </Navbar>


       <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// 9 - toimumist varasemalt
// 10 - 29.03 täna
// 11- 31.03 reede
// 12- 03.04 esmaspäev
// 13 - 05.04 ---> 06.04 neljapäev
// 14 - E 10.04
// 15 - N 13.04
// 16 - E 17.04
// 17 - N 20.04
// 18 - N 04.05

// 26.04 <--- allkirjastamiseks päev