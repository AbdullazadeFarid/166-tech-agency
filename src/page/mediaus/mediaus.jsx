import React from 'react'
import "./mediaus.css"
import Products from '../../component/products/products'
import product from '../../assets//image/Image.png'


  const userinfo = [
    {
      id: 1,
      date: "17 June 2021",
      photo:product,
      desc: "Lorem ipsum dolor sit amet consectetur?",
      text: "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",

    },

    {
      id: 2,
      date: "17 June 2021",
            photo:product,

      desc: "Lorem ipsum dolor sit amet consectetur?",
      text: "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",

    },

    {
      id: 3,
      date: "17 June 2021",
            photo:product,

      desc: "Lorem ipsum dolor sit amet consectetur?",
      text: "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",

    },

    {
      id: 4,
      date: "17 June 2021",
            photo:product,

      name: "Lorem ipsum dolor sit amet consectetur?",
      text: "Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",

    },


  ]


const Mediaus = () => {
  return (
    <>

    <div className='mediaus'>

        <div className="cont">

          <div className='medius_head'>
            <div className='medius_head_line'></div>
            <h2>Mediada biz</h2>
         </div>


         <div className='mediaus_products'>

            <Products

              type="media"
              products={userinfo}

            />

         </div>
        </div>





    </div>


    </>
  )
}

export default Mediaus