// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStartLoading = () => setIsLoading(true);
    const handleStopLoading = () => setIsLoading(false);



    return () => {
      handleStopLoading();
    };
  }, [location]);

  return (
    <header>
      <div

        style={{
          background: isLoading ? 'orange' : 'grey',
          borderRadius: '50%',
          width: 10,
          height: 10
        }}
      />
    </header>
  );
};

export default Header;
