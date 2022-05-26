
import { Navbar, Container, Nav, NavDropdown, Button, Row, Col, Form } from "react-bootstrap";


import React from 'react'

function Part1() {
    return (
        <div class="part1">
            <div className="clearfix"></div>
            <div className="q">
                <Container>
                    <Row>
                        <Col xs={5}>
                            <p className="text-center cssanimation flipX" >ساعد في انتشار ثقافة
                            </p>

                            <p className="text-center cssanimation flipX">تبادل الكتب</p>
                            <br />
                            <br />
                            <Row className="btns">
                                <Col xs={6}>
                                    <Button className="btn1">ابدأ</Button>
                                </Col>
                                <Col xs={6}>
                                    <Button className="btn2">كيف استخدم الموقع</Button>
                                </Col>

                            </Row>

                        </Col>
                    </Row>



                </Container>
            </div>
        </div>
    )
}

export default Part1