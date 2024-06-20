"use client"
import { useState } from 'react';


export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row h-screen  bg-zinc-100">
            <button
                className="md:hidden  p-3 bg-zinc-800 text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                }
            </button>


            <div className={`w-full md:w-64 bg-zinc-800 text-white flex flex-col ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex items-center justify-center h-20 border-b border-zinc-700">
                    <img src="https://placehold.co/40x40" alt="User" className="rounded-full mr-2" />
                    <div>
                        <div className="font-bold">Ankit Verma</div>
                        <div className="text-sm">Welcome to out wallet</div>
                    </div>
                </div>
                <div className="p-4">

                </div>
                <div className="flex-1 p-4">
                    <ul>
                        <li className="mb-4">
                            <a href="/dashboard" className="flex items-center p-2 hover:bg-zinc-700 rounded">
                                <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="/transfer" className="flex items-center p-2 hover:bg-zinc-700 rounded">
                                <i className="fas fa-cube mr-2"></i> Add to Wallet
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="/p2p" className="flex items-center p-2 hover:bg-zinc-700 rounded">
                                <i className="fas fa-edit mr-2"></i> Bank transfer
                            </a>
                        </li>

                    </ul>
                </div>
            </div>


            <div className="flex-1 p-4">

            </div>
        </div>
    );
}
