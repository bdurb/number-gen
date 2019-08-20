const numberGen = () => {

  const initA = 42
  const initB = 6834
  const aFactor = 16807
  const bFactor = 48271
  let startA = initA * aFactor
  let startB = initB * bFactor
  const divisor = 2147483647
  let count = 0
  let runs = 40000000
  const arr1 = [Number(Array.from(startA.toString(2).slice(-16, startA.length)).join(''))]
  const arr2 = [Number(Array.from(startB.toString(2).slice(-16, startB.length)).join(''))]

  while (runs > 0) {
    let valueA = (startA * aFactor) % divisor
    let valueB = (startB * bFactor) % divisor
    arr1.push(Number(Array.from(valueA.toString(2).slice(-16, valueA.length)).join('')))
    arr2.push(Number(Array.from(valueB.toString(2).slice(-16, valueB.length)).join('')))
    startA = valueA
    startB = valueB
    runs--
  }
   const len = arr1.length
   for (let i = 0; i < len; i++) {
     if (arr1[i] === arr2[i]) {
       count++
     }
   }
   console.log(count)
}

numberGen()