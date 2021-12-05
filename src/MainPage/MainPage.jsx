import {Row,Col,Card,Button,Form} from "react-bootstrap"
const MainPage = () => {
    
    return(
        <div>
            <div className="container">
                <h1 id="work" className="text-center m-3">Work</h1>
                <div className="d-flex">
                <div class="col-6">
                <p>Here we have another ecommerce clothing website. There are a bunch of these on the list, actually. 
                    This particular store is full of colorful patterns on their jackets, shorts, and t-shirts. 
                    So it’s no surprise that their ecommerce website design is full of big bold colors too.
                    They also use a lot of orange, which stands out against the minimalist background of the site.
                </p>
                </div>
                <div class="col-6">
                    <p>Here we have another ecommerce clothing website. There are a bunch of these on the list, actually. 
                        This particular store is full of colorful patterns on their jackets, shorts, and t-shirts. 
                        So it’s no surprise that their ecommerce website design is full of big bold colors too.
                        They also use a lot of orange, which stands out against the minimalist background of the site.
                    </p>
                </div>
                </div>
                
            <Row xs={1} md={4} className="g-4 m-3">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col>
                <Card className="text-center">
                    <Card.Img variant="top" src="https://via.placeholder.com/80px60" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            <h1 id="contact_us" className="text-center m-3">Contact us</h1>
            <Form className="form-horizontal m-5 p-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                <div className="d-flex">
                    <Button variant="primary" className="col w-10" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            </div>
            <footer>
                <div class="footer-copyright text-center d-flex container-fluid">
                    <p class="powered-by"></p><h4>© 2021 GoMyCode Inc. </h4><p></p>
                </div>
            </footer>
            <div id="bliss-large-bubbles"></div>
        </div>
    )
}

export default MainPage;