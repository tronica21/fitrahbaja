import { Metadata } from "next";
// import Image from "next/image";
import Hero from "./Components/Hero";
import ProductNav from "./Components/ProductNav";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Contatcs from "./Components/Contatcs";

export const metadata: Metadata = {
	title: "Fitrah Baja Pamulang",
	description: "Toko Besi dan Baja terpercaya dengan harga murah kompetitif",
};

export default function Home() {
	return (
		<>
			<nav
				className={`flex items-center w-full sticky top-0 z-40 bg-brand shadow-md shadow-brand`}
			>
				<Navbar />
			</nav>
			<div className="flex flex-col justify-between">
				<Hero />
				<div className="p-8 bg-indigo-50" id="product">
					<Cards />
				</div>
				<div
					className="p-8 bg-gradient-to-t from-indigo-600 to-indigo-600 via-brand text-gray-50"
					id="contact"
				>
					<Contatcs />
				</div>
				<Footer />
			</div>
		</>
	);
}
