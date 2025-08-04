import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div>
      <p className="text-3xl lg:text-4xl font-medium tracking-tight text-white">
        {date.toLocaleTimeString('en-US', timeOptions)}
      </p>
      <p className="text-sm text-neutral-300">
        {date.toLocaleDateString('en-US', dateOptions)}
      </p>
    </div>
  );
};

export default Clock;
