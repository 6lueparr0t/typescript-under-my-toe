export default function() {
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

  const v: NamedVector = { x: 3, y: 4, name: 'Zee' }

  // 구조적으로 달라도 해당 키만 있으면 정상적으로 실행이 된다.
  console.log(calculateLength(v)) // OK, result is 5
}
