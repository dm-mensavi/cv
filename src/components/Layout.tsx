// import DownloadButton from './DownloadButton';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:underline">My CV Portfolio</Link>
        {/* <DownloadButton /> */}
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}