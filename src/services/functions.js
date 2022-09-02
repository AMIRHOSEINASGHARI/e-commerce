const shortTitle = (title) => {
  const newTitle = title.split(" ");
  return `${newTitle[0]} ${newTitle[1]} ${newTitle[2]}`;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((el) => el.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((el) => el.id === id);
  if (index >= 0) {
    return state.selectedItems[index].quantity;
  } else {
    return null;
  }
};

export { shortTitle, isInCart, quantityCount };
