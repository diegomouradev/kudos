export default {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: "/e2e/.*\\.test.ts$",
  moduleFileExtensions: ["ts","tsx","js","jsx","json","node"],
};
