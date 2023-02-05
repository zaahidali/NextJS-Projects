import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        {children}
      </body>
    </html>
  );
}
