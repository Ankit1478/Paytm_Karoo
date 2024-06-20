import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import { FrontPage } from "../components/Frontpage";
import { AlertfrontPage } from "../components/AlertfrontPage";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    return <div>
      <AlertfrontPage></AlertfrontPage>
      <div>
        <FrontPage></FrontPage>
      </div>
    </div>
  }
}
