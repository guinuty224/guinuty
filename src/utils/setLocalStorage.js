const setUserLocalData = ({ id, token, role }) => {
  const now = new Date();
  localStorage.setItem(
    "userLocalData",
    JSON.stringify({
      id,
      token,
      role,
      expiry: now.getTime() + 3600000,
    }),
  );
};
export default setUserLocalData;
