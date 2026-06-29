import { FarmingData } from "@/app/lib/types/farming";
import FarmingTile from "./farmingTile";

type Props = {
  farming: FarmingData;
};


export default function Farming({farming}: Props) {
  if (!farming) return <></>;

  return (
    <>
      <div className="w-full h-full p-3">
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-row w-full h-12 gap-4">
            <h2 className="flex-row text-4xl font-bold">農園</h2>
            <div className="flex flex-row gap-4">
              <p>Lv.{farming.level}</p>
              <p>お財布: {farming.money.toString()}G</p>
            </div>
          </div>

          <div className="flex-row w-full h-full mt-6">
            <div className="w-24">
              <FarmingTile farming={farming} />
            </div>
          </div>
        </div>
        


      </div>

























{/* 
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
          
            <div key={index} className='flex justify-between items-center mb-4 p-2 bg-white rounded-lg shadow-sm'>
              <h3 className='text-lg font-medium text-gray-800'>
                従業員 {index + 1} - レベル: [{level}] +{(index + 1) * level}/s
              </h3>
              <button
                title='upgrade'
                onClick={() => upgradeEmployee(index)}
                className='ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-300 text-white rounded-lg shadow-md'
              >
                Upgrade to +)
              </button>
            </div>
            
        </div>
      </div>*/}
    </>
  );
}
