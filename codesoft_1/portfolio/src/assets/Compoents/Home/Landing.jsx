import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FaLinkedin ,FaInstagram, FaGithub } from "react-icons/fa6";
import  ProfileImg from  "./profile.png"

const Landing = () => {
  return (
    <>
        <Container className=' d-grid align-items-center overflow-hidden ' fluid='xxl' id="HomePage">
            <Row className='row-cols-1 row-cols-md-2 gap-0  gap-md-0 ' >
                <Col className=' py-4 px-3 p-md-5'>
                    <h1 className='fw-bold'>
                        <span className='display-4'>&#128075;</span> Hi,  <br /> My name is <br /> <span className='text-gradient text-primary'>Praful Puri</span> <br />I build things from web
                    </h1>

                    <div className='d-flex gap-2 py-1'>
                    <a href='https://github.com/praful-puri'><FaGithub className='fs-1'/></a>
                        <a href='https://www.linkedin.com/in/praful-puri-74047b265/'><FaLinkedin className='fs-1 text-primary'/></a>
                        <a href='https://www.instagram.com/theprafulpuri/'><FaInstagram className='fs-1 text-danger'/></a>
                       
                    </div>

                   
                    <button className=' d-inline-block px-4 py-2 border-0 bg-primary text-white fw-bold mt-3 cursor-pointer'>Download CV</button>

                    

                </Col>
                <Col className='d-flex justify-content-center  pb-5'>
                     <Image src={ProfileImg} className='img-fluid ' /> 
                </Col>
            </Row>

            <span className='d-block py-5'></span> 




        </Container>

    </>
  )
}

export default Landing