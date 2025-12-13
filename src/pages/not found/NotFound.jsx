import { Header } from "../../components/Header";

export function NotFound() {
    return (
        <>
            <title>Not Found</title>
            <Header />

            <div className="bg-slate-100 flex h-screen justify-center items-center text-xl md:text-5xl
            font-bold flex-col">
                <p>404</p>
                <p>{'Page Not Found :('}</p>
            </div>
        </>
    )
}