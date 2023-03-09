import './globals.css'

import { Montserrat } from "next/font/google";
import { classNames } from '@/components/utils/helper';
const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={classNames("h-full w-full overflow-x-hidden", montserrat.className)}>{children}</body>
    </html>
  )
}
