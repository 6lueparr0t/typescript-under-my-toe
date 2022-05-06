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

// function calculateLengthL1(v: Vector3D) {
  // 앞서 Item0404.ts 에서 인자의 속성만 맞으면 통과가 된다.
  
  // let length = 0
  // 정확한 타입으로 데이터를 순회하는 것은 까다롭기 때문에
  // 이러한 for 문은 지양한다.
  // for (const axis of Object.keys(v)) {
    
    // 타입스크립트는 v[axis] 가 어떤 타입을 가지는지
    // 정확히 알지 못한다고 한다. 
    // const coord = v[axis]
    // ~~~~~~~ Element implicitly has an 'any' type because ...
    //         'string' can't be used to index type 'Vector3D'
    // length += Math.abs(coord)
  // }
  // return length
// }

// const vec3D = { x: 3, y: 4, z: 1, address: '123 Broadway' }
// calculateLengthL1(vec3D) // OK, returns NaN

function calculateLengthL1(v: Vector3D) {
  // 타입스크립트에서 사용하는 안전한 방법
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z)
}

export default {}
