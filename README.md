<h1 align="center">Morse</h1>
<p align="center"><b>Morse Code Utilities for Deno</b></p>

## Usage

The latest stable release of Morse can be `import`ed from
[deno.land/x](https://deno.land/x) using https://deno.land/x/morse/mod.ts; or,
you can `import` the latest bleeding-edge commit straight from GitHub using
https://raw.githubusercontent.com/Fuwn/morse/main/mod.ts.

## Documentation

The latest documentation ([main](https://github.com/Fuwn/morse/tree/main)) is
available
[here](https://doc.deno.land/https/raw.githubusercontent.com/Fuwn/morse/main/mod.ts),
and the latest stable documentation is available
[here](https://doc.deno.land/https/deno.land/x/morse/mod.ts).

## Example

### Encoding

```ts
import { encode } from "https://deno.land/x/morse/mod.ts";

encode("a"); // "._"
encode("a", { dash: "-" }); // ".-"
```

### Decoding

```ts
import { decode } from "https://deno.land/x/morse/mod.ts";

decode("._"); // "a"
decode(".-", { dash: "-" }); // "a"
```

## License

This project is licensed with the [GNU General Public License v3.0](LICENSE).
