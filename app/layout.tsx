import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const publicBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName
    ? `/${repositoryName}`
    : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "임보현 — 조선대학교 컴퓨터공학과 × US Medical",
  description:
    "조선대학교 컴퓨터공학과 임보현이 US Medical Inc. 일본 기업 현장실습에서 AI 광고 영상, 웹 인터랙션, 운영 대시보드, 패키지 디자인을 연결한 두 달간의 포트폴리오.",
  keywords: [
    "임보현",
    "조선대학교",
    "컴퓨터공학과",
    "US Medical",
    "POKEDEN",
    "포케덴",
    "웹 포트폴리오",
    "일본 기업 현장실습",
  ],
  icons: {
    icon: `${publicBasePath}/favicon.png`,
    shortcut: `${publicBasePath}/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
