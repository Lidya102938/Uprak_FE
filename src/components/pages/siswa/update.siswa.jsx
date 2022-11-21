export default function UpdateSiswa() {
  return (
    <div>
      <h1 className="font-bold text-xl ml-[1050px] pt-14">Input Data Siswa</h1>
      <div className="flex">
        <img src="https://nusantarapedia.net/wp-content/uploads/images-37-27.jpeg" className="w-[300px] h-[300px] ml-[400px]" />
        <form action="">
          <input type="text" value="nama..." className="rounded-lg bg-gray-200 pr-10 text-gray-500 text-xl mt-12 ml-[250px] pl-4" />
          <input type="text" value="Jurusan..." className="rounded-lg bg-gray-200 pr-10 text-gray-500 text-xl mt-4 ml-[250px] pl-4" />
          <input type="text" value="Kelas..." className="rounded-lg bg-gray-200 pr-10 text-gray-500 text-xl mt-4 ml-[250px] pl-4" />
          <input type="button" value="Update" className="w-[280px] rounded-lg bg-green-500 ml-[250px] mt-4 mb-[153px]" />
        </form>
      </div>
    </div>
  )
}