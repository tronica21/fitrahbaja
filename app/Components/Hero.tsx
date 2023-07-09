import Image from "next/image";
import React from "react";
import Banner from "@/public/img/brosure1.jpg";

export default function Hero() {
	return (
		<div className="relative lg:bg-gradient-to-t  from-brand to-brand via-indigo-600 via-30% z-0 ">
			<div className="container max-w-6xl mx-auto">
				<div className="flex lg:flex-wrap items-center  flex-wrap-reverse ">
					<div className="w-full  lg:w-6/12 flex justify-center z-50 bg-blue-900/90 lg:bg-inherit min-h-full">
						<div className="hero-content lg:mb-6 lg:mt-2 py-20">
							<div className="z-20 flex flex-wrap justify-center text-center">
								<div className="flex flex-col text-gray-50 px-16 sm:text-[42px] lg:text-[40px] xl:text-[42px] text-center">
									<span className="md:text-3xl text-xl font-bold mb-4">
										TOKO BESI
									</span>
									<span className="text-2xl md:text-3xl lg:text-5xl md:px-8 text-gray-50 bg-gradient-to-r from-brand to-primary-100 rounded-full py-2 border-4 border-accent font-extrabold font-serif min-w-[200px] max-w-[500px] px-6 mx-auto">
										FITRAH BAJA
									</span>
									<span className="text-lg md:text-3xl text-accent font-bold my-4">
										P A M U L A N G{" "}
									</span>
									<p className="max-w-[600px] lg:max-w-[480px] text-gray-50 text-xs md:text-xl font-light mx-4">
										Selamat datang di Toko Besi, destinasi utama Anda untuk
										kebutuhan material bangunan berkualitas. Dari baja
										struktural hingga peralatan konstruksi, kami menyediakan
										segala yang Anda butuhkan untuk proyek Anda.
									</p>
									<ul className="flex flex-wrap justify-center gap-2 mt-4 ">
										<li>
											<button className="hover:bg-primary hover:shadow">
												<a
													href="/#"
													className="inline-flex items-center justify-center w-60 py-2 text-base font-normal text-center text-white bg-primary-100  hover:bg-primary-200 hover:shadow-sm hover:shadow-yellow-100 sm:px-10 lg:px-8 xl:px-10"
												>
													Get Started
												</a>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* banner sm md */}
					<div className="w-screen overflow-hidden absolute">
						<Image
							src={Banner}
							alt={"Aramada Fitrah Baja Pamulang"}
							width={1200}
							height={700}
							className="z-0 lg:hidden brightness-70"
						/>
					</div>

					{/* banner lg */}
					<div className="w-full px-4 lg:w-6/12 justify-center hidden lg:block">
						<div className="lg:text-right">
							<div className="relative z-10 inline-block pt-11 lg:pt-0">
								<Image src={Banner} alt={"Aramada Fitrah Baja Pamulang"} />

								<span className="absolute -left-8 -bottom-8 z-[-1]">
									<svg
										width="93"
										height="93"
										viewBox="0 0 93 93"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2.5" cy="2.5" r="4" fill="#F2E416" />
										<circle cx="2.5" cy="24.5" r="4" fill="#F2E416" />
										<circle cx="2.5" cy="46.5" r="4" fill="#F2E416" />
										<circle cx="2.5" cy="68.5" r="4" fill="#F2E416" />
										<circle cx="2.5" cy="90.5" r="4" fill="#F2E416" />
										<circle cx="24.5" cy="2.5" r="4" fill="#F2E416" />
										<circle cx="24.5" cy="24.5" r="4" fill="#F2E416" />
										<circle cx="24.5" cy="46.5" r="4" fill="#F2E416" />
										<circle cx="24.5" cy="68.5" r="4" fill="#F2E416" />
										<circle cx="24.5" cy="90.5" r="4" fill="#F2E416" />
										<circle cx="46.5" cy="2.5" r="4" fill="#F2E416" />
										<circle cx="46.5" cy="24.5" r="4" fill="#F2E416" />
										<circle cx="46.5" cy="46.5" r="4" fill="#F2E416" />
										<circle cx="46.5" cy="68.5" r="4" fill="#F2E416" />
										<circle cx="46.5" cy="90.5" r="4" fill="#F2E416" />
										<circle cx="68.5" cy="2.5" r="4" fill="#F2E416" />
										<circle cx="68.5" cy="24.5" r="4" fill="#F2E416" />
										<circle cx="68.5" cy="46.5" r="4" fill="#F2E416" />
										<circle cx="68.5" cy="68.5" r="4" fill="#F2E416" />
										<circle cx="68.5" cy="90.5" r="4" fill="#F2E416" />
										<circle cx="90.5" cy="2.5" r="4" fill="#F2E416" />
										<circle cx="90.5" cy="24.5" r="4" fill="#F2E416" />
										<circle cx="90.5" cy="46.5" r="4" fill="#F2E416" />
										<circle cx="90.5" cy="68.5" r="4" fill="#F2E416" />
										<circle cx="90.5" cy="90.5" r="4" fill="#F2E416" />
									</svg>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const SingleImage = (props: any) => {
	return (
		<>
			<a href={props.href} className="flex w-full items-center justify-center">
				<img src={props.imgSrc} alt="brand image" className="w-full h-10" />
			</a>
		</>
	);
};
