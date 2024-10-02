import React from "react";
import QRCode from "react-qr-code";
import {Card, Container, Row, Col} from 'react-bootstrap';
import "./qrcode.scss";
import logo from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';
import down from '../../assets/download.png';
import natal from '../../assets/natal2.png';

const urlParams = new URLSearchParams(window.location.search);
const cpf = urlParams.get('cpf');
const nome = urlParams.get('nome');
const numid = urlParams.get('id');

const qrcode = () => {  
    const download = () => {
        window.print();
    };
    const cadastro = () => {
        window.location.href="cadastro";
    };
    return(
        <Container className="">
            <div className="cards">
                <Card className="card--back d-flex justify-content-center text-center">
                <Row className="d-flex justify-content-center">
                        <Col className="ps-5">
                            <Card.Img
                                id="Pagereturn" 
                                onClick={cadastro} 
                                className="card-Img" 
                                variant="top" 
                                src={logo} 
                            />
                        </Col>
                        {/* <Col className="pe-5">     
                            <Card.Img 
                                id="Pagereturn" 
                                onClick={cadastro} 
                                className="card-Img" 
                                variant="top" 
                                src={logocdr} 
                            />
                        </Col> */}
                    </Row>                    
                    <Card.Title className=" fs-1 fw-bold bg-gradient-warning">Convite Individual</Card.Title>
                        <Card.Text>
                            <p className="mt-2 fs-6 card-text-p fw-bold bg-gradient-warning text-white">Chegamos ao final de mais um ano de muito trabalho e mudanças!</p> 
                            <p className="mt-2 px-4 fs-6 card-text-p fw-bold bg-gradient-warning text-white"> 
                                Em ritmo de muitas vitórias, convidamos você para nossa <span className="shadow-sm mb-5 rounded fst-italic fw-bold"><i><string>FESTA DE CONFRATERNIZAÇÃO CNI</string></i></span>,  
                                onde teremos a oportunidade de comemorar mais um ano de 
                                muitas conquistas e dividir as expectativas para o futuro.
                            </p>
                            <p className="mt-2 px-4 fs-6 card-text-p fw-bold bg-gradient-dark text-white">Será dia 30 de Novembro de 2024, a partir das 20:00h no</p>
                            <p className="mt-2 px-4 fs-6 card-text-p fw-bold bg-gradient-dark text-white">El Shaddai Eventos.</p>
                            {/* <p className="px-2 fs-2 card-text-p fw-bold bg-gradient-warning text-white">El Shaddai Eventos.</p>                             */}
                        </Card.Text>                    
                <QRCode className="qrcode"
                    value={cpf} 
                    size={256}
                    style={{ height: "16rem",maxWidth: "100%", width: "90%" }}
                    viewBox={`0 0 256 256`}                
                />
                <p className="pt-2 card-text-p fw-bold bg-gradient-warning text-white">{numid} - {nome}</p>
                <Card.Body className="">
                    <Card.Text>
                        <p className="fs-5 card-text-p fw-bold bg-gradient-warning text-white">Este convite é pessoal e intransferível.</p>
                        <p className=" fs-5 card-text-p fw-bold bg-gradient-warning text-white">É obrigatória a apresentação do documento com foto.</p>
                        <p className="mt-2 fs-5 card-text-p fw-bold bg-gradient-warning text-white">Sua presença é indispensável!</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img id="printPageButton" onClick={download} className="d-flex justify-content-center img-footer" src={down}/>
                </Card>
            </div>
        </Container>
    );
};

export default qrcode;