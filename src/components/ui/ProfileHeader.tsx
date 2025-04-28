import Image from "next/image";

interface ProfileHeaderProps {
  role: string;
}

export default function ProfileHeader({ role }: ProfileHeaderProps) {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden">
          <Image
            src="/hd-cv.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            width={1920}
            height={2560}
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-wide font-georgia">
          David Mawuli MENSAVI
        </h1>
        <p className="text-base font-light">{role}</p>
      </div>
    </>
  );
}