
import { config } from '../../settings';
const { common } = config;



const createUploadWidget = async (
  cloudName: string,
  uploadSignature: (callbackFunction: any, params: any) => Promise<void>,
  product: any,
) => {

  if (common.BROWSER && (window as any).cloudinary !== undefined) {
    if (product.props && product.props.album) {
      if (product.props.album.featuredImage.publicId === 'undefined') {
        /*  console.log(product.props.album); */
      }
    }
    return (window as any).cloudinary.createUploadWidget(
      {
        cloudName,
        showAdvancedOptions: true,
        maxFiles: 1,
        multiple: false,
        folder: `${product.state.category}/${product.state.productName}`,
        uploadPreset: 'awumcrdz',
        sources: ['local'],
        // tslint:disable-next-line:object-shorthand-properties-first
        uploadSignature,
        uploadSignatureTimestamp: Date.now(),
        theme: 'minimal',
        thumbnailTransformation: { width: 400, height: 400, crop: 'fit' },
      },
      (error: Error, result: any) => {
        if (error) {
          // tslint:disable-next-line:no-console
          console.error(error);
        }

        if (result.info && result.info.secure_url) {
          // console.log(result.info);
          //      console.log(`Image Url: ${result.info.secure_url}`);

          let imageArray: any[];

          if (product.state.images) {
            imageArray = product.state.images;

            imageArray.push({
              src: `${result.info.secure_url}`,
              publicId: `${result.info.public_id}`,
              thumbnailSrc: `${result.info.thumbnail_url}`,
            });
          } else {
            imageArray = [
              {
                src: `${result.info.secure_url}`,
                publicId: `${result.info.public_id}`,
                thumbnailSrc: `${result.info.thumbnail_url}`,
              },
            ];
          }
          product.setState({
            images: imageArray,
          });
        }
      },
    );
  }
};
export default createUploadWidget;
