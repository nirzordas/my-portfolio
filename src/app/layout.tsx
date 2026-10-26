import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nirzordas.vercel.app"),
  title: "Nirzor Das — Full Stack Software Engineer",
  description:
    "Portfolio of Nirzor Das — Computer Science & Engineering undergraduate at AIUB (CGPA 3.78). Full stack systems, NestJS, Next.js, C#, PostgreSQL, and data-driven problem solving.",
  keywords: [
    "Nirzor Das",
    "Portfolio",
    "Full Stack Developer",
    "AIUB",
    "Software Engineer",
    "Next.js",
    "NestJS",
    "PostgreSQL",
    "Dhaka",
    "Bangladesh"
  ],
  authors: [{ name: "Nirzor Das" }],
  creator: "Nirzor Das",
  openGraph: {
    title: "Nirzor Das — Full Stack Software Engineer",
    description:
      "CSE Undergraduate at AIUB (CGPA 3.78). Full stack systems, Next.js, NestJS, PostgreSQL, C#, and Shannon entropy research.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 600,
        height: 600,
        alt: "Nirzor Das — Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nirzor Das — Full Stack Software Engineer",
    description: "CSE Undergraduate at AIUB (CGPA 3.78). Next.js, NestJS, C#, PostgreSQL.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'light' || (!stored && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
