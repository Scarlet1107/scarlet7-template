import AuthHeader from "@/components/header/AuthHeader";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      <main className="flex w-full flex-1 flex-col items-center justify-center">
        <div className="w-full max-w-sm px-2 md:px-0">{children}</div>
      </main>
    </>
  );
}
