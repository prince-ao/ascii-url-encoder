# ascii-url-encoder

An ASCII url ecoder and decoder

## Installation

```bash
yarn add ascii-url-encoder
```

or

```bash
npm intall ascii-url-encoder
```

## Usage

```typescript
import { encode, decode } from "ascii-url-encoder";

const encodedString = encode("(lorem) ipsum");

const decodedString = decode("%28lorem%29%20ipsum");
```
