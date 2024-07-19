import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Nav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-white text-lg font-bold">Online Learning System</span>
        </Link>
        <div>
          <Link href="/">
            <span className="text-white mr-4">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white mr-4">About</span>
          </Link>
          <Link href="/courses">
            <span className="text-white mr-4">Courses</span>
          </Link>
          <Link href="/contact">
            <span className="text-white mr-4">Contact</span>
          </Link>
          {!user && (
            <>
              <Link href="/login">
                <span className="text-white mr-4">Login</span>
              </Link>
              <Link href="/register">
                <span className="text-white mr-4">Register</span>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href="/createcourse">
                <span className="text-white mr-4">Create Course</span>
              </Link>
              <button onClick={logout} className="text-white">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
