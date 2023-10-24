import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import Invoice from '../../Test/Invoice';

const ViewJob = ({ invoice }) => {
  return (
    <PDFViewer width='1000' height='1000' className='app'>
      <Invoice invoice={invoice} />
    </PDFViewer>
  );
};

export default ViewJob;
