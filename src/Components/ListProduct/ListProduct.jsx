// import React, { useState, useEffect } from 'react';
// import './ListProduct.css';
// import cross_icon from '../../assets/cross_icon.png';

// const ListProduct = () => {
//     const [allProducts, setAllProducts] = useState([]);

//     const fetchInfo = async () => {
//         await fetch('http://localhost:4000/allproducts')
//             .then((res) => res.json())
//             .then((data) => {
//                 setAllProducts(data);
//                 console.log(data);
//             });
//     };

//     useEffect(() => {
//         fetchInfo();
//     }, []);

//     return (
//         <div className='list-product'>
//             <h1>All Products List</h1>
//             <div className='list-product-format-main'>
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Old Price</p>
//                 <p>New Price</p>
//                 <p>Category</p>
//                 <p>Remove</p>
//             </div>
//             <div className='list-product-allproducts'>
//                 <hr />
//                 {allProducts.map((product, index) => (
//                     <div key={index} className='listproduct-format'>
//                         <img src={product.image} alt="" className='listproduct-product-icon' />
//                         <p>{product.name}</p>
//                         <p>${product.old_price}</p>
//                         <p>${product.new_price}</p>
//                         <p>{product.category}</p>
//                         <img src={cross_icon} alt="" className='listproduct-remove-icon' />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ListProduct;


import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                console.log(data);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    const removed_product= async (id) => {
      await fetch('http://localhost:4000/removeproduct',
      {
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id}),
      })
      await fetchInfo();
    }


    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className='list-product-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className='list-product-allproducts'>
                {allProducts.map((product, index) => (
                    <React.Fragment key={index}>
                        <div className='listproduct-format'>
                            <img src={product.image} alt="" className='listproduct-product-icon' />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img  onClick={()=>{removed_product(product.id)}} src={cross_icon} alt="" className='listproduct-remove-icon' />
                        </div>
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
