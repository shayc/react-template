# Prompt: Create a React Component

## Goal

Generate a new React component with the specified name and structure.

## Input

| Field | Type   | Description           |
| ----- | ------ | --------------------- |
| name  | string | Name of the component |

## Output

```text
src/
└── components/
    └── {name}/
        ├── {name}.tsx
        ├── {name}.module.css
        └── {name}.test.tsx
```

## Instructions

Ask the developer for inputs and use them to generate code based on examples below. Ensure the generated files strictly follow the structure and examples provided.

## Examples

### Input

```text
button
```

### Output

```text
src/
└── components/
    └── Button/
        ├── Button.tsx
        ├── Button.module.css
        └── Button.test.tsx
```

### Generated Files

#### `Button.tsx`

```tsx
import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.root}>{children}</button>;
};

export default Button;
```

#### `Button.module.css`

```css
.root {
}
```

#### `Button.test.tsx`

```tsx
import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders Button component", () => {
  const { getByText } = render(<Button>Click me</Button>);
  expect(getByText("Click me")).toBeInTheDocument();
});
```
