import { Link } from "react-router"
import Header from "./Header"
import Text from "./commen component/text"


const Projects = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="m-15 ms-70 max-sm:ms-10 max-sm:m-10">
                    <Text title={"Projects"} />
                    <div className="flex gap-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                            <div className="shadow-lg shadow-black rounded-2xl p-5 zoom fade-right">
                                <div className="container">
                                    <Link to='https://vrunda-homedecoration-website.netlify.app/'>
                                        <img src="/images/img.png" alt="Home decoration" className="h-40 w-70 image" />
                                        <div class="middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-lg icon" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <h1 className="text-xl font-bold mt-3">Home Decoration Website</h1>
                                <p className="mt-2">Website made with responsive <br /> and animations.</p>
                                <ul className="p-5">
                                    <li className="list-disc">Html</li>
                                    <li className="list-disc">Css</li>
                                    <li className="list-disc">Bootstrap</li>
                                </ul>
                            </div>

                            <div className="shadow-lg shadow-black rounded-2xl p-5 zoom fade-right">
                                <div className="container">
                                    <Link to='https://todolist-addvalue.netlify.app/'>
                                        <img src="/images/todo.png" alt="To-DoList" className="h-40 w-70 image" />
                                        <div className="middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-lg icon" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <h1 className="text-xl font-bold mt-3">To-Do List</h1>
                                <p className="mt-2">Add in Functionality and new task <br /> add in edit delete </p>
                                <ul className="p-5">
                                    <li className="list-disc">Html</li>
                                    <li className="list-disc">Css</li>
                                    <li className="list-disc">JavaScript</li>
                                </ul>
                            </div>

                            <div className="shadow-lg shadow-black rounded-2xl p-5 zoom fade-right">
                                <div className="container">
                                    <Link to='https://calculator-calculations.netlify.app/'>
                                        <img src="/images/calc.png" alt="Calculator" className="h-40 w-70 rounded-xl image" />
                                        <div class="middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-lg icon" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <h1 className="text-xl font-bold mt-3">Calculator</h1>
                                <p className="mt-2">Add in Calculations and<br /> Functionality</p>
                                <ul className="p-5">
                                    <li className="list-disc">Html</li>
                                    <li className="list-disc">Css</li>
                                    <li className="list-disc">JavaScript</li>
                                </ul>
                            </div>

                            <div className="shadow-lg shadow-black rounded-2xl p-5 zoom fade-right mt-10">
                                <div className="container">
                                    <Link to='https://travelingwebsiteinpackeges.netlify.app/'>
                                        <img src="/images/travelingwebsite.png" alt="To-DoList" className="h-40 w-70 image" />
                                        <div className="middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-lg icon" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <h1 className="text-xl font-bold mt-3">Traveling Website</h1>
                                <p className="mt-2">Website made with responsive <br /> and animations.</p>
                                <ul className="p-5">
                                    <li className="list-disc">Html</li>
                                    <li className="list-disc">Css</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects