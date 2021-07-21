export const numberFormat = (number) =>{
   if(number) return number.match(/.{1,4}/g)
   return []
}