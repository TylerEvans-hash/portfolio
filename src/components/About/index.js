import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headShot from '../../assets/headshot/pic-of-me.jpg';

function About() {
    const [languageProf] = useState([
        { language: 'MySQL', key:'sql' },
        { language: 'Mongoose ( ODM )', key:'mongoose' },
        { language: 'Excel VBA', key:'vba' },
        { language: 'HTML', key:'html' },
        { language: 'CSS', key:'css' },
        { language: 'JavaScript', key:'js' },
        { language: 'JQuery', key:'jquery' },
        { language: 'React', key:'react' }
    ]);

    const [technicalProf] = useState([
        { tech: 'OOP ( Object-Oriented Programming )', key: 'oop' },
        { tech: 'NPM ( Node Package Manager )', key: 'npm' },
        { tech: 'Agile SCRUM', key: 'scrum' },
        { tech: 'Microsoft Suite', key: 'microsoft' },
        { tech: 'Amazon Redshift DB', key: 'aws' },
        { tech: 'MongoDB Atlas', key: 'mongo' },
        { tech: 'PWA ( Progressive Web Applications )', key: 'pwa' },
        { tech: 'SPA ( Single Page Applications )', key: 'spa' }
    ]);

    const [techExperience] = useState([
        { name: 'C++', key: 'cplusplus' },
        { name: 'SalesForce', key: 'salesforce' },
        { name: 'Zuora', key: 'zuora' },
        { name: 'Google Suite', key: 'googleSuite' },
        { name: 'Twilio SendGrid', key: 'sendGrid' },
        { name: 'Paypal API', key: 'paypal' },
        { name: 'Adobe Photoshop', key: 'photoshop' },
        { name: 'Adobe Lightroom', key: 'lightroom' }
    ]);

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
                            
                                I am a recent graduate of the Full-Stack Web Development Coding Bootcamp at U of A (University of Arizona). Throughout this web development course I have
                                learned and gained the experiences to create full-stack applications. From Front-End to the Back-End, I have experience in both. Before I graduated from
                                the bootcamp I was a Business Analyst at a software company for more than a year and a half. From that job, I have the skills to understand and manage
                                process workflows, process design, and databases.
                           
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            
                                I am a very highly motivated individual with a lots of hobbies. I have been a musician for most of my life. I know how to play 8 different instruments
                                at varying levels of skills. Photography has been a fun and creative outlet for the past 5 years. I have had many fun and valuable experiences, from photoshoots
                                to traveling and capturing moments. Cars have been a very important part of my life. Growing up I learned how to fix and maintain cars from my father. I've recently
                                broken into the car photography category and have been enjoying it very much.
                            
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
                                    {languageProf.map((data, i) => (
                                        <li key={data.key}>{data.language}</li>                                        
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <h6>Technical Proficiences:</h6>
                                <ul>
                                    {technicalProf.map((data, i) => (
                                        <li key={data.key}>{data.tech}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>Experience with:</h6>
                                <ul>
                                    {techExperience.map((data, i) => (
                                        <li key={data.key}>{data.name}</li>
                                    ))}                                    
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