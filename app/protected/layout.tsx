import Header from "@/components/Header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
        {children}
      </main>
    </>
  );
}
