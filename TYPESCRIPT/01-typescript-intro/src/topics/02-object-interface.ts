const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills,
  hometown: 'Rivendell',
}
console.table(strider);
export {}