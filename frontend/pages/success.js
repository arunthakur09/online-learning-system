import { useRouter } from 'next/router';

export default function Success() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Payment Successful</h1>
      <p>Your payment was successful. Your session ID is {session_id}</p>
    </div>
  );
}
