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
  // ローカル現在時刻の取得
  const nowLocal = new Date();

  // UTCとローカルタイムゾーンとの差を取得し、分からミリ秒に変換
  const diff = nowLocal.getTimezoneOffset() * 60 * 1000;

  // toISOString()で、UTC時間になってしまうので、ローカルタイムとの差を無くす
  const plusLocal = new Date(nowLocal.getTime() - diff);    

  // ISO形式に変換後、日付のみ取得。タイムゾーンは考慮しない
  return plusLocal.toISOString().split('T')[0];
}

// yyyy年mm月dd日にする
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