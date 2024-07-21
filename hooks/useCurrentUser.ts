import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/currentUser",
    fetcher
  );

  return { data, error, isLoading, mutate };
};
