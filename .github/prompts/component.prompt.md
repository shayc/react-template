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
    └── {Name}/
        ├── {Name}.tsx
        ├── {Name}.module.css
        └── {Name}.test.tsx
```

## Instructions

1. Ask the developer for [input](#input).
2. Use the input to generate the component files.
3. Follow the file structure in [output](#output).

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
import { ReactNode } from "react";
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
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders Button component", () => {
  const { getByText } = render(<Button>Click me</Button>);
  expect(getByText("Click me")).toBeInTheDocument();
});
```
