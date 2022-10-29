import React from "react";
import { Container} from "react-bootstrap";
import Navbar from "../../components/Navbar";
import Cadlist from "./cadlist";

const Cadastro = () => {
 
    return (
    <div>
        <Navbar />  
        <Container>               
            <div className="stock-container">                
                <Cadlist />            
            </div>   
        </Container>
    </div>
    );
    
};

export default Cadastro;