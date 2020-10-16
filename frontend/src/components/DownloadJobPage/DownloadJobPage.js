import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';

import Loader from '../Loader/Loader';
import CreateJobPDF from '../CreateJobPDF/CreateJobPDF';
import { getJobRequest } from '../../actions';

import CreateCarPDF from '../PDFGenerator/CreateCarPDF';
import CreateHouseHoldPDF from '../PDFGenerator/CreateHouseHoldPDF';
import CreateBothPDF from '../PDFGenerator/CreateBothPDF';
// import generatePDFDocument from '../PDFGenerator/generatePDFDocument';
import { saveAs } from 'file-saver';

const DownloadJobPage = () => {
  //   const { jobId } = useParams();
  const [loading, setLoading] = useState(false);
  const { loader } = useSelector((state) => state.Loader);
  const { job } = useSelector((state) => state.Job);

  const jobDetails = useMemo(() => job, [job]);

  const getDocument = (type) => {
    if (type === 'car') {
      // return <CreateCarPDF invoice={jobDetails} />;
      return (
        <PDFDownloadLink document={<CreateCarPDF invoice={jobDetails} />} fileName={`job.pdf`}>
          {({ blob, url, loading, error }) =>
            loading ? <Loader /> : <Button>Download Now</Button>
          }
        </PDFDownloadLink>
      );
    } else if (type === 'household') {
      // return <CreateHouseHoldPDF invoice={jobDetails} />;
      return (
        <PDFDownloadLink
          document={<CreateHouseHoldPDF invoice={jobDetails} />}
          fileName={`job.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? <Loader /> : <Button>Download Now</Button>
          }
        </PDFDownloadLink>
      );
    } else if (type === 'both') {
      // return <CreateBothPDF invoice={jobDetails} />;
      return (
        <PDFDownloadLink document={<CreateBothPDF invoice={jobDetails} />} fileName={`job.pdf`}>
          {({ blob, url, loading, error }) =>
            loading ? <Loader /> : <Button>Download Now</Button>
          }
        </PDFDownloadLink>
      );
    } else {
      // return <CreateJobPDF invoice={jobDetails} />;
      return (
        <PDFDownloadLink
          document={<CreateHouseHoldPDF invoice={jobDetails} />}
          fileName={`job.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? <Loader /> : <Button>Download Now</Button>
          }
        </PDFDownloadLink>
      );
    }
  };

  const generatePDFDocument = async (data) => {
    console.log(data, Object.keys(jobDetails).length);
    if (Object.keys(jobDetails).length) {
      const blobPdf = await pdf(<CreateJobPDF invoice={data} />).toBlob();
      saveAs(blobPdf, 'document.pdf');
    }
  };

  return (
    <>
      {loader && Object.keys(jobDetails).length === 0 && !jobDetails?.type ? (
        <Loader />
      ) : (
        // getDocument(jobDetails?.type)

        <Button onClick={() => generatePDFDocument(jobDetails)}>Download Now</Button>

        // <PDFDownloadLink document={getDocument(jobDetails?.type)} fileName={`job.pdf`}>
        //   {({ blob, url, loading, error }) =>
        //     loading ? <Loader /> : <Button>Download Now</Button>
        //   }
        // </PDFDownloadLink>
      )}
    </>
  );
};

export default DownloadJobPage;
