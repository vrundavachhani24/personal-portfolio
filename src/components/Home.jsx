import { Link } from "react-router"
import Header from "./Header"

const Home = () => {
    return (
        <div>
            <Header />
            <div className="ms-80 m-40 max-sm:ms-10 max-sm:m-10">
                <p className="text-3xl font-bold flex gap-2 max-sm:text-lg max-sm[590]:text-sm fade-up delay-1"> <p className=" text-3xl max-sm:text-lg max-sm[590]:text-sm font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent"> Hello </p>  it's me.</p>
                <p className="min-[500px]:text-6xl text-3xl font-bold mt-3 fade-up delay-2">Vrunda Vachhani</p>
                <p className="text-4xl font-bold mt-3 fade-up delay-3">I'm <span className="text-5xl max-xl:text-4xl bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent"> Developer</span></p>
                <div className="mt-5 fade-up delay-4">
                    <a href="vrundavachhani.pdf" download='VRUNDA_VACHHANI'>
                        <button type="submit" className=" flex gap-3 p-4 cursor-pointer bg-blue-950 text-white font-bold rounded-4xl bg-linear-to-t from-sky-700 to-indigo-900 hover:bg-black hover:bg-none max-sm:w-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                            </svg>
                            Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home