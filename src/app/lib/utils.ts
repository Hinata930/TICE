export function generatePagination(
  currentPage: number, 
  totalPages: number
) {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

// ISOStringの日本の日付 (yyyy-mm-dd)
export function fetchCurrentDate() {
  const dateObject = new Date();

  // yyyy年mm月dd日の形式に変換
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
  const jstDate = new Intl.DateTimeFormat('ja-jp', options).format(dateObject);

  const formattedDate = jstDate.replace(/\//g, "-");
  return formattedDate;
}

// yyyy年mm月dd日にする(日本の日時にする)
export function convertDateToJapaneseFormatDate(postgresDate: Date) {
  // PostgreSQLのDate型からDateオブジェクトを作成
  const dateObject = new Date(postgresDate);

  // yyyy年mm月dd日の形式に変換
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('ja-jp', options).format(dateObject)

  return formattedDate;
}

// 上のyyyy年mm月dd日HH:MMのバージョン
export function convertTimeToJapaneseFormatTime(postgresDate: Date) {
  // PostgreSQLのDate型からDateオブジェクトを作成
  const dateObject = new Date(postgresDate);

  // yyyy年mm月dd日HH:MMの形式に変換
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('ja-jp', options).format(dateObject)

  return formattedDate;
}

// 最後の2文字を取り出す
export function getLastTwoCharacters(input: string) {
  if (input.length < 2) {
    return input; // 文字列が2文字未満の場合、そのまま返す
  }
  return input.slice(-2); // 文字列の最後の2文字を返す
}

// numberから曜日を取得
export function convertIndexToJapaneseDayOfWeek(input: number) {
  switch (input) {
    case 0:
      return '日';

    case 1:
      return '月';

    case 2:
      return '火';

    case 3:
      return '水';

    case 4:
      return '木';
    
    case 5:
      return '金';

    case 6:
      return '土';

    default:
      console.log(input);
      return '？';
  }
}

