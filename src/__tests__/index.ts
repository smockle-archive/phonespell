import { phonespell } from "../lib/index";

describe("phonespell", () => {
  test("happy path", () => {
    expect(phonespell("abc")).toBe(222);
    expect(phonespell("def")).toBe(333);
    expect(phonespell("ghi")).toBe(444);
    expect(phonespell("jkl")).toBe(555);
    expect(phonespell("mno")).toBe(666);
    expect(phonespell("pqrs")).toBe(7777);
    expect(phonespell("tuv")).toBe(888);
    expect(phonespell("wxyz")).toBe(9999);
    expect(phonespell("mock")).toBe(6625);
    expect(phonespell("demo")).toBe(3366);
  });
  test("casing", () => {
    expect(phonespell("Mock")).toBe(6625);
    expect(phonespell("MOCK")).toBe(6625);
    expect(phonespell("mOcK")).toBe(6625);
  });
  test("accents", () => {
    expect(phonespell("café")).toBe(2233);
    expect(phonespell("cafÉ")).toBe(2233);
  });
  test("punctuation", () => {
    expect(phonespell(".hide")).toBe(4433);
    expect(phonespell("_private")).toBe(7748283);
  });
  test("invalid values", () => {
    expect(phonespell("")).toBe(NaN);
    expect(phonespell("-----------")).toBe(NaN);
    expect(phonespell("👻")).toBe(NaN);
  });
  test("invalid types", () => {
    expect(phonespell((1234 as unknown) as string)).toBe(NaN);
    expect(phonespell((null as unknown) as string)).toBe(NaN);
    expect(phonespell((undefined as unknown) as string)).toBe(NaN);
  });
});
