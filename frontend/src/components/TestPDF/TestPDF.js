import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import TellySheet from '../TellySheet/TellySheet';

const TestPDF = () => {
  return (
    <PDFViewer height='500px' width='600px'>
      <TellySheet />
    </PDFViewer>
  );
};

export default TestPDF;
