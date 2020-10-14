import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';

import Loader from '../Loader/Loader';
import CreateJobPDF from '../CreateJobPDF/CreateJobPDF';
import { getJobRequest } from '../../actions';

import CreateCarPDF from '../PDFGenerator/CreateCarPDF';
import CreateHouseHoldPDF from '../PDFGenerator/CreateHouseHoldPDF';
import CreateBothPDF from '../PDFGenerator/CreateBothPDF';

const DownloadJobPage = () => {
  //   const { jobId } = useParams();
  const [loading, setLoading] = useState(false);
  const { loader } = useSelector((state) => state.Loader);
  const { job } = useSelector((state) => state.Job);

  const jobDetails = useMemo(() => job, [job]);

  console.log({ jobDetails });

  const getDocument = (type) => {
    console.log({ type });
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
  return (
    <>
      {loader && !!!jobDetails ? (
        <Loader />
      ) : (
        getDocument(jobDetails?.type)

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
