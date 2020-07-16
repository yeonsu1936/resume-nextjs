import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '지뢰찾기 리버싱',
      subTitle: '성신여대 해킹동아리 I.Sly() 정보보호의 날 기념 재능기부 발표',
      at: '2020-07',
      descriptions: [
        {
          content: 'Ollydbg로 지뢰찾기 게임을 리버싱하여 지뢰를 미리 확인하는 실습 진행',
        },
        {
          content: '팀장/지뢰찾기 리버싱 실습 진행/PPT제작',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: 'Reversing.kr : Easy Crack 문제 분석하기',
      subTitle: '성신여대 해킹동아리 I.Sly() 중간점검 발표',
      at: '2020-04',
      descriptions: [
        {
          content: '팀장/Ollydbg로 Easy Crack 문제 분석하기/PPT제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '개인정보보호 이슈로 알아보는 개인정보보호 동향',
      subTitle: '성신여대 융합보안동아리 融保工 제1회 동향분석 발표',
      at: '2019-10',
      descriptions: [
        {
          content: '바이오정보, GDPR, 사물인터넷으로 알아보는 개인정보보호 발표',
        },
        {
          content: '팀장/GDPR로 알아보는 개인정보보호 PPT제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: 'Blockchain기반 DDoS 방어 플랫폼 구축 프로젝트',
      subTitle: '성신여대 융합보안동아리 融保工 제3회 융합보안세미나',
      at: '2019-09',
      descriptions: [
        {
          content: 'Gladius를 이용해 Blockchain기반 DDoS 방어 플랫폼 구축하기',
        },
        {
          content: '팀장/Gladius를 이용해 Blockchain기반 DDoS 방어 플랫폼 구축 실습 진행/PPT 제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '스피어 피싱을 이용한 악성코드 다운',
      subTitle: '성신여대 융합보안동아리 融保工 제2회 융합보안세미나',
      at: '2019-06',
      descriptions: [
        {
          content: '사회공학기법인 스피어피싱을 이용하여 악성코드를 다운받게 하는 융합보안시나리오 실습 및 발표',
        },
        {
          content: '팀장/융합보안시나리오 설계 및 악성코드 분석',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '영화 도둑들에서 찾아보는 ISMS 인증 기준',
      subTitle: '성신여대 융합보안동아리 融保工 제3회 융합보안시나리오 발표',
      at: '2019-05',
      descriptions: [
        {
          content: '영화 도둑들에서 부족한 ISMS 인증 기준을 찾고 해결방안을 제시',
        },
        {
          content: '팀원/인적 보안과 물리적 보안을 중심으로 영화 분석/PPT 제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '알리바바와 40인의 도둑들 : 한국의 사이코패스에 대하여',
      subTitle: '성신여대 융합보안동아리 融保工 제2회 융합보안시나리오 발표',
      at: '2019-04',
      descriptions: [
        {
          content: '부제 : 알리바바의 하녀는 사이코패스인가?',
        },
        {
          content: '한국 사이코패스 사례(엄여인 사건, 강호순)를 분석',
        },
        {
          content: '고전주의와 실증주의로 본 사이코패스에 대해 발표',
        },
        {
          content: '사이코패스의 처벌과 방안에 대한 생각 제시',
        },
        {
          content: '팀원/고전주의와 실증주의로 본 사이코패스 조사/PPT 제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '동화 빨간모자에서 늑대에게 해당하는 위법행위에 대하여',
      subTitle: '성신여대 융합보안동아리 融保工 제1회 융합보안시나리오 발표',
      at: '2019-03',
      descriptions: [
        {
          content: '늑대에게 해당되는 위법행위와 늑대를 막을 수 있었던 방법',
        },
        {
          content: '팀원/주거칩입,살인 및 신앙죄 조사/PPT 제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '칼리리눅스를 이용한 해킹 실습 진행(8차시)',
      subTitle: '성신여대 융합보안동아리 融保工 리눅스 활동에서 수업 진행',
      at: '2019-03',
      descriptions: [
        {
          content: '1주차 : 리눅스 기본 명령어 실습',
        },
        {
          content: '2주차 : ARP Spoofing과 네트워크 패킷 스니핑(1)',
        },
        {
          content: '3주차 : OSI 7계층의 이해',
        },
        {
          content: '4주차 : ARP Spoofing과 네트워크 패킷 스니핑(2)',
        },
        {
          content: '5주차 : DNS Spoofing using Ettercap',
        },
        {
          content: '6주차 : SQL Injection, 웹 방화벽 설치와 탐지',
        },
        {
          content: '7주차 : iptables로 방화벽 구축하기',
        },
        {
          content: '8주차 : 게시판 만들기',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '디지털포렌식 with EnCase',
      subTitle: '성신여대 융합보안동아리 融保工 제1회 융합보안세미나',
      at: '2019-02',
      descriptions: [
        {
          content: 'EnCase툴로 NTFS 파일시스템 파티션 복구 실습 발표',
        },
        {
          content: '팀장/NTFS 파티션 복구 실습/PPT 제작 및 발표',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: 'Kali Linux를 이용한 SQL 인젝션 공격',
      subTitle: '성신여대 융합보안동아리 融保工 대체과제 발표',
      at: '2018-12',
      descriptions: [
        {
          content: 'Kali Linux를 이용한 SQL 인젝션 공격',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: 'Intelligent Access Point security in wireless network environment',
      subTitle: '성신여대 네트워크 수업 발표',
      at: '2018-12',
      descriptions: [
        {
          content: '무선 네트워크 환경에서 Intelligent Access Point 보안',
        },
        {
          content: 'WIPS 센서를 이용한 공격 탐지 및 차단',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
    {
      title: '금융혁명  VS 튤립버블 두 가지 견해로 바라보는 비트코인',
      subTitle: '성신여대 정보보호개론 수업 발표',
      at: '2017-12',
      descriptions: [
        {
          content: '팀원/비트코인에 사용되는 기술과 원리(마이닝, 블록체인, P2P) 조사/PPT 제작',
        },
        {
          content: 'Slideshare:',
          postHref: '-',
        },
      ],
    },
  ],
};

export default presentation;
