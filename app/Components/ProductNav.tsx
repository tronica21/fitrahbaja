import React from "react";

export default function ProductNav() {
	return (
		<div className="container w-[85%] max-w-6xl shadow-xl mx-auto z-30 rounded-lg p-8 -mt-14 md:-mt-6 bg-yellow-200 border-primary-200 border-4 text-gray-100">
			<div className="container flex flex-col gap-2 text-primary-100 font-mono font-bold">
				<h1 className="text-2xl font-extrabold">WASPADA !!!</h1>
				<h3>
					Kami hanya menerima transaksi transfer melalui rekening resmi
					perusahaan Atas Nama CV. FITRAH BAJA.
				</h3>
				<h3>
					Kami tidak bertanggung Jawab atas segala kerugian yang timbul
					dikarenakan tindakan penipuan pihak ke-3 yang tidak bertanggung jawab.
				</h3>
				<h1>
					Hubungi Tim Kami, Kami akan dengan senang hati membantu kebutuhan
					pelanggan dan menghindari perilaku penipu yang tidak bertanggung
					jawab.
				</h1>
			</div>
		</div>
	);
}
