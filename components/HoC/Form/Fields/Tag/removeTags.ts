import removeFromArr from '@util/removeFromArr'
import { SetStateAction } from 'react'

export default function removeTag(params: {
  tags: string[]
  setTags: (value: SetStateAction<string[]>) => void
  setValueFn: (fieldName: string, value: { set: string[] }) => void
  fieldValueName: string | undefined
}) {
  return (data: string) => async () => {
    const tagLabelArr: string[] = []

    params.tags.map((tag) => {
      if (tag !== '') {
        return tagLabelArr.push(tag)
      }

      return
    })
    const newArr = removeFromArr(tagLabelArr, data)

    params.setTags(newArr)
    params.setValueFn(`${params.fieldValueName}`, { set: newArr })
  }
}
