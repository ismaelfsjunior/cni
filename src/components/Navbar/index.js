import React from "react";
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown} from "react-bootstrap";
import './index.scss';
import logo from "../../assets/logo.png";

const Navigation = () => (
    <div>
        <Navbar variant="" expand="lg">
            <Container className="fw-semibold">
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="150"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Magbank"
                />            
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#servicos">Serviços</Nav.Link>
                    <Nav.Link href="#empresa">Empresa</Nav.Link>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                </Nav>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="">
                            <NavDropdown title="Acessos">
                                <NavDropdown.Item href="cadastro">Cadastros</NavDropdown.Item>
                                <NavDropdown.Item href="Gerar_convite">Gerar convite</NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                        <Button variant="btn btn-primary">Converir convite</Button>
                    </ButtonGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    </div>
);

export default Navigation;