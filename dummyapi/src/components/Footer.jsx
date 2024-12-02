import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'
export const Footer = () => {
    let submitted = () =>{
        window.location.reload(true)
        alert("Your response has been submitted")
    }


  return (
    <section id="Contact">
        <Container>
            <h2>Contact Us</h2>
            <Row>
                <Col lg={6}>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>01XXXXX23</li>
                </ul>
                </Col>
                <Col className='forms' lg={6}>
                <form action="">
                    <label htmlFor="">Got questions? Reach out to us</label>
                    <input type="text" placeholder='Name' />
                    <input type="Email" placeholder='Type your email' />
                    <input className='query' type="text" placeholder='Your query' />
                    <input className='submit' type="submit" onClick={submitted} />
                </form>

            
                </Col>
            </Row>
        </Container>

    </section>
  )
}
