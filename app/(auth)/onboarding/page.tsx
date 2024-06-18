import AccontProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

async function Page() {
    const user = await currentUser();
    if (!user) return null
    const userInfor = await fetchUser(user?.id)
    if (userInfor?.onboarded) return redirect("/")

    const userData = {
        id: user?.id,
        objectId: userInfor?._id,
        userName: userInfor ? userInfor?.userName : user?.username,
        name: userInfor ? userInfor?.name : user?.firstName || "",
        bio: userInfor ? userInfor?.bio : "",
        image: userInfor ? userInfor?.image : user?.imageUrl,
    }
    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete your profile to get started with Threads.
            </p>

            <section className="mt-9 bg-dark-2 p-10">
                <AccontProfile
                    user={userData}
                    btnTitle="Continue" />
            </section>
        </main>
    )
}

export default Page