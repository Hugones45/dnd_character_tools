import { useNavigate } from "react-router-dom"
import metalGnome from "../../assets/metal_gnome.jpeg"
import goblin from "../../assets/goblin.jpg"

export function Characters() {
    //Dentro de characres colocar um inventorio, uma pagina inventorio
    const nagivate = useNavigate()

    return (
        <div className="w-full mx-auto">

            <div className="w-full grid grid-cols-1 px-10 mb-10 gap-10 md:grid-cols-2">

                <div className="flex justify-center flex-col w-full items-center bg-orange-100 p-8 rounded-lg">

                    <div className="flex">
                        <p className="m-2">Current Adventurer</p>
                        <img
                            className="w-36 rounded-full max-w-7xl object-contain border-8 border-purple-900 hover:scale-110 duration-300 cursor-pointer sm:w-52"
                            src={metalGnome} alt="" />
                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <p className="mb-5">Main Allies</p>
                        <div className="flex justify-evenly w-full">

                            <img src={goblin} alt=""
                                className="w-full h-20 mx-[2%] rounded-full max-w-7xl border-4 border-purple-900 hover:scale-110 duration-300 cursor-pointer sm:h-36 md:h-24 lg:h-32"
                            />


                            <img src={goblin} alt=""
                                className="w-full h-20 mx-[2%] rounded-full max-w-7xl border-4 border-purple-900 hover:scale-110 duration-300 cursor-pointer sm:h-36 md:h-24 lg:h-32"
                            />

                            <img src={goblin} alt=""
                                className="w-full h-20 mx-[2%] rounded-full max-w-7xl border-4 border-purple-900 hover:scale-110 duration-300 cursor-pointer sm:h-36 md:h-24 lg:h-32"
                            />
                        </div>




                    </div>

                </div>








                <div className="flex justify-center flex-col w-full items-center bg-slate-300">
                    <p>Classes</p>

                    <p>SubClasses</p>
                </div>



            </div>







            <h2 onClick={() => nagivate("/login")}>Logout</h2>
        </div>
    )
}