import { calculateLength } from "./methods";

test("List length is 4", () => {
  const list = [2, 6, 8, 2, undefined];
  const result = calculateLength(list);
  const expected = 5;
  expect(expected).toBe(result);
});
