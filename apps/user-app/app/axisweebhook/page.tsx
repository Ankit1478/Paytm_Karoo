"use client";

import { useRouter } from "next/navigation";

export default function Axislogin() {
    const route = useRouter();
    return (
        <div className="bg-pink-700 min-h-screen flex flex-col items-center justify-center">
            <div className="text-white text-3xl font-bold mb-8">Axis Bank Internet Banking</div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-pink-700 text-xl font-bold mb-4">Customer ID</div>

                <div className="mb-4">
                    <input type="text" placeholder="Customer ID" className="w-full p-2 border border-zinc-300 rounded" />
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Password" className="w-full p-2 border border-zinc-300 rounded" />
                </div>
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="virtualKeyboard" className="mr-2" />
                    <label htmlFor="virtualKeyboard" className="text-pink-700">Use Virtual Keyboard</label>
                </div>
                <div className="mb-4">
                    <button onClick={() => {
                        route.push('/transfer')
                    }} type="submit" className="w-full bg-pink-700 text-white p-2 rounded border-2 border-white hover:bg-pink-800">Login</button>
                </div>
                <div className="text-center text-sm text-pink-700">
                    <a href="#" className="mr-2">First time user? Register</a>
                    <a href="#" className="mr-2">Forgot Password?</a>
                    <a href="#">Enable Login ID</a>
                </div>
            </div>
        </div>
    )
}