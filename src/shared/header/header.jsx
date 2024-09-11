import React, { useState } from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";


import Logo from "../../assets/icon/logo.svg";
import "./header.css"
import { Link } from 'react-router-dom';



const Header = () => {



  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };


  const [language,setLanguage] = useState(false)
  const changeLanguage=()=>{
    setLanguage(!language)
  }

    const [burger,setBurger]=useState(false)
    const changeBurger=()=>{
      setBurger(!burger)
      }

const [selectlang , setSelectlang]=useState("En")

  return (

    <>
<header className={`head ${burger ? "active" : ""}`}>

    <div className='cont'>


      <div className='head_header'>


          <div className='head_header_left'>
          <span  className={`head_header_left_item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                 Fərdi Müştərilər
         </span>

         <span className={`head_header_left_item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                 Korporativ Müştərilər
         </span>
          </div>


          <div className='head_header_right'>

              <span className='head_header_right_payment'>
                   <CiCreditCard1 />
                   <h3>Onlayn ödəniş</h3>
              </span>


            <span onClick={changeLanguage} className='head_header_right_language'>
                 <span className='head_header_right_language_items'>
                     <h3 onClick={()=>setSelectlang("En")}>{selectlang}</h3>
                     <FaAngleDown className={`icon ${language ? "rotate" : ""}`} />

               </span>
                     {
                      language?
                     <div className='head_header_right_language_add'>
                        <h3 onClick={()=>setSelectlang("Az")}>Az</h3>
                         <h3 onClick={()=>setSelectlang("Ru")}>Ru</h3>
                         <h3 onClick={()=>setSelectlang("En")}>En</h3>

                     </div>
                   :""
               }

           </span>




         </div>

         <div onClick={changeBurger} className={`burger_menu ${burger ? "open" : ""}`}>
               <div className='br top'></div>
               <div className='br beetwen'></div>
               <div className='br bottom'></div>
          </div>



      </div>


      <div className={`head_nav ${burger?"active":""}`}>

        <div className='head_nav_logo'>
          <Link to="./">
          <img  src={Logo} alt="" />
          </Link>
        </div>


        <nav className='head_nav_navigation'>
          <form className='head_nav_navigation_form'>

          <CiSearch size="20px" className='search' />

            <input className='head_nav_navigation_form_inp' placeholder='Search' type="text" name="" id="" />


          </form>

          <ul className='head_nav_navigation_items'>
            <li className='head_nav_navigation_items_item'>
              <h4>Əsas səhifə</h4>
            </li>

            <li className='head_nav_navigation_items_item'>
              <h4>Şirkətimiz</h4>
              <FaAngleDown />
            </li>

            <li className='head_nav_navigation_items_item'>
              <h4>Şirkətimiz</h4>
              <FaAngleDown />
            </li>


            <li className='head_nav_navigation_items_item'>
              <h4>Şirkətimiz</h4>
              <FaAngleDown />
            </li>

            <li className='head_nav_navigation_items_item'>
              <h4>Əlaqə</h4>
            </li>



            <li className='head_nav_navigation_items_item_btn'>
              <button className='head_nav_navigation_items_item_btn_button'>
              <FiPhone size="22px" color='white' className='head_nav_navigation_items_item_btn_button_icon' />
              <h2>Book a call</h2>


              </button>
            </li>


          </ul>
        </nav>

      </div>



    <div className='line'>

    </div>
    </div>




  </header>
    </>
  )
}

export default Header