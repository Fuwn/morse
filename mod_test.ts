// This file is part of Morse <https://github.com/Fuwn/morse>.
// Copyright (C) 2022-2022 Fuwn <contact@fuwn.me>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 3.
//
// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
// General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.
//
// Copyright (C) 2022-2022 Fuwn <contact@fuwn.me>
// SPDX-License-Identifier: GPL-3.0-only

import { decode, encode } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.139.0/testing/asserts.ts";

Deno.test("encode", async (t) => {
  await t.step("latin", async (t) => {
    await t.step("lowercase", () => {
      assertEquals(encode("a"), "._");
      assertEquals(encode("b"), "_...");
      assertEquals(encode("c"), "_._.");
      assertEquals(encode("d"), "_..");
      assertEquals(encode("e"), ".");
      assertEquals(encode("f"), ".._.");
      assertEquals(encode("g"), "__.");
      assertEquals(encode("h"), "....");
      assertEquals(encode("i"), "..");
      assertEquals(encode("j"), ".___");
      assertEquals(encode("k"), "_._");
      assertEquals(encode("l"), "._..");
      assertEquals(encode("m"), "__");
      assertEquals(encode("n"), "_.");
      assertEquals(encode("o"), "___");
      assertEquals(encode("p"), ".__.");
      assertEquals(encode("q"), "__._");
      assertEquals(encode("r"), "._.");
      assertEquals(encode("s"), "...");
      assertEquals(encode("t"), "_");
      assertEquals(encode("u"), ".._");
      assertEquals(encode("v"), "..._");
      assertEquals(encode("w"), ".__");
      assertEquals(encode("x"), "_.._");
      assertEquals(encode("y"), "_.__");
      assertEquals(encode("z"), "__..");
    });

    await t.step("uppercase", () => {
      assertEquals(encode("A"), "._");
      assertEquals(encode("B"), "_...");
      assertEquals(encode("C"), "_._.");
      assertEquals(encode("D"), "_..");
      assertEquals(encode("E"), ".");
      assertEquals(encode("F"), ".._.");
      assertEquals(encode("G"), "__.");
      assertEquals(encode("H"), "....");
      assertEquals(encode("I"), "..");
      assertEquals(encode("J"), ".___");
      assertEquals(encode("K"), "_._");
      assertEquals(encode("L"), "._..");
      assertEquals(encode("M"), "__");
      assertEquals(encode("N"), "_.");
      assertEquals(encode("O"), "___");
      assertEquals(encode("P"), ".__.");
      assertEquals(encode("Q"), "__._");
      assertEquals(encode("R"), "._.");
      assertEquals(encode("S"), "...");
      assertEquals(encode("T"), "_");
      assertEquals(encode("U"), ".._");
      assertEquals(encode("V"), "..._");
      assertEquals(encode("W"), ".__");
      assertEquals(encode("X"), "_.._");
      assertEquals(encode("Y"), "_.__");
      assertEquals(encode("Z"), "__..");
    });
  });

  await t.step("numbers", () => {
    assertEquals(encode("0"), "_____");
    assertEquals(encode("1"), ".____");
    assertEquals(encode("2"), "..___");
    assertEquals(encode("3"), "...__");
    assertEquals(encode("4"), "...._");
    assertEquals(encode("5"), ".....");
    assertEquals(encode("6"), "_....");
    assertEquals(encode("7"), "__...");
    assertEquals(encode("8"), "___..");
    assertEquals(encode("9"), "____.");
  });

  await t.step("punctuation", () => {
    assertEquals(encode("."), "._._._");
    assertEquals(encode(","), "__..__");
    assertEquals(encode("?"), "..__..");
    assertEquals(encode("'"), ".____.");
    assertEquals(encode("!"), "_._.__");
    assertEquals(encode("/"), "_.._.");
    assertEquals(encode("("), "_.__.");
    assertEquals(encode(")"), "_.__._");
    assertEquals(encode("&"), "._...");
    assertEquals(encode(":"), "___...");
    assertEquals(encode(";"), "_._._.");
    assertEquals(encode("="), "_..._");
    assertEquals(encode("+"), "._._.");
    assertEquals(encode("-"), "_...._");
    assertEquals(encode("_"), "..__._");
    assertEquals(encode('"'), "._.._.");
    assertEquals(encode("$"), "..._.._");
    assertEquals(encode("¿"), ".._._");
    assertEquals(encode("¡"), "__..._");
  });

  await t.step("character", () => assertEquals(encode("a"), "._"));

  await t.step(
    "character custom dash",
    () => assertEquals(encode("a", { dash: "-" }), ".-"),
  );

  await t.step(
    "character custom dash and custom dot",
    () => assertEquals(encode("a", { dash: "-", dot: "*" }), "*-"),
  );

  await t.step("multiple words", () =>
    assertEquals(
      encode("test encode"),
      "_ . ... _ / . _. _._. ___ _.. .",
    ));

  await t.step("multiple words custom dash", () =>
    assertEquals(
      encode("test encode", { dash: "-" }),
      "- . ... - / . -. -.-. --- -.. .",
    ));

  await t.step("multiple words custom dash and custom dot", () =>
    assertEquals(
      encode("test encode", { dash: "-", dot: "*" }),
      "- * *** - / * -* -*-* --- -** *",
    ));
});

