import React from "react";
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown} from "react-bootstrap";
import './index.scss';
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => (
    <div>
        <Navbar variant="" expand="lg">
            <Container className="fw-semibold">
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="100"
                    className=""
                    alt="CNI"
                />            
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#servicos">Serviços</Nav.Link>
                    <Nav.Link href="#empresa">Empresa</Nav.Link>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                    {/* <Nav.Link href="Newcad">Cadastro Confraternização</Nav.Link> */}
                    <Button href="Newcad" variant="btn btn-primary">Cadastro Confraternização</Button>
                    <Nav.Link href="#contato">.</Nav.Link>
                    <Button href="consultacadastro" variant="btn btn-secondary">Consultar Qrcode</Button>
                    <Nav.Link href="#contato">.</Nav.Link>                    
                </Nav>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="">
                            <NavDropdown title="Acessos">
                                <NavDropdown.Item href="#cadastro">Cadastros</NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                        <Link to={'lerqrcode'}>
                            <Button variant="btn btn-success">Converir convite</Button>
                        </Link>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    </div>
);

export default Navigation;