import AccontProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs/server"

async function Page() {
    const user = await currentUser();

    const userInfor = {};

    const userData = {
        id: user?.id,
        objectId: userInfor?._id,
        userName: userInfor?.userName || user?.username,
        name: userInfor?.name || user?.firstName || "",
        bio: userInfor?.bio || "",
        image: userInfor?.image || user?.imageUrl,
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