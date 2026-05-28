# Yendou Counter Task

A crafted React + TypeScript counter experience built for the Yendou Software Engineering Intern task.

This is intentionally more than a basic counter. The goal was to show attention to detail: clean state management, modular architecture, keyboard support, accessibility, edge-case handling, responsive design, animation, and clear documentation.

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Features

- Increment, decrement, and reset controls
- Step selection: 1, 2, or 5
- Minimum and maximum boundaries: -10 to 10
- Disabled states at boundaries
- Recent value history
- Counter status: neutral, positive, negative, minimum reached, maximum reached
- Keyboard shortcuts:
  - `ArrowUp` or `+` to increment
  - `ArrowDown` or `-` to decrement
  - `R` to reset
- Responsive layout
- Animated count transitions
- Visible focus states
- Screen-reader-friendly live status updates

## Architecture

The app is organized by feature:

```text
src/
  features/
    counter/
      components/
      hooks/
      lib/
      types/
```

This keeps the counter domain logic separate from the root app entry point and makes the code easier to extend.

## Key Implementation Decisions

### Reducer-based state management

I used a reducer because the counter has several related state transitions:

- Increment
- Decrement
- Reset
- Step changes
- Boundary checks
- History updates
- Last-action tracking

Keeping this logic in a reducer makes the behavior easier to reason about and test.

### Boundary handling

The counter is clamped between -10 and 10.

When the value reaches a boundary, the related control is disabled and the status label communicates the current state clearly.

### Keyboard support

Keyboard shortcuts were added to make the interface faster and more delightful to use.

The hook ignores keyboard shortcuts while the user is focused on editable elements, which prevents accidental counter changes while typing.

### Accessibility

The app includes:

- Semantic buttons
- `aria-label` values for icon-style controls
- `aria-pressed` for selected step buttons
- Visible focus states
- `aria-live` updates for dynamic status changes
- Keyboard-operable interactions

### Visual polish

The UI uses:

- A focused card layout
- Subtle background depth
- Hover and active states
- Disabled states
- Count-change animation
- Responsive behavior for smaller screens

## Edge Cases Considered

- Preventing the counter from exceeding the maximum value
- Preventing the counter from going below the minimum value
- Disabling reset when the counter is already zero
- Avoiding duplicated history beyond the configured history limit
- Ignoring global keyboard shortcuts while typing in editable elements
- Maintaining a usable layout on small screens

## What I Would Improve With More Time

- Add unit tests for reducer behavior
- Add Playwright tests for keyboard interactions
- Add persisted state with `localStorage`
- Add a deploy preview link
- Add theme switching

## Step 6.2 — Build again

Run:

```bash
npm run build
```