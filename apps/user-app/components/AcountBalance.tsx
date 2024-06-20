
import prisma from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../app/lib/auth"
import { OnRampTransactionsperson } from "./Person2Person";
import { OnRampTransactions } from "./OnRampTransactions";


async function Finsuser() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        throw new Error("User not authenticated");
    }

    const user = await prisma.user.findUnique({
        where: {
            id: Number(session.user.id),
        },
        select: {
            name: true,

        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    return user.name;
}

async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0
    }
}

async function getOnRampTransaction() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        },
        include: {
            fromUser: {
                select: {
                    name: true
                },
            },
            toUser: {
                select: {
                    name: true
                }
            }
        }
    })
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        from: {
            id: t.fromUserId,
            name: t.fromUser.name || "",
        },
        to: {
            id: t.toUserId,
            name: t.toUser.name || ""
        }
    }))
}


export default async function Accountbalance() {


    const transaction = await getOnRampTransaction();
    const transactions = await getOnRampTransactions();
    const balance = await getBalance();
    return (
        <div className="min-h-screen  flex">
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-black-600 dark:text-black-400">Good afternoon,{Finsuser()} </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">

                    <div className="lg:col-span-2 bg-white bg-[#ffffff] p-6 rounded-lg shadow">
                        <h2 className="text-black-600  mb-4">Portfolio value</h2>
                        <p className="text-4xl font-bold text-black mb-4">₹{balance.amount / 100}.00</p>
                        <div className="border-t border-zinc-200 dark:border-zinc-700 mt-4 mb-4"></div>
                        <div className="flex justify-between text-zinc-600 dark:text-zinc-400 text-sm">
                            <span>$0.00</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between text-zinc-600 dark:text-zinc-400 text-xs mt-2">
                            <span>20 FEB</span>
                            <span>28 FEB</span>
                            <span>7 MAR</span>
                            <span>15 MAR</span>
                            <span>23 MAR</span>
                        </div>
                        <div className="flex justify-center mt-6">

                        </div>
                        <div className="flex justify-around mt-6">

                        </div>
                    </div>


                    <div >
                        <div>
                            <div >

                                <OnRampTransactionsperson transactions={transactions}></OnRampTransactionsperson>
                            </div>

                        </div>
                    </div>
                    <div >
                        <OnRampTransactions transactions={transaction}></OnRampTransactions>
                    </div>

                </div>
            </div>
        </div>
    )
}