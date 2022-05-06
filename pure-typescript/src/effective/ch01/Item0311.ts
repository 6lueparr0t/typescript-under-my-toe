function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: boolean, b: boolean): boolean

function add(a: any, b:any) {
  return a + b
}

const three = add(1, 2) // Type is number
const twelve = add('1', '2') // Type is string
const ttrue = add(true, true) // Type is boolean

export default {}
