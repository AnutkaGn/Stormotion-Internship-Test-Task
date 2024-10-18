import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, type PlayerType } from '~/libs/enums/enums';

type GameState = {
  matches: number;
  userMatches: number;
  computerMatches: number;
  matchesOnScreen: number;
  maxTakeMatches: number;
  isComputerTurn: boolean;
  mode: PlayerType | null;
};

const initialState: GameState = {
  matches: 25,
  userMatches: 0,
  computerMatches: 0,
  matchesOnScreen: 25,
  maxTakeMatches: 3,
  isComputerTurn: false,
  mode: null,
};

const { actions, reducer } = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setMatches(state, action: PayloadAction<number>) {
      state.matches = action.payload;
      state.matchesOnScreen = action.payload;
    },
    setUserMatches(state, action: PayloadAction<number>) {
      state.userMatches += action.payload;
      state.matchesOnScreen -= action.payload;
    },
    setComputerMatches(state, action: PayloadAction<number>) {
      state.computerMatches += action.payload;
      state.matchesOnScreen -= action.payload;
    },
    setMatchesOnScreen(state, action: PayloadAction<number>) {
      state.matchesOnScreen = action.payload;
    },
    toggleTurn(state) {
      state.isComputerTurn = !state.isComputerTurn;
    },
    setMode(state, action: PayloadAction<PlayerType>) {
      state.mode = action.payload;
      state.isComputerTurn = action.payload === Player.COMPUTER;
    },
    setMaxTakeMatches(state, action: PayloadAction<number>) {
      state.maxTakeMatches = action.payload;
    },
    resetGame(state) {
      state.userMatches = 0;
      state.computerMatches = 0;
      state.matchesOnScreen = state.matches;
      if (state.mode === Player.USER) {
        state.isComputerTurn = false;
      } else {
        state.isComputerTurn = true;
      }
    },
  },
});

export { actions, reducer };
