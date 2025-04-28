import { IoMdRibbon } from "react-icons/io";
import { MdStar } from "react-icons/md";

export default function Accomplishments() {
  return (
    <div>
      <h2 className="text-base font-semibold border-b border-blue-200 pb-1 mb-2 uppercase tracking-wider">
        Distinctions
      </h2>
      <div className="space-y-2 text-sm">
        <div className="flex items-start">
          <IoMdRibbon className="mt-1 mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Boursier Erasmus+ (JUNIA-ISEN)</p>
            <p>Commission Européenne • 2024</p>
          </div>
        </div>
        <div className="flex items-start">
          <IoMdRibbon className="mt-1 mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Boursier EPI (KNUST)</p>
            <p>Education Pathways International • 2023</p>
          </div>
        </div>
        <div className="flex items-start">
          <MdStar className="mt-1 mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Mention Très Bien</p>
            <p>KNUST • 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}