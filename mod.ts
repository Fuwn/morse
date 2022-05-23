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

/** Configure the format of dots and dashes within a Morse code sequence. */
interface Grammar {
  dot?: string;
  dash?: string;
}

/** Encode a string into Morse code; optionally, with a custom dash.
 *
 * ```ts
 * import { encode } from "https://deno.land/x/morse/mod.ts";
 *
 * encode("a")      // "._"
 * encode("a", "-") // ".-"
 * ```
 */
export function encode(text: string, grammar?: Grammar): string {
  const dot = grammar?.dot || ".";
  const dash = grammar?.dash || "_";
  let encoded = "";

  for (const character of text.toLowerCase().trim()) {
    switch (character) {
      case "a":
        encoded += `${dot}${dash}`;
        break;
      case "b":
        encoded += `${dash}${dot}${dot}${dot}`;
        break;
      case "c":
        encoded += `${dash}${dot}${dash}${dot}`;
        break;
      case "d":
        encoded += `${dash}${dot}${dot}`;
        break;
      case "e":
        encoded += dot;
        break;
      case "f":
        encoded += `${dot}${dot}${dash}${dot}`;
        break;
      case "g":
        encoded += `${dash}${dash}${dot}`;
        break;
      case "h":
        encoded += `${dot}${dot}${dot}${dot}`;
        break;
      case "i":
        encoded += `${dot}${dot}`;
        break;
      case "j":
        encoded += `${dot}${dash}${dash}${dash}`;
        break;
      case "k":
        encoded += `${dash}${dot}${dash}`;
        break;
      case "l":
        encoded += `${dot}${dash}${dot}${dot}`;
        break;
      case "m":
        encoded += `${dash}${dash}`;
        break;
      case "n":
        encoded += `${dash}${dot}`;
        break;
      case "o":
        encoded += `${dash}${dash}${dash}`;
        break;
      case "p":
        encoded += `${dot}${dash}${dash}${dot}`;
        break;
      case "q":
        encoded += `${dash}${dash}${dot}${dash}`;
        break;
      case "r":
        encoded += `${dot}${dash}${dot}`;
        break;
      case "s":
        encoded += `${dot}${dot}${dot}`;
        break;
      case "t":
        encoded += dash;
        break;
      case "u":
        encoded += `${dot}${dot}${dash}`;
        break;
      case "v":
        encoded += `${dot}${dot}${dot}${dash}`;
        break;
      case "w":
        encoded += `${dot}${dash}${dash}`;
        break;
      case "x":
        encoded += `${dash}${dot}${dot}${dash}`;
        break;
      case "y":
        encoded += `${dash}${dot}${dash}${dash}`;
        break;
      case "z":
        encoded += `${dash}${dash}${dot}${dot}`;
        break;
      case "0":
        encoded += `${dash}${dash}${dash}${dash}${dash}`;
        break;
      case "1":
        encoded += `${dot}${dash}${dash}${dash}${dash}`;
        break;
      case "2":
        encoded += `${dot}${dot}${dash}${dash}${dash}`;
        break;
      case "3":
        encoded += `${dot}${dot}${dot}${dash}${dash}`;
        break;
      case "4":
        encoded += `${dot}${dot}${dot}${dot}${dash}`;
        break;
      case "5":
        encoded += `${dot}${dot}${dot}${dot}${dot}`;
        break;
      case "6":
        encoded += `${dash}${dot}${dot}${dot}${dot}`;
        break;
      case "7":
        encoded += `${dash}${dash}${dot}${dot}${dot}`;
        break;
      case "8":
        encoded += `${dash}${dash}${dash}${dot}${dot}`;
        break;
      case "9":
        encoded += `${dash}${dash}${dash}${dash}${dot}`;
        break;
      case ".":
        encoded += `${dot}${dash}${dot}${dash}${dot}${dash}`;
        break;
      case ",":
        encoded += `${dash}${dash}${dot}${dot}${dash}${dash}`;
        break;
      case "?":
        encoded += `${dot}${dot}${dash}${dash}${dot}${dot}`;
        break;
      case "'":
        encoded += `${dot}${dash}${dash}${dash}${dash}${dot}`;
        break;
      case "!":
        encoded += `${dash}${dot}${dash}${dot}${dash}${dash}`;
        break;
      case "/":
        encoded += `${dash}${dot}${dot}${dash}${dot}`;
        break;
      case "(":
        encoded += `${dash}${dot}${dash}${dash}${dot}`;
        break;
      case ")":
        encoded += `${dash}${dot}${dash}${dash}${dot}${dash}`;
        break;
      case "&":
        encoded += `${dot}${dash}${dot}${dot}${dot}`;
        break;
      case ":":
        encoded += `${dash}${dash}${dash}${dot}${dot}${dot}`;
        break;
      case ";":
        encoded += `${dash}${dot}${dash}${dot}${dash}${dot}`;
        break;
      case "=":
        encoded += `${dash}${dot}${dot}${dot}${dash}`;
        break;
      case "+":
        encoded += `${dot}${dash}${dot}${dash}${dot}`;
        break;
      case "-":
        encoded += `${dash}${dot}${dot}${dot}${dot}${dash}`;
        break;
      case "_":
        encoded += `${dot}${dot}${dash}${dash}${dot}${dash}`;
        break;
      case "`":
        encoded += `${dot}${dash}${dot}${dot}${dash}${dot}`;
        break;
      case "$":
        encoded += `${dot}${dot}${dot}${dash}${dot}${dot}${dash}`;
        break;
      case "@":
        encoded += `${dot}${dash}${dash}${dot}${dash}${dot}`;
        break;
      case " ":
        encoded += "/";
        break;
      default:
        throw new Error(
          `character '${character}' could not be encoded as a morse code`,
        );
    }

    encoded += " ";
  }

  return encoded.substring(0, encoded.length - 1);
}

