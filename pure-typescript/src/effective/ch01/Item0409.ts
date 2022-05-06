interface Vector3D {
  x: number
  y: number
  z: number
}
function calculateLengthL1(v: Vector3D) {
  // 타입스크립트에서 사용하는 안전한 방법
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z)
}

export default {}
