import { useFetchStats } from "../hooks/useFetchStats";
import NotTop3 from "./NotTop3";
import Top3 from "./Top3";

const Standing = () => {
  const { data, error, isFetching } = useFetchStats();
  return (
    <>
      {isFetching && <p>Loading</p>}
      {error && <p>Something went wraang</p>}
      {data && (
        <>
          <Top3 />
          <NotTop3 />
        </>
      )}
    </>
  );
};

export default Standing;
