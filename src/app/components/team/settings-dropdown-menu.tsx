import { useEffect, useRef, useState } from "react";


export default function SettingsDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ドキュメント全体のクリックイベントを追加
    document.addEventListener('click', handleClickOutside);
    // コンポーネントのアンマウント時にイベントをクリーンアップ
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // ドロップダウンメニュー以外の場所をクリックしたときにメニューを閉じる
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item: string) => {
    console.log(`Selected item: ${item}`);
    // ここで選択された項目に対する適切な処理を実行する
    // 例えば、別のページへのリダイレクトやアクションの実行など
    
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
        onClick={toggleMenu}
      >
        Open Dropdown
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
          <ul>
            <li onClick={() => handleItemClick('Item 1')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              招待
            </li>
            <li onClick={() => handleItemClick('Item 2')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              チーム設定
            </li>
            <li onClick={() => handleItemClick('Item 3')} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              チームから抜ける
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}