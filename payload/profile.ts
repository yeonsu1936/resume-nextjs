import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '성연수',
    small: '(Sung Yeon Su)',
  },
  contact: [
    {
      title: 'yeonsu1936@gamil.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/yeonsu1936',
      link: 'https://github.com/yeonsu1936',
      icon: faGithub,
    },
    {
      title: 'https://www.facebook.com/yeonsu1936',
      link: 'https://www.facebook.com/profile.php?id=100014585354638',
      icon: faFacebook,
    },
    {
      title: 'https://blog.naver.com/yeonsu1936',
      link: 'https://blog.naver.com/yeonsu1936',
      icon: faFacebook,
    },
  ],
  notice: {
    title: "이메일로 연락 주시면 빠르게 답변드립니다.",
    icon: faBell,
  },
};

export default profile;
