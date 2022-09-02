const shortTitle = (title) => {
  const newTitle = title.split(" ");
  return `${newTitle[0]} ${newTitle[1]} ${newTitle[2]}`;
};

export { shortTitle };
