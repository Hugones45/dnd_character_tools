import { NavLink } from "react-router-dom"

export function NavBar() {
    return (
        <div className="w-full bg-blue-100 border-y-4 border-b-red-700 mb-7">


            <div className="w-full max-w-7xl flex justify-around items-center gap-5 mx-auto p-5">
                <NavLink to="/" className='text-2xl'>Character</NavLink>

                <NavLink to="/randomTreasures" className='text-2xl'>Shop</NavLink>

                <NavLink to='/askDragons' className='text-1xl font-semibold md:text-2xl md:font-normal lg:text-2xl '>Ask The Forggoten!</NavLink>

            </div>
        </div>
    )
}