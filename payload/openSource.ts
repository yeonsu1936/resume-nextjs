import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'ImageCarving',
      descriptions: [
        { content: 'ImageCarving Tool for Open Source' },
        { content: 'Contributor' },
        {
          content: '-',
          href: '-',
        },
        /*
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nodejs/node.svg?style=popout',
        },
        */
      ],
    },
  ],
};

export default openSource;
