import React, { useEffect, useState } from "react";
import { Button, Container} from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./index.scss";
import logocni from '../../assets/logo.png';
import logocdr from '../../assets/logo-cdr.png';

const Formcad = () => {
  const [selectValue, setSelectValue] = useState('');  
  const list = [
    {id: '', name: 'Selecione uma opção'},
    {id: 1, name: 'Funcionario'},
    {id: 2, name: 'Prestador de serviços'},
    {id: 3, name: 'Convidado'},
    {id: 4, name: 'Acompanhante'},
  ];

  const Validacpf = () => {
    const elbutton = document.querySelectorAll("div[id=elbutton]"); 
    let strCPF = document.getElementById("cpf").value;
    let Soma;
    let Resto;
    let ok = 'S';
    strCPF = strCPF.replace(/\D/g, ''); // Permite apenas números
    if(strCPF){
      Soma = 0;
      if (strCPF === "00000000000") {
        ok = 'N';
      }
      let i;
      for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
  
      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) {
        ok = 'N'
      }
  
      Soma = 0;
      for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
  
      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(10, 11))) {
        ok = 'N'
      }
      if(ok === 'N'){
        alert("O campo cpf é inválido! Preencha com um CPF válido por favor.");
        elbutton[0].setAttribute('style', 'pointer-events:none');
      }else{
        elbutton[0].setAttribute('style', 'pointer-events:visible');
      }
    }
  };

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
                          <form name="signup" method="post" action="http://cninefro.com.br/server/cadastro.php">
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