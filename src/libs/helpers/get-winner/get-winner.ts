import { Player, type PlayerType } from '~/libs/enums/enums';

const getWinner = (userScore: number): PlayerType => {
  if (userScore % 2 === 0) {
    return Player.USER;
  } else {
    return Player.COMPUTER;
  }
};

export { getWinner };
