import {expect, test} from "vitest";
import { myPrecious } from "./main";
import { gimliWins, samwiseWins, draw, unfinished } from "./data";

test("Should return the correct string when Gimli wins", () => {
    expect(myPrecious(gimliWins)).toBe('We dwarves are natural sprinters.');
})

test("Should return the correct string when Samwise wins", () => {
    expect(myPrecious(samwiseWins)).toBe('Po-Ta-Toes. Boil em, mash em, stick em in a stew.');
})

test("Should return the correct string when the players draw", () => {
    expect(myPrecious(draw)).toBe('One does not simply walk into Mordor.');
})

test("Should return the correct string when the game is unfinished", () => {
    expect(myPrecious(unfinished)).toBe('You shall not pass!');
})