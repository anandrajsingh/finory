export const Home = () => {

    const platformData = [
        { label: "Total assets managed", value: "$50M+" },
        { label: "Asset-backed tokens", value: "20+" },
        { label: "Average annual return", value: "3.45%" },
        { label: "User satisfaction rate", value: "90%" },
    ]

    const coins = [
        { name: 'Bitcoin', symbol: 'BTC', price: '$99,021.30', change: '-5.64%', marketCap: '$2.07T', volume: '$44.14B', chartColor: 'red', faded: false, },
        { name: 'Ethereum', symbol: 'ETH', price: '$3,084.92', change: '-7.75%', marketCap: '$371.3B', volume: '$23.44B', chartColor: 'red', faded: false, },
        { name: 'XPR', symbol: 'XPR', price: '$2.85', change: '-8.88%', marketCap: '$282.27B', volume: '$6.78B', chartColor: 'red', faded: false, },
        { name: 'Tether', symbol: 'USDT', price: '$1.00', change: '+0.05%', marketCap: '$141.51B', volume: '$97.7B', chartColor: 'green', faded: false, },
        { name: 'Solana', symbol: 'SOL', price: '$227.77', change: '-11.97%', marketCap: '$134.41B', volume: '$6.52B', chartColor: 'red', faded: false, },
        { name: 'Chainlink', symbol: 'LINK', price: '$23.24', change: '-8.67%', marketCap: '$23.1B', volume: '$777.35M', chartColor: 'red', faded: true, },
    ];

    return (
        <div className="min-h-screen w-full font-sans flex flex-col md:px-10">
            <header className="flex h-20 items-center justify-between w-full">
                <div className="flex items-center gap-10">
                    <div className="flex gap-2">
                        <img src="/logo.png" alt="" className="w-8 h-8 filter invert" />
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
                        <img src="/trading-graph.webp" alt="" className="h-60 w-100" />
                        <img src="/trading-mobile.webp" alt="" className="w-120" />
                        <img src="/bitcoin.jpg" alt="" className="h-70 w-100" />
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
                <section className="flex flex-col w-full my-20 items-center justify-center">
                    <div className="text-center text-7xl font-extrabold w-4xl">Explore 350+ tokens: Bitcoin, Ethereum & more</div>
                    <div className="w-full max-w-6xl mt-20">
                        {coins.map((coin, idx) => (
                            <div key={idx} className={`flex items-center justify-between py-4 text-xl border-b border-gray-800 ${coin.faded ? 'opacity-40' : ''}`}>
                                <div className="flex items-center gap-2 w-1/5">
                                    <span className="text-white">{coin.name}</span>
                                    <span className="text-gray-400 font-bold text-2xl">{coin.symbol}</span>
                                </div>
                                <div className="text-white w-1/5 text-end">{coin.price}</div>
                                <div className={`w-1/5 text-end ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{coin.change}</div>
                                <div className="text-white w-1/5 text-end">{coin.marketCap}</div>
                                <div className="text-white w-1/5 text-end">{coin.volume}</div>
                            </div>
                        ))}
                    </div>
                    <button className="flex bg-white text-black rounded-4xl py-3 px-8 items-center text-lg font-bold">
                        Check crypto prices
                    </button>
                </section>
                <section className="flex flex-col w-full my-20 items-center justify-center">
                    <div className="flex w-full gap-4">
                        <div className="w-3/5 h-fit bg-zinc-900 rounded-3xl p-10 flex flex-col gap-20">
                            <div className="h-3/5 flex justify-center items-center">
                                <div className="bg-zinc-800 p-10 rounded-2xl  w-fit flex flex-col gap-4 items-center">
                                    <img src="/bitcoin.png" alt="" className="h-40 w-40" />
                                    <div className="text-green-300">+2.34%</div>
                                    <div className="flex gap-2">
                                        <button className="flex bg-white text-black rounded-4xl py-3 px-10 items-center text-base font-bold">
                                            Swap
                                        </button>
                                        <button className="flex bg-zinc-700 text-white rounded-4xl py-3 px-10 items-center text-base font-bold">
                                            Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-2/5 flex flex-col gap-3">
                                <div className="text-6xl font-bold px-10 text-start">Crypto bundles</div>
                                <div className="text-2xl px-10 text-start w-3xl">Diversify your investments with pre-curated crypto collections for smarter, streamlined and secure choices.</div>
                            </div>
                        </div>
                        <div className="w-2/5 bg-zinc-900 rounded-3xl flex flex-col">
                            <div className="h-2/5 flex flex-col gap-2 items-center justify-center">
                                <div className="text-6xl font-bold">Cashback rewards</div>
                                <div className="text-2xl text-center">Earn a percentage back when you spend crypto, maximizing rewards.</div>
                            </div>
                            <img src="/girl.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex w-full gap-4">
                        <div className="w-2/5 bg-zinc-900 rounded-3xl flex flex-col">
                        </div>
                    </div>
                </section>
                <section className="flex flex-col w-full my-20 items-center justify-center">
                    <div className="text-7xl text-center font-bold">
                        Stay protected <br />every second
                    </div>
                    <div className="w-full flex gap-4 my-20">
                        <div className="w-2/5 bg-indigo-300 rounded-4xl px-10 py-15">
                            <div className="mb-15 p-8 bg-indigo-400 rounded-full w-fit">
                                <img src="/bell.png" alt="" className="h-16" />
                            </div>
                            <div className="my-8 text-black text-5xl font-extrabold">Real-time alerts</div>
                            <div className="text-black text-3xl">Receive instant notifications for any account-related changes or transactions.</div>
                        </div>
                        <div className="w-3/5 bg-pink-300 rounded-4xl px-10 py-15">
                            <div className="mb-15 p-8 bg-pink-400 rounded-full w-fit">
                                <img src="/security.png" alt="" className="h-16" />
                            </div>
                            <div className="my-8 text-black text-5xl font-extrabold">End-to-end encrytion</div>
                            <div className="text-black text-3xl">All data is encrypted from login, keeping your transactions and personal details safe, secure, and fully private.</div>
                        </div>
                    </div>
                    <div className="w-full flex my-20 rounded-4xl bg-zinc-950">
                        <div className="w-1/2 px-20 flex flex-col justify-center gap-8">
                            <div className="text-7xl font-bold">Take the first step towards smart investments</div>
                            <button className="flex bg-white text-black w-fit rounded-4xl py-4 px-6 items-center  font-bold">
                                Get the app
                            </button>
                        </div>
                        <img src="/colleagues.jpg" alt="" className="w-1/2 overflow-hidden rounded-r-4xl" />
                    </div>
                </section>
            </main>
        </div>
    )
}