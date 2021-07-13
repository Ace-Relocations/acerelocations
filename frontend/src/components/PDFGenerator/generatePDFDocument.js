import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import CreateHouseHoldPDF from '../PDFGenerator/CreateHouseHoldPDF';

const generatePDFDocument = async (data) => {
  if (!!data) {
    const blobPdf = await pdf(CreateHouseHoldPDF(data));
    blobPdf.updateContainer(CreateHouseHoldPDF(data));
    const result = await blobPdf.toBlob();
    saveAs(result, 'document.pdf');
  }
};

export default generatePDFDocument;
