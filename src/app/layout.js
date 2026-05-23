import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
import { Geist, Geist_Mono, Hind_Siliguri, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
   weight: ["400", "500", "600", "700"]
});
export const hind_shiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
   weight: ["400", "500", "600", "700"]
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
 
});

export const metadata = {
  title: "Boi Bondu - Your Book Companion",
  description: "Discover, share, and connect with fellow book lovers on Boi Bondu. Explore a vast collection of books, manage your personal library, and engage in vibrant discussions. Join our community today and find your next great read!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hind_shiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
