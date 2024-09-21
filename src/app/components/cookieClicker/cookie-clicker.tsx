'use client';

import { UpdateCookieClicker } from "@/app/lib/actions/cookie-clicker-actions";
import { useEffect, useState } from "react";


interface Cookie {
  cookie: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    user_id: string;
    cookie_count: bigint;
    employee_level_1: number;
    employee_level_2: number;
    employee_level_3: number;
    employee_level_4: number;
    employee_level_5: number;
    employee_level_6: number;
  }
}


export default function CookieClicker(cookie: Cookie) {
  // let cookie_number = new Intl.NumberFormat().format(cookie.cookie.cookieCount);
  const employees = [
    cookie.cookie.employee_level_1,
    cookie.cookie.employee_level_2,
    cookie.cookie.employee_level_3,
    cookie.cookie.employee_level_4,
    cookie.cookie.employee_level_5,
    cookie.cookie.employee_level_6,
  ]

  const userId = cookie.cookie.user_id;
  const [cookieCount, setCookieCount] = useState<bigint>(BigInt(0));
  const [employeeLevels, setEmployeeLevels] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const loadGameData = async () => {
      setCookieCount(cookie.cookie.cookie_count);
      setEmployeeLevels(employees);
    };

    loadGameData();
  }, [cookie]);
    

  const clickCookie = () => {
    setCookieCount(cookieCount + BigInt(1));
  };

  const saveGame = async () => {
    try {
      await UpdateCookieClicker(
        userId,
        cookieCount,
        employeeLevels,
      )

      console.log('clear!')
    } catch (error) {
      console.error('Failed to save game.', error);
    };
  }

  return(
    <>
      <div className='w-auto h-full'>
        <div className='w-auto h-auto'>
          <div className='h-auto w-auto m-auto text-neutral-900 font-medium text-xl'>
            
            <h3>{ new Intl.NumberFormat().format(cookieCount) }</h3>
          </div>
          <div className='flex-row'>
            <button title='cookieButton' onClick={clickCookie} className='h-20 w-20 bg-neutral-500 hover:bg-neutral-400 active:bg-neutral-300'></button>
            <button title='saveButton' onClick={saveGame}>Save</button>
          </div>
        </div>
        
        <div className='flex w-auto h-full bg-neutral-200'>
          <div className='h-full w-auto'>

          </div>
          <div className='flex-col h-full w-auto'>

          </div>
        </div>
      </div>
    </>
  );
}