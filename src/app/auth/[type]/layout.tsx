import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-[calc(100vh-116px)] flex items-center justify-center bg-zinc-50">
        <section className="w-1/2 items-center justify-center p-4 md:flex hidden">
            <div>
                <Image
                src="/images/img-person.png"
                alt="Pessoa mexendo no desktop"
                width={365}
                height={400}
                className="h-auto max-w-full"
                priority={true}
                />
            </div>
        </section>

        <aside className="min-h-full flex items-center justify-center bg-blue-500 p-4 md:w-2/3 w-full md:rounded-l-3xl rounded-none ">
                {children}
        </aside>
    </main>
  );
}