# Yendou Counter Task

A crafted React + TypeScript counter implementation for the Yendou Software Engineering Intern task.

The assignment asked for a `Counter` component, a global `CounterProvider`, a `useCounter()` hook, and a toast notification every time the `+1` button is clicked. I focused on matching those requirements while adding polish through clean architecture, accessible status updates, responsive styling, and a custom toast inspired by the provided design.

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

- Counter starts at `0`
- Button labelled `+1`
- Counter increments by one on every click
- Global `CounterProvider` stores and updates the counter value
- `useCounter()` hook exposes the current count and `increment()` function
- Toast notification appears after every increment
- Toast displays the updated counter value
- Custom toast styling closely follows the provided visual direction
- Accessible toast using `role="status"` and `aria-live="polite"`
- Visible focus state for keyboard users
- Responsive layout

## Architecture

The app is organized by feature:

```text
src/
  features/
    counter/
      components/
        toast/
          IncrementToast.tsx
        Counter.tsx
        CounterApp.tsx
      context/
        CounterContext.tsx
      hooks/
        useCounter.ts
      lib/
        counter.reducer.ts
      types/
        counter.types.ts
```

This keeps the counter domain logic separate from the root app entry point and makes the code easier to extend.

## Key Implementation Decisions

### CounterProvider

`CounterProvider` owns the global counter state and exposes the counter API through React context. This keeps the counter state centralized and makes it available to both the `Counter` component and the toast.

### useCounter hook

`useCounter()` wraps access to the context and throws a clear error if it is used outside the provider. This makes the API safer and easier to use.

### Reducer-based state

I used a small reducer for the counter state so the update logic is explicit and easy to extend or test.

### Toast behavior

Every time the `+1` button is clicked, the app calculates the next counter value, updates the state, and displays a toast saying:

```text
Incremented
Counter is now X
```

The toast auto-dismisses after a short delay.

### Accessibility

The implementation includes:

- Semantic button markup
- `aria-label` on the `+1` button
- Visible keyboard focus state
- Toast with `role="status"`
- `aria-live="polite"` for non-disruptive screen-reader updates

### Visual polish

The UI keeps the counter simple and close to the provided task screenshot, while the toast uses the supplied design direction: dark container, green success accent, rounded corners, depth, and entrance animation.

## What I Would Improve With More Time

- Add reducer unit tests
- Add component tests for `CounterProvider` and `useCounter`
- Add Playwright tests for click and toast behavior
- Add a hosted preview link