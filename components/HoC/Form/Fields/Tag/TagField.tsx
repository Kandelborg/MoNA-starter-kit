import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'

import { Button, Chip, TextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField'
import { FieldProps } from 'formik'
import { Omit } from 'global'
import addTag from './addTag'
import removeTag from './removeTags'
import useStyles from './TagStyles'

export interface ForumUITagsFieldProps
  extends FieldProps,
    Omit<TextFieldProps, 'error' | 'name' | 'onChange' | 'value'> {
  fieldValueName?: string
  lpIgnore?: boolean
  contentIdx?: number
}

export const formikToTagsField = ({
  form,
  variant,
  disabled = false,
  ...props
}: ForumUITagsFieldProps): TextFieldProps => {
  const { isSubmitting } = form

  return {
    ...props,
    // Hack to work around type issue
    // See: https://github.com/Microsoft/TypeScript/issues/28791
    disabled: isSubmitting || disabled,
    variant: variant as any
  }
}

type ChipDataArray = string[]

const TagsField: FunctionComponent<ForumUITagsFieldProps> = ({
  children,
  lpIgnore,
  fieldValueName,
  contentIdx,
  ...props
}) => {
  const [allTags] = useState<string[]>(
    props.form.values.contents[contentIdx!].tags.set
  )
  const [tags, setTags] = useState<ChipDataArray>([])
  const [textValue, setTextValue] = useState('')

  useEffect(() => {
    const newArr: ChipDataArray = []

    allTags.forEach((tag) => newArr.push(tag))

    setTags(newArr)
  }, [allTags])

  const addTagFn = addTag({
    fieldValueName,
    setTags,
    setTextValue,
    setValueFn: props.form.setFieldValue,
    // tslint:disable-next-line: object-shorthand-properties-first
    tags
  })

  const removeTagFn = removeTag({
    fieldValueName,
    setTags,
    setValueFn: props.form.setFieldValue,
    // tslint:disable-next-line: object-shorthand-properties-first
    tags
  })

  const resetTagFn = () => {
    setTags([])
    props.form.setFieldValue(`${fieldValueName}`, { set: [] })
  }

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value)
  }

  const classes = useStyles()

  return (
    <>
      <TextField
        label="Tags"
        inputProps={{ 'data-lpignore': lpIgnore }}
        value={textValue}
        onChange={handleTextChange}
        {...formikToTagsField(props)}
      />
      <br />
      <br />
      {tags.map(
        (tag, i) =>
          tag !== '' && (
            <Chip
              color="primary"
              className={classes.chipRoot}
              key={`${tag}-${i}`}
              onDelete={removeTagFn(tag)}
              label={tag}
            />
          )
      )}
      <br />
      <br />
      <Button
        className={classes.buttonRoot}
        variant="outlined"
        onClick={() => addTagFn(textValue)}>
        +
      </Button>
      <Button
        className={classes.buttonRoot}
        variant="outlined"
        onClick={resetTagFn}>
        Reset
      </Button>
    </>
  )
}

TagsField.displayName = 'FormUI input - Tags'

export default TagsField
