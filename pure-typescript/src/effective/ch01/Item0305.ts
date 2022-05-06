export default function (val: number | string): number {
  // return val as number
  return typeof val === 'string' ? Number(val) : val
}