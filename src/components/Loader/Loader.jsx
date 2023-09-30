import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderOverlay } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderOverlay>
  );
};
