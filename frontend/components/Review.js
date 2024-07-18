import { useState } from 'react';
import axios from 'axios';

export default function Review({ courseId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/api/reviews/${courseId}`, { rating, comment }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <h3 className="text-xl font-bold">Leave a Review</h3>
      <div className="mb-2">
        <label className="block">Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} required>
          <option value="0">Select rating</option>
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block">Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Review</button>
    </form>
  );
}
