import * as fs from 'fs';
import * as path from 'path';

export default function() {
  let list:Array<number> = [];

  try {
    const data = fs.readFileSync(path.join(__dirname, '/assets/input.txt'), 'utf8');
    list = data.toString().replace(/\r\n/g,'\n').split('\n').map(Number);
  } catch (err) {
    console.error(err)
  }

  let prev:number = 0;
  let count1:number = 0;
  for (let line of list) {
    if (prev < line && prev != 0) {
      count1++;
    }
    prev = line;
  }

  console.log("Part 1 : " + count1);

  let arr:Array<number> = [0, 0, 0];

  const sw:number = 3;

  let count2:number = 0;
  let prevSum:number = 0;

  const reducer = (acc:number, cur:number) => acc + cur;

  for(let i:number = 0; i < list.length; i++) {
    arr[i % sw] = list[i];
    let curSum:number = arr.reduce(reducer);
    if(i > 2 && prevSum != 0 && prevSum < curSum) {
      //console.log(prevSum + " < " + curSum);
      count2++;
    }
    prevSum = curSum;
  }

  console.log("Part 2 : " + count2);
}