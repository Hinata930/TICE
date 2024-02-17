import { fetchTeam, fetchTeamInviteArrayByUserId, fetchTeams, getUserById } from '@/app/lib/data';
import Link from 'next/link';
import { Fragment } from 'react';
import { AcceptedTeamInviteButton, RejectTeamInviteButton } from './invite/buttons';


export default async function TeamList({ user_id }: { user_id: string }) {
  const teamArray = await fetchTeams(user_id);
  const teamInviteArray = await fetchTeamInviteArrayByUserId(user_id);

  return (
    <>
      {teamArray.map((team) => (
        <Fragment key={team.id}>
          <Link
            key={team.id}
            href={`/team/${team.id}`}
            className='block h-16 w-auto mt-1 p-1 line-clamp-1 text-[var(--color-gray)] text-xl rounded-md border-2 border-[var(--color-light-gray)] hover:translate-y-[-1px] hover:shadow'
          >
            <p>{team.team_name}</p>
          </Link>
        </Fragment>
        
      ))
      }
      {teamInviteArray.map(async (teamInvite) => {
        if (teamInvite.team_id && teamInvite.user_id) {
          const team = await fetchTeam(teamInvite.team_id);
          if (team) {
            const teamCreator = await getUserById(team.creator? team.creator: '');
            return (
              <Fragment key={teamInvite.id}>
                <div className='block h-16 w-auto mt-1 p-1 line-clamp-1 text-[var(--color-gray)] text-xl rounded-md border-2 border-[var(--color-light-gray)] hover:translate-y-[-1px] hover:shadow'>
                  <div className='flex flex-row flex-grow'>
                    <div className='flex flex-col'>
                      <p className='text-base text-[var-(--color-gray)]'>
                        {`${team.team_name} からの招待`}
                      </p>
                      <p className='text-xs text-[var(--color-gray)]'>
                        {`${teamCreator?.username}のチーム`}
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <AcceptedTeamInviteButton currentUserId={user_id} id={teamInvite.id} />
                      <RejectTeamInviteButton currentUserId={user_id} id={teamInvite.id} />
                    </div>
                  </div>
                    
                </div>
              </Fragment>
            );
          }
        }
      })
      }
    </>
  );
}
