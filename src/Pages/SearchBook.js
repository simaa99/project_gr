import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";
import Part4 from "../components/Part4";
import axios from 'axios';
import Skeleton from "./skeleton/Skeleton";



// The REST API endpoint
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=math&key=AIzaSyDJUpineV6JgL3ngJrVY4kjm9S6GOXVoCc';


function SearchBook() {
    const [loading, setLoading] = useState(false);

    // At the beginning, posts is an empty array
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    // Define the function that fetches the data from API
    const fetchData = async () => {
        setLoading(true);

        const { data } = await axios.get(API_URL);
        setPosts(data.items);
        setLoading(false);

    };

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        fetchData();
    }, []);





    return (


        <div className='searchbook'>
            <div>
            </div>
            <div className='books'>
                <Container>

                    <Row>
                        <Col md={5}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="input-search">
                                        <Form.Control type="text" placeholder=" ISBN ابحث عن كتابك باستخدام الاسم المؤلف او " onChange={(e) => setSearchTitle(e.target.value)} />
                                        <i class="fa fa-search"></i>
                                    </div>

                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={7}>
                            <div style={{ textAlign: 'left' }}>
                                <Button variant="light">تصفية <BsFilter /></Button>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row className="rowbook">


                        {loading ? (
                            <div className="anim" >
                                <Skeleton type="custom" />

                            </div>
                        ) : (

                            posts.filter((value) => {

                                if (searchTitle === "") {
                                    return value
                                }




                                else {
                                    const searchText = value?.volumeInfo?.title;

                                    if (searchText?.toLowerCase().includes(searchTitle.toLowerCase())) {
                                        return value;
                                    }





                                }
                            }



                            )
                                .map((post, index) => <Col xs={6} md={2} key={post.id}>
                                    <a href={"/search/" + post.id} >
                                        <div id="img-hov" style={{ height: 'fit-content' }}>
                                            <img src={post?.volumeInfo?.imageLinks?.smallThumbnail} alt=""
                                                data-aos="fade-up"
                                                data-aos-delay={150 * index}
                                                data-aos-duration="700"

                                                data-aos-easing="ease-in-out"


                                            />


                                        </div>



                                    </a>


                                </Col>)
                        )}















                    </Row>
                </Container>
            </div>
            <Part4 />



        </div >
    )
}

export default SearchBook