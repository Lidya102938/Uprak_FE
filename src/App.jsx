import './App.css'
import Home from "./components/pages/home/home.page.component"
import MainLayout from "./components/layouts/main.layout.component"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DaftarSiswa from "./components/pages/siswa/siswa.page.component"
import UpdateSiswa from "./components/pages/siswa/update.siswa"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="DaftarSiswa" element={<DaftarSiswa/>}/>
          <Route path='UpdateSiswa' element={<UpdateSiswa/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
