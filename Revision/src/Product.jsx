import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
  const [product, setProduct] = useState([]);
  const API_Url = "http://localhost:3000/1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_Url);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>Our Product</h1>
      <ul>
        {product.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
