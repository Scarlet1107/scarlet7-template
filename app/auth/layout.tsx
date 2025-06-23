import AuthHeader from "@/components/AuthHeader";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
