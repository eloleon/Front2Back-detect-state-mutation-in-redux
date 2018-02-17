export const doNotMutate = () => ({
  type: 'DO_NOT_MUTATE',
  text: 'Action did NOT mutate state'
});

export const mutate = () => ({
  type: 'MUTATE',
  text: 'Action did mutate state'
});
