import React, { useContext } from 'react';
import { AuthContext } from "../AuthContext";
import { Navbar, Modal, Container, Nav, Button, Form, Dropdown } from "react-bootstrap";
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Img9 from "../img/9.PNG"



function Navbar1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const authContext = useContext(AuthContext);

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }


    return (


        <div>
            <Modal className="modal1 log-input" show={show} onHide={handleClose}>

                <Modal.Body>
                    <div>
                        <p className='text-center text-white'>قم بانشاء حساب جديد بسرعة وسهولة</p>
                        <Button variant="outline-secondary">سجل دخول باستخدام جوجل <img src="https://th.bing.com/th/id/OIP.Kar-WA2-6UJs1JE57nZv1wHaHa?pid=ImgDet&w=895&h=895&rs=1" alt="" /></Button>
                        <Button variant="outline-secondary">سجل دخول باستخدام فيسبوك</Button>
                        <div className="text-center before1">
                            <span></span>
                            <span className="text-white">أو باستخدام الايميل</span>
                            <span></span>
                        </div>
                        <Form>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="ألاسم" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="البريد الالكتروني" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="كلمة السر" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" placeholder="اعد كتابة كلمة السر" />

                            </Form.Group>
                            {['checkbox'].map((type) => (
                                <div key={type} className="mb-3">
                                    <Form.Check type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <Form.Check.Label className='text-white' style={{ fontSize: '12px' }}>{`بالنقر على انشاء حساب منك  توافق على الشروط وسياسات الموقع`}</Form.Check.Label>
                                    </Form.Check>
                                </div>
                            ))}
                            <Button type="submit" id="submit" variant="danger"> <i className="fa fa-sign-out ml-4"></i>انشاء حساب </Button>


                        </Form>
                    </div>
                </Modal.Body>

            </Modal>

            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" >
                    <Container>
                        <Navbar.Brand href="#home">
                            {authContext.auth.email ?
                                <Link to="/">
                                    <img src={Img9} alt=" " />

                                </Link>
                                :

                                <Link to="/home">
                                    <img src={Img9} alt=" " />

                                </Link>}

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            {authContext.auth.email ? <div>

                                <Nav>

                                    <Nav.Link > <NavLink to="/" exact>الصفحة الرئيسية</NavLink></Nav.Link>
                                    < Nav.Link > <NavLink to="/search" exact>بحث عن الكتب </NavLink></Nav.Link>

                                    <Nav.Link>                                {authContext.auth.email}
                                    </Nav.Link>


                                    <Nav.Link eventKey={2} href="#memes">

                                        <Dropdown>
                                            <NavLink to="/userpage" exact>
                                                <img style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }} src="https://th.bing.com/th/id/R.d96da96c63bc9fc78bd25f82203bc09f?rik=Y6tLCQ9KO1C7QA&pid=ImgRaw&r=0" alt="" />
                                            </NavLink>
                                            <Dropdown.Toggle id="dropdown-basic">
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={logout} ><NavLink to="/" exact>  تسجل خروج </NavLink></Dropdown.Item>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav.Link>

                                </Nav>
                            </div> :

                                <Nav>

                                    <Nav.Link > <NavLink to="/home" exact>الصفحة الرئيسية</NavLink></Nav.Link>
                                    < Nav.Link > <NavLink to="/search" exact>بحث عن الكتب </NavLink></Nav.Link>
                                    < Nav.Link > <NavLink to="/" exact>  <Button variant="light" >تسجيل دخول</Button></NavLink></Nav.Link>

                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant="light" onClick={handleShow}>انشئ حساب</Button>
                                    </Nav.Link>

                                </Nav>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>


        </div >


    )
}

export default Navbar1