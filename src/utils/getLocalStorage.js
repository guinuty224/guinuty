const getLocalStorage = () => {
  const now = new Date();

  const storedUser = localStorage.getItem("userLocalData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  if (now.getTime > userData?.expiry) {
    localStorage.clear();
    return null;
  }
  return userData;
};

export default getLocalStorage;
