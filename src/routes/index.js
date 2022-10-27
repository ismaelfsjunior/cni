import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cadastro from "../views/Cadastro";
import Newpage from "../views/Cadastro/qrcode";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar /> } />
                <Route path="/cadastro" element={ <Cadastro />} />
                <Route path="/Newpage" element={ <Newpage />} /> 
            </Routes>
        </BrowserRouter>
    );
}
