import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';

import Loader from '../Loader/Loader';
import CreateJobPDF from '../CreateJobPDF/CreateJobPDF';
import { getJobRequest } from '../../actions';

const DownloadJobPage = () => {
  //   const { jobId } = useParams();
  const { loader } = useSelector((state) => state.Loader);
  const { job } = useSelector((state) => state.Job);

  //   // Just to make sure we get latest data
  //   useEffect(() => {
  //     dispatch(getJobRequest(jobId));
  //   }, [jobId]);

  const jobDetails = useMemo(() => job, [job]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <PDFDownloadLink document={<CreateJobPDF invoice={jobDetails} />} fileName={`job.pdf`}>
          {({ blob, url, loading, error }) =>
            loading ? <Loader /> : <Button>Download Now</Button>
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

export default DownloadJobPage;
