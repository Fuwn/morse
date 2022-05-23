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
