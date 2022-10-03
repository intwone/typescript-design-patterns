export function generateRandomNumber(length: number): number {
  const randomNumber = Math.floor(Math.random() * length);
  return randomNumber;
}
