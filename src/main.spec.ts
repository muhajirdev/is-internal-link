import { isInternalLink } from "./main";

test("should gives false if given external link", () => {
  expect(isInternalLink("https://google.com")).toBe(false);
});

test("should give true given internal link", () => {
  expect(isInternalLink("/some-page")).toBe(true);
});

test("can detect fully qualified 'http' links", () => {
  expect(isInternalLink("http://example.com")).toBe(false);
});

test("can detect fully qualified 'https' link", () => {
  expect(isInternalLink("https://example.com")).toBe(false);
});

test("does not care about uppercase/lowercase", () => {
  expect(isInternalLink("HTTPS://example.com")).toBe(false);
});

test("can detect ambiguous links that start by '//'", () => {
  expect(isInternalLink("//example.com")).toBe(false);
});

test("can detect absolute paths", () => {
  expect(isInternalLink("/hello")).toBe(true);
});

test("can detect relative paths without syntax", () => {
  expect(isInternalLink("hello")).toBe(true);
});

test("can detect relative paths even with extension", () => {
  expect(isInternalLink("hello.html")).toBe(true);
});

test("can detect relative paths with './'", () => {
  expect(isInternalLink("./hello")).toBe(true);
});

test("can detect relative paths with '../'", () => {
  expect(isInternalLink("../hello")).toBe(true);
});

test("can detect relative paths whose path starts by 'http'", () => {
  expect(isInternalLink("https-is-better-than-http.html")).toBe(true);
});
