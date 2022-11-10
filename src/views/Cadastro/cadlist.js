import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaQrcode } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import api from './api';
import "./cadlist.scss";

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
                    <h5>{list.cadastro.id} - {list.cadastro.nome}<strong> Tipo: </strong>{list.cadastro.tipo}</h5>
                </Col> 
                <Col>
                    <strong> CPF </strong>
                    <p>{list.cadastro.cpf}</p>                
                </Col>  
                <Col className='text-center'>
                    <strong> Gerar QRCode </strong>
                    <p className='qrlist-icon'><a href={"Newpage?cpf=" + list.cadastro.cpf + "&nome=" + list.cadastro.nome + "&id=" + list.cadastro.id} ><FaQrcode /></a></p>              
                </Col>
                <Col className='text-center'>
                    <strong> Deletar </strong>
                    <p className='qrlist-icon'><a href={"http://cninefro.com.br/apidelete/convidado_delete.php?cpf=" + list.cadastro.cpf} ><MdDeleteForever /></a></p>              
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