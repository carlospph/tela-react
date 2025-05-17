// import { BrowserRouter, Routes } from "react-router-dom";
// import { Home } from "../pages/Home";
// import { Sobre } from "../pages/Sobre";
// import { Produtos } from "../pages/Produtos";
// import { Header } from "../components/header/Header";


// export const Paths = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Header />
//                 <Route path="/" element={<Home />} />
//                 <Routes path="/sobre" element={<Sobre />} />
//                 <Route path="/produtos" element={<Produtos />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Produtos } from "../pages/Produtos";
import { Header } from "../components/header/Header";

export const Paths = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}