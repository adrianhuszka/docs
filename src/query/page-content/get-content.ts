import { getContent } from "../../app/actions/content-actions";
import { useQuery } from "@tanstack/react-query";

export function useGetContent({ categoryId }: { categoryId: string }) {
  return useQuery({
    queryFn: async () => getContent({ categoryId }),
    queryKey: ["get-content", categoryId],
  });
}
