const Player = {
  USER: 'User',
  COMPUTER: 'Computer',
} as const;

type PlayerType = (typeof Player)[keyof typeof Player];

export { Player, type PlayerType };
