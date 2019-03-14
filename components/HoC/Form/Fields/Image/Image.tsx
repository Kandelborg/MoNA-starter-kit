import Button, { ButtonProps } from '@material-ui/core/Button'
import uploadImageWidget, { Image } from '@util/cloudinary/createUploadWidget'
import getSignature from '@util/cloudinary/getSignature'
import { FieldProps } from 'formik'
import { Omit } from 'global'
import { Dispatch, FunctionComponent, useEffect, useState } from 'react'

import { config } from '@util/settings'

export interface FormUIImageFieldProps
  extends FieldProps,
    Omit<ButtonProps, 'form'> {
  multiple: boolean
  maxfiles: number | null
  helperText?: string
  fieldValueName?: string
}

export const formikToImageField = ({
  form,
  variant,
  disabled = false,
  ...props
}: FormUIImageFieldProps): ButtonProps => {
  const { isSubmitting } = form

  return {
    ...props,
    // Hack to work around type issue
    // See: https://github.com/Microsoft/TypeScript/issues/28791
    disabled: isSubmitting || disabled,
    variant: variant as any
  }
}

let uploadWidget: any

export const ImageInputField: FunctionComponent<FormUIImageFieldProps> = ({
  children,
  fieldValueName,
  ...props
}: FormUIImageFieldProps) => {
  const [images, updateImages]: [Image[], Dispatch<Image[]>] = useState([
    {
      publicId: '',
      src: '',
      thumbnailSrc: ''
    }
  ])

  const [fieldName, setFieldName] = useState(fieldValueName)

  let imageArray: Image[] = []

  const imagesFromState = images

  const setImages = (imgArr: Image[]) => {
    imagesFromState.push(imgArr[0])

    props.form.setFieldValue(`${fieldName}.publicId`, imgArr[0].publicId)
    props.form.setFieldValue(`${fieldName}.thumbnailSrc`, imgArr[0].src)
    props.form.setFieldValue(`${fieldName}.src`, imgArr[0].src)

    updateImages([imgArr[0]])
  }

  const setImages2 = (imgArr: Image[]) => {
    imageArray = imgArr
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < imgArr.length; i += 1) {
      const image = imgArr[i]

      imagesFromState.push(image)
    }
    props.form.setFieldValue(fieldValueName ? fieldValueName : 'images', imgArr)
  }

  useEffect(() => {
    updateImages(imageArray)
    setFieldName(fieldValueName || 'image')
    uploadImageWidget(
      {
        cloudName: config.cloudinary.CLOUD_NAMES[0],
        maxFiles: props.maxfiles,
        multiple: props.multiple,
        uploadPreset: config.cloudinary.UPLOAD_PRESETS[0],
        uploadSignature: getSignature
      },
      uploadWidget,
      {
        images: imageArray,
        setImages: props.multiple ? setImages2 : setImages
      }
    )
    uploadWidget = window.uploadWidget

    return
  }, [])

  const openUploadWidget = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    uploadImageWidget(
      {
        cloudName: config.cloudinary.CLOUD_NAMES[0],
        maxFiles: props.maxfiles,
        multiple: props.multiple,
        uploadPreset: config.cloudinary.UPLOAD_PRESETS[0],
        uploadSignature: getSignature
      },
      uploadWidget,
      {
        images,
        setImages: props.multiple ? setImages2 : setImages
      }
    )
    uploadWidget = window.uploadWidget

    uploadWidget.open()
  }

  return (
    <>
      <Button
        variant={props.variant}
        color={props.color}
        key={`${fieldValueName}-button-${Math.random()}`}
        {...formikToImageField(props)}
        onClick={openUploadWidget}>
        {children ? children : `Upload`}
      </Button>

      {images.map((img, i) => {
        return (
          <img
            id={`${img.publicId}-${fieldValueName}-${i}`}
            key={`${img.publicId}-${fieldValueName}-${i}`}
            alt={img.thumbnailSrc}
            style={
              img.thumbnailSrc
                ? {
                    height: 141,
                    width: 250
                  }
                : {}
            }
            src={img.thumbnailSrc}
          />
        )
      })}
    </>
  )
}

ImageInputField.displayName = 'Image Upload'
