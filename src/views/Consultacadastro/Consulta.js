import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaQrcode } from 'react-icons/fa';
import { Button, Col, InputGroup, Row } from 'react-bootstrap';
import './index.scss';
import Validacpf from '../../components/Validarcpf';

export default function Lista () {

    const [cpf, setcpf] = useState({ cpf: '' });
    const [informacoes, setInformacoes] = useState({
        Nome: '',
        cpf: '',
        Codigo: ''
    });

    const getInformacoes = () => {
        axios.get('http://cninefro.com.br/server/apis/consulta_cadastro.php?cpf=' + cpf)
            .then(response => {
                setInformacoes(response.data);
        });
    }

    const handlingcpf = (e) => {
        setcpf(e.target.value);
    }

    useEffect(() => {    
        const el = document.querySelectorAll("div[id=divqrcode]"); 
      
          if (informacoes['cpf'] !== '0' & informacoes['cpf'] !== ''){
            el[0].setAttribute('style', 'display:block');
          }else{
            el[0].setAttribute('style', 'display:none');
          }
        });    
    return (
        <>
            <h1>Consultar QRCode</h1>
            <InputGroup className="mb-3 input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">CPF</span>
                <input type="text" id="cpf" name="cpf" className="form-control" onBlur={Validacpf} onChange={ (e) => { handlingcpf(e) }} placeholder="Digite o cpf" />
            </InputGroup>
            <div id="elbutton" className="elbutton">
                <Button className="mt-3" variant="success" onClick={ getInformacoes }>Pesquisar</Button>
            </div>

            <Row className='lg'>
                <Col>
                    <strong>Nome: </strong>
                    <h5>{ informacoes['nome'] }</h5>
                </Col> 
            </Row>
            <Row>    
                <Col>
                    <strong> CPF </strong>
                    <p>{ informacoes['cpf'] }</p>                
                </Col> 
            </Row>
            <Row>                 
                <Col>
                    <strong> Código </strong>
                    <p>{ informacoes['id'] }</p>                
                </Col> 
            </Row>
            <div id='divqrcode' className='divqrcode'>
            <Row>                                
                <Col className='text-center'>
                    <strong> Ver QRCode </strong>
                    <h1><a href={"Newpage?cpf=" + informacoes['cpf'] + "&nome=" + informacoes['nome'] + "&id=" + informacoes['id']} ><FaQrcode /></a></h1>              
                </Col>               
            </Row>            
            </div>
        </>
    );

}