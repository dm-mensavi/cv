export default function Education() {
	return (
		<section>
			<h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider font-georgia">
				Formation
			</h2>
			<div className="mb-3">
				<div className="flex justify-between items-start">
					<h3 className="text-base font-semibold">Master en Génie Logiciel</h3>
					<span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
						09/2024 - 06/2026
					</span>
				</div>
				<p className="text-sm text-gray-600 mb-1">ISEN Lille, France</p>
				<p className="text-sm">
					Projet de quatrième année : Optimisation des problèmes de localisation
					via le calcul quantique, en utilisant des modèles QUBO et
					l&apos;annealing simulé pour résoudre des défis en logistique, santé
					et télécommunications.
				</p>
			</div>
			<div>
				<div className="flex justify-between items-start">
					<h3 className="text-base font-semibold">Licence en Informatique</h3>
					<span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
						09/2022 - 06/2024
					</span>
				</div>
				<p className="text-sm text-gray-600 mb-1">
					KNUST, Ghana - Mention Très Bien
				</p>
				<p className="text-sm">
					Projet de fin d&apos;études : Développement de Campride, une
					application web de suivi de navettes en temps réel pour améliorer le
					transport sur le campus, utilisant Next.js et Google Maps API.
				</p>
			</div>
		</section>
	);
}
