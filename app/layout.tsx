// @ts-ignore: allow side-effect import of global CSS without explicit type declarations
import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ritun-panigrahi.vercel.app'),
  title: 'Ritun Panigrahi | VLSI & FPGA Engineer',
  description:
    'Portfolio of Ritun Panigrahi, Electronics and Telecommunication Engineering graduate specializing in VLSI, FPGA, RTL design, Verilog HDL, embedded systems, and digital hardware design.',
  keywords: [
    'VLSI Engineer',
    'FPGA Engineer',
    'RTL Design',
    'Verilog HDL',
    'Embedded Systems',
    'Ritun Panigrahi',
    'Electronics Engineer',
    'Semiconductor',
    'CMOS',
    'Digital Design',
  ],
  authors: [{ name: 'Ritun Panigrahi' }],
  openGraph: {
    title: 'Ritun Panigrahi | VLSI & FPGA Engineer',
    description:
      'Electronics and Telecommunication Engineering graduate specializing in VLSI, FPGA, RTL design, Verilog HDL, embedded systems, and digital hardware design.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritun Panigrahi | VLSI & FPGA Engineer',
    description:
      'Electronics and Telecommunication Engineering graduate specializing in VLSI, FPGA, RTL design, Verilog HDL, embedded systems, and digital hardware design.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-bg text-white/90">
        {children}
      </body>
    </html>
  );
}
