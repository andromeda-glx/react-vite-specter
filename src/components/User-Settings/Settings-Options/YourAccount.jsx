import AccountDetailsBlock from "./AccountDetailsBlock";

export default function YourAccount() {
    return (
        <>
            <h1 className="text-xl font-bold mb-2">Your Account</h1>
            <p className="mb-10">See information about your account, download an archive of your data, or learn about your account deactivation options</p>

            <div className="flex flex-col items-center gap-y-5 px-10">
                <div className="w-[200px] h-[200px]">
                    <img className="w-full h-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1610483178766-8092d96033f3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user's profile picture" />
                </div>
                <h2 className="mb-5 text-xl font-semibold">Faran&apos;s Account</h2>
                <ul className="flex flex-col gap-y-3">
                    <AccountDetailsBlock title={"Account information"} />
                    <AccountDetailsBlock title={"Change your password"} />
                    <AccountDetailsBlock title={"Download an archive of your data"} />
                    <AccountDetailsBlock title={"Deactivate your account"} />

                </ul>
            </div>
        </>
    )
}
