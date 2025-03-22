import { Outfit } from "next/font/google"; /*adding outfit font from google fonts*/
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/*initialize*/
const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className} /*changed className*/
      >
        {children}
      </body>
    </html>
  );
}
