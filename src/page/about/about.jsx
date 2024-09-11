import React, { useState } from 'react'
import about from '../../assets/image/about.img.png'
import "./about.css"
import timer from '../../assets/image/timer.png'
import Homeswiper from '../../component/slider/slider'

const About = () => {

    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(id);
    };

    const infoArray = [
        {
            id: 1,
            occupation: "166-ya zəng etməklə sifariş verirsiniz",
            desc: "Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik 166 və ya",
        },
        {
            id: 2,
            occupation: "Yükdaşıma sifarişi",
            desc: "Bizə zəng etdikdən sonra yükdaşıma sifarişi üçün ən yaxın zamanda xidmət təyin olunur.",
        },
        {
            id: 3,
            occupation: "Evakuasiya xidməti",
            desc: "Nəqliyyat vasitələrinin operativ evakuasiya xidməti ilə təmin olunması.",
        },
        {
            id: 4,
            occupation: "Anbar xidməti",
            desc: "Ehtiyatlarınızı təhlükəsiz saxlamaq üçün geniş anbar xidmətləri təklif edirik.",
        },
        {
            id: 5,
            occupation: "Təmizlik xidməti",
            desc: "Ev və ofislər üçün peşəkar təmizlik xidmətləri ilə təmin edirik.",
        },
        {
            id: 6,
            occupation: "Xalçayuma xidməti",
            desc: "Xalçalarınızın dərin təmizlənməsi üçün peşəkar xidmət göstəririk.",
        }
    ];

  return (

    <>

    <div className='about'>

    <div className="cont">


      <div className='about_mission'>
        <div className='about_mission_left'>

        <span className='about_mission_left_tit'>
            <div className='line'></div>
            <h2>Haqqımızda</h2>
        </span>
            <p className='about_mission_left_desc'> “166 Yükdaşıma və Logistika – Yükünüzü daşıyırıq”</p>

            <div>
                <img src={about} alt="" />
            </div>

        </div>

        <div className='about_mission_right'>
            <p>2012-ci ildə fəaliyyətinə bir neçə yük maşını ilə başlayan “Yüktaksisi.az MMC” brendi hazırda yükdaşıma və logistika sahəsi üzrə ölkənin qabaqcıl şirkətlərindən biridir. Yüklərin daşınması yalnız ölkədaxili sərhədlərlə məhdudlaşmır, həmçinin beynəlxalq arenada da həyata keçirilir.Daim müştərilərimizin xidmətində olmaq və operativ xidmət göstərmək məqsədilə 166 qaynar xəttimiz 7/24 ölkənin istənilən nöqtəsindən zəngləri qəbul edir.
Göstərdiyimiz xidmətin müştərilərimizə rahat və əlçatan olması məqsədilə xidmət sahələrimiz genişlənməyə davam edir. Şirkətimiz yükdaşıma sahəsi ilə fəaliyyətə başlasa da, hazırda müxtəlif kompleks xidmətləri – yükdaşıma ve logistika, evakuasiya, işçi qüvvəsi, usta xidməti, anbar xidməti, təmizlik xidməti və xalça yuma xidmətlərini müştərilərinə təqdim edib.Xidmətlərimizin daha əlçatan olması üçün sərfəli qiymət və hər bir bölgəyə xidmət anlayışları ilə çalışırıq.
 166 brendi altında fəaliyyət göstərən hər bir xidmətin keyfiyyətinin ölçülməsi bizim üçün olduqca vacibdir. Bu məqsədlə, mütəmadi olaraq müştərilərimizin göstərilən xidmətlər üzrə fikirlərini öyrənir, təklif və iradlarına əsasən xidmət keyfiyyətini daim təkmilləşdiririk. (ISO 9001:2015 - Keyfiyyət İdarəetmə Sistemi, ISO 45001:2018 - Peşə Sağlamlığı və Əməyin Təhlükəsizliyi İdarəetmə Sistemi və ISO 14001:2015 - Ətraf Mühitin İdarəetmə sistemi üzrə beynəlxalq sertifikatları)</p>

        </div>

      </div>



      <div className='about_view'>

        <div className='about_view_left'>
            <div className='about_view_left_item'>
                <h2>526368</h2>
                <p>Daşınmış ofis və ev</p>
                <span className='about_view_left_item_line'></span>
            </div>

            <div className='about_view_left_item'>
                <h2>526368</h2>
                <p>Daşınmış ofis və ev</p>
                <span className='about_view_left_item_line'></span>
            </div>

            <div className='about_view_left_item'>
                <h2>526368</h2>
                <p>Daşınmış ofis və ev</p>
                <span className='about_view_left_item_line'></span>
            </div>

            <div className='about_view_left_item'>
                <h2>526368</h2>
                <p>Daşınmış ofis və ev</p>
                <span className='about_view_left_item_line'></span>
            </div>


        </div>


        <div className='about_view_right'>

            <div className='about_view_right_head'>
               <span className='about_view_right_head_line'></span>
               <h2>Missiyamiz</h2>
            </div>
            <p>Missiyamız, müştərilərimizi və partnyorlarımızı dərindən anlamaq, onlara effektiv logistik həlləri yüksək keyfiyyətdə təqdim etmək və eyni zamanda əməkdaşlarımızın şəxsi inkişafı və motivasiyasını üst səviyyədə tutmaqdır.</p>


             <div className='about_view_right_item'>


             <div className='about_view_right_item_products'>
                 <span className='about_view_right_item_products_img'>
                    <img src={timer} alt="" />
                </span>
                 <p>Sürətli xidmət</p>
            </div>

            <div className='about_view_right_item_products'>
                 <span className='about_view_right_item_products_img'>
                    <img src={timer} alt="" />
                </span>
                 <p>Sürətli xidmət</p>
            </div>

            <div className='about_view_right_item_products'>
                 <span className='about_view_right_item_products_img'>
                    <img src={timer} alt="" />
                </span>
                 <p>Sürətli xidmət</p>
            </div>

            <div className='about_view_right_item_products'>
                 <span className='about_view_right_item_products_img'>
                    <img src={timer} alt="" />
                </span>
                 <p>Sürətli xidmət</p>
            </div>




             </div>



        </div>





      </div>



      <div className='about_work'>

          <div className='about_work_head'>
                 <span className='about_work_head_line'></span>
                 <h2>Biz necə işləyirik?</h2>
          </div>


<div className='about_work_all'>
            {infoArray.map((item, index) => (
                <div
                    onClick={() => handleClick(item.id)}
                    key={item.id}
                    className={`about_work_all_products ${activeId === item.id ? 'active' : ''}`}
                >
                    <div className='about_work_all_products_left end'>
                        {index % 2 !== 0 && (
                            <>
                                <div className={`about_work_all_products_left_num ${activeId === item.id ? 'active-num' : ''}`}>
                                    <p className='about_work_all_products_left_num_number'>{item.id}</p>
                                </div>
                                <h3>{item.occupation}</h3>
                                <p>{item.desc}</p>
                            </>
                        )}
                    </div>
                    <div className={`beetwen_line ${activeId === item.id ? 'active' : ''}`}></div>

                    <div className='about_work_all_products_right start'>
                        {index % 2 === 0 && (
                            <>
                                <div className={`about_work_all_products_right_num ${activeId === item.id ? 'active-num' : ''}`}>
                                    <p className='about_work_all_products_right_num_number'>{item.id}</p>
                                </div>
                                <h3>{item.occupation}</h3>
                                <p>{item.desc}</p>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>

    <div className='about_swiper'>
        <div className="about_swiper_coment">
         <span className='about_swiper_coment_line'></span>
         <h2>Biz necə işləyirik?</h2>

        </div>

        <Homeswiper/>
    </div>


     </div>





   </div>

    </div>

    </>
  )
}

export default About






















// <div className='about_work_all'>


// <div className='about_work_all_products'>
//   <div className='about_work_all_products_items'>
//      <div className='about_work_all_products_items_left start'>

//     </div>

//     <div className='about_work_all_products_items_right'>
//         <div className='about_work_all_products_items_right_numstart' >
//             <p className=''>5</p>
//         </div>
//         <h2>166-ya zəng etməklə sifariş verirsiniz</h2>
//         <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik
//         166 və ya</p>

//     </div>
//   </div>


//   <div className='about_work_all_products_items'>
//     <div className='about_work_all_products_items_right end'>
//         <div className='about_work_all_products_items_right_numend numend'>
//             <p>6</p>
//         </div>
//         <h2>166-ya zəng etməklə sifariş verirsiniz</h2>
//         <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik
//         166 və ya</p>

//     </div>
//      <div className='about_work_all_products_items_left'>

//     </div>

//   </div>
// </div>


// <div className='about_work_all_products'>
//   <div className='about_work_all_products_items'>
//      <div className='about_work_all_products_items_left start'>

//     </div>

//     <div className='about_work_all_products_items_right'>
//         <div className='about_work_all_products_items_right_numstart' >
//             <p className=''>5</p>
//         </div>
//         <h2>166-ya zəng etməklə sifariş verirsiniz</h2>
//         <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik
//         166 və ya</p>

//     </div>
//   </div>


//   <div className='about_work_all_products_items'>
//     <div className='about_work_all_products_items_right end'>
//         <div className='about_work_all_products_items_right_numend numend'>
//             <p>6</p>
//         </div>
//         <h2>166-ya zəng etməklə sifariş verirsiniz</h2>
//         <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik
//         166 və ya</p>

//     </div>
//      <div className='about_work_all_products_items_left'>

//     </div>

//   </div>
// </div>



// <div className='about_work_all_products'>
//   <div className='about_work_all_products_items'>
//      <div className='about_work_all_products_items_left start'>

//     </div>

//     <div className='about_work_all_products_items_right'>
//         <div className='about_work_all_products_items_right_numstart' >
//             <p className=''>5</p>
//         </div>
//         <h2>166-ya zəng etməklə sifariş verirsiniz</h2>
//         <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik
//         166 və ya</p>

//     </div>
//   </div>


//   <div className='about_work_all_products_items'>
//     <div className='about_work_all_products_items_right end'>
//         <div className='about_work_all_products_items_right_numend numend'>
//             <p>6</p>
//         </div>
//         <h2>166-ya zəng etməklə sifariş verirsiniz</h2>
//         <p>Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik
//         166 və ya</p>

//     </div>
//      <div className='about_work_all_products_items_left'>

//     </div>

//   </div>
// </div>







// </div>