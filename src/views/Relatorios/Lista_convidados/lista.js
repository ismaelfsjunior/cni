import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaQrcode } from 'react-icons/fa';
//import { MdDeleteForever } from 'react-icons/md';
import api from '../../../components/Apis/api';
import "./index.scss";

function Tipo(props) {
    let tipo = props
    if(tipo !== 'Acompanhante'){
        return <hr></hr>;
    }else{
        return 
    }
  };

  function Cor(props) {
    let tipo = props
    if(tipo !== 'Acompanhante'){
        return '';
    }else{
        return ' text-warning bg-dark' 
    }
  };  

class Listaconv extends Component {

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
        <Container fluid>
            <Row className='lg'>
                <Col xs={2} lg={1}><strong>Codigo</strong></Col> 
                <Col xs={3} lg={4}><strong>Nome </strong></Col>                 
                <Col lg={3} className='d-none d-sm-block'><strong>CPF </strong></Col>  
                <Col xs={2} lg={1}><strong>Tipo </strong></Col> 
                <Col xs={3} lg={1} className='text-center'><strong>QRCode</strong></Col>
                {/* <Col xs={1} lg={1} className='text-center'><strong>Deletar</strong></Col>                 */}
            </Row>        
        {lista.map(list => (
            <li key={list.cadastro.id}>
              {
                 Tipo(list.cadastro.tipo)
              }
            <Row className='lg list-itens'>
                <Col xs={2} lg={1}><p className='mt-0 mb-1'>{list.cadastro.id}</p></Col> 
                <Col xs={8} lg={4}><h5 className='mt-0 mb-1'>{list.cadastro.nome}</h5></Col> 
                <Col lg={3}><p className='d-none d-sm-block mt-0 mb-1'>{list.cadastro.cpf}</p ></Col>
                <Col xs={12} lg={1}><p className={'mt-0 mb-1' + Cor(list.cadastro.tipo)}>{list.cadastro.tipo}</p></Col>   
                <Col xs={12} lg={1} className='text-center'><p className='qrlist-icon mt-0 mb-1'><a href={"Newpage?cpf=" + list.cadastro.cpf + "&nome=" + list.cadastro.nome + "&id=" + list.cadastro.id} ><FaQrcode /></a></p></Col>
                {/* <Col xs={1} lg={1} className='text-center'><p className='qrlist-icon mt-0 mb-1'><a href={"https://cninefro.com.br/apidelete/convidado_delete.php?cpf=" + list.cadastro.cpf} ><MdDeleteForever /></a></p></Col>                 */}
            </Row>
          </li>
        ))}

        </Container>
    );
  };
};

export default Listaconv;