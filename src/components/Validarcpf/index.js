
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

  export default Validacpf;