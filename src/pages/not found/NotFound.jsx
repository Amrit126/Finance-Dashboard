import { Header } from "../../components/Header";

export function NotFound() {
    return (
        <>
            <link rel="icon" href="/not-found.png" type="image/png" />
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