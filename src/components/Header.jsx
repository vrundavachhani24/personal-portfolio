
import { useState } from "react"
import { Link } from "react-router"

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div className="hidden sm:flex flex-col fixed top-0 left-0 w-60 h-full bg-blue-950 text-white p-10 gap-7 text-center">
                <div className="mt-5">
                    <img src="/images/vphoto4.jpg" className="rounded-full" alt="" />
                    <h1 className="text-xl mt-5 font-bold">Vrunda Vachhani</h1>
                    <h1 className="mt-1 text-sm">React JS. Developer</h1>
                </div>
                <Link to="/Home" className="hover:text-blue-400 text-md"> Home</Link>
                <Link to="/About" className="hover:text-blue-400 text-md"> About</Link>
                <Link to="/Skills" className="hover:text-blue-400 text-md"> Skills </Link>
                <Link to="/Projects" className="hover:text-blue-400 text-md"> Projects</Link>
                <Link to="/Contact" className="hover:text-blue-400 text-md">Contact</Link>
            </div>

            <button
                type="button" onClick={() => setToggle(!toggle)}
                className="sm:hidden fixed top-4 right-4 z-50 text-white bg-blue-950 p-2 rounded-lg border-2 border-white">
                {toggle ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" >
                        <path fillRule="evenodd" d="M2.354 1.646a.5.5 0 0 1 .708 0L8 6.293l4.938-4.939a.5.5 0 0 1 .707.707L8.707 7l4.938 4.938a.5.5 0 0 1-.707.707L8 7.707l-4.938 4.938a.5.5 0 1 1-.707-.707L7.293 7 2.354 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0
                            1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                )}
            </button>

            {toggle && (
                <div className="fixed top-0 left-0 w-full h-full bg-blue-950 bg-opacity-95 z-40 flex justify-center items-center text-white" >
                    <div className="w-full h-full flex flex-col justify-center items-center gap-8 text-center p-10">
                        <Link to="/Home" className="hover:text-blue-400 text-2xl" onClick={() => setToggle(false)}>Home</Link>
                        <Link to="/About" className="hover:text-blue-400 text-2xl" onClick={() => setToggle(false)}>About</Link>
                        <Link to="/Skills" className="hover:text-blue-400 text-2xl" onClick={() => setToggle(false)}>Skills</Link>
                        <Link to="/Projects" className="hover:text-blue-400 text-2xl" onClick={() => setToggle(false)}>Projects</Link>
                        <Link to="/Contact" className="hover:text-blue-400 text-2xl" onClick={() => setToggle(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header