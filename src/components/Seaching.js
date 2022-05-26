import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col } from "react-bootstrap";


const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=math&key=AIzaSyDJUpineV6JgL3ngJrVY4kjm9S6GOXVoCc';

function Seaching() {



    // At the beginning, posts is an empty array
    const [posts, setPosts] = useState([]);

    // Define the function that fetches the data from API
    const fetchData = async () => {

        const { data } = await axios.get(API_URL);
        setPosts(data.items);

    };

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{ marginTop: '10vh' }}>


            <Row className="rowbook">


                {
                    posts

                        .map((post) => <Col xs={6} md={2} key={post.id}>

                            <span>{post.volumeInfo.industryIdentifiers[0].type}</span>





                        </Col>
                        )}















            </Row>
        </div>
    )
}

export default Seaching