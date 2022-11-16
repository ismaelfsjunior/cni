import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cadastro from "../views/Cadastro";
import Newpage from "../views/Qrcode/qrcode";
import Formcadastro from "../views/Formcadastro/index";
import Consultacadastro from '../views/Consultacadastro/index';
import ReadQrCode from '../views/ReadQrCode/index';
import Lista from '../views/Relatorios/Lista_convidados/index';
import Impressao from '../views/Relatorios/Lista_convidados/impressao';

export default function Rotas() {
    return(
            <Routes>
                <Route path="/" element={<Navbar /> } />
                <Route path="/cadastro" element={ <Cadastro />} />
                <Route path="/Newpage" element={ <Newpage />} /> 
                <Route path="/Newcad" element={ <Formcadastro />} /> 
                <Route path="/consultacadastro" element={ <Consultacadastro />} /> 
                <Route path="/lerqrcode" element={ <ReadQrCode />} /> 
                <Route path="/lista" element={ <Lista />} /> 
                <Route path="/impressao" element={ <Impressao />} /> 
            </Routes>
    );
}

