import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">My CVs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/backend">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Backend CV
            </div>
          </Link>
          <Link href="/frontend">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Frontend CV
            </div>
          </Link>
          <Link href="/fullstack">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Fullstack CV
            </div>
          </Link>
          <Link href="/datascience">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Data Science CV
            </div>
          </Link>
          <Link href="/java">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Java CV
            </div>
          </Link>
          <Link href="/mobile">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Mobile CV
            </div>
          </Link>
          <Link href="/quant">
            <div className="p-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600">
              Quant CV
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}