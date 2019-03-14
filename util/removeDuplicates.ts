const removeDuplicates = (array: any[], newObj: any) => {
  return array.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[newObj]).indexOf(obj[newObj]) === pos
  })
}

export default removeDuplicates
