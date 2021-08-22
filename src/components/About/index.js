import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headShot from '../../assets/headshot/pic-of-me.jpg';

function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="section-title">About me</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <h5>Hello! I am Tyler!</h5>
                    </Row>
                    <Row>
                        <Col>
                            <text>
                                I am a recent graduate of the Full-Stack Web Development Coding Bootcamp at U of A (University of Arizona). Throughout this web development course I have
                                learned and gained the experiences to create full-stack applications. From Front-End to the Back-End, I have experience in both. Before I graduated from
                                the bootcamp I was a Business Analyst at a software company for more than a year and a half. From that job, I have the skills to understand and manage
                                process workflows, process design, and databases.
                            </text>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <text>
                                I am a very highly motivated individual with a lots of hobbies. I have been a musician for most of my life. I know how to play 8 different instruments
                                at varying levels of skills. Photography has been a fun and creative outlet for the past 5 years. I have had many fun and valuable experiences, from photoshoots
                                to traveling and capturing moments. Cars have been a very important part of my life. Growing up I learned how to fix and maintain cars from my father. I've recently
                                broken into the car photography category and have been enjoying it very much.
                            </text>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Row>
                            <h3>Technical Skills and Brackground:</h3>
                        </Row>
                        <Row>
                            <Col>
                                <h6>Language Proficiences:</h6>
                                <ul>
                                    <li>MySQL</li>
                                    <li>Mongoose ( ODM )</li>
                                    <li>Excel VBA</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>JQuery</li>
                                    <li>React</li>                                    
                                </ul>
                            </Col>
                            <Col>
                                <h6>Technical Proficiences:</h6>
                                <ul>
                                    <li>OOP ( Object-Oriented Programming )</li>
                                    <li>NPM ( Node Package Manager )</li>
                                    <li>Agile SCRUM</li>
                                    <li>Microsoft Suite</li>                                    
                                    <li>Amazon Redshift DB</li>
                                    <li>MongoDB Atlas</li>
                                    <li>PWA ( Progressive Web Applications )</li>
                                    <li>SPA ( Single Page Applications )</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>Experience with:</h6>
                                <ul>
                                    <li>SalesForce</li>
                                    <li>Zuora</li>
                                    <li>Google Suite</li>
                                    <li>Twilio SendGrid</li>
                                    <li>Paypal API</li>
                                </ul>
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col xs={6} md={4}>
                    <Image src={headShot} alt="developer" roundedCircle />
                </Col>
            </Row>
        </Container>
    )
}

export default About;