Deno.test("decode", async (t) => {
  await t.step("latin", async (t) => {
    await t.step("lowercase", () => {
      assertEquals(decode("._"), "a");
      assertEquals(decode("_..."), "b");
      assertEquals(decode("_._."), "c");
      assertEquals(decode("_.."), "d");
      assertEquals(decode("."), "e");
      assertEquals(decode(".._."), "f");
      assertEquals(decode("__."), "g");
      assertEquals(decode("...."), "h");
      assertEquals(decode(".."), "i");
      assertEquals(decode(".___"), "j");
      assertEquals(decode("_._"), "k");
      assertEquals(decode("._.."), "l");
      assertEquals(decode("__"), "m");
      assertEquals(decode("_."), "n");
      assertEquals(decode("___"), "o");
      assertEquals(decode(".__."), "p");
      assertEquals(decode("__._"), "q");
      assertEquals(decode("._."), "r");
      assertEquals(decode("..."), "s");
      assertEquals(decode("_"), "t");
      assertEquals(decode(".._"), "u");
      assertEquals(decode("..._"), "v");
      assertEquals(decode(".__"), "w");
      assertEquals(decode("_.._"), "x");
      assertEquals(decode("_.__"), "y");
      assertEquals(decode("__.."), "z");
    });
  });

  await t.step("numbers", () => {
    assertEquals(decode("_____"), "0");
    assertEquals(decode(".____"), "1");
    assertEquals(decode("..___"), "2");
    assertEquals(decode("...__"), "3");
    assertEquals(decode("...._"), "4");
    assertEquals(decode("....."), "5");
    assertEquals(decode("_...."), "6");
    assertEquals(decode("__..."), "7");
    assertEquals(decode("___.."), "8");
    assertEquals(decode("____."), "9");
  });

  await t.step("punctuation", () => {
    assertEquals(decode("._._._"), ".");
    assertEquals(decode("__..__"), ",");
    assertEquals(decode("..__.."), "?");
    assertEquals(decode(".____."), "'");
    assertEquals(decode("_._.__"), "!");
    assertEquals(decode("_.._."), "/");
    assertEquals(decode("_.__."), "(");
    assertEquals(decode("_.__._"), ")");
    assertEquals(decode("._..."), "&");
    assertEquals(decode("___..."), ":");
    assertEquals(decode("_._._."), ";");
    assertEquals(decode("_..._"), "=");
    assertEquals(decode("._._."), "+");
    assertEquals(decode("_...._"), "-");
    assertEquals(decode("..__._"), "_");
    assertEquals(decode("._.._."), '"');
    assertEquals(decode("..._.._"), "$");
    assertEquals(decode(".._._"), "¿");
    assertEquals(decode("__..._"), "¡");
  });

  await t.step("character", () => assertEquals(decode("._"), "a"));

  await t.step(
    "character custom dash",
    () => assertEquals(decode(".-", { dash: "-" }), "a"),
  );

  await t.step(
    "character custom dash and custom dot",
    () => assertEquals(decode("*-", { dash: "-", dot: "*" }), "a"),
  );

  await t.step("multiple words", () =>
    assertEquals(
      decode("_ . ... _ / _.. . _._. ___ _.. ."),
      "test decode",
    ));

  await t.step("multiple words custom dash", () =>
    assertEquals(
      decode("- . ... - / -.. . -.-. --- -.. .", { dash: "-" }),
      "test decode",
    ));

  await t.step("multiple words custom dash and custom dot", () =>
    assertEquals(
      decode("- * *** - / -** * -*-* --- -** *", { dash: "-", dot: "*" }),
      "test decode",
    ));
});
