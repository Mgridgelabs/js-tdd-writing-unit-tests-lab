import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true for a palindrome word", () => {
        const word = "racecar";
        expect(isPalindrome(word)).toBe(true);
    });

    it("returns false for a non-palindrome word", () => {
        const word = "car";
        expect(isPalindrome(word)).toBe(false);
    });

    it("returns true for a palindrome with mixed case letters", () => {
        const word = "Racecar";
        expect(isPalindrome(word)).toBe(true);
    });

    it("returns false for an empty string", () => {
        const word = "";
        expect(isPalindrome(word)).toBe(false);
    });

    it("throws an error for a string with non-alphabetic characters", () => {
        expect(() => isPalindrome("racecar123")).toThrow();
    });

    it("throws an error if the input is not a string", () => {
        expect(() => isPalindrome(123)).toThrow();
    });
});
