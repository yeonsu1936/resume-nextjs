import favicon from '../asset/favicon.ico';
import previewImage from '../asset/_sample.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Sung Yeonsu Porfolio Page';
const description = 'This is a Sung Yeonsu porfolio web page.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '성',
        lastName: '연수',
        username: 'lorem',
        gender: 'femail',
      },
    },
  },
};
