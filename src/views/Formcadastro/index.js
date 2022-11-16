import React, { useEffect, useState } from "react";
import { Button, Container} from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./index.scss";
import logocni from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';
import Validacpf from "../../components/Validarcpf";

const Formcad = () => {
  const [selectValue, setSelectValue] = useState('');  
  const list = [
    {id: '', name: 'Selecione uma opção'},
    {id: 1, name: 'Funcionario'},
    {id: 2, name: 'Prestador de serviços'},
    {id: 3, name: 'Convidado'},
    {id: 4, name: 'Acompanhante'},
  ];

  useEffect(() => {    
  const el = document.querySelectorAll("div[id=divcodpai]"); 

    if (selectValue === '4'){
      el[0].setAttribute('style', 'display:block');
      document.getElementById("idpai").required = true;
    }else{
      el[0].setAttribute('style', 'display:none');
      document.getElementById("idpai").required = false;
    }
  });
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
                          <form name="signup" method="post" action="https://cninefro.com.br/server/cadastro.php">
                              <div className="input-group">
                                  <label htmlFor="nome"> Nome Completo</label>
                                  <input type="text" id="nome" name="nome" placeholder="Digite o seu nome completo" required />
                              </div>
  
                              <div className="input-group">
                                  <label htmlFor="cpf">CPF</label>
                                  <input type="text" id="cpf" name="cpf" placeholder="Digite o seu CPF" onBlur={Validacpf} required />
                              </div>
  
                              <select className="input-group"  value={selectValue} onChange={e => setSelectValue(e.target.value)} id="tipo" name="tipo"  required>
                                {list.map((item, index) => (
                                  <option key={index} value={item.id}>{item.name}</option>
                                ))}        
                              </select>                              
                              <div className="divcodpai input-group" id="divcodpai">
                                  <label>Codigo convidado no qrcode</label>
                                  <input type="text" id="idpai" name="idpai" placeholder="codigo convidado" />
                              </div>
                              <div id="elbutton" className="elbutton">
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