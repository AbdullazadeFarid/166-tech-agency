import React from 'react'
import "./team.css"
import user1 from '../../assets/image/user1img.png'
import user2 from '../../assets/image/user2.png'
import user3 from '../../assets/image/user3.png'
import Products from '../../component/products/products'





const Team = () => {

    const users = [
        {
            id: 1,
            name: "Samida Qəniyeva",
            photo: user1,
            desc:"Korporativ satış şöbəsinin rəhbəri"
        },
        {
            id: 2,
            name: "Jane Doe",
            photo:  user2,
            desc:"Korporativ satış şöbəsinin rəhbəri"

        },
        {
            id: 3,
            name: "Samida Qəniyeva",
            photo: user1,
            desc:"Korporativ satış şöbəsinin rəhbəri"
        },
        {
            id: 4,
            name: "Samida Qəniyeva",
            photo: user1,
            desc:"Korporativ satış şöbəsinin rəhbəri"
        },
        {
            id: 5,
            name: "Samida Qəniyeva",
            photo: user1,
            desc:"Korporativ satış şöbəsinin rəhbəri"
        },
        {
            id: 6,
            name: "Samida Qəniyeva",
            photo: user1,
            desc:"Korporativ satış şöbəsinin rəhbəri"
        },
        {
            id: 7,
            name: "Altay Nəcəfov",
            photo:  user3,
            desc:"Korporativ satış şöbəsinin rəhbəri"

        }
    ];




  return (
    <>

     <div className='team'>

        <div className='cont'>

            <div className='team_main'>
                <div className='team_main_head'>

                    <div className='team_main_head_line'></div>
                    <h2>Komandamız</h2>

                </div>


                <Products
                products={users}
                />


            </div>

        </div>

     </div>


    </>
  )
}

export default Team