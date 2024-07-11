import React,{useState} from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import home from '../../img/smart-home.svg'
import user from '../../img/users.svg'
import ticket from '../../img/ticket.svg'
import categories from '../../img/categories.svg'
import transaction from '../../img/transaction.svg'
import brand from '../../img/brand.svg'
import addproduct from '../../img/addproduct.svg'
import productlist from '../../img/productlist.svg'
import manageadmins from '../../img/manageadmins.svg'
import adminroles from '../../img/adminroles.svg'
import logo from '../../img/logo.svg'
import shoppingcart from '../../img/shopping-cart.svg'

const Sidebar = () => {
    const [selected, setSelected] = useState('/');

    const handleSelect = (path) => {
      setSelected(path);
    };


  return (
    <div className="sidebar">
      <div className='sidebar__title'>
        <img src={logo} alt="" />
        <h2>evaly</h2>
      </div>
    <nav>
      <ul>
         <span>MAIN MENU</span>
          <li className={selected === '/dashboard' ? 'selected' : ''} onClick={() => handleSelect('/dashboard')} >
            <Link to="/dashboard">
              <img src={home} alt="" />
              Dashboard
            </Link>
          </li>
          <li className={selected === '/ordermanagement' ? 'selected' : ''} onClick={() => handleSelect('/ordermanagement')}>
            <Link to="/ordermanagement">
              <img src={shoppingcart} alt="" />
              Order Management
            </Link>
          </li>
          <li className={selected === '/customers' ? 'selected' : ''} onClick={() => handleSelect('/customers')}>
            <Link to="/customers">
              <img src={user} alt="" />
              Customers
            </Link></li>
        <li className={selected === '/couponcode' ? 'selected' : ''} onClick={() => handleSelect('/couponcode')}>
          <Link to="/couponcode">
            <img src={ticket} alt="" />
          Coupon Code
          </Link></li>
        <li className={selected === '/categories' ? 'selected' : ''} onClick={() => handleSelect('/categories')}>
          <Link to="/categories">
            <img src={categories} alt="" />
          Categories
          </Link></li>
          <li className={selected === '/transactions' ? 'selected' : ''} onClick={() => handleSelect('/transactions')}>
          <Link to="/transactions">
            <img src={transaction} alt="" />
          Transaction
          </Link></li>
          <li className={selected === '/brand' ? 'selected' : ''} onClick={() => handleSelect('/brand')}>
          <Link to="/brand">
            <img src={brand} alt="" />
          Brand
          </Link></li>
          <span>PRODUCTS</span>
          <li className={selected === '/addproducts' ? 'selected' : ''} onClick={() => handleSelect('/addproducts')}>
          <Link to="/addproducts">
            <img src={addproduct} alt="" />
          Add Products
          </Link></li>
          <li className={selected === '/productlist' ? 'selected' : ''} onClick={() => handleSelect('/productlist')}>
          <Link to="/productlist">
            <img src={productlist} alt="" />
          Product List
          </Link></li>
          <span>ADMIN</span>
          <li className={selected === '/manageadmins' ? 'selected' : ''} onClick={() => handleSelect('/manageadmins')}>
          <Link to="/manageadmins">
            <img src={manageadmins} alt="" />
          Manage Admins
          </Link></li>
          <li className={selected === '/adminroles' ? 'selected' : ''} onClick={() => handleSelect('/adminroles')}>
          <Link to="/adminroles">
            <img src={adminroles} alt="" />
          Admin Roles
          </Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar