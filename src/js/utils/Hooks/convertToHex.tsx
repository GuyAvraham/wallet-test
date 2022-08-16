export default function convertToHex(number: number) {
  return "0x" + Number(number).toString(16);
}
