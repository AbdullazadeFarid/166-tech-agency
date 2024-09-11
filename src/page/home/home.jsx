


import React, { useEffect, useRef } from 'react';
import './home.css';
import uzbekistan from '../../assets/icon/uzbekistan.png';
import Azerbaijan from '../../assets/icon/Azerbaijan flag.png';
import poland from '../../assets/image/poland.png';


import car from '../../assets/image/image_car.png';
import send from '../../assets/icon/send.png'
import partner from '../../assets/image/partner.png'
import deliver from '../../assets//image/deliver.png'
import a from '../../assets//image/aa.png'
import soyuducu from '../../assets//image/Soyuduculu.png'
import news from '../../assets//image/news.png'
import product from '../../assets//image/Image.png'
import user from '../../assets//image/user.png'
import banner from "../../assets/image/Banner.png"
import map from '../../assets//image/Map.png'
import HomeSwiper from '../../slider/slider';
import { Link } from 'react-router-dom';




const Home = () => {

  const flag = [
    {
      id: 1,
      name: 'poland',
      image: poland,
    },
    {
      id: 2,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },
    {
      id: 3,
      name: 'Uzbekistan',
      image: uzbekistan,
    },
    {
      id: 4,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },
    {
      id: 5,
      name: 'poland',
      image: poland,
    },
    {
      id: 6,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },
    {
      id: 7,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },
    {
      id: 8,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },
    {
      id: 9,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },
    {
      id: 10,
      name: 'Azerbaijan',
      image: Azerbaijan,
    },




  ]



  return (
    <section className='home'>
      <div className='cont'>
        <div className='home_title'>
          <p className='home_title_text'>
            Lorem ipsum dolor sit amet consectetur.
            <span className='home_title_text_before'>Magna</span> tellus nibh lectus congue amet.
          </p>
        </div>

        <div className='home_country'>

        </div>
        <div className='home_country'>

           {flag.map((country) => (
          <div className='home_country_products' key={country.id}>
          <img src={country.image} alt={country.name} />
          <h3 className='home_country_products_count'>{country.name}</h3>
       </div>
  ))}
       </div>





        <div className='home_about'>

          <Link to="/services" className='home_about_services'>
            <h2 className='home_about_services_title'>Xidmətlərimiz</h2>
            <div className='home_about_services_cont'>
              <img className='home_about_services_cont_car' src={car} alt="" />
            <div className='home_about_services_cont_send'>

               <img src={send} alt="" />
             </div>

            </div>

          </Link>

          <div className='home_about_partners' >

            <h2 className='home_about_partners_title'>Partnyorlar</h2>
            <div className='home_about_partners_cont_send'>

                  <img src={send} alt="" />
             </div>


          </div>

          <div className='home_about_aboutus'>

            <Link to="/about" className='home_about_aboutus_top'>
              <h2>Haqqimizda</h2>
              <div className='home_about_aboutus_top_send'>
                <img src={send} alt="" />
              </div>


            </Link>

            <div className='home_about_aboutus_bottom'>
              <h2>Müştəri Rəyləri</h2>
              <div className='home_about_aboutus_bottom_send'>
                <img src={send} alt="" />
              </div>

            </div>
          </div>

        </div>


        <div className='home_desc'>
          <div className='home_desc_left'>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>

          <div className='home_desc_right'>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World</p>
          </div>

        </div>


        <div className='home_info'>
          <div className='home_info_products'>
            <div className='home_info_products_product'>
              <h2>25</h2>
              <p>+</p>
            </div>
            <p>Lorem Ipsum</p>
          </div>

          <div className='home_info_products'>
            <div className='home_info_products_product'>
              <h2>105K</h2>
              <p>+</p>
            </div>
            <p>Lorem Ipsum</p>
          </div>

          <div className='home_info_products'>
            <div className='home_info_products_product'>
              <h2>20</h2>
              <p>+</p>
            </div>
            <p>Lorem Ipsum</p>
          </div>



        </div>

      </div>

        <div className='home_partners'>
          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>

          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>


          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>


          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>


          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>


          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>


          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>


          <div className='home_partners_product'>
            <img src={partner} alt="" />
          </div>






        </div>

<div className='cont'>

        <div className='home_services'>
          <div className='home_services_product'>
            <div className='home_services_product_image'>
              <img src={deliver} alt="" />
            </div>

           <div className='home_services_product_desc'>
            <h2>Logistika</h2>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>

           </div>

          <img className='home_services_product_a' src={a} alt="" />
          </div>

          <div className='home_services_product'>
            <div className='home_services_product_image'>
              <img src={deliver} alt="" />
            </div>

           <div className='home_services_product_desc'>
            <h2>Logistika</h2>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>

           </div>

           <img className='home_services_product_a' src={a} alt="" />
           </div>

          <div className='home_services_product'>
            <div className='home_services_product_image'>
              <img src={deliver} alt="" />
            </div>

           <div className='home_services_product_desc'>
            <h2>Logistika</h2>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>

           </div>

           <img className='home_services_product_a' src={a} alt="" />
           </div>

          <div className='home_services_product'>
            <div className='home_services_product_image'>
              <img src={deliver} alt="" />
            </div>

           <div className='home_services_product_desc'>
            <h2>Logistika</h2>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>

           </div>

           <img className='home_services_product_a' src={a} alt="" />
           </div>

          <div className='home_services_product'>
            <div className='home_services_product_image'>
              <img src={deliver} alt="" />
            </div>

           <div className='home_services_product_desc'>
            <h2>Logistika</h2>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>

           </div>

           <img className='home_services_product_a' src={a} alt="" />
           </div>

          <div className='home_services_product'>
            <div className='home_services_product_image'>
              <img src={deliver} alt="" />
            </div>

           <div className='home_services_product_desc'>
            <h2>Logistika</h2>
            <p>A videoconference was held with the participation of the acting chairman of the Customs Cooperation Council of the World...</p>

           </div>

           <img className='home_services_product_a' src={a} alt="" />
           </div>


        </div>



       <div className='home_autopark'>

        <div className='home_autopark_cont'>

          <div className='home_autopark_cont_product'>
            <h2>Soyuduculu</h2>
            <p>5.1 metr / 5 ton</p>

            <div>
            <img src={soyuducu} alt="" />
            </div>
          </div>



          <div className='home_autopark_cont_product'>
            <h2>Soyuduculu</h2>
            <p>5.1 metr / 5 ton</p>

            <div>
            <img src={soyuducu} alt="" />
            </div>
          </div>



          <div className='home_autopark_cont_product'>
            <h2>Soyuduculu</h2>
            <p>5.1 metr / 5 ton</p>

            <div>
            <img src={soyuducu} alt="" />
            </div>
          </div>




          <div className='home_autopark_cont_product'>
            <h2>Soyuduculu</h2>
            <p>5.1 metr / 5 ton</p>

            <div>
            <img src={soyuducu} alt="" />
            </div>

          </div>


          <div className='home_autopark_cont_product'>
            <h2>Soyuduculu</h2>
            <p>5.1 metr / 5 ton</p>

            <div>
            <img src={soyuducu} alt="" />
            </div>

          </div>


          <div className='home_autopark_cont_product'>
            <h2>Soyuduculu</h2>
            <p>5.1 metr / 5 ton</p>

            <div>
            <img src={soyuducu} alt="" />
            </div>

          </div>




      </div>











        </div>



        <div className='home_media'>
            <div className="home_media_tit">
            <h2 className='home_media_tit_title'>Mediada biz</h2>
            <p className='home_media_tit_desc'>Hamısına bax</p>
            </div>

          <div className='home_media_cont'>
            <div className='home_media_cont_img'>
               <img src={news} alt="" />
            </div>

            <div className='home_media_products'>
              <div className="home_media_products_product">

                <div className='home_media_products_product_top'>
                    <img src={product} alt="" />
                </div>

                <div className='home_media_products_product_bottom'>
                  <p className='home_media_products_product_bottom_date'>17 June 2021</p>
                  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
                  <p className='home_media_products_product_bottom_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>

                </div>

              </div>


              <div className="home_media_products_product">

<div className='home_media_products_product_top'>
    <img src={product} alt="" />
</div>

<div className='home_media_products_product_bottom'>
  <p className='home_media_products_product_bottom_date'>17 June 2021</p>
  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
  <p className='home_media_products_product_bottom_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>

</div>

</div>



<div className="home_media_products_product">

<div className='home_media_products_product_top'>
    <img src={product} alt="" />
</div>

<div className='home_media_products_product_bottom'>
  <p className='home_media_products_product_bottom_date'>17 June 2021</p>
  <h3>Lorem ipsum dolor sit amet consectetur?</h3>
  <p className='home_media_products_product_bottom_desc'>Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.</p>

</div>

</div>





            </div>






          </div>

        </div>


        <div className='home_comments'>

          <div className='home_comments_left'>
            <h2 className='home_comments_left_title'>Müştəri rəyləri</h2>
            <p className='home_comments_left_desc'>Lorem Ipsum Dolor Sit Amet Consectetur. Magna Tellus Nibh Lectus Congue Amet. </p>
          </div>

          <div className='home_comments_right'>
            <h3 className='home_comments_right_total'>Total Reviews</h3>
            <p className='home_comments_right_num'>122 K</p>
          </div>

        </div>

        <HomeSwiper/>

        <div className='home_map'>
  <h2>Fəaliyyət göstərdiyimiz ölkələr</h2>
  <div className='home_map_item'>
    <img src={map} alt="Map image" />
  </div>
       </div>


       <div className='home_banner'>
        <img src={banner} alt="" />

       </div>


    </div>








    </section>
  );
};

export default Home;
