export const Home = () => {
    return (
        <div className="min-h-screen w-full font-sans flex flex-col md:px-10">
            <header className="flex h-20 items-center justify-between w-full">
                <div className="flex items-center gap-10">
                    <div className="flex gap-2">
                        <img src="/logo.png" alt="" className="w-8 h-8 filter invert"/>
                        <h1 className="text-3xl font-bold">Finory.</h1>
                    </div>
                    <nav className="text-base space-x-6 font-medium hidden md:flex">
                        <a href="#" className="hover:text-gray-400">Tokens</a>
                        <a href="#" className="hover:text-gray-400">Features</a>
                        <a href="#" className="hover:text-gray-400">Security</a>
                    </nav>
                </div>
                <button className="flex bg-white text-black rounded-4xl py-3 px-5 items-center text-sm font-bold">
                    Get the app
                </button>
            </header>
        </div>
    )
}