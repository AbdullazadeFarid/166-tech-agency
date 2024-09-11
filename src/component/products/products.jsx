


import React from 'react';
import "./products.css"; // Убедитесь, что путь к CSS-файлу правильный


const Products = ({ products,type }) => {

    return (
        <div className='team_main_products'>
            {products && products.length > 0 ? (
                products.map((user) => (
                    // <div key={user.id} className='team_main_products_product'>
              <div key={user.id} className={`${type === 'media' ? 'team_main_products_product_media' : 'team_main_products_product'}`}>


                        {/* <div className='team_main_products_product_img'>
                         */}
                         <div className={`${type === 'media' ? 'team_main_products_product_media_img' : 'team_main_products_product_img'}`}>
                            <img src={user.photo} alt={user.name} />
                        </div>

                        <div
                          className={`${type === 'media' ? 'info_cont' : ''}`}
                        >

                        {user.date ? (
                            <p className='team_main_products_product_media_text'>{user.date}</p>
                        ) : null}
                        <h2 className='team_main_products_product_name'>{user.name}</h2>
                        <p>{user.desc}</p>
                        {user.text ? (
                            <p>{user.text}</p>
                        ) : null}

                        </div>
                    </div>
                ))
            ) : (
                <p>No users available</p>
            )}
        </div>
    );
}

export default Products;
