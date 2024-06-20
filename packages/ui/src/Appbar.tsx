import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <nav className="flex items-center justify-between p-4 bg-[#27272a]">
        <div className="text-xl font-bold text-black dark:text-white">Wallet</div>
        <div className="flex space-x-4">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </nav>
}