export const withCallbacks = creator => ({ onSuccess, onError, ...args }) => ({
  ...creator(args),
  callbacks: { onSuccess, onError }
});
