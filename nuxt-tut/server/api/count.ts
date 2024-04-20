let count = 0;
export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(count++);
    }, 1000);
  });
  return count;
};
