import { useState, useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { server } from '../backend/config/config';

export default function CreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [quizzes, setQuizzes] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user]);

  const handleQuizSubmit = () => {
    setQuizzes([...quizzes, { question, options, correctAnswer }]);
    setQuestion('');
    setOptions([]);
    setCorrectAnswer('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${server}/api/courses`, {
      title,
      description,
      content,
      videoUrl,
      quizzes
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setTitle('');
    setDescription('');
    setContent('');
    setVideoUrl('');
    setQuizzes([]);
    router.push('/courses'); // Redirect to courses page after creation
  };

  if (!user) return null;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Create Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="block mb-2"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="block mb-2"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          className="block mb-2"
        ></textarea>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Video URL"
          required
          className="block mb-2"
        />
        
        {/* Quizzes */}
        <div className="my-4">
          <h2 className="text-2xl font-bold">Add Quiz</h2>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Question"
            required
            className="block mb-2"
          />
          <input
            type="text"
            value={options.join(', ')}
            onChange={(e) => setOptions(e.target.value.split(', '))}
            placeholder="Options (comma separated)"
            required
            className="block mb-2"
          />
          <input
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            placeholder="Correct Answer"
            required
            className="block mb-2"
          />
          <button
            type="button"
            onClick={handleQuizSubmit}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Question
          </button>
          <ul className="mt-4">
            {quizzes.map((quiz, index) => (
              <li key={index} className="p-2 border">
                <p>{quiz.question}</p>
                <p>{quiz.options.join(', ')}</p>
                <p>Correct Answer: {quiz.correctAnswer}</p>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Course
        </button>
      </form>
    </div>
  );
}
