import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Python',
      level: 3,
    },
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'MATLAB',
      level: 3,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'R',
      level: 1,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Security',
    },
    {
      title: 'Block Chain',
    },
    {
      title: 'Ubuntu',
    },
    {
      title: 'Kali Linux',
    },
    {
      title: 'Raspberry Pi',
    },
    {
      title: 'Arduino',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
