import { getCategories } from "../../app/actions/categories-actions";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
  return useQuery({
    queryFn: async () => getCategories(),
    queryKey: ["get-categories"],
  });
}
