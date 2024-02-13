
enum Month {
  Январь = '01',
  Февраль = '02',
  Март = '03',
  Апрель = '04',
  Май = '05',
  Июнь = '06',
  Июль = '07',
  Август = '08',
  Сентябрь = '09',
  Октябрь = '10',
  Ноябрь = '11',
  Декабрь = '12'
}

function countDifferentChars(str1: string, str2: string) {
  let count = 0;
  const minLength = Math.min(str1.length, str2.length);
  
  for (let i = 0; i < minLength; i++) {
      if (str1[i] !== str2[i]) {
          count++;
      }
  }
  
  count += Math.abs(str1.length - str2.length);
  
  return count;
}


export function convertDate(date: string) {
  const dateSegments = date.split(' ');
  const month = Object.entries(Month).find(([key, value]) => countDifferentChars(key, date) < 3) ?? Month.Январь;
  return `${dateSegments[0]}.${month[1]}.${dateSegments[2]}`;
}