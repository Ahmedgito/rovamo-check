import React from 'react';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';

const ExamplePage = () => {
  return (
    <div>
      <Navbar />
      <PageTransition>
        <div className="content">
          {/* Page content goes here */}
        </div>
      </PageTransition>
    </div>
  );
};

export default ExamplePage; 