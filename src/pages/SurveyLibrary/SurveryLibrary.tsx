import React from 'react';
import SurveyHeader from '../../components/SurveyHeader/SurveyHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import DateRangePicker from '../../components/DateRangePicker/DateRangePicker';
import Table from '../../components/Table/Table';

const SurveryLibrary: React.FC = () => {
  return (
    <>
      <SurveyHeader />
      <div
        className="p-8 m-5 mt-0 mr-16"
        role="main" // Defines the main content of the page
        aria-label="Survey Library Page"
      >
        <div className="flex items-center justify-between mb-5">
          <div className='w-1/2'>
            <SearchBar placeholder="Search through your surveys..." />
          </div>
          <DateRangePicker />
        </div>
        <Table />
      </div>
    </>
  );
};

export default SurveryLibrary;
