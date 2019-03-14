import { uniqBy } from 'lodash'
import { config } from '../settings'
const { common } = config

export interface Image {
  src: string
  publicId: string
  thumbnailSrc: string
}

const uploadImageWidget = (
  options: {
    multiple: boolean
    maxFiles: number | null
    cloudName: string
    uploadPreset: string
    uploadSignature: (callbackFunction: any, params: any) => Promise<void>
  },
  widget: undefined,
  callbackFn: {
    images: Image[]
    setImages: (imgArr: Image[]) => any
  }
) => {
  // @ts-ignore
  let newWidget = widget
  const {
    cloudName,
    uploadPreset,
    uploadSignature,
    maxFiles,
    multiple
  } = options
  if (!common.NODE && common.BROWSER && window.cloudinary !== undefined) {
    if (!window.uploadWidget) {
      window.uploadWidget = window.cloudinary.createUploadWidget(
        {
          cloudName,
          maxFiles,
          multiple,

          uploadPreset,

          uploadSignature,
          uploadSignatureTimestamp: Date.now(),

          cropping: true,
          showAdvancedOptions: true,
          showCompletedButton: true,
          sources: ['local'],
          theme: 'minimal',
          thumbnailTransformation: { width: 250, height: 141, crop: 'fit' }
        },
        (err, result) => {
          if (err) {
            // tslint:disable-next-line: no-console
            console.error(err, result)
          }

          if (result.event === 'success') {
            const imageArray: Image[] = []

            imageArray.push({
              publicId: `${result.info.public_id}`,
              src: `${result.info.secure_url}`,
              thumbnailSrc: `${result.info.thumbnail_url}`
            })

            // Make unique array
            const uImgArray = uniqBy(
              // Remove empty objects
              imageArray.filter((image) => image.publicId !== ''),
              // Make unique by publicId
              (imageObj) => imageObj.publicId
            )
            callbackFn.setImages(uImgArray)
          }
        }
      )
      newWidget = window.uploadWidget
    } else {
      //  console.log('Using existing upload widget');

      newWidget = window.uploadWidget
    }

    return
  }

  return // console.warn('we are currently on node or non-browser land. Nothing happened');
}

export default uploadImageWidget

// TODO: refactor functions for proper initialization
/* FROM FMS */

export interface Image {
  src: string
  publicId: string
  thumbnailSrc: string
}

const uploadImageWidget2 = (
  options: {
    multiple: boolean
    maxFiles: number | null
    cloudName: string
    uploadPreset: string
    uploadSignature: (callbackFunction: any, params: any) => Promise<void>
  },
  widget: undefined,
  callbackFn: {
    images: Image[]
    setImages: (imgArr: Image[]) => any
  }
) => {
  // @ts-ignore
  let newWidget = widget
  const {
    cloudName,
    uploadPreset,
    uploadSignature,
    maxFiles,
    multiple
  } = options

  if (!common.NODE && common.BROWSER && window.cloudinary !== undefined) {
    window.uploadWidget = window.cloudinary.createUploadWidget(
      {
        cloudName,
        maxFiles,
        multiple,

        uploadPreset,

        uploadSignature,
        uploadSignatureTimestamp: Date.now(),

        cropping: true,
        showAdvancedOptions: true,
        showCompletedButton: true,
        sources: ['local'],
        theme: 'minimal',
        thumbnailTransformation: { width: 250, height: 141, crop: 'fit' }
      },
      (err, result) => {
        if (err) {
          // tslint:disable-next-line: no-console
          console.error(err, result)
        }

        if (result.event === 'success') {
          const imageArray: Image[] = []

          imageArray.push({
            publicId: `${result.info.public_id}`,
            src: `${result.info.secure_url}`,
            thumbnailSrc: `${result.info.thumbnail_url}`
          })

          // Make unique array
          const uImgArray = uniqBy(
            // Remove empty objects
            imageArray.filter((image) => image.publicId !== ''),
            // Make unique by publicId
            (imageObj) => imageObj.publicId
          )
          callbackFn.setImages(uImgArray)
        }
      }
    )
    newWidget = window.uploadWidget

    return
  }

  return // console.warn('we are currently on node or non-browser land. Nothing happened');
}

export { uploadImageWidget2 }
