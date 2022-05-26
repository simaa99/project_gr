import React from 'react';
import { Container } from "react-bootstrap";
import Swiper1 from "./Swiper1"

function Part3({ title }) {
    return (
        <div className="part3">
            <Container>
                <div className="part3-contain" style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{title}</span>
                    <span>شاهد جميع الكتب</span>

                </div>
                <div>
                    <Swiper1 />
                </div>

            </Container>
        </div>
    )
}

export default Part3;