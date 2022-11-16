import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../../../components/Apis/api';

class Listaconv extends Component {

  state = {
    lista: [],
  }

  async componentDidMount() {
    const response = await api.get('lista_entrada.php');

    this.setState({ lista: response.data });
  }

  render() {
    const { lista } = this.state;

    return (
        <div>        
        	{lista.map(list => (
            <li key={list.cadastro.id}>
            <Row className='lg'>
                <Col><p className='mt-0 mb-1'>{list.cadastro.nome + ' CPF: ' + list.cadastro.cpf + ' - ' + list.cadastro.tipo}</p></Col> 
				<hr></hr>  
            </Row>
          </li>
        ))}

		</div>

    );
  };
};

export default Listaconv;