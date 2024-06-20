import { getServerSession } from "next-auth";
import { OnRampTransactionsperson } from "../../../components/Person2Person";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { Prisma } from "@prisma/client";
import { Alert } from "../../../components/Alert";

type P2PTransfer = Prisma.p2pTransferGetPayload<{
    include: {
        fromUser: {
            select: {
                name: true;
            };
        };
        toUser: {
            select: {
                name: true;
            };
        };
    };
}>;

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        throw new Error("User not authenticated");
    }

    const txns: P2PTransfer[] = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session.user.id)
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
    });

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
    }));
}

export default async function CenteredCards() {
    let transactions: { time: Date; amount: number; from: { id: number; name: string; }; to: { id: number; name: string; }; }[] = [];
    try {
        transactions = await getOnRampTransactions();
    } catch (error) {
        console.error("Failed to fetch transactions:", error);
    }

    return (
        <div>
            <Alert></Alert>
            <div className="flex items-center justify-center h-screen">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <SendCard />
                    </div>
                    <div>
                        <OnRampTransactionsperson transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    );
}