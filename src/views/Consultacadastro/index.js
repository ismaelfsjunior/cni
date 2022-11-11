import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import '../Formcadastro/index.scss';
import logocni from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';
import Consulta from './Consulta';

const Consultacadastro = () => {

    return(
        <div>
        <Navbar />
        <div className="bg_formcad">
            <Container>
            <div className="box">
                <div className="img-box">
                    <img src={logocni} alt="" />
                </div>
                <div className="img-box">    
                    <img src={logocdr} alt="" />
                </div>
                <div className="form-box">
                    <Consulta />    
                </div>
            </div>
            </Container>
        </div>
    </div>
    );
};

export default Consultacadastro;
