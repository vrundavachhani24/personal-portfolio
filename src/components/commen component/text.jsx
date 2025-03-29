const Text = ({ title }) => {
    return (
        <div className="flex fade-left">
            <p className="border-l-4"> </p>
            <h1 className="text-4xl font-bold ms-5 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
                {title}</h1>
        </div>
    )
}

export default Text