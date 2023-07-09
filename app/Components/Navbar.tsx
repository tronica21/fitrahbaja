"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/fb_logo.jpg";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="container max-w-6xl py-2 mx-auto md:px-0 sticky top-0 ">
			<div className="relative flex items-center justify-between">
				<div className="max-w-full ml-10 h-full text-3xl font-extrabold text-gray-50 no-wrap min-w-[280px]">
					<Image src={Logo} height={80} alt="Logo Fitrah Baja" />
				</div>
				<div className="flex items-center justify-between w-full">
					<div>
						<button
							// @click="navbarOpen = !navbarOpen"
							onClick={() => setOpen(!open)}
							// :className="navbarOpen && 'navbarTogglerActive' "
							id="navbarToggler"
							className={`${
								open && "navbarTogglerActive"
							} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
						>
							<span className="relative my-[8px] block h-[2px] w-[40px] bg-accent"></span>
							<span className="relative my-[8px] block h-[2px] w-[40px] bg-accent"></span>
							<span className="relative my-[8px] block h-[2px] w-[40px] bg-accent"></span>
						</button>
					</div>
					<div>
						<nav
							// :className="!navbarOpen && 'hidden' "
							id="navbarCollapse"
							className={`absolute right-4 top-full w-full max-w-[380px] rounded-lg py-5 px-6 shadow-2 shadow-accent/50 lg:relative bg-brand  lg:block lg:w-full lg:max-w-full lg:shadow-none text-gray-50 ${
								!open && "hidden"
							} `}
						>
							<ul className="lg:flex" onClick={() => setOpen(false)}>
								<ListItem
									navItemStyles="text-indigo-100 hover:text-primary"
									NavLink="/#"
								>
									Home
								</ListItem>
								<ListItem
									navItemStyles="text-indigo-100 hover:text-primary"
									NavLink="/#product"
								>
									Product
								</ListItem>
								<ListItem
									navItemStyles="text-indigo-100 hover:text-primary"
									NavLink="/profile"
								>
									Profile Fitrah Baja
								</ListItem>
								<ListItem
									navItemStyles="text-indigo-100 hover:text-primary"
									NavLink="/#contact"
								>
									Kontak Kami
								</ListItem>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

const ListItem = (props: any) => {
	return (
		<>
			<li className="hover:hover:bg-brand ">
				<a
					href={props.NavLink}
					className={`flex py-2 text-xl md:ml-12 hover:border-b-4 hover:text-accent border-accent ${props.navItemStyles}`}
				>
					{props.children}
				</a>
			</li>
		</>
	);
};
