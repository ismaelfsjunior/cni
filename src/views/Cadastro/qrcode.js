import React from "react";
import QRCode from "react-qr-code";
import {Card, Container, Row, Col} from 'react-bootstrap';
import "./qrcode.scss";
import logo from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';
import down from '../../assets/download.png';

const urlParams = new URLSearchParams(window.location.search);
const cpf = urlParams.get('cpf');

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
                <Card className="d-flex justify-content-center text-center">
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
                        <Col className="pe-5">     
                            <Card.Img 
                                id="Pagereturn" 
                                onClick={cadastro} 
                                className="card-Img" 
                                variant="top" 
                                src={logocdr} 
                            />
                        </Col>
                    </Row>                    
                    <Card.Title className="mt-3 fs-1 fw-bold">Convite Individual</Card.Title>
                        <Card.Text>
                            <p className="mt-2 fs-6 card-text-p">Chegou o final de mais um ano de muito trabalho e sucesso!</p> 
                            <p className="mt-2 px-4 fs-6 card-text-p">Aproveitamos  para agradecer a todos pela incansável dedicação demonstrada ao longo deste ano e desejar a todos um Natal abençoado, repleto de muitas felicidades e um Feliz 2023!</p>
                            <p className="mt-2 px-4 fs-6 card-text-p">Desta forma, Convidamos você para Festa deConfraternização CNI & CDR que se realizará dia 10 de dezembro  de 2022, às 20:00h no El Shaddai Eventos.</p>                            
                        </Card.Text>                    
                <QRCode className="qrcode"
                    value={cpf} 
                    size={256}
                    style={{ height: "26rem",maxWidth: "100%", width: "90%" }}
                    viewBox={`0 0 256 256`}                
                />
                <p className="card-text-p">Ismael Ferreira de sousa Junior</p>
                <Card.Body>
                    <Card.Text>
                        <p className="fs-5 card-text-p">Este convite é pessoal e instransferivel.</p>
                        <p className="mt-2 fs-5 card-text-p">É obrigatória a apresentação do documento com foto.</p>
                        <p className="mt-2 fs-5 card-text-p">Sua presença é indispensável!</p>
                    </Card.Text>
                </Card.Body>
                <Card.Img id="printPageButton" onClick={download} className="d-flex justify-content-center img-footer" src={down}/>
                </Card>
            </div>
        </Container>
    );
};

export default qrcode;