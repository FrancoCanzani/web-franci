import type { Metadata } from 'next';
import './globals.css';
import { ABeeZee } from 'next/font/google';
import { Toaster, toast } from 'sonner';

const font = ABeeZee({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linda Tú - Franci Derudi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
