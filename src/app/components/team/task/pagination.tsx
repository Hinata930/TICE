import { fetchTasksPages } from "@/app/lib/data";
import PaginationDetail from "./paginationDetail";


interface props {
  query: string,
  teamId: string,
}

export default async function Pagination({ query, teamId }: props) {
  const totalPages = await fetchTasksPages(query, teamId);

  return (
    <>
      <PaginationDetail totalPages={totalPages} />
    </>
  );
}