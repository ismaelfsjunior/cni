import React, { useState} from "react";
import { InputGroup, Form, Container } from "react-bootstrap";
import Navbar from "../../components/Navbar";

const Cadastro = () => {
    const [values, setValues] = useState();
     console.log(values);
    const handleChangeValues = (value) => {
        setValues(prevValue=>({
            ...prevValue,
            [value.target.name]: value.target.value    
        }));
    };

    const handleClickbutton = () => {
        console.log(values);
    };

    return (
    <div>
        <Navbar />
        <Container className="mt-4">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Nome</InputGroup.Text>
                <Form.Control
                aria-label="Nome"
                aria-describedby="basic-addon1"
                type="text"
                name="name"
                onChange={handleChangeValues}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">CPF</InputGroup.Text>
                <Form.Control
                aria-label="CPF"
                aria-describedby="basic-addon2"
                type="text"
                name="cpf"
                onChange={handleChangeValues}                
                />
            </InputGroup> 
            <button className="btn btn-primary" onClick={() => handleClickbutton()}>Gravar</button>         
        </Container>
    </div>
    );
};

export default Cadastro;