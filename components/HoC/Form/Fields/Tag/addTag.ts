import { SetStateAction } from 'react'

export default function addTag(params: {
  tags: string[]
  setTags: (value: SetStateAction<string[]>) => void
  setValueFn: (fieldName: string, value: { set: string[] }) => void
  fieldValueName: string | undefined
  setTextValue: (value: SetStateAction<string>) => void
}) {
  const { tags, setTags, setValueFn, fieldValueName, setTextValue } = params

  return (tag: string) => {
    const tagLabelArr: string[] = []

    if (tag !== '') {
      tags.push(tag)
      setTags(tags)
      tags.map((str) => {
        if (str !== '') {
          return tagLabelArr.push(str)
        }

        return null
      })
      setValueFn(`${fieldValueName}`, {
        set: tagLabelArr
      })
      setTextValue('')
    }

    return
  }
}
