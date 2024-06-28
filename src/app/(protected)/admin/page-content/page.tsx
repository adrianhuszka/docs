import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PageContentIndex from ".";
import { getCategories } from "@/app/actions/categories-actions";

export default async function PageContentPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["get-categories"],
    queryFn: () => getCategories(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageContentIndex />
    </HydrationBoundary>
  );
}
