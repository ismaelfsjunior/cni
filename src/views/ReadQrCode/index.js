import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import { FaCheckCircle } from 'react-icons/fa';

const Qrscan = (props) => {
  const [cpf, setCPF] = useState('No result');
  const [informacoes, setInformacoes] = useState({
      Nome: '',
      cpf: '',
      Codigo: ''
  });


    const getInformacoes = (props) => {
      axios.get('https://cninefro.com.br/server/apis/consulta_cadastro.php?cpf=' + props)
          .then(response => {
              setInformacoes(response.data);  
      });
    };

  return (
    <Container>
      <QrReader
        constraints={{
        facingMode: 'environment'
        }}
        onResult={(result, error) => {
          if (!!result) {
            setCPF(result?.text);
            getInformacoes(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      {console.log(cpf)}
      <div className='ms-4 me-4'>
        <h1 className='mt-5'>Dados do convidado!</h1>
              <Row className='lg'>
                  <Col>
                      <strong>Nome: </strong>
                      <h5>{ informacoes['nome'] }</h5>
                  </Col> 
              </Row>
              <Row>    
                  <Col>
                      <strong> CPF </strong>
                      <h1>{ informacoes['cpf'] }</h1>                
                  </Col> 
              </Row>
              <Row>                 
                  <Col>
                      <strong> Código </strong>
                      <h1>{ informacoes['id'] }</h1>                
                  </Col> 
              </Row>
              <Row>                 
                  <Col>
                      <strong> Status </strong>
                      <h1 className='fs-1 fw-bold'>{ informacoes['conferido'] }</h1>                
                  </Col> 
              </Row>  
              <Row>                 
                  <Col>
                    <Button type="button" className="btn btn-success" href={'https://cninefro.com.br/apidelete/confirma_entrada.php?cpf=' + informacoes['cpf'] }>Confirmar</Button>                                 
                  </Col> 
              </Row>                           
      </div>
    </Container>
  );
};

export default Qrscan;