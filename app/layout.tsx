import { ModalProvider } from '@/app/context/ModalContext';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <ModalProvider>{children}</ModalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
