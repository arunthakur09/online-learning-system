import { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from '../config';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`${server}/api/courses`)
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id} className="p-4 border-b">
            <h2 className="text-2xl">{course.title}</h2>
            <p>{course.description}</p>
            <div dangerouslySetInnerHTML={{ __html: course.content }}></div>
            {course.videoUrl && (
              <div className="my-4">
                <iframe
                  src={course.videoUrl}
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={course.title}
                ></iframe>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
