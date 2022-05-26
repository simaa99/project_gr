import React, { useState } from 'react';
import { Container, Tabs, Tab, Button, Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import SearchBook from "./SearchBook";
import Part4 from '../components/Part4';

function UserPage() {
    const [key, setKey] = useState('home');

    return (
        <>
            <Container className="usercon">
                <div>
                    <div className="userpage d-flex">


                        <div className="img">
                            <img style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%' }} src="https://th.bing.com/th/id/R.d96da96c63bc9fc78bd25f82203bc09f?rik=Y6tLCQ9KO1C7QA&pid=ImgRaw&r=0" alt="" />
                            <p>تعديل المعلومات الشخصية</p>


                        </div>
                        <div className="content">
                            <p>لورينا محمد</p>
                            <p>كاتبة محتوى اهتم بالروايات العربية</p>
                            <ul>
                                <li><MdEmail /> <span>lorena@gmail.com</span></li>
                                <li> <FaFacebookF /> <span>https://www.facebook.com/lorina</span></li>

                                <li> <BiLocationPlus /><span>خان يونس</span> </li>

                            </ul>
                        </div>

                    </div>

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="أضف كتاباً">
                            <SearchBook />

                        </Tab>
                        <Tab eventKey="profile" title="الكتب المضافة">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Row>
                                    <Col xs={3}>
                                        <img src="https://th.bing.com/th/id/OIP.KOykUZeuvOmjNFuhKzlQhQHaIj?pid=ImgDet&rs=1" style={{ width: '250px', height: '300px', objectFit: 'cover' }} alt="" />
                                        <br />
                                        <Button className="btn-delete">حذف</Button>

                                    </Col>
                                </Row>

                            </div>
                        </Tab>
                        <Tab eventKey="profile1" title="الكتب المفضلة">

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Row>
                                    <Col xs={3}>
                                        <img src="https://th.bing.com/th/id/OIP.KOykUZeuvOmjNFuhKzlQhQHaIj?pid=ImgDet&rs=1" style={{ width: '250px', height: '300px', objectFit: 'cover' }} alt="" />
                                        <br />
                                        <Button className="btn-delete">حذف</Button>

                                    </Col>
                                </Row>

                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </Container>
            <Part4 />
        </>

    )
}

export default UserPage