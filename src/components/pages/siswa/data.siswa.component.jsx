import { useState, useEffect } from "react"
import axios from "axios"
import { MdDelete, MdUpdate } from "react-icons/md"

export default function dataSiswa() {
  const [datas, setDatas] = useState([])
  const BASE_URL = 'https://pwpb-belajar-crud-mongodb-lidya102938.xii-rpl-3.repl.co'

  useEffect(() => {
    axios.get(`${BASE_URL}/`).then(res => {
      setDatas(res.data)
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }, [])


  const deleteHandler = (id) => {
    axios.get(`${BASE_URL}/delete-siswa/${id}`).then(res => {
      axios.get(`${BASE_URL}/`).then(res => {
        setDatas(res.data)
      }).catch(error => {
        console.log(error)
      })
    }).catch(error => {
      console.log(error.message)
    })
  }


  const updateHandler = (id) => {
    axios.post(`${BASE_URL}/update-siswa/${id}`).then(res => {
      axios.get(`${BASE_URL}/`).then(res => {
        setDatas(res.data)
      }).catch(error => {
        console.log(error)
      })
    }).catch(error => {
      console.log(error.message)
    })
  }

  return (
    <div className="bg-green-500 h-[650px] mt-14 ">
      <h1 className="text-black text-2xl pl-[200px] font-bold pt-10"> Data Siswa</h1>

      <div className="bg-green-400 w-[900px] mx-[200px] h-[400px] mt-4">

        <div class="overflow-x-auto relative px-[50px] pt-[20px]">
          <table class="w-full text-sm text-left text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="py-3 px-6">
                  No
                </th>
                <th scope="col" class="py-3 px-6">
                  Nama
                </th>
                <th scope="col" class="py-3 px-6">
                  Jurusan
                </th>
                <th scope="col" class="py-3 px-6">
                  Kelas
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {datas.map((el, idx) => {
                return (

                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={el._id}>
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {idx + 1}
                    </th>
                    <td class="py-4 px-6">
                      {el.nama}
                    </td>
                    <td class="py-4 px-6">
                      {el.jurusan}
                    </td>
                    <td class="py-4 px-6">
                      {el.kelas}
                    </td>
                    <td class="py-4 px-6 space-x-4">
                      <button onClick={() => deleteHandler(el._id)} className="font-medium text-red-600">  <MdDelete size={20} />
                      </button>
                      <button onClick={() => updateHandler(el._id)} className="font-medium text-blue-500">  <MdUpdate size={20} />
                      </button>
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}