import Navbar from "./navbar.component"
import Footer from "./footer.component"

export default function Layout({children}){
  return (
    <div>
    <Navbar/>
    {children}
  <Footer/>
    </div>
  )
}