import { Outlet } from "react-router-dom"
import { NavBar } from "../navBar/NavBar"

export function Layout() {
    return (
        <div>

            <NavBar />
            <Outlet />

        </div>
    )
}