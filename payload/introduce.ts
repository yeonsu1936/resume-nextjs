import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '정보보안, 리버스 엔지니어링, 취약점 분석, 디지털포렌식, 무선통신보안을 공부하는 대학생입니다.'
  ],
  sign: 'Sung Yeonsu',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
