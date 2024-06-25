import { useQuery } from "react-query";
import { fetchStats } from "../api/fetchStats";

export const useFetchStats = () => {
  return useQuery({
    queryKey: ["statsFetch"],
    queryFn: fetchStats,
  });
};
