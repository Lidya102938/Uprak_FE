import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav className="bg-green-600 h-14">
        <h1 className="font-bold text-3xl">SchoolW</h1>

        <div className="flex justify-end mt-[-35px] mx-10 space-x-4 font-bold pt-2">
          <Link to="/">Home</Link>
          <Link to="DaftarSiswa">Daftar Siswa</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}