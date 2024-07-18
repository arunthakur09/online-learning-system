import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Nav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-white text-lg font-bold cursor-pointer">Online Learning System</span>
        </Link>
        <div>
          <Link href="/">
            <span className="text-white mr-4 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white mr-4 cursor-pointer">About</span>
          </Link>
          <Link href="/courses">
            <span className="text-white mr-4 cursor-pointer">Courses</span>
          </Link>
          <Link href="/contact">
            <span className="text-white mr-4 cursor-pointer">Contact</span>
          </Link>
          {!user && (
            <>
              <Link href="/login">
                <span className="text-white mr-4 cursor-pointer">Login</span>
              </Link>
              <Link href="/register">
                <span className="text-white mr-4 cursor-pointer">Register</span>
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href="/createcourse">
                <span className="text-white mr-4 cursor-pointer">Create Course</span>
              </Link>
              <button onClick={logout} className="text-white cursor-pointer">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
