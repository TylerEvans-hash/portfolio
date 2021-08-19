import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0}}>
                    <h3>Made by Tyler Evans</h3>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;