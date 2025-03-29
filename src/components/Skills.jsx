import { Link } from "react-router"
import Header from "./Header"
import Text from "./commen component/text"


const Skills = () => {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="ms-80 m-20 max-sm:ms-10 max-sm:m-10">
                    <Text title={"Skills"} />
                    <div className="skill gap-40 text-xl font-bold mt-10">
                        <div>
                            <h1>Front-End Devlopment</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                                <div className="shadow-lg shadow-red-400 p-9 text-center zoom">
                                    <img src="https://img.icons8.com/ios_filled/512/FA5252/html-5.png" alt="HTML" className="h-20 mx-auto" />
                                    <p>HTML</p>
                                </div>

                                <div className="shadow-lg shadow-blue-500 p-9 text-center zoom">
                                    <img src="https://banner2.cleanpng.com/20180402/csq/avhglk2lr.webp" alt="CSS" className="h-20 mx-auto" />
                                    <p>CSS</p>
                                </div>

                                <div className="shadow-lg shadow-yellow-400 p-5 text-center zoom">
                                    <img src="https://www.stickerpress.in/media/products/800x800/d0d4923641fb40aa89999c705745dc04.jpg" alt="JavaScript" className="h-20 mx-auto" />
                                    <p>JAVASCRIPT</p>
                                </div>

                                <div className="shadow-lg shadow-cyan-400 p-8 text-center zoom">
                                    <img src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" alt="React" className="h-20 mx-auto" />
                                    <p>REACT</p>
                                </div>

                                <div className="shadow-lg shadow-violet-600 p-5 text-center zoom">
                                    <img src="https://logospng.org/download/bootstrap/bootstrap-1024.png" alt="Bootstrap" className="h-20 mx-auto" />
                                    <p>BOOTSTRAP</p>
                                </div>

                                <div className="shadow-lg shadow-teal-600 p-5 text-center zoom">
                                    <img src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" alt="Tailwind" className="h-20 mx-auto" />
                                    <p>TAILWIND</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="tools text-2xl font-bold">Other Tools</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                                <div className="shadow-lg shadow-black p-9 text-center zoom">
                                    <img src="https://ih1.redbubble.net/image.4510478347.3043/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" alt="GitHub" className="h-20 mx-auto" />
                                    <p>GITHUB</p>
                                </div>

                                <div className="shadow-lg shadow-blue-600 p-8 text-center zoom">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQn5XE_6If6mXjL0VIAO1Fzi-emCZPVsNqaw&s" alt="VS Code" className="h-20 mx-auto" />
                                    <p>VS CODE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills