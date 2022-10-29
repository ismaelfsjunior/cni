import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaQrcode } from 'react-icons/fa';
import api from './api';

class App extends Component {

  state = {
    lista: [],
  }

  async componentDidMount() {
    const response = await api.get('lista_evento.php');

    this.setState({ lista: response.data });
  }

  render() {

    const { lista } = this.state;

    return (
      <div>
        <h1>Lista dos convidados</h1>
        {lista.map(list => (
          <li key={list.cadastro.id}>
            <Row className='lg'>
                <Col>
                    <strong>Nome: </strong>
                    <h5>{list.cadastro.nome}</h5>
                </Col> 
                <Col>
                    <strong> CPF </strong>
                    <p>{list.cadastro.cpf}</p>                
                </Col>  
                <Col className='text-center'>
                    <strong> Gerar QRCode </strong>
                    <p><a href={"Newpage?cpf=" + list.cadastro.cpf + "&nome=" + list.cadastro.nome} ><FaQrcode /></a></p>              
                </Col>
                <hr></hr>
            </Row>
          </li>
        ))}
      </div>
    );
  };
};

export default App;