import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cadastro from "../views/Cadastro";
import Newpage from "../views/Qrcode/qrcode";
import Formcadastro from "../views/Formcadastro/index";
import Consultacadastro from '../views/Consultacadastro/index';

export default function Rotas() {
    return(
            <Routes>
                <Route path="/" element={<Navbar /> } />
                <Route path="/cadastro" element={ <Cadastro />} />
                <Route path="/Newpage" element={ <Newpage />} /> 
                <Route path="/Newcad" element={ <Formcadastro />} /> 
                <Route path="/consultacadastro" element={ <Consultacadastro />} /> 
            </Routes>
    );
}

