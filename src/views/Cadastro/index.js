import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import { stockData } from "../../db/data";

const Cadastro = () => {
  
    // const qrcode = () => {       
    //     const cp1 = document.querySelector("#cpf2").value;
    //     console.log('este é cp1: ' + cp1);
    //         const cpf = '00'
    //         console.log('este é o cpf 2:'+ cpf);

    //     return(
    //         window.open('Newpage?cpf='+cpf, '_blank')
    //     );
    // };
    return (
    <div>
        <Navbar />  
        <Container>               
            <div className="stock-container">
                <h1> Lista dos convidados </h1>
                {stockData.map((data, key) => {
                    return (
                       <Row> 
                            <Col id="id" className="col-lg-2 gap-5" key={key}>
                            {data.id +
                                " Nome: " +
                                data.nome}
                            </Col>
                            <Col>
                            <div>
                            <a href={"Newpage?cpf=" + data.cpf}>QRCode</a>
                             </div> 
                            </Col>
                            <hr/>  
                        </Row>                      
                    );
                })}
            </div>            
        </Container>
    </div>
    );
    
};



export default Cadastro;