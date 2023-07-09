import Image from "next/image";
import React from "react";

export default function Salesman() {
	return (
		<section className="pt-16 container max-w-6xl mx-auto">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="w-full">
						<div className="mx-auto mb-[30px] max-w-[700px] text-center">
							<h2 className="text-accent text-3xl py-4 ">
								{" "}
								Chat Sales Kami melalui Whatsapp untuk mendapatkan informasi
								lebih cepat
							</h2>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-center">
					<TeamCard
						name="Coriss Ambady"
						profession="Web Developer"
						imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
					/>
					<TeamCard
						name="Coriss Ambady"
						profession="Web Developer"
						imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
					/>
					<TeamCard
						name="Coriss Ambady"
						profession="Web Developer"
						imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
					/>
					<TeamCard
						name="Coriss Ambady"
						profession="Web Developer"
						imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
					/>
				</div>
			</div>
		</section>
	);
}

const TeamCard = (props: any) => {
	return (
		<>
			<div className="w-full my-2 md:w-1/4 p-2 ">
				<div className="mx-auto w-full max-w-[370px]">
					<div className="relative overflow-hidden rounded-lg shadow-sm shadow-slate-800">
						<img src={props.imageSrc} alt="" className="w-full" />
						<div className="absolute left-0 w-full text-center bottom-1">
							<div className="relative px-1 mx-1 overflow-hidden bg-white rounded-lg">
								<h3 className="text-base font-semibold text-blue-900">
									{props.name}
								</h3>
								<p className="text-sm text-body-color">{props.profession}</p>
								<div>
									<span className="absolute bottom-0 left-0">
										<svg
											width={61}
											height={30}
											viewBox="0 0 61 30"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx={16}
												cy={45}
												r={45}
												fill="#13C296"
												fillOpacity="0.11"
											/>
										</svg>
									</span>
									<span className="absolute top-0 right-0">
										<svg
											width={20}
											height={25}
											viewBox="0 0 20 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="0.706257"
												cy="24.3533"
												r="0.646687"
												transform="rotate(-90 0.706257 24.3533)"
												fill="#3056D3"
											/>
											<circle
												cx="6.39669"
												cy="24.3533"
												r="0.646687"
												transform="rotate(-90 6.39669 24.3533)"
												fill="#3056D3"
											/>
											<circle
												cx="12.0881"
												cy="24.3533"
												r="0.646687"
												transform="rotate(-90 12.0881 24.3533)"
												fill="#3056D3"
											/>
											<circle
												cx="17.7785"
												cy="24.3533"
												r="0.646687"
												transform="rotate(-90 17.7785 24.3533)"
												fill="#3056D3"
											/>
											<circle
												cx="0.706257"
												cy="18.6624"
												r="0.646687"
												transform="rotate(-90 0.706257 18.6624)"
												fill="#3056D3"
											/>
											<circle
												cx="6.39669"
												cy="18.6624"
												r="0.646687"
												transform="rotate(-90 6.39669 18.6624)"
												fill="#3056D3"
											/>
											<circle
												cx="12.0881"
												cy="18.6624"
												r="0.646687"
												transform="rotate(-90 12.0881 18.6624)"
												fill="#3056D3"
											/>
											<circle
												cx="17.7785"
												cy="18.6624"
												r="0.646687"
												transform="rotate(-90 17.7785 18.6624)"
												fill="#3056D3"
											/>
											<circle
												cx="0.706257"
												cy="12.9717"
												r="0.646687"
												transform="rotate(-90 0.706257 12.9717)"
												fill="#3056D3"
											/>
											<circle
												cx="6.39669"
												cy="12.9717"
												r="0.646687"
												transform="rotate(-90 6.39669 12.9717)"
												fill="#3056D3"
											/>
											<circle
												cx="12.0881"
												cy="12.9717"
												r="0.646687"
												transform="rotate(-90 12.0881 12.9717)"
												fill="#3056D3"
											/>
											<circle
												cx="17.7785"
												cy="12.9717"
												r="0.646687"
												transform="rotate(-90 17.7785 12.9717)"
												fill="#3056D3"
											/>
											<circle
												cx="0.706257"
												cy="7.28077"
												r="0.646687"
												transform="rotate(-90 0.706257 7.28077)"
												fill="#3056D3"
											/>
											<circle
												cx="6.39669"
												cy="7.28077"
												r="0.646687"
												transform="rotate(-90 6.39669 7.28077)"
												fill="#3056D3"
											/>
											<circle
												cx="12.0881"
												cy="7.28077"
												r="0.646687"
												transform="rotate(-90 12.0881 7.28077)"
												fill="#3056D3"
											/>
											<circle
												cx="17.7785"
												cy="7.28077"
												r="0.646687"
												transform="rotate(-90 17.7785 7.28077)"
												fill="#3056D3"
											/>
											<circle
												cx="0.706257"
												cy="1.58989"
												r="0.646687"
												transform="rotate(-90 0.706257 1.58989)"
												fill="#3056D3"
											/>
											<circle
												cx="6.39669"
												cy="1.58989"
												r="0.646687"
												transform="rotate(-90 6.39669 1.58989)"
												fill="#3056D3"
											/>
											<circle
												cx="12.0881"
												cy="1.58989"
												r="0.646687"
												transform="rotate(-90 12.0881 1.58989)"
												fill="#3056D3"
											/>
											<circle
												cx="17.7785"
												cy="1.58989"
												r="0.646687"
												transform="rotate(-90 17.7785 1.58989)"
												fill="#3056D3"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
