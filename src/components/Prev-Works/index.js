import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function PrevWorks() {
    const [previousWorks] = useState([
        {
            name: 'The Good Blogger',
            description: `An CMS-style blog site that allows users to publish articles, blog posts, and their thoughts and opinions.`,
            // image: '',
            gitHub: 'https://github.com/TylerEvans-hash/the-good-blogger',
            link: 'https://the-good-blogger.herokuapp.com/'
        },
        {
            name: 'Weather Dashboard',
            description: `A weather application that allows users to search for a city and have the related weather forecast displayed on the screen. Both the current date and the 5-day forecast. The uses previous searches will also appear on the left-hand side under the search bar for ease of use.`,
            gitHub: 'https://github.com/TylerEvans-hash/weather-dashboard',
            link: 'https://tylerevans-hash.github.io/weather-dashboard/'
        },
        {
            name: 'Java Ratings',
            description: 'Java Ratings is an application that empowers coffee connoisseurs around world to impart their wisdom on other within the community. This application allows users to create posts that include their thoughts on certain coffee types, shops, and allows users to upload images.',
            gitHub: 'https://tylerevans-hash.github.io/java-ratings',
            link: 'https://java-ratings-poject-2.herokuapp.com/'
        }
    ]);

    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="section-title">Previous Works</h3>
                </Col>
            </Row>
            {previousWorks.map((work, i) => (
                <Row>
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="placeholder.jpg" /> */}
                            <Card.Body>
                                <Card.Title>{work.name}</Card.Title>
                                <Card.Text>
                                    {work.description}
                                </Card.Text>
                                <Button variant="primary" href={work.gitHub}>GitHub Repo</Button>
                                <Button variant="secondary" href={work.link}>Site Link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default PrevWorks;