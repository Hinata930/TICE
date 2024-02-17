import { TeamActivity } from "@prisma/client";
import { Fragment } from "react";
import Image from "next/image";
import { findActivityType, getUserById } from "@/app/lib/data";


interface props {
  TeamActivity: TeamActivity[]
}

export default async function RecentActivity({ TeamActivity }: props) {

  return (
    <>
      <div className='flex flex-col h-full w-full py-1'>
        {TeamActivity.map(async (activity) => {
          if (activity.user_id && activity.activity_type) {
            const user = await getUserById(activity.user_id)
            const activityType = await findActivityType(activity.activity_type);
            return (
              <Fragment key={activity.id}>
                  <div className='flex flex-row items-center w-full mb-[2px] pl-[10px]'>
                    {/* タスク作った人の image と username */}
                    <Image
                      src={`${user? user.image_url : '/preview.png'}`}
                      className='mr-1 rounded-full'
                      width={12}
                      height={12}
                      alt={`${user? user.username : '削除済みのアカウント'}のプロフィール写真`}
                    />
                    <p className='line-clamp-1 text-xs text-[var(--color-gray)]'>
                      <span className='pr-[2px]'>
                        {user? user.username : '削除済みのアカウント'}
                      </span>
                      {
                      activityType?.activity_type === 'NewTaskCreated' && 
                      <span>
                        が新しい課題を作成しました。
                      </span> ||
                      activityType?.activity_type === 'TaskUpdated' &&
                      <span>
                        が課題を更新しました。
                      </span> ||
                      activityType?.activity_type === 'TaskDeleted' &&
                      <span>
                        が課題を削除しました。
                      </span>
                      }
                    </p>
                  </div> 
              </Fragment>
            );
          }
        })
        }
      </div>
    </>
  );
}