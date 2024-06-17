"use client"

import { useRouter } from "next/navigation";

export function FrontPage() {
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/api/auth/signin');
    };

    return (
        <div className="bg-dark-blue text-white min-h-screen flex flex-col">

            <header className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img src="https://faisalpatel-456.github.io/razorpay-clone/assets/logo-803a4a65.svg" alt="Logo" className="h-10" />
                    <nav className=" ml-8 space-x-4 hidden md:flex">
                        <a href="#" className="text-white hover:underline">Payments</a>
                        <a href="#" className="text-white hover:underline">Banking</a>
                        <a href="#" className="text-white hover:underline">Corporate Card</a>
                        <a href="#" className="text-white hover:underline">Payroll</a>
                        <a href="#" className="text-white hover:underline">Resources</a>
                        <a href="#" className="text-white hover:underline">Support</a>
                        <a href="#" className="text-white hover:underline">Pricing</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={handleNavigation} className="text-white border border-white px-4 py-2 rounded">Log in</button>
                    <button onClick={handleNavigation} className="bg-white text-blue-900 px-4 py-2 rounded">Sign up</button>
                </div>
            </header>

            <main className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 flex-grow">
                <div className="max-w-lg mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Power your finance, grow your business</h1>
                    <div className="h-1 w-16 bg-green-500 mb-4"></div>
                    <p className="text-lg mb-8">Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</p>
                    <button onClick={handleNavigation} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">Sign Up Now</button>
                </div>
                <div className="flex-grow">
                    <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1715933362922.png" alt="Finance Illustration" className="w-full h-auto" />
                </div>
            </main>
        </div>
    );
}