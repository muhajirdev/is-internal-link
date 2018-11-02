import { isInternalLink } from "./main";

test("should gives false if given external link", () => {
  expect(isInternalLink("https://google.com")).toBe(false);
});

test("should give true given internal link", () => {
  expect(isInternalLink("/some-page")).toBe(true);
});
