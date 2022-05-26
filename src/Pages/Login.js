import React from 'react';
import { useState, useContext } from 'react';
import Navbar1 from "../components/Navbar1";


import { Navbar, Modal, Container, Nav, NavDropdown, Button, Row, Col, Form } from "react-bootstrap";
import { AuthContext } from '../AuthContext';
import Img8 from "../img/8.PNG"

function Login() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    function login(e) {
        e.preventDefault();

        // @todo: send api request to validate data and get token

        if (password === '123') {
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({ token, email });
        } else {
            alert('wrong details');
        }
    }
    return (
        <div className="login">
            <div className='log-input'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <p className='text-center'>بدل كتابك واحصل على اصدقاء جدد</p>
                                <Button variant="outline-secondary">سجل دخول باستخدام جوجل <img src="https://th.bing.com/th/id/OIP.Kar-WA2-6UJs1JE57nZv1wHaHa?pid=ImgDet&w=895&h=895&rs=1" alt="" /></Button>
                                <Button variant="outline-secondary">سجل دخول باستخدام فيسبوك</Button>
                                <div className="text-center before1">
                                    <span></span>
                                    <span>أو باستخدام الايميل</span>
                                    <span></span>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>ايميل</Form.Label>
                                        <Form.Control type="email" placeholder="doaa@gmail.com" value={email}
                                            onChange={e => setEmail(e.target.value)} />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>باسوورد</Form.Label>
                                        <Form.Control type="password" placeholder="doaa@gmail.com" value={password}
                                            onChange={e => setPassword(e.target.value)} />

                                    </Form.Group>
                                    <Button type="submit" id="submit" variant="outline-secondary" onClick={login}> سجل دخول</Button>
                                    <p style={{ textAlign: 'right', fontSize: '12px', color: 'grey' }}> ؟هل نسيت كلمة السر</p>
                                    <p style={{ fontSize: '12px', fontWeight: '500' }} className='text-center'>هل تمتلك حساب؟ <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>سجل الآن</span></p>

                                </Form>
                            </div>
                        </Col>
                        <Col md={8} style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='w-100'>
                                <img src={Img8}
                                    style={{ width: '100%', objectFit: 'cover', }} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Login