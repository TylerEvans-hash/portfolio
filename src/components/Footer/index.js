import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer style={{display: 'flex', justifyContent: 'center', position: 'relative', bottom: 0}}>
            <Row>
                <Col>
                    <h3>Made by Tyler</h3>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;