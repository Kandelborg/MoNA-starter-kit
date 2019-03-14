interface Window {
  uploadWidget: any
  cloudinary: {
    createUploadWidget: (
      options: any,
      resultCallback: (error: Error, result: any) => any
    ) => any
    openUploadWidget: (
      options: any,
      resultCallback: (error: Error, result: any) => any
    ) => any
  }
}
