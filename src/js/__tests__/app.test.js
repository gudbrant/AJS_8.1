import Character from '../character';
import Team from '../team';

test('Создание нового персонажа Bob', () => {
  const received = new Character('Bob');
  const expected = { name: 'Bob', health: 100, level: 1 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Sam', () => {
  const received = new Character('Sam');
  const expected = { name: 'Sam', health: 100, level: 1 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Andy', () => {
  const received = new Character('Andy');
  const expected = { name: 'Andy', health: 100, level: 1 };
  expect(received).toEqual(expected);
});

test('Проверка на добавление нового игрока', () => {
  const Ateam = new Team();

  const Bowerman = new Character('Bob');

  Ateam.add(Bowerman);

  const newSet = new Set();
  newSet.add({ name: 'Bob', health: 100, level: 1 });

  expect(Ateam.members).toEqual(newSet);
});

test('Проверка на дубль', () => {
  const Ateam = new Team();

  const Bowerman = new Character('Bob');

  Ateam.add(Bowerman);

  expect(() => {
    Ateam.add(Bowerman);
  }).toThrowError('Этот персонаж уже есть в команде!');
});

test('Проверка на отсутствие дубликатов при добавлении новых игроков', () => {
  const Ateam = new Team();

  const Bowerman = new Character('Bob');
  const Swordsman = new Character('Sam');
  const Magician = new Character('Maggy');

  Ateam.addAll(Bowerman, Swordsman, Magician);

  expect(Ateam.members.size).toEqual(3);
});

test('Проверка на преобразование в массив', () => {
  const Ateam = new Team();

  const Bowerman = new Character('Bob');
  const Swordsman = new Character('Sam');
  const Magician = new Character('Maggy');

  Ateam.addAll(Bowerman, Swordsman, Magician);

  Ateam.toArray();

  const example = [{ health: 100, level: 1, name: 'Bob' }, { health: 100, level: 1, name: 'Sam' }, { health: 100, level: 1, name: 'Maggy' }];

  expect(Ateam.members).toEqual(example);
});
