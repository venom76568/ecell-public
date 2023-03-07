import './globals.css'

import { Montserrat } from "next/font/google";
import { classNames } from '@/components/utils/helper';
const montserrat = Montserrat({ weight: "700", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={classNames("h-full w-full overflow-x-hidden bg-black", montserrat.className)}>{children}</body>
    </html>
  )
}
