"use client"

import { useRouter } from "next/navigation"

export default function BankLogin() {
    const route = useRouter();
    return (
        <div className="min-h-screen flex flex-col items-center bg-zinc-100">
            <header className="w-full bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <img src="https://static.punemirror.com/full/d14848b6-bec4-4fe2-a783-b07f50027427.webp" alt="HDFC Bank Logo" className="h-12" />
                    <h1 className="text-xl font-semibold">Welcome to HDFC Bank NetBanking</h1>
                </div>
            </header>
            <main className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg mt-8 p-6 w-full max-w-4xl">
                <div className="lg:w-2/3 p-4">
                    <h2 className="text-2xl font-semibold mb-4">Login to NetBanking</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="customer-id" className="block text-sm font-medium text-zinc-700">Customer ID/ User ID</label>
                            <input placeholder="dummy id" type="text" id="customer-id" className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm p-2" />
                            <a href="#" className="text-blue-600 text-sm mt-1 inline-block">Forgot Customer ID</a>
                        </div>
                        <button onClick={() => {
                            route.push('/transfer');
                        }} type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">CONTINUE</button>
                    </div>
                    <div className="bg-blue-100 p-4 mt-4 rounded-md">
                        <p>Dear Customer,</p>
                        <p>Welcome to the new login page of HDFC Bank NetBanking. Its lighter look and feel is designed to give you the best possible user experience. Please continue to login using your customer ID and password.</p>
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Don't have a HDFC Bank Savings Account?</h3>
                    <ul className="space-y-1 mt-2">
                        <li><a href="#" className="text-blue-600">Credit Card only? Login here</a></li>
                        <li><a href="#" className="text-blue-600">HDFC Ltd. Home Loans? Login here</a></li>
                        <li><a href="#" className="text-blue-600">Prepaid Card only? Login here</a></li>
                        <li><a href="#" className="text-blue-600">HDFC Ltd. Deposits? Login here</a></li>
                        <li><a href="#" className="text-blue-600">Retail Loan only? Login here</a></li>
                    </ul>
                </div>
                <div className="lg:w-1/3 p-4 border-l border-zinc-200">
                    <img src="https://netbanking.hdfcbank.com/netbanking/gif/nortonsecurity.png" alt="Norton Secured" className="h-12 mb-4" />
                    <p className="text-zinc-700">Your security is of utmost importance. <a href="#" className="text-blue-600">Know More...</a></p>
                    <h3 className="text-xl font-semibold mt-4">First Time User?</h3>
                    <p><a href="#" className="text-blue-600">Register Now</a> for a host of convenient features</p>
                    <h3 className="text-xl font-semibold mt-4">We have added a host of new features!</h3>
                    <ul className="list-disc list-inside mt-2 text-zinc-700">
                        <li>Anywhere access through Desktop or mobile</li>
                        <li>Enhanced security measures</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}