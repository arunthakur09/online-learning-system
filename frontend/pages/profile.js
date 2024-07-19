import { useState, useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import { server } from '../../backend/config/config';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [courses, setCourses] = useState([]);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setCourses(user.courses);
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${server}/api/profile/me`, { username, email }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <form onSubmit={handleUpdate} className="bg-white shadow-md rounded-lg p-6 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Profile</button>
      </form>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Logout</button>
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">My Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course._id} className="p-4 border-b">
              <h3 className="text-xl">{course.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
