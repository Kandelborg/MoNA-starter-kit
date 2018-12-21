import { config } from '../../settings';
const { common } = config;

/* import { timeout } from 'async'; */

const createMediaWidget = async (
  cloudName: string,
  /*  uploadSignature: (callbackFunction: any, params: any) => Promise<void>, */
  product: any,
) => {
  /*   if (isBrowser && (window as any).cloudinary === undefined) {
    if (product.props && product.props.album) {
      if (product.props.album.featuredImage.publicId === 'undefined') {
        console.log(product.props.album);
      }
    }
    return (window as any).cloudinary.createMediaLibrary(
      {
        cloud_name: cloudName,
        showAdvancedOptions: true,
        // folder: `${product.state.category}/${product.state.productName}`,

        uploadPreset: 'awumcrdz',
        sources: ['local'],
        //   uploadSignature,


        // theme: 'minimal',
        //  thumbnailTransformation: { width: 400, height: 400, crop: 'fit' },
      },
      {
        insertHandler(data) {
          const imageArray: [IImage] | [] = [];
          data.assets.forEach(image => {
            //  console.log('Inserted asset:', JSON.stringify(asset, null, 2));
            const thumbnailSrc = image.secure_url.split('upload/');

            imageArray.push({
              src: `${thumbnailSrc[0]}upload/f_auto,q_auto/${thumbnailSrc[1]}`,
              alt: '',
              publicId: `${image.public_id}`,
              thumbnailSrc: `${
                thumbnailSrc[0]
              }upload/f_auto,q_auto,w_300,h_300/${thumbnailSrc[1]}`,
            });
          });
          product.setState({
            images: imageArray,
          });
        },
      },
    );
  } */
  if (common.BROWSER && (window as any).cloudinary !== undefined) {
    if (product.props && product.props.album) {
      if (product.props.album.featuredImage.publicId === 'undefined') {
        /*   console.log(product.props.album); */
      }
    }
    return (window as any).cloudinary.createMediaLibrary(
      {
        cloud_name: cloudName,
        showAdvancedOptions: true,
        // folder: `${product.state.category}/${product.state.productName}`,
        api_key: '235929258526697',
        uploadPreset: 'awumcrdz',
        sources: ['local'],
        //   uploadSignature,
        username: 'david@techstacker.com',

        // theme: 'minimal',
        //  thumbnailTransformation: { width: 400, height: 400, crop: 'fit' },
      },
      {
        insertHandler(data: any) {
          const imageArray: any[] | any[] = [];
          data.assets.forEach((image: any) => {
            //  console.log('Inserted asset:', JSON.stringify(asset, null, 2));
            const thumbnailSrc = image.secure_url.split('upload/');

            imageArray.push({
              src: `${thumbnailSrc[0]}upload/f_auto,q_auto/${thumbnailSrc[1]}`,
              alt: '',
              publicId: `${image.public_id}`,
              thumbnailSrc: `${
                thumbnailSrc[0]
              }upload/f_auto,q_auto,w_300,h_300/${thumbnailSrc[1]}`,
            });
          });
          product.setState({
            images: imageArray,
          });
        },
      },
    );
  }
};
export default createMediaWidget;
