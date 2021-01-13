// eslint-disable-next-line import/no-named-as-default
import Team from '../team';

describe('Team', () => {
  test('test value', () => {
    const received = new Team().add({
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    });
    expect(received).toEqual(new Set().add({
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    }));
    expect(received).not.toBe(new Set().add({
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    }));
  });

  test('test error', () => {
    const received = new Team();
    received.add({
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'СэМ',
      type: 'Swordsman',
    });
    expect(() => {
      received.add({
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'СэМ',
        type: 'Swordsman',
      });
    }).toThrow();
  });

  test('test array', () => {
    const received = new Team().addAll([{
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    },
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'СэМ',
      type: 'Swordsman',
    },
    ]);
    expect(received).toEqual(new Set().add({
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    }).add({
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'СэМ',
      type: 'Swordsman',
    }));
  });

  test('test toArray', () => {
    let received = new Team();
    received.add({
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    });
    received = received.toArray();
    expect(received).toEqual([{
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Мерлин',
      type: 'Magician',
    }]);
  });
});
