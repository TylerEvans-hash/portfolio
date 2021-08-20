import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function PrevWorks() {
    const [previousWorks] = useState([
        {
            name: 'Plan Community',
            description: 'This application was created to bring attention and help to those struggling with mental illnesses. Users once signed in will recieve a welcome email and will be able make donations toward future events and foundations.',
            imageName: 'plan-community',
            gitHub: 'https://github.com/TylerEvans-hash/mental-health-project',
            link: 'https://plan-community.herokuapp.com/'
        },
        {
            name: 'The Good Blogger',
            description: `An CMS-style blog site that allows users to publish articles, blog posts, and their thoughts and opinions.`,
            imageName: 'the-good-blogger',
            gitHub: 'https://github.com/TylerEvans-hash/the-good-blogger',
            link: 'https://the-good-blogger.herokuapp.com/'
        },
        {
            name: 'Weather Dashboard',
            description: `A weather application that allows users to search for a city and have the related weather forecast displayed on the screen. Both the current date and the 5-day forecast. The uses previous searches will also appear on the left-hand side under the search bar for ease of use.`,
            imageName: 'weather-dashboard',
            gitHub: 'https://github.com/TylerEvans-hash/weather-dashboard',
            link: 'https://tylerevans-hash.github.io/weather-dashboard/'
        },
        {
            name: 'Java Ratings',
            description: 'Java Ratings is an application that empowers coffee connoisseurs around world to impart their wisdom on other within the community. This application allows users to create posts that include their thoughts on certain coffee types, shops, and allows users to upload images.',
            imageName: 'java-ratings',
            gitHub: 'https://github.com/TylerEvans-hash/java-ratings',
            link: 'https://java-ratings-poject-2.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            description: 'This application is for anyone who wants to create notes and keep them organized. They are will also be saved incase you want to come back for update or edit them.',
            imageName: 'note-taker',
            gitHub: 'https://github.com/TylerEvans-hash/note-taker',
            link: 'https://the-new-note-taker.herokuapp.com/'
        },
        {
            name: 'Git it Done!',
            description: `This application is made by developers for developers. This site allow users to search GitHub's user database and return their repos and issues. Users can also search by topics of JavaScript, HTML, or CSS`,
            imageName: 'git-it-done',
            gitHub: 'https://github.com/TylerEvans-hash/git-it-done',
            link: 'https://tylerevans-hash.github.io/git-it-done/'
        },
        {
            name: 'Pizza Hunt',
            description: 'This application allows users to create new pizzas and have dicussions on why they like that pizza or dislike it. Play on normal pizza websites and social media sites.',
            imageName: 'pizza-hunt',
            gitHub: 'https://github.com/TylerEvans-hash/pizza-hunt',
            link: 'https://blooming-savannah-66727.herokuapp.com/'
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
                            <Card.Img variant="top" src={require(`../../assets/works/${work.imageName}.jpg`).default} />
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