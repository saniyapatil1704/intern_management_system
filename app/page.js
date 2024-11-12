// /app/page.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Next.js App Router Project!</h1>
      <Link href="/login">
        Go to Login
      </Link>
    </div>
  );
}