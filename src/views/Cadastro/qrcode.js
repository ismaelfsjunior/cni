import React from "react";
import QRCode from "react-qr-code";
import {Card, Container} from 'react-bootstrap';
import "./qrcode.scss";
import logo from '../../assets/logo.png';

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
                <Card.Img id="Pagereturn" onClick={cadastro} className="d-flex justify-content-center card-Img" variant="top" src={logo} />    
                <QRCode className="qrcode"
                    value={cpf} 
                    size={256}
                    style={{ height: "35rem", maxWidth: "100%", width: "100%" }}
                    viewBox={`0 0 256 256`}                
                />
                <Card.Body>
                    <Card.Title>Convite Individual</Card.Title>
                    <Card.Text>
                        Este convite é pessoal e instransferivel!
                    </Card.Text>
                </Card.Body>
                <Card.Img id="printPageButton" onClick={download} className="d-flex justify-content-center img-footer" src={logo}/>
                </Card>
            </div>
        </Container>
    );
};

export default qrcode;