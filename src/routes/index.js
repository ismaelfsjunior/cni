import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cadastro from "../views/Cadastro";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar /> } />
                <Route path="/cadastro" element={ <Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}
