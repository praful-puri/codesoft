import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { GoDotFill } from "react-icons/go";
import { Container, Row, Col } from 'react-bootstrap'

import AboutImg from './about.png'

const About = () => {
    const data = "I Am Basically From Nagpur. I Did My Graduation In BCCA From Rashtrasant Tukadoji Maharaj University, Nagpur. Currently I Am Pursuing MCA(Final Year) In G.H Raisoni University College. I Belong To A Nuclear Family.I Have Completed Virtual Intership And Knowledge About Programming Language How To Perform Also Improve My Skills. My Hobbies Are Listening To Music, Learn New Programming Language. As a frontend developer, I specialize in crafting visually stunning and user - friendly interface. Thats All About Me,Thank You ";



    return (
        <Container fluid="xxl" id="AboutUs">

            <h1 className='text-center pt-md-5 text-decoration-underline '>About</h1>
            

            <Row className=' row-cols-1 row-cols-md-2 gap-4 gap-md-0 py-5'>

                

                <Col className=' p-2 py-md-4 d-flex '>

                    <article className='border'>
                        <span className='d-block bg-dark py-2'>
                            <GoDotFill className='fs-1 text-danger'/>
                            <GoDotFill className='fs-1 text-success'/>
                            <GoDotFill className='fs-1 text-warning'/>
                        </span>
                        <br />
                        <div className='px-3'>
                            <h1>Hi, I'm Praful Puri &#128522;</h1>
                            <span>The individual is a skilled front-end developer with expertise in HTML, CSS, JavaScript, React, Bootstrap, Firebase, known for designing seamless user interfaces and working closely with cross-functional teams.</span>


                            <hr />

                           
                                        <p>
                                            <Typewriter


                                                loop={Infinity}
                                                cursor
                                                cursorStyle='|'

                                                words={[data]
                                                } />

                                        </p>
                                


                        </div>
                    </article>

                </Col>

                <Col className='d-flex justify-content-center align-items-center'>
                    <img src={AboutImg} className='img-fluid w-75 ' alt="" style={{ "transform": "scaleX(-1"}} />
                </Col>
            </Row>

        </Container>
    )
}

export default About