import {useState} from "react"
import axios from "axios"
export default function Input() {
  const [nama, setName] = useState("")
  const [jurusan, setJurusan] = useState("")
  const [kelas, setKelas] = useState("")

  const submitHandler=()=>{
    axios.post("https://pwpb-belajar-crud-mongodb-lidya102938.xii-rpl-3.repl.co/submit-siswa",{
      nama:nama,
      jurusan:jurusan,
      kelas:kelas}).then(res=>{
      alert("Berhasil")
      }).catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className="bg-green-500 h-[450px] mt-14">
      <h1 className="font-bold text-xl ml-[250px] pt-8">Input Data Siswa</h1>
      <div className="bg-green-400 h-[300px] mt-4 w-[950px] mx-[250px] py-[45px] px-8 flex space-x-10" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LfvaYDHuNc3D98ShdfiUpYrJzI8WfC3IgA&usqp=CAU" className="w-80 rounded-xl"></img>
        <form action="" className="space-y-2 pt-[30px]">
          <input type="text" placeholder="Nama..." className="w-[300px] rounded-sm" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Jurusan..." className="w-[300px] rounded-sm" onChange={(el) => setJurusan(el.target.value)} />
          <input type="text" placeholder="kelas..." className="w-[300px] rounded-sm" onChange={(el)=> setKelas(el.target.value)}/>
          <input type="button" value="Simpan" className="w-[300px] rounded-xl bg-green-200" onClick={submitHandler} />

        </form>
      </div>



    </div>
  )
}