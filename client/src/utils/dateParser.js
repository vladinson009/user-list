export function dateWriteParser(date) {
  const d = new Date(date);
  return d.toISOString();
}

export function dateReadParser(date) {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
