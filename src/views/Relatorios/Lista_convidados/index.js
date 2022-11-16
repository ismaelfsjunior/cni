import React from 'react';
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
//import Impressao from './impressao';
import NavHome from '../../../components/Navbar/index';
import Convidados from './lista';
import { Link } from 'react-router-dom';

const Lista = () => {
    return (
        <>
        <NavHome />
            <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Convidados</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >    
                        <Link to={'/impressao'}>
                            <Button variante='btn btn-danger'>Imprimir</Button>
                        </Link>
                    </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>

            <Convidados />

            </Container>
        </>
    )    

}

export default Lista;