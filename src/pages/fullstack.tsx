import "@/styles/printStyles.css";

// Left Column
import ProfileHeader from "@/components/ui/ProfileHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import Languages from "@/components/ui/Languages";
import Accomplishments from "@/components/ui/Accomplishments";

//Right Column
import Education from "@/components/sections/Education";
import Interests from "@/components/sections/Interests";

// Skills
import FrontendSkills from "@/components/skills/FrontendSkills";
import BackendSkills from "@/components/skills/BackendSkills";
import FullstackSkills from "@/components/skills/FullstackSkills";
import MobileSkills from "@/components/skills/MobileSkills";
import JavaSkills from "@/components/skills/JavaSkills";

// Experiences
import Never2WaitExperience from "@/components/experiences/Never2WaitExperience";
import ZomujoExperience from "@/components/experiences/ZomujoExperience";
import ZapTechExperience from "@/components/experiences/ZapTechExperience";

// Projects
import SkyVaultProject from "@/components/projects/SkyVaultProject";
import EStoreProject from "@/components/projects/EStoreProject";
import LawFirmProject from "@/components/projects/LawFirmProject";

export default function Fullstack() {
	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 font-sans print:bg-white print:py-0 print:m-0">
			<div className="w-[210mm] max-w-[210mm] mx-auto bg-white shadow-lg py-0 print:my-0 print:shadow-none print:border-none">
				<div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12">
					<aside className="bg-blue-800 text-white p-6 py-10 space-y-6 md:col-span-4 print:col-span-4 font-arial">
						<ProfileHeader role="Développeur Fullstack" />
						<ContactInfo />

						{/* Technical Skill */}
						<div>
							<h2 className="text-base font-semibold border-b border-blue-200 pb-1 mb-2 uppercase tracking-wider">
								Compétences Techniques
							</h2>
							<div className="space-y-2 text-sm">
								<FrontendSkills />
								<BackendSkills />
								<FullstackSkills />
								<MobileSkills />
								<JavaSkills />
							</div>
						</div>

						<Languages />
						<Accomplishments />
					</aside>

					<main className="p-6 py-10 space-y-4 md:col-span-8 print:col-span-8 font-arial">
						<section>
							<h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider font-georgia">
								Objectif Professionnel
							</h2>
							<p className="text-sm">
								Développeur Fullstack en recherche d&apos;une alternance à
								partir de septembre 2025, je souhaite contribuer à des projets
								innovants en mettant à profit mes compétences en développement
								web et mobile, tout en poursuivant mon perfectionnement en génie
								logiciel au sein d&apos;une entreprise dynamique.
							</p>
						</section>
						<Education />

						{/* Professional Experience */}
						<section>
							<h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider font-georgia">
								Expériences Professionnelles
							</h2>
							<Never2WaitExperience />
							<ZomujoExperience />
							<ZapTechExperience />
						</section>

						{/* Projects  */}
						<section>
							<h2 className="text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-1 uppercase tracking-wider">
								Projets
							</h2>
							<LawFirmProject />
							<EStoreProject />
							<SkyVaultProject />
						</section>
						<Interests />
					</main>
				</div>
			</div>
		</div>
	);
}
