import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateSiswa() {

  const [nama, setNama] = useState(" ")
  const [jurusan, setJurusan] = useState(" ")
  const [kelas, setKelas] = useState(" ")


  const BASE_URL = 'https://pwpb-belajar-crud-mongodb-lidya102938.xii-rpl-3.repl.co'
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BASE_URL}/update-siswa/${id}`).then(res => {
      setNama(res.data.nama)
      setJurusan(res.data.jurusan)
      setKelas(res.data.kelas)

    }).catch(error => {
      console.log(error)
    })
  }, [])

  const submitHandler = () => {
    axios.post(`${BASE_URL}/update-siswa/${id}`, {
      nama: nama,
      jurusan: jurusan,
      kelas: kelas
    }).then(res => {
      navigate("/DaftarSiswa")
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h1 className="font-bold text-xl ml-[1050px] pt-14">Input Data Siswa</h1>
      <div className="flex">
        <img src="https://nusantarapedia.net/wp-content/uploads/images-37-27.jpeg" className="w-[300px] h-[300px] ml-[400px]" />
        <form action="" >
          <input type="text" placeholder="nama..." className="rounded-lg bg-gray-200 pr-10 text-gray-500 text-xl mt-12 ml-[250px] pl-4" onChange={(e) => setNama(e.target.value)} value={nama} />
          <input type="text" placeholder="Jurusan..." className="rounded-lg bg-gray-200 pr-10 text-gray-500 text-xl mt-4 ml-[250px] pl-4" onChange={(e) => setJurusan(e.target.value)} value={jurusan} />
          <input type="text" placeholder="Kelas..." className="rounded-lg bg-gray-200 pr-10 text-gray-500 text-xl mt-4 ml-[250px] pl-4" onChange={(e) => setKelas(e.target.value)} value={kelas} />
          <input type="button" value="Update" className="w-[280px] rounded-lg bg-green-500 ml-[250px] mt-4 mb-[153px]" onClick={submitHandler} />
        </form>
      </div>
    </div>
  )
}