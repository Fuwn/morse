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

/** Encode a string into Morse code; optionally, with a custom dash.
 *
 * ```ts
 * import { encode } from "https://deno.land/x/morse/mod.ts";
 *
 * encode("a")      // "._"
 * encode("a", "-") // ".-"
 * ```
 */
export function encode(text: string, dash = "_"): string {
  let encoded = "";

  for (const character of text.toLowerCase().trim()) {
    switch (character) {
      case "a":
        encoded += `.${dash}`;
        break;
      case "b":
        encoded += `${dash}...`;
        break;
      case "c":
        encoded += `${dash}.${dash}.`;
        break;
      case "d":
        encoded += `${dash}..`;
        break;
      case "e":
        encoded += ".";
        break;
      case "f":
        encoded += `..${dash}.`;
        break;
      case "g":
        encoded += `${dash}${dash}.`;
        break;
      case "h":
        encoded += "....";
        break;
      case "i":
        encoded += "..";
        break;
      case "j":
        encoded += `.${dash}${dash}${dash}`;
        break;
      case "k":
        encoded += `${dash}.${dash}`;
        break;
      case "l":
        encoded += `.${dash}..`;
        break;
      case "m":
        encoded += `${dash}${dash}`;
        break;
      case "n":
        encoded += `${dash}.`;
        break;
      case "o":
        encoded += `${dash}${dash}${dash}`;
        break;
      case "p":
        encoded += `.${dash}${dash}.`;
        break;
      case "q":
        encoded += `${dash}${dash}.${dash}`;
        break;
      case "r":
        encoded += `.${dash}.`;
        break;
      case "s":
        encoded += "...";
        break;
      case "t":
        encoded += dash;
        break;
      case "u":
        encoded += `..${dash}`;
        break;
      case "v":
        encoded += `...${dash}`;
        break;
      case "w":
        encoded += `.${dash}${dash}`;
        break;
      case "x":
        encoded += `${dash}..${dash}`;
        break;
      case "y":
        encoded += `${dash}.${dash}${dash}`;
        break;
      case "z":
        encoded += `${dash}${dash}..`;
        break;
      case "0":
        encoded += `${dash}${dash}${dash}${dash}${dash}`;
        break;
      case "1":
        encoded += `.${dash}${dash}${dash}${dash}`;
        break;
      case "2":
        encoded += `..${dash}${dash}${dash}`;
        break;
      case "3":
        encoded += `...${dash}${dash}`;
        break;
      case "4":
        encoded += `....${dash}`;
        break;
      case "5":
        encoded += ".....";
        break;
      case "6":
        encoded += `${dash}....`;
        break;
      case "7":
        encoded += `${dash}${dash}...`;
        break;
      case "8":
        encoded += `${dash}${dash}${dash}..`;
        break;
      case "9":
        encoded += `${dash}${dash}${dash}${dash}.`;
        break;
      case ".":
        encoded += `.${dash}.${dash}.${dash}`;
        break;
      case ",":
        encoded += `${dash}${dash}..${dash}${dash}`;
        break;
      case "?":
        encoded += `..${dash}${dash}..`;
        break;
      case "'":
        encoded += `.${dash}${dash}${dash}${dash}.`;
        break;
      case "!":
        encoded += `${dash}.${dash}.${dash}${dash}`;
        break;
      case "/":
        encoded += `${dash}..${dash}.`;
        break;
      case "(":
        encoded += `${dash}.${dash}${dash}.`;
        break;
      case ")":
        encoded += `${dash}.${dash}${dash}.${dash}`;
        break;
      case "&":
        encoded += `.${dash}...`;
        break;
      case ":":
        encoded += `${dash}${dash}${dash}...`;
        break;
      case ";":
        encoded += `${dash}.${dash}.${dash}.`;
        break;
      case "=":
        encoded += `${dash}...${dash}`;
        break;
      case "+":
        encoded += `.${dash}.${dash}.`;
        break;
      case "-":
        encoded += `${dash}....${dash}`;
        break;
      case "_":
        encoded += `..${dash}${dash}.${dash}`;
        break;
      case "`":
        encoded += `.${dash}..${dash}.`;
        break;
      case "$":
        encoded += `...${dash}..${dash}`;
        break;
      case "@":
        encoded += `.${dash}${dash}.${dash}.`;
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
export function decode(morse: string, dash = "_"): string {
  let decoded = "";

  for (
    const words of morse.replaceAll("*", ".").replaceAll("-", dash).trim()
      .split(
        "/",
      )
  ) {
    for (const code of words.trim().split(" ")) {
      switch (code) {
        case `.${dash}`:
          decoded += "a";
          break;
        case `${dash}...`:
          decoded += "b";
          break;
        case `${dash}.${dash}.`:
          decoded += "c";
          break;
        case `${dash}..`:
          decoded += "d";
          break;
        case ".":
          decoded += "e";
          break;
        case `..${dash}.`:
          decoded += "f";
          break;
        case `${dash}${dash}.`:
          decoded += "g";
          break;
        case "....":
          decoded += "h";
          break;
        case "..":
          decoded += "i";
          break;
        case `.${dash}${dash}${dash}`:
          decoded += "j";
          break;
        case `${dash}.${dash}`:
          decoded += "k";
          break;
        case `.${dash}..`:
          decoded += "l";
          break;
        case `${dash}${dash}`:
          decoded += "m";
          break;
        case `${dash}.`:
          decoded += "n";
          break;
        case `${dash}${dash}${dash}`:
          decoded += "o";
          break;
        case `.${dash}${dash}.`:
          decoded += "p";
          break;
        case `${dash}${dash}.${dash}`:
          decoded += "q";
          break;
        case `.${dash}.`:
          decoded += "r";
          break;
        case "...":
          decoded += "s";
          break;
        case dash:
          decoded += "t";
          break;
        case `..${dash}`:
          decoded += "u";
          break;
        case `...${dash}`:
          decoded += "v";
          break;
        case `.${dash}${dash}`:
          decoded += "w";
          break;
        case `${dash}..${dash}`:
          decoded += "x";
          break;
        case `${dash}.${dash}${dash}`:
          decoded += "y";
          break;
        case `${dash}${dash}..`:
          decoded += "z";
          break;
        case `${dash}${dash}${dash}${dash}${dash}`:
          decoded += "0";
          break;
        case `.${dash}${dash}${dash}${dash}`:
          decoded += "1";
          break;
        case `..${dash}${dash}${dash}`:
          decoded += "2";
          break;
        case `...${dash}${dash}`:
          decoded += "3";
          break;
        case `....${dash}`:
          decoded += "4";
          break;
        case ".....":
          decoded += "5";
          break;
        case `${dash}....`:
          decoded += "6";
          break;
        case `${dash}${dash}...`:
          decoded += "7";
          break;
        case `${dash}${dash}${dash}..`:
          decoded += "8";
          break;
        case `${dash}${dash}${dash}${dash}.`:
          decoded += "9";
          break;
        case `.${dash}.${dash}.${dash}`:
          decoded += ".";
          break;
        case `${dash}${dash}..${dash}${dash}`:
          decoded += ",";
          break;
        case `..${dash}${dash}..`:
          decoded += "?";
          break;
        case `.${dash}${dash}${dash}${dash}.`:
          decoded += "'";
          break;
        case `${dash}.${dash}.${dash}${dash}`:
          decoded += "!";
          break;
        case `${dash}..${dash}.`:
          decoded += "/";
          break;
        case `${dash}.${dash}${dash}.`:
          decoded += "(";
          break;
        case `${dash}.${dash}${dash}.${dash}`:
          decoded += ")";
          break;
        case `.${dash}...`:
          decoded += "&";
          break;
        case `${dash}${dash}${dash}...`:
          decoded += ":";
          break;
        case `${dash}.${dash}.${dash}.`:
          decoded += ";";
          break;
        case `${dash}...${dash}`:
          decoded += "=";
          break;
        case `.${dash}.${dash}.`:
          decoded += "+";
          break;
        case `${dash}....${dash}`:
          decoded += "-";
          break;
        case `..${dash}${dash}.${dash}`:
          decoded += "_";
          break;
        case `.${dash}..${dash}.`:
          decoded += "`";
          break;
        case `...${dash}..${dash}`:
          decoded += "$";
          break;
        case `.${dash}${dash}.${dash}.`:
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
