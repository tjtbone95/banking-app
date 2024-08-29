import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset flex items-center justify-center w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/icons/auth-image-landscape.svg"
            alt="Auth image"
            layout="fill"
            objectFit="cover" // or "cover", "fill" depending on the desired behavior
          />
        </div>
      </div>
    </main>
  );
}
