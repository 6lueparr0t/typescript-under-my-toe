interface Vector2D {
  x: number
  y: number
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
interface NamedVector {
  name: string
  x: number
  y: number
}
interface Vector3D {
  x: number
  y: number
  z: number
}
function normalize(v: Vector3D) {
  // v.x^2 + v.y^2 + v.z^2 = length 이지만
  // v.z 라는 인자가 넘어가도 에러로 인지하지 못한다.
  // 타입스크립트에서 감지하지 못하는 오류이기 때문에 조심해야된다..
  const length = calculateLength(v)
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}

export default {}
