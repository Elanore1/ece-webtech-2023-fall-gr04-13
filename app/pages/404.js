// pages/404.js

import Link from 'next/link';

function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link href="/">Return to Home</Link>
    </div>
  );
}

export default Custom404;   
