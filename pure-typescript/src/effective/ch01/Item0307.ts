export function turnLightOn() {
  console.log("turnLightOn");
}
export function turnLightOff() {
  console.log("turnLightOff");
}
export function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn()
      break
    case false:
      turnLightOff()
      break
    default:
      console.log(`I'm afraid I can't do that.`)
  }
}

interface LightApiResponse {
  lightSwitchValue: boolean
}

// async function setLight() {
//   const response = await fetch('/light')
//   const result: LightApiResponse = await response.json()
//   setLightSwitch(result.lightSwitchValue)
// }

export default function() {}