import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import './products.css'


export const Products = () => {
  let [data, setData] = useState([])
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response)=>{
      setData(response.data.products);
      
    })
  }

  useEffect(()=> {
    getData()
  },[])

  console.log(data);
  


  return (
    <section id="Products">
      <Container>
        <h1>Our Products</h1>
        <hr />
        <Row>
          {data.map((item)=>(
            <Col lg={4} className='myproducts'>
            <img src={item.thumbnail} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Add to Cart</button>
            </Col>
          ))}
          
        </Row>
      </Container>

    </section>
  )
}
