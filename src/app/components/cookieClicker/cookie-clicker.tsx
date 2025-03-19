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
  const userId = cookie.cookie.user_id;
  const [cookieCount, setCookieCount] = useState<bigint>(BigInt(0));
  const [employeeLevels, setEmployeeLevels] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const loadGameData = async () => {
      setCookieCount(cookie.cookie.cookie_count);
      setEmployeeLevels([
        cookie.cookie.employee_level_1,
        cookie.cookie.employee_level_2,
        cookie.cookie.employee_level_3,
        cookie.cookie.employee_level_4,
        cookie.cookie.employee_level_5,
        cookie.cookie.employee_level_6,
      ]);
    };

    loadGameData();
  }, [cookie]);

  const clickCookie = () => {
    let addedCookies = BigInt(0); // クリックによって追加されるクッキー数
    employeeLevels.forEach((level, index) => {
      addedCookies += BigInt((index + 1) * level); // 従業員のレベルに応じてクリックしたときにもらえるクッキーを増加
    });
    addedCookies /= BigInt(10);
    if ((addedCookies / BigInt(10)) <= BigInt(1)) {
      setCookieCount(prevCount => prevCount + BigInt(1));
    }
    else {
      setCookieCount(prevCount => prevCount + addedCookies);
    };
  };

  const getUpgradeCost = (level: number, index: number) => {
    const baseCost = 144 * Math.pow(index + 1, 2); // ベースコスト 144 * (index + 1) ^ 2
    const upgradeCost = baseCost * Math.pow(1.043, level); // アップグレードコスト base_cost * 1.043 ^ レベル
    return BigInt(Math.floor(upgradeCost)); // 整数化してBigIntで返す
  };

  const upgradeEmployee = (index: number) => {
    if (index > 0 && employeeLevels[index - 1] < 20) {
      alert(`従業員 ${index + 1} のレベルアップには、従業員 ${index} のレベルが20以上である必要があります！`);
      return;
    }

    const newLevels = [...employeeLevels];
    const upgradeCost = getUpgradeCost(newLevels[index], index); // レベルアップに必要なクッキーを計算

    if (cookieCount >= upgradeCost) {
      newLevels[index] += 1; // 従業員のレベルを1上げる
      setEmployeeLevels(newLevels); // 新しいレベルをセット
      setCookieCount(prevCount => prevCount - upgradeCost); // クッキーを消費
    } else {
      alert("クッキーが足りません！");
    }
  };

  const saveGame = async () => {
    try {
      await UpdateCookieClicker(
        userId,
        cookieCount,
        employeeLevels,
      );
      console.log('Game saved successfully!');
      alert('ゲームが保存されました！'); // アラートを追加
    } catch (error) {
      console.error('Failed to save game.', error);
      alert('ゲームの保存に失敗しました。'); // エラーメッセージを表示
    }
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCookieCount(prevCount => {
        let cookiePerSecond = prevCount;
        employeeLevels.forEach((level, index) => {
          cookiePerSecond += BigInt((index + 1) * level); // レベルに応じて毎秒クッキーを増加
        });
        return cookiePerSecond;
      });
    }, 1000); // 1秒ごとにクッキーを増加

    return () => clearInterval(interval);
  }, [employeeLevels]);

  return (
    <>
      <div className='max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-lg'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold text-gray-800'>クッキークリッカー</h1>
          <h3 className='text-4xl font-semibold text-gray-700 my-4'>{new Intl.NumberFormat().format(cookieCount)}</h3>
        </div>

        <div className='flex justify-center mb-4'>
          <button
            title='cookieButton'
            onClick={clickCookie}
            className='h-24 w-24 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-300 rounded-full shadow-md transition-colors'
          >
            
          </button>
        </div>

        <div className='flex justify-center'>
          <button 
            title='saveButton' 
            onClick={saveGame} 
            className='px-4 py-2 bg-green-500 hover:bg-green-400 active:bg-green-300 text-white rounded-lg shadow-md'>
            Save Game
          </button>
        </div>

        <div className='mt-8'>
          {employeeLevels.map((level, index) => (
            <div key={index} className='flex justify-between items-center mb-4 p-2 bg-white rounded-lg shadow-sm'>
              <h3 className='text-lg font-medium text-gray-800'>
                従業員 {index + 1} - レベル: [{level}] +{(index + 1) * level}/s
              </h3>
              <button
                title='upgrade'
                onClick={() => upgradeEmployee(index)}
                className='ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-300 text-white rounded-lg shadow-md'
              >
                Upgrade to +{(index + 1) * (level + 1)}/s (Cost: {getUpgradeCost(level, index).toString()})
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
