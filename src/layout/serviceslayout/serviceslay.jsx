


import React, { useState } from 'react';
import './serviceslay.css';
import { Link, Outlet } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import { IoMdHome } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";



const Serviceslay = () => {
  const [activeService, setActiveService] = useState(null);
  const stateClick = (value) => {
    setActiveService(activeService === value ? null : value);
    console.log(value);
  };

  return (
    <div className='cont'>
        <div className='service_lay'>

        <Link className='link'  to="/">
            <IoMdHome />
        </Link>

        <GrFormNext />
        <h3>Transport</h3>
        </div>


<div className='flex'>

      <div className='services_asside'>
        <ul className='services_asside_nav'>

        <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont yellow'>
              <h2 className='services_asside_nav_item_cont_items'>Transport</h2>
            </div>
          </li>


          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Loqistika</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Yükdaşıma</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className={`services_asside_nav_item_cont ${activeService === "xalcayuma" ? "backgr":""}`} onClick={() => stateClick("xalcayuma")} >
              <h2 className='services_asside_nav_item_cont_items'>Xalçayuma</h2>
              <FaAngleDown className={`${activeService === "xalcayuma" ? "rotate":""}`} />
            </div>

            {activeService === "xalcayuma" && (
              <ul className='services_asside_nav_item_subtitle'>
                <li className="services_asside_nav_item_subtitle_item">Ev heyvanlarının və digər qoxuların aradan qaldırılması</li>
                <li className="services_asside_nav_item_subtitle_item">Korporativ xidmət</li>
                <li className="services_asside_nav_item_subtitle_item">Sintefon yorğan, yastıq və örtüklərin yuyulması</li>
                <li className="services_asside_nav_item_subtitle_item">Ədyal, pled və örtüklərin yuyulması</li>
              </ul>
            )}
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Təmizlik xidməti</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Evakuasiya</h2>
              <FaAngleDown />
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Anbar xidməti</h2>
              <FaAngleDown />
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>İşçi qüvvəsi xidməti</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Usta xidməti</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>İşçi qüvvəsi xidməti</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>HVAC</h2>
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Sanitariya xidməti</h2>
              <FaAngleDown />
            </div>
          </li>

          <li className="services_asside_nav_item">
            <div className='services_asside_nav_item_cont'>
              <h2 className='services_asside_nav_item_cont_items'>Karqo xidməti</h2>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>

      </div>

    </div>
  );
};

export default Serviceslay;
