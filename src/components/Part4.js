import React from 'react';
import { Container, Col, Row } from "react-bootstrap"

function Part4() {
    return (
        <div className='part4'>
            <Container>
                <Row>
                    <Col md={4}>
                        <p>تواصل معنا</p></Col>
                    <Col md={4}>
                        <p>عن التطبيق</p></Col>
                    <Col md={4}>
                        <p>الشروط والقوانين</p></Col>

                </Row>
                <br />

                <Row>
                    <Col md={4}>
                    </Col>
                    <Col md={4}>
                        <p><span style={{ marginBottom: '10px', position: 'relative' }}>&copy;</span>جميع الحقوق محفوظة </p></Col>
                    <Col md={4}>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Part4