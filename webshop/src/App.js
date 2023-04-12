import { Route, Routes } from 'react-router-dom';

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
import NavigationBar from './components/NavigationBar';


function App() {  

  return (
    <div className="App">
       <NavigationBar />

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

  // PROOVITÖID
  // 50% - 50% vestlus
  // Väga rasked, kui on pool lahendatud, võib juba tööle saada

  // Lõpuni lahendatav

  // Raskemast kergemani
  // Kes kontrollivad proovitöid? Kogenud arendajad


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