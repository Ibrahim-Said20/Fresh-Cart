import AuthNavbar from "../components/Navbar/AuthNavbar"
import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  )
}

export default AuthLayout