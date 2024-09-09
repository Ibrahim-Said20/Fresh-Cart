import Navbar from "../components/Navbar/Navbar"
import { Outlet } from "react-router"

function MainLayout() {
  return (
    <>
<div className="px-10">
<Navbar />
      <Outlet/>
</div>
    </>
  )
}

export default MainLayout