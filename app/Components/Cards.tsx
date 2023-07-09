import React from "react";
import Image from "next/image";

import Gb1 from "@/public/img/fb_logo.jpg";

export default function Cards() {
	return (
		<>
			<section className="container max-w-6xl mx-auto md:mt-8">
				<div className="flex justify-center mb-8">
					<span className="text-3xl md:text-5xl font-extrabold text-brand">
						PRODUK UNGGULAN
					</span>
				</div>
				<div className="container flex flex-wrap md:justify-around max-w-6xl">
					<SingleCard
						image={Gb1}
						CardTitle=" BAJA RINGAN"
						titleHref="/#"
						btnHref="/#"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle=" BAJA RINGAN"
						titleHref="/#"
						btnHref="/#"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle=" BAJA RINGAN"
						titleHref="/#"
						btnHref="/#"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle="PIPA BESI"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
    Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle="CNP"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
    Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle="UNP"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
    Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle="UNP"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
    Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
					<SingleCard
						image={Gb1}
						CardTitle="UNP"
						CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
    Lorem consectetur adipiscing elit."
						Button="View Details"
					/>
				</div>
			</section>
		</>
	);
}

const SingleCard = (props: any) => {
	return (
		<>
			<div className="overflow-hidden bg-gradient-to-t from-primary-200 to-red-400 lg:max-w-[280px] md:max-w-[220px] mb-8">
				<Image src={props.image} alt="" className="w-full" />
				<div className="p-8 text-center  md:p-7 xl:p-9">
					<h3>
						<a
							href={props.titleHref ? props.titleHref : "/#"}
							className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
						>
							{props.CardTitle}
						</a>
					</h3>
					<p className="text-base leading-relaxed mb-7 text-body-color">
						{props.CardDescription}
					</p>

					{props.Button && (
						<a
							href={props.btnHref ? props.btnHref : "#"}
							className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
						>
							{props.Button}
						</a>
					)}
				</div>
			</div>
		</>
	);
};
