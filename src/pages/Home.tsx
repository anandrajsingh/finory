export const Home = () => {

    const platformData = [
        {label: "Total assets managed", value: "$50M+"},
        {label: "Asset-backed tokens", value: "20+"},
        {label: "Average annual return", value: "3.45%"},
        {label: "User satisfaction rate", value: "90%"},
    ]
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
            <main className="flex flex-col items-center w-full">
                <section className="flex flex-col w-full my-20 items-center justify-center">
                    <div className="text-center text-7xl font-extrabold w-4xl">Take control of your crypto portfolio</div>
                    <div className="flex w-full items-center justify-center my-20 gap-20">
                        <img src="/trading-graph.webp" alt="" className="h-60 w-100"/>
                        <img src="/trading-mobile.webp" alt="" className="w-120"/>
                        <img src="/bitcoin.jpg" alt="" className="h-70 w-100"/>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-7xl">
                        {platformData.map((data, index) => (
                            <div key={index} className="flex flex-col border border-gray-800 justify-center gap-4 py-15 rounded-2xl">
                                <div className="text-6xl font-bold text-center">
                                    {data.value}
                                </div>
                                <p className="text-2xl text-center text-gray-400">
                                    {data.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}