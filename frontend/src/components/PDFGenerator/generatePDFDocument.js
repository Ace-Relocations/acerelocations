import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import CreateHouseHoldPDF from '../PDFGenerator/CreateHouseHoldPDF';

const generatePDFDocument = async (data) => {
  console.log(data);
  if (!!data) {
    const blobPdf = await pdf(CreateHouseHoldPDF(data));
    console.log('blobPdf');
    blobPdf.updateContainer(CreateHouseHoldPDF(data));
    console.log('blobPdf update');
    const result = await blobPdf.toBlob();
    console.log('result');
    saveAs(result, 'document.pdf');
  }
};

export default generatePDFDocument;
