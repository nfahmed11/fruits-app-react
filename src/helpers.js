function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      const a = [items.slice(0, i)];
      const b = [items.slice(i + 1)];

      return [a, b];
    }
  }
}

export { choice, remove };