/** Decode Morse code into a string; optionally, with a custom dash.
 *
 * ```ts
 * import { decode } from "https://deno.land/x/morse/mod.ts";
 *
 * decode("._")      // "a"
 * decode(".-", "-") // "a"
 * ```
 */
export function decode(morse: string, grammar?: Grammar): string {
  const dot = grammar?.dot || ".";
  const dash = grammar?.dash || "_";
  let decoded = "";

  for (
    const words of morse.replaceAll("*", dot).replaceAll("-", dash).trim()
      .split(
        "/",
      )
  ) {
    for (const code of words.trim().split(" ")) {
      switch (code) {
        case `${dot}${dash}`:
          decoded += "a";
          break;
        case `${dash}${dot}${dot}${dot}`:
          decoded += "b";
          break;
        case `${dash}${dot}${dash}${dot}`:
          decoded += "c";
          break;
        case `${dash}${dot}${dot}`:
          decoded += "d";
          break;
        case dot:
          decoded += "e";
          break;
        case `${dot}${dot}${dash}${dot}`:
          decoded += "f";
          break;
        case `${dash}${dash}${dot}`:
          decoded += "g";
          break;
        case `${dot}${dot}${dot}${dot}`:
          decoded += "h";
          break;
        case `${dot}${dot}`:
          decoded += "i";
          break;
        case `${dot}${dash}${dash}${dash}`:
          decoded += "j";
          break;
        case `${dash}${dot}${dash}`:
          decoded += "k";
          break;
        case `${dot}${dash}${dot}${dot}`:
          decoded += "l";
          break;
        case `${dash}${dash}`:
          decoded += "m";
          break;
        case `${dash}${dot}`:
          decoded += "n";
          break;
        case `${dash}${dash}${dash}`:
          decoded += "o";
          break;
        case `${dot}${dash}${dash}${dot}`:
          decoded += "p";
          break;
        case `${dash}${dash}${dot}${dash}`:
          decoded += "q";
          break;
        case `${dot}${dash}${dot}`:
          decoded += "r";
          break;
        case `${dot}${dot}${dot}`:
          decoded += "s";
          break;
        case dash:
          decoded += "t";
          break;
        case `${dot}${dot}${dash}`:
          decoded += "u";
          break;
        case `${dot}${dot}${dot}${dash}`:
          decoded += "v";
          break;
        case `${dot}${dash}${dash}`:
          decoded += "w";
          break;
        case `${dash}${dot}${dot}${dash}`:
          decoded += "x";
          break;
        case `${dash}${dot}${dash}${dash}`:
          decoded += "y";
          break;
        case `${dash}${dash}${dot}${dot}`:
          decoded += "z";
          break;
        case `${dash}${dash}${dash}${dash}${dash}`:
          decoded += "0";
          break;
        case `${dot}${dash}${dash}${dash}${dash}`:
          decoded += "1";
          break;
        case `${dot}${dot}${dash}${dash}${dash}`:
          decoded += "2";
          break;
        case `${dot}${dot}${dot}${dash}${dash}`:
          decoded += "3";
          break;
        case `${dot}${dot}${dot}${dot}${dash}`:
          decoded += "4";
          break;
        case `${dot}${dot}${dot}${dot}${dot}`:
          decoded += "5";
          break;
        case `${dash}${dot}${dot}${dot}${dot}`:
          decoded += "6";
          break;
        case `${dash}${dash}${dot}${dot}${dot}`:
          decoded += "7";
          break;
        case `${dash}${dash}${dash}${dot}${dot}`:
          decoded += "8";
          break;
        case `${dash}${dash}${dash}${dash}${dot}`:
          decoded += "9";
          break;
        case `${dot}${dash}${dot}${dash}${dot}${dash}`:
          decoded += ".";
          break;
        case `${dash}${dash}${dot}${dot}${dash}${dash}`:
          decoded += ",";
          break;
        case `${dot}${dot}${dash}${dash}${dot}${dot}`:
          decoded += "?";
          break;
        case `${dot}${dash}${dash}${dash}${dash}${dot}`:
          decoded += "'";
          break;
        case `${dash}${dot}${dash}${dot}${dash}${dash}`:
          decoded += "!";
          break;
        case `${dash}${dot}${dot}${dash}${dot}`:
          decoded += "/";
          break;
        case `${dash}${dot}${dash}${dash}${dot}`:
          decoded += "(";
          break;
        case `${dash}${dot}${dash}${dash}${dot}${dash}`:
          decoded += ")";
          break;
        case `${dot}${dash}${dot}${dot}${dot}`:
          decoded += "&";
          break;
        case `${dash}${dash}${dash}${dot}${dot}${dot}`:
          decoded += ":";
          break;
        case `${dash}${dot}${dash}${dot}${dash}${dot}`:
          decoded += ";";
          break;
        case `${dash}${dot}${dot}${dot}${dash}`:
          decoded += "=";
          break;
        case `${dot}${dash}${dot}${dash}${dot}`:
          decoded += "+";
          break;
        case `${dash}${dot}${dot}${dot}${dot}${dash}`:
          decoded += "-";
          break;
        case `${dot}${dot}${dash}${dash}${dot}${dash}`:
          decoded += "_";
          break;
        case `${dot}${dash}${dot}${dot}${dash}${dot}`:
          decoded += "`";
          break;
        case `${dot}${dot}${dot}${dash}${dot}${dot}${dash}`:
          decoded += "$";
          break;
        case `${dot}${dash}${dash}${dot}${dash}${dot}`:
          decoded += "@";
          break;
        case "/":
          decoded += " ";
          break;
        default:
          throw new Error(
            `code '${code}' could not be decoded as text`,
          );
      }
    }

    decoded += " ";
  }

  return decoded.substring(0, decoded.length - 1);
}
