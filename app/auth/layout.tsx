import AuthHeader from "@/components/header/AuthHeader";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AuthHeader />
            <div className="flex flex-col flex-1 w-full items-center justify-center">
                <div className="w-full max-w-sm">{children}</div>
            </div>
        </>
    );
}
