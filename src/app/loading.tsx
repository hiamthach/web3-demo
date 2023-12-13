import React from 'react';

import Loader from '@/components/shared/Loader';

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
