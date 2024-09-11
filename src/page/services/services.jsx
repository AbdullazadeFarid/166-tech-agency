import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
import "./services.css"
import { FiPhone } from "react-icons/fi";
import call  from "../../assets/image/call.png";



const Services = () => {
  return (

    <>

    <div className='services'>

        <div className='cont'>

            <div className='services_main'>

                <div className='services_main_tit'>
                    <div className="services_main_tit_left">
                    <h2 className='services_main_tit_left_title'>Transport</h2>
                    <div className='services_main_tit_left_cont'>
                        <div className='services_main_tit_left_cont_container'>

                        <button className='services_main_tit_left_cont_container_btn'>Sifariş ver</button>
                        <span className='services_main_tit_left_cont_container_call'>
                            <FiPhone/>
                            <h4>166</h4>
                        </span>
                        </div>
                        <p className='services_main_tit_left_cont_desc'>Turizm, iş və digər sahələrdə ən rahat, müasir standartlara uyğun və operativ sərnişin daşınma xidmətini 166 Transport təklif edir. 
                            166 Transport xidməti hazırda ölkənin Sprinter icarəsi və turların təşkili üzrə ən qabaqcıl xidmətlərindən biridir. 
                            Peşəkar sürücülərimiz tərəfindən sərnişinlərin bir ünvandan digər ünvana təhlükəsiz daşınmasını təmin edirik.
                        </p>
                    </div>

                    </div>

                    <div className='services_main_tit_right'>
                           <img src={call} alt="" />
                    </div>

                </div>



                <div className='services_main_priority'>
                    <h2>Sprinterlərimizin üstünlük və özəllikləri:</h2>

                    <div className='services_main_priority_cont'>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>


                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                        <div className='services_main_priority_cont_products'>
                            <p>WI-FI sisteminin olması</p>
                        </div>

                    </div>




                </div>


                <div className='services_main_use'>

                    <h2>Sprinterlərdən nə üçün istifadə etmək olar?</h2>

                    <ul className='services_main_use_nav' >

                        <li className="services_main_use_nav_items">Şəhərdaxili sərnişin daşınması </li>
                        <li className="services_main_use_nav_items">Ailəvi, dostlarla və ya iş yoldaşlarınızla birgə  istirahət üçün</li>
                        <li className="services_main_use_nav_items">Toy, yas və digər mərasimlər üçün </li>
                        <li className="services_main_use_nav_items">Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi heyətinin daşınması)</li>
                        <li className="services_main_use_nav_items">Hava limanından turistlərin istənilən ünvana çatdırılması </li>
                        <li className="services_main_use_nav_items">Həftəiçi şirkət işçilərinin daşınması</li>
                        <li className="services_main_use_nav_items">Məktəblilərin və universitet tələbələrinin daşınması</li>
                        <li className="services_main_use_nav_items">Müalicə məqsədilə bölgələrimizə səyahət edən şəxslər</li>
                        <li className="services_main_use_nav_items">Ölkənin dörd bir yanına səfər təşkil edən tur agentləri</li>
                        <li className="services_main_use_nav_items">Zavod, fabrik, bank işçilərinin istirahət və ya iş məqsədilə daşınması </li>
                        <li className="services_main_use_nav_items">Özəl səfərlər üçün sürücü və nəqliyyat vasitəsinin icarəsi</li>

                    </ul>

                </div>

            </div>










        </div>

    </div>

    </>

)
}

export default Services


