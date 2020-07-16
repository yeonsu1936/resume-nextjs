import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Mobility 환경에서 드론의 이동성을 활용한 협력적 재머 모델의 보안성 연구',
      startedAt: '2020-01',
      where: '성신여자대학교 미래융합기술대학원 융보공랩',
      descriptions: [
        { content: '라즈베리파이를 이용한 실제 환경 구현과 시뮬레이션을 통해 Alice의 이동성과 드론의 인공잡음송출 여부에 따라 도청기기의 채널용량(channel capacity)을 비교하여 PHY계층의 보안성을 입증' },
        {
          content: 'position',
          weight: 'MEDIUM',
          descriptions: [
            { content: '알고리즘 개발' },
          ],
        },
        {
          content: 'skillKeywords',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Matlab' },
            { content: 'Raspberry Pi' },
          ],
        },
      ],
    },
    {
      title: '이미지 카빙 툴 제작',
      startedAt: '2020-03',
      endedAt: '2020-06',
      where: '성신여대 인턴십 수업',
      descriptions: [
        { content: 'FAT32 파일시스템의 JPG, PNG, BMP 이미지를 카빙하는 툴 제작' },
        {
          content: 'position',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'JPG, PNG, BMP 카빙 알고리즘 개발' },
            { content: 'UI 개발' },
          ],
        },
        {
          content: 'skillKeywords',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Python3' },
            { content: 'PyQt5' },
            { content: 'Digital Forensics' },
          ],
        },
      ],
    },
    {
      title: '공공안전 향상을 위한 공항 키오스크 활용 방안 연구',
      startedAt: '2019-09',
      endedAt: '2020-02',
      where: '성신여대 융합보안프로젝트 수업',
      descriptions: [
        { content: '공공안전 향상을 위한 공항 키오스크 활용 방안 연구' },
        {
          content: 'position',
          weight: 'MEDIUM',
          descriptions: [
            { content: '재난 대비 경로 알고리즘 개발' },
          ],
        },
        {
          content: 'skillKeywords',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Python3' },
            { content: 'Raspberry Pi' },
            { content: 'Open CV' },
            { content: 'Yolo' },
          ],
        },
      ],
    },
    {
      title: 'HTML5, CSS3, JavaScript를 이용한 세계 초콜릿 쇼핑몰 웹 페이지 제작',
      startedAt: '2016-10',
      endedAt: '2016-11',
      where: '성신여대 인터넷프로그래밍 수업',
      descriptions: [
        { content: 'HTML5, CSS3, JavaScript를 이용한 세계 초콜릿 쇼핑몰 웹 페이지 제작' },
        {
          content: 'position',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Software Enginne' },
          ],
        },
        {
          content: 'skillKeywords',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'HTML' },
            { content: 'CSS' },
            { content: 'JavaScript' },
          ],
        },
      ],
    },
  ],
};

export default project;
