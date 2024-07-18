import { useState, useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import { server } from '../config'; // Import the server configuration

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
    await axios.put(`${server}/api/profile/me`, { username, email }, { // Use the configured server URL
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  };

  if (!user) return null;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Profile</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="block mb-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="block mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Profile</button>
      </form>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded mt-4">Logout</button>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">My Courses</h2>
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
