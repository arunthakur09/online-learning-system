import React from 'react';
import Link from 'next/link';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-2">{course.description}</p>
        <Link href={`/courses/${course.id}`}>
          <a className="text-blue-500 hover:text-blue-700">View Course</a>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
