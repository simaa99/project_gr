import React from 'react';
import { Col, Row, Container, Button } from "react-bootstrap";
import imgGirl from '../img/2.png';


function Part2() {
    return (
        <div className="part2">
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="img-part2">
                            <img src={imgGirl} alt="" />
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div className="part22">
                            <p data-aos="fade-right" data-aos-delay="100"
                                data-aos-duration="700"

                                data-aos-easing="ease-in-out">هل فكرت من قبل في تبادل الكتب مغ قراءآخرون</p>
                            <p
                                data-aos="fade-right" data-aos-delay="300"
                                data-aos-duration="700"

                                data-aos-easing="ease-in-out"
                            >الفكرة نفسها ممتعة وخصوصا عندما يقع هذا الشحصالذب نصحته بأن يقرأ كتابا من اختيارك في حب الكتاب</p>
                            <p
                                data-aos="fade-right" data-aos-delay="600"
                                data-aos-duration="700"

                                data-aos-easing="ease-in-out">اذن فلماذا لا تقم بمشاركة كل كتبك المفضلة تلك مع آخرين مهتمون بالقراءة مثلك</p>
                            <Button>نحن نعلم انك تحب ذلك</Button>
                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Part2