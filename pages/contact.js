export default function Contact() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      </div>
    );
  }
  