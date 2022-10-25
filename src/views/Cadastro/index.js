import React from "react";
import { InputGroup, Form, Container } from "react-bootstrap";
import Navbar from "../../components/Navbar";

const Cadastro = () => (
    <div>
        <Navbar />
        <Container className="mt-4">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                <Form.Control
                aria-label="Nome"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">CPF</InputGroup.Text>
                <Form.Control
                aria-label="CPF"
                aria-describedby="basic-addon2"
                />
            </InputGroup>          
        </Container>
    </div>
);

export default Cadastro;