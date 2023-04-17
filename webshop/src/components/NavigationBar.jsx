import { Link } from 'react-router-dom';

import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            </Nav>
            <div style={{"color": "white"}}>{cartSum} €</div>
            <img className="lang" src="/english.png" onClick={() => changeLang("en")} alt="" />
            <img className="lang"  src="/estonian.png" onClick={() => changeLang("ee")} alt="" />
          </Container>
      </Navbar>
  )
}

export default NavigationBar