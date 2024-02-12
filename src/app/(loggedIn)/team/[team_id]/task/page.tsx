import Pagination from "@/app/components/team/task/pagination";
import Search from "@/app/components/search";
import TasksTable from "@/app/components/team/task/table";
import { lusitana } from "@/app/components/fonts";
import { Suspense } from "react"; 
import { fetchTasksPages } from "@/app/lib/data"; 
import { CreateTaskButton } from "@/app/components/team/task/buttons";
import { TasksTableSkeleton } from "@/app/components/team/task/skeletons";

export default async function Page({ 
  params, 
  searchParams,
}: { 
  params: { 
    team_id: string;
  };
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || ''; // 検索してる文字列
  const currentPage = Number(searchParams?.page) || 1; // 今のページ

  const totalPages = await fetchTasksPages(query, params.team_id); // ページ数

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>課題</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="課題を検索" />
        <CreateTaskButton teamId={params.team_id} />
      </div>
      <Suspense key={query + currentPage} fallback={<TasksTableSkeleton />}>
        <TasksTable query={query} currentPage={currentPage} teamId={params.team_id} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
