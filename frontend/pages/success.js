import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Payment Successful</h1>
      <p className="text-center">Your payment was successful. Your session ID is <strong>{session_id}</strong></p>
    </div>
  );
}
