// import img from "../assets/specter not found.png"

export default function PageNotFound() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className={`w-[500px] h-[500px] bg-[url(./assets/specter-not-found.png)] bg-contain opacity-80`}>
            </div>
            <h1 className="text-4xl font-bold">404 Page Not Found</h1>
        </div>
    )
}
