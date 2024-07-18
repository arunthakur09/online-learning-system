import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Online Learning System</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Courses</h2>
          <p className="mb-4">Browse through our wide range of courses and start learning today.</p>
          <Link href="/courses">
            <span className="bg-blue-500 text-white p-2 rounded cursor-pointer">View Courses</span>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">Learn more about our mission and values.</p>
          <Link href="/about">
            <span className="bg-blue-500 text-white p-2 rounded cursor-pointer">About Us</span>
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Have questions? Get in touch with us.</p>
          <Link href="/contact">
            <span className="bg-blue-500 text-white p-2 rounded cursor-pointer">Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
