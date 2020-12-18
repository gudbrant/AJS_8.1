import Character from './character';
import Team from './team';

const Bowerman = new Character('Bob');
const Swordsman = new Character('Sam');
const Magician = new Character('Maggy');

const Ateam = new Team();

Ateam.add(Bowerman);
Ateam.add(Swordsman);
Ateam.add(Magician);

Ateam.addAll(Bowerman, Swordsman, Magician, Bowerman);
