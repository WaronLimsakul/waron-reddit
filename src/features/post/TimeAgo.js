import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const ago = formatDistanceToNow(new Date(timestamp * 1000), {
        addSuffix: true,
      });
      setTimeAgo(ago);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return <span>{timeAgo.replace(/^about\s/, '')}</span>;
};