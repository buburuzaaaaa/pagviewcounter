import React, { useState, useEffect } from 'react';

const Page = () => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('pageVisit');
    const initialCount = Number(storedCount) || 0;
    setPageCount(initialCount + 1);
    localStorage.setItem('pageVisit', initialCount + 1);
  }, []);

  return <div>you tried to commit arson {pageCount} times</div>;
}

export default Page;
