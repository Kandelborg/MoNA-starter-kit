const isArray = (canBeArray: any) =>
  'isArray' in Array
    ? Array.isArray(canBeArray)
    : Object.prototype.toString.call(canBeArray) === '[object Array]'

const mapIncludes = (map: Map<string, any>, key: any) => map.has(key)
const objectIncludes = (obj: object, key: any) => key in obj
let includes

function removeFromArr(arr: any[], ...thisArgs: any[]) {
  const itemsToRemove: any[] = isArray(thisArgs[0]) ? thisArgs[0] : thisArgs
  let withoutValues

  if (typeof Map !== 'undefined') {
    withoutValues = itemsToRemove.reduce(
      (map, value) => map.set(value, value),
      new Map()
    )
    includes = mapIncludes
  } else {
    withoutValues = itemsToRemove.reduce((map, value) => {
      map[value] = value

      return map
    }, {})
    includes = objectIncludes
  }

  const arrCopy = []
  const length = arr.length

  for (let i = 0; i < length; i += 1) {
    // If value is not in exclude list
    if (!includes(withoutValues, arr[i])) {
      arrCopy.push(arr[i])
    }
  }

  return arrCopy
}

export default removeFromArr
