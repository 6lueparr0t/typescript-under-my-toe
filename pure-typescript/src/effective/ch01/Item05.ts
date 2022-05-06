interface Person {
  first: string
  last: string
}

// vscode 에서 p. 만 해도 자동완성이 된다.
const formatName = (p: Person) => `${p.first} ${p.last}`

// 하지만 any 타입에서는 되지 않는다. any 타입을 최대한 지양하자!
const formatNameAny = (p: any) => `${p.first} ${p.last}`

// any 타입 코드에서는 에러체크가 안된다..
const formatNameAny2 = (p: any) => `${p.wow} ${p.last}`


// 코드가 조금 난해했지만 어쨋든 any 를 쓰지 말라는 것이었다.
interface ComponentProps {
  // before => onSelectItem: (item: any) => void
  onSelectItem: (item: {id: number}) => void
}
function renderSelector(props: ComponentProps) {
  /* ... */
}

let selectedId: number = 0
// before => function handleSelectItem(item: any) {
function handleSelectItem(item: {id: number}) {
  selectedId = item.id
}

renderSelector({ onSelectItem: handleSelectItem })

export default {}
