# Title

Create a React Component

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
        └── {name}.tsx
```

## Instructions

1. Use the provided `name` to create a new folder under `src/components/` named after the component.
2. Inside the folder, create a `{name}.tsx` file.
3. The `{name}.tsx` file should export a functional React component with the given name.
4. Ensure the component includes basic TypeScript typing for props.
5. Add a default prop if applicable.

## Examples

### Input

```text
Button
```

### Output

```text
src/
└── components/
    └── Button/
        └── Button.tsx
```

### Generated File: `Button.tsx`

```tsx
// filepath: src/components/Button/Button.tsx
import React from "react";

interface ButtonProps {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label = "Click me" }) => {
  return <button>{label}</button>;
};

export default Button;
```
