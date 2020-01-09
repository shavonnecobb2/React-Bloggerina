import React from 'react';
import { BlogEntryList } from './BlogEntryList';
import { BlogEntryRepository } from '../api/BlogEntryRepository';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';


export class Homepage extends React.Component {

    blogEntryRepository = new BlogEntryRepository();

    state = {
        entries: []
    };

    render() {
        return <>
            <Container fluid="true">
                <Row className="d-flex justify-content-center align-items-center shav-header">
                    <Col>
                        <Navbar expand="lg" id="shav-links">
                            <Navbar.Brand href="#home">
                                <img
                                    alt=""
                                    src="https://i.imgur.com/a1JTXXB.png"
                                    width="350"
                                    height="100"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" id="shav-nav" fill>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-dark">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>

                {/* <Row>
                    <Col id="shav-img-container">
                    <Image src="https://i.imgur.com/Dhj3wTX.jpg" id="shav-image" fluid/>
                    </Col>
                </Row> */}


                <Row>
                    <Col>
                        <BlogEntryList entries={this.state.entries} />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center shav-create-btn">
                    <Button href="/create" variant="outline-dark" size="lg">Create New Entry</Button>
                    </Col>
                </Row>

                {/* footer section */}
                <Container className="shav-footer">
                    <Row>
                        <Col>
                            <Navbar expand="lg" sticky="bottom">
                                <Navbar.Brand href="#home">
                                    Bloggerina&#8482;
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" id="shav-nav">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    }

    componentDidMount() {
        this.blogEntryRepository.getAllBlogEntries()
            .then(entries =>
                this.setState({
                    entries: entries
                }));
    }
}