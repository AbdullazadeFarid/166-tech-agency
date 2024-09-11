


import { GrFormNext } from 'react-icons/gr';
import { IoMdHome } from 'react-icons/io';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import "./navlayout.css";
import { useContext } from 'react';
import { SearchContext } from '../../context/context';
// import { useLocation } from 'react-router-dom';


const Navlayout = () => {
  const { nav, setNav } = useContext(SearchContext);

  const location = useLocation();
const pathWithoutSlash = location.pathname.substring(1);


  return (
    <>
      <div className='navlayout'>
        <div className="cont">
          <div className='navlayout_head'>
            <Link className='link' to="./">
            <IoMdHome />
            </Link>
            <GrFormNext />
            <h3>{pathWithoutSlash}</h3>
          </div>

          <nav className='navlayout_nav'>
            <ul className='navlayout_nav_navigation'>
              <li>
                <NavLink
                  onClick={() => setNav("Haqqımızda")} // Burada "Haaqimizda" əvəzinə "Haqqımızda" istifadə edin
                  to="/about"
                  className={({ isActive }) => `navlayout_nav_navigation_items ${isActive ? 'active' : ''}`}
                >
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <NavLink
                 onClick={() => setNav("Komandamız")}
                  to="/team"
                  className={({ isActive }) => `navlayout_nav_navigation_items ${isActive ? 'active' : ''}`}
                >
                  Komandamız
                </NavLink>
              </li>
              <li>
                <NavLink
                 onClick={() => setNav(" Mediada biz")}
                  to="/media"
                  className={({ isActive }) => `navlayout_nav_navigation_items ${isActive ? 'active' : ''}`}
                >
                  Mediada biz
                </NavLink>
              </li>
              <li className="navlayout_nav_navigation_items">Blog</li>
              <li className="navlayout_nav_navigation_items">Tez-tez verilən suallar</li>
              <li className="navlayout_nav_navigation_items">Qalereya</li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navlayout;
