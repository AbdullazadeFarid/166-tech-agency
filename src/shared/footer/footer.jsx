import React from 'react'
import "./footer.css"
import { GrLinkNext } from "react-icons/gr";
import fb from "../../assets/icon/fb.svg";


const Footer = () => {
  return (

    <>

    <footer className='footer'>
        <div className="cont">

            <div className="footer_nav">

                <ul className='footer_nav_items'>
                    <li className='footer_nav_items_item'>Xidmətlər</li>
                    <li className='footer_nav_items_item'>Transport</li>
                    <li className='footer_nav_items_item'>Yükdaşıma</li>
                    <li className='footer_nav_items_item'>Xalça yuma</li>
                    <li className='footer_nav_items_item'>Karqo xidməti</li>
                    <li className='footer_nav_items_all'>
                        <h2>Hamısına bax</h2>
                        <GrLinkNext />


                    </li>
                </ul>

                <ul className='footer_nav_items'>
                    <li className='footer_nav_items_item'>Faydalı linklər</li>
                    <li className='footer_nav_items_item'>Bizim komanda</li>
                    <li className='footer_nav_items_item'>Mediada biz</li>
                    <li className='footer_nav_items_item'>Bloq</li>
                    <li className='footer_nav_items_item'>Tez-tez verilən suallar</li>
                    <li className='footer_nav_items_item'>Qalereya bax </li>
                </ul>

                <ul className='footer_nav_items'>
                    <li className='footer_nav_items_item'>Əlaqə</li>
                    <li className='footer_nav_items_item'>Ünvan : Yeni Həyat plaza 55 Zərifə Əliyeva, Bakı, Azərbaycan</li>
                    <li className='footer_nav_items_item'>Əlaqə nömrəsi : +994 (50) 253 46 16</li>
                    <li className='footer_nav_items_item'>Elektron poçt : info@166.az</li>
                    <li className='footer_nav_items_icons'>
                        <img src={fb} alt="fb_logo"/>
                        <img src={fb} alt="insta_logo"/>
                        <img src={fb} alt="youtube_logo"/>
                        <img src={fb} alt="linkedin_logo"/>


                    </li>

                </ul>

            </div>

        </div>
    </footer>

    </>
  )
}

export default Footer