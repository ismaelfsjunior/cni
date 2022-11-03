import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Container} from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./index.scss";
import logocni from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';
import { cpf } from "cpf-cnpj-validator";
import {MdPersonAddAlt1} from 'react-icons/md';

const Formcad = () => {
  const [acompanhante, setAcompnhante] = useState([]);
  const Schema = yup.object({
    CPF: yup
      .string()
      .required("CPF é requeido!")
      .test((value) => cpf.isValid(value))
  });

  const addInputButton = (e) => {
    e.preventDefault();
    setAcompnhante([...acompanhante, ""]);
  }
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
                          <Formik
                            initialValues={{ CPF: "" }}
                            validationSchema={Schema}
                          >  
                          <form name="signup" method="post" action="cadastro.php">
                              <div className="input-group">
                                  <label htmlFor="nome"> Nome Completo</label>
                                  <input type="text" id="nome" name="nome" placeholder="Digite o seu nome completo" required />
                              </div>
  
                              <div className="input-group">
                                  <label htmlFor="cpf">CPF</label>
                                  {/* <input type="text" id="cpf" name="CPF" placeholder="Digite o seu CPF" required /> */}
                                  <Field name="CPF" placeholder="Number CPF" />
                                  <ErrorMessage component="div" name="CPF" />
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
                                  <p>Incluir acompanhantes</p>
                                  <p className='qrlist-icon' onClick={addInputButton}><i><MdPersonAddAlt1 /></i></p>                                   
                              </div>

                              {
                                acompanhante.map((acompanhantes, index) => (
                                <div key={index}>
                                  <div className="input-group">
                                      <label htmlFor="nome"> {`Nome Completo ${index+1}`}</label>
                                      <input type="text" id={`acompanhantes ${index+1}`} name={`acompanhantes ${index+1}`} placeholder="Digite o seu nome completo" required />
                                  </div>
      
                                  <div className="input-group">
                                      <label htmlFor="cpf">{`CPF ${index+1}`}</label>
                                      <Field name={`CPF ${index+1}`} placeholder="Number CPF" />
                                      <ErrorMessage component="div" name="CPF" />
                                  </div>
                                </div>  
                                ))
                              }

                              <div className="input-btn input-group">   
                                  <input id="cadastrar" name="cadastrar" type="submit" value="Cadastrar" disabled />
                              </div>
                          </form>
                        </Formik>
                      </div>
                  </div>
                  </Container>
              </div>
          </div>
      )  
}

export default Formcad;