import React from "react";
import { Button, Container} from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./index.scss";
import logocni from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';

const Formcad = () => {

      return (
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
                          <h2>Cadastro</h2>  
                          <form name="signup" method="post" action="http://cninefro.com.br/server/cadastro.php">
                              <div className="input-group">
                                  <label htmlFor="nome"> Nome Completo</label>
                                  <input type="text" id="nome" name="nome" placeholder="Digite o seu nome completo" required />
                              </div>
  
                              <div className="input-group">
                                  <label htmlFor="cpf">CPF</label>
                                  <input type="text" id="cpf" name="cpf" placeholder="Digite o seu CPF" required />
                              </div>
  
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="Checkfuncioanrio" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Você funcionario?</label>
                              </div>

                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="Checkconvidado" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Você onvidado?</label>
                              </div>

                              <div>
                                  <Button className="mt-3" variant="success" id="cadastrar" name="cadastrar" type="submit" value="cadastrar">
                                    Salvar
                                  </Button>
                              </div>
                          </form>
                      </div>
                  </div>
                  </Container>
              </div>
          </div>
      )  
}

export default Formcad;