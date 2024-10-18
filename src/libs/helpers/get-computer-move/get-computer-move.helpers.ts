const getComputerMove = (remainingMatches: number, maxTake: number): number => {
  const targetModulo = maxTake + 1;

  if (remainingMatches % targetModulo === 0) {
    return Math.min(maxTake, remainingMatches);
  }

  const optimalMove = remainingMatches % targetModulo;
  return Math.min(optimalMove, remainingMatches);
};

export { getComputerMove };
