import { useState, useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import { server } from '../../backend/config/config';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.role === 'admin') {
      axios.get(`${server}/api/admin/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));

      axios.get(`${server}/api/admin/courses`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => setCourses(response.data))
        .catch(error => console.error('Error fetching courses:', error));
    }
  }, [user]);

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <ul>
          {users.map(user => (
            <li key={user._id} className="p-4 border-b">
              <p>{user.username} ({user.email})</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course._id} className="p-4 border-b">
              <p>{course.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
