import { config } from '../../settings';
const { common } = config;

/* import { timeout } from 'async'; */

const createFeaturedImageMediaWidget = async (
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
        maxFiles: 1,
        multiple: false,
        // folder: `${product.state.category}/${product.state.productName}`,
        uploadPreset: 'awumcrdz',
        sources: ['local'],
        //   uploadSignature,

        // theme: 'minimal',
        //  thumbnailTransformation: { width: 400, height: 400, crop: 'fit' },
      },
      {
        insertHandler(data) {
          return data.assets.forEach(asset => {
            //  console.log('Inserted asset:', JSON.stringify(asset, null, 2));

            const thumbnailSrc = asset.secure_url.split('upload/');

            product.setState({
              featuredImage: {
                alt: '',
                src: `${thumbnailSrc[0]}upload/f_auto,q_auto/${
                  thumbnailSrc[1]
                }`,
                publicId: `${asset.public_id}`,
                thumbnailSrc: `${
                  thumbnailSrc[0]
                }upload/f_auto,q_auto,w_300,h_300/${thumbnailSrc[1]}`,
              },
            });
          });
        },
      },
    );
  } */
  if (common.BROWSER && (window as any).cloudinary !== undefined) {
    if (product.props && product.props.album) {
      if (product.props.album.featuredImage.publicId === 'undefined') {
        /*     console.log(product.props.album); */
      }
    }
    return (window as any).cloudinary.createMediaLibrary(
      {
        cloud_name: cloudName,
        showAdvancedOptions: true,
        maxFiles: 1,
        multiple: false,
        // folder: `${product.state.category}/${product.state.productName}`,

        uploadPreset: 'awumcrdz',
        sources: ['local'],
        //   uploadSignature,

        // theme: 'minimal',
        //  thumbnailTransformation: { width: 400, height: 400, crop: 'fit' },
      },
      {
        insertHandler(data: any) {
          return data.assets.forEach((asset: any) => {
            //  console.log('Inserted asset:', JSON.stringify(asset, null, 2));

            const thumbnailSrc = asset.secure_url.split('upload/');

            product.setState({
              featuredImage: {
                alt: '',
                src: `${thumbnailSrc[0]}upload/f_auto,q_auto/${thumbnailSrc[1]}`,
                publicId: `${asset.public_id}`,
                thumbnailSrc: `${thumbnailSrc[0]}upload/f_auto,q_auto,w_300,h_300/${
                  thumbnailSrc[1]
                }`,
              },
            });
          });
        },
      },
    );
  }
};
export default createFeaturedImageMediaWidget;
