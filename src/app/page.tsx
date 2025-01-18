import Todos from "@/components/Todos";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center font-sans">
            <h1 className="text-5xl text-center">TODOS :- </h1>
            <Todos />
        </div>
    );
}
