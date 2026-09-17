const today = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const date = formattedDate
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/(\s[a-z])/g, (str) => str.toUpperCase());
  return date;
};
export default today;
