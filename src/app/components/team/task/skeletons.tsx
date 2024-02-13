// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

// なにかしら要素があるところはbg-gray-100?



export function NavLinkRowSkeleton() {
  return (
    <div className='flex h-[48px] items-center rounded-lg gap-2 p-3 md:flex-none md:p-2 md:px-3 bg-gray-50'>
      <div className="w-6">
        <div className="w-6 h-6 bg-gray-100"></div>
      </div>
      <p className="hidden md:block bg-gray-100"></p>
    </div>
  );

}

// teamList
export function TeamListSkeleton() {
  return (
    <>
      <div className="h-6 bg-gray-100 w-32"></div>
      <TeamListRowSkeleton />
      <TeamListRowSkeleton />
      <TeamListRowSkeleton />
      <TeamListRowSkeleton />
      <TeamListRowSkeleton />
    </>
  );
}

export function TeamListRowSkeleton() {
  return (
    <div className="block h-16 w-auto bg-gray-100 rounded-lg my-2"></div>
  );
}

// tasks table
export function TasksMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function TasksTableRowSkeleton() {
  return (
    <div className='mb-2 w-full rounded-md bg-white p-4'>
      <div className="flex flex-col items-center">
        {/* 提出期限 */}
        <div className='w-full pb-1'>
          <div className="w-2/5 h-4 bg-gray-100"></div>
        </div>
        <div className="flex flex-row items-center w-full pb-[2px]">
          <div className="flex justify-start">
            {/* 課題のタイトル */}
            <div className="w-3/5 h-6 bg-gray-100"></div>
          </div>
        </div>
        {/* 課題の詳細 */}
        <div className='w-full'>
          <div className="w-4/5 h-4 bg-gray-100"></div>
        </div>
      </div>
      <div className="flex items-center">
        {/* 作った人のアイコンと名前 */}
        <div className="w-4 h-4"></div>
        <div className="w-32 h-4 bg-gray-100"></div>
      </div>
    </div>
  );
}

export function TasksTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2">
            <TasksTableRowSkeleton />
            <TasksTableRowSkeleton />
            <TasksTableRowSkeleton />
            <TasksTableRowSkeleton />
            <TasksTableRowSkeleton />
            <TasksTableRowSkeleton />
        </div>
      </div>
    </div>
  )
}