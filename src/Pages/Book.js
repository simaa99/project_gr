import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap';
import { BsBook } from 'react-icons/bs';
import { AiOutlineLike } from "react-icons/ai";
import PacmanLoader
    from "react-spinners/PacmanLoader"
    ;

function Book() {
    const [post, setPost] = useState({})
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Define the function that fetches the data from API
    const fetchData = async () => {
        setLoading(true);

        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setPost(data);
        console.log(data);
        setTimeout(() => {

            setLoading(false);

        }, 3000);


    };

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        fetchData();
    }, []);






    return (
        <div className="book" style={{ marginTop: "15vh" }}>

            <Container >
                <Modal id="book" show={show} onHide={handleClose}>

                    <Modal.Body>

                        <Carousel interval={null} >
                            <Carousel.Item>

                                <div className="d-block w-100">
                                    <p>صف حالة الكتاب</p>
                                    <Row>
                                        <Col xs={4}>
                                            <div>
                                                <AiOutlineLike />
                                                <span>
                                                    جيد
                                                </span>

                                            </div>
                                        </Col>
                                        <Col xs={4}>

                                            <div>
                                                <AiOutlineLike />
                                                <span>
                                                    جيد جدا
                                                </span>

                                            </div>

                                        </Col>
                                        <Col xs={4}>
                                            <div>
                                                <AiOutlineLike />
                                                <span>
                                                    ممتاز
                                                </span>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Button className="btn-red" type="button" data-bs-target aria-label="Slide 2" aria-current="false">متابعة</Button>

                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>

                                <div className="d-block w-100">
                                    <p>هل تريد تأكيد اعطاء الكتاب</p>

                                    <Button className="btn-red" type="button" data-bs-target aria-label="Slide 2" aria-current="false">تأكيد</Button>

                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>


                            <Carousel.Item>

                                <div className="d-block w-100">
                                    <p>تمت الاضافة بنجاح </p>
                                    <span>شاهد الكتب المضافة</span>

                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Modal.Body>

                </Modal>
                {loading ? (
                    <div className="anim">
                        <PacmanLoader
                            color={"#c27b67"} loading={loading} speedMultiplier={1} size={50} />

                    </div>

                ) : (
                    <>

                        <Row className="pt-8" style={{ disply: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            <Col md={5}>
                                <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                                    <img
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000"
                                        style={{ width: '60%', objectFit: 'cover' }} src={post?.volumeInfo?.imageLinks?.thumbnail} alt="" />


                                </div>
                            </Col>
                            <Col md={7}>
                                <div>

                                    <div className='d-flex' style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '35px', fontWeight: 'bold', color: '#457475' }}>    {post?.volumeInfo?.title}
                                        </span>
                                        <span style={{ color: '#457475', textDecoration: 'underline' }}>روايات عربية</span>
                                    </div>
                                    <br />
                                    <p style={{ color: 'black' }}>                                        {post?.volumeInfo?.authors[0]}
                                    </p>
                                    <br />
                                    <p style={{ color: 'gray' }}
                                        data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="300"

                                        data-aos-duration="2000">
                                        {post?.volumeInfo?.description}
                                    </p>

                                    <Row className="btns" style={{ justifyContent: 'flex-start' }}>
                                        <Col xs={4}>
                                            <Button className="btn1" onClick={handleShow}>اعط الكتاب

                                            </Button>
                                        </Col>
                                        <Col xs={4}>
                                            <Button className="btn2">أضف للمفضلة</Button>
                                        </Col>

                                    </Row>


                                </div>



                            </Col>


                        </Row>
                        <br />
                        <br />
                        <p style={{ fontSize: '35px', fontWeight: 'bold', color: '#457475' }}>الكتاب متوفر لدى المستخدم</p>
                        <Row style={{ alignItems: 'center', display: 'flex' }}>
                            <Col xs={3}>
                                <img style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} src="https://th.bing.com/th/id/R.d96da96c63bc9fc78bd25f82203bc09f?rik=Y6tLCQ9KO1C7QA&pid=ImgRaw&r=0" alt="" />

                            </Col>
                            <Col xs={3} style={{ textAlign: 'end' }}>
                                <span style={{ fontSize: '30px', color: '#457475', textAlign: 'end' }} > لورينا محمد</span>
                            </Col>
                            <Col xs={3} style={{ textAlign: 'end' }}>
                                <BsBook style={{ fontSize: '30px' }} />
                                <p style={{ fontSize: '30px', color: '#457475' }} >جيد</p>
                            </Col>
                            <Col xs={3} style={{ textAlign: 'end' }}>
                                <Button variant="light" id="btn-s" >تواصل</Button>

                            </Col>
                            <Col xs={3}>
                                <img style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} src="https://th.bing.com/th/id/OIP.iTgr5E-XFk1lzOahWpDcowHaHa?pid=ImgDet&w=800&h=800&rs=1" alt="" />

                            </Col>
                            <Col xs={3} style={{ textAlign: 'end' }}>
                                <span style={{ fontSize: '30px', color: '#457475' }} >ملهم محمد </span>
                            </Col>
                            <Col xs={3} style={{ textAlign: 'end' }}>
                                <div style={{}}>
                                    <BsBook style={{ fontSize: '30px' }} />
                                    <p style={{ fontSize: '30px', color: '#457475' }} >ممتاز</p>
                                </div>

                            </Col>
                            <Col xs={3} style={{ textAlign: 'end' }}>
                                <Button variant="light" id="btn-s" >تواصل</Button>

                            </Col>


                        </Row>

                    </>

                )}
            </Container>
        </div >
    )
}

export default Book