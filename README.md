# 🧱 Dev Stack

**Dev Stack** is a modern, responsive web app where developers can explore popular technologies and build their own personal stack. Browse a curated library of tools across frontend, backend, databases, DevOps and more, then add the ones you like — your selected stack stays visible while you browse.

Built as a React assignment with clean, beginner-friendly JavaScript (ES6+) and no TypeScript.

---

## ✨ Key Features

1. **Technology Library** — 15 technologies loaded asynchronously from a JSON file, shown in a responsive 3 / 2 / 1 column grid with icon, badge, description, category, difficulty and star rating.
2. **Your Stack Sidebar** — Add technologies to a one-column stack panel with a live selected count, an empty state, per-item remove buttons and a Remove All action.
3. **Toast Notifications** — Every add, duplicate attempt, remove and remove-all action gives clear feedback with React-Toastify.

---

## 🛠️ Technologies Used

- **React 18** — component-based UI with hooks (`useState`, `useEffect`, `useMemo`)
- **Vite** — fast development server and production build tool
- **Tailwind CSS** — utility-first styling
- **DaisyUI** — theme tokens and accessible component styles
- **React-Toastify** — toast/notification system
- **JSON** — technology data stored separately from the components
- **JavaScript ES6+** — no TypeScript

---

## 🚀 Installation & Run

Make sure you have **Node.js 18+** installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (opens http://localhost:5173)
npm run dev
```

---

## 📦 Build

```bash
# Create an optimised production build in /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
Dev Stack/
├─ index.html
├─ tailwind.config.js        # gradient theme + DaisyUI theme
├─ postcss.config.js
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx               # app entry + Toastify CSS
   ├─ App.jsx                # state, data loading, stack logic, toasts
   ├─ index.css              # shared --brand-gradient + utility styles
   ├─ data/
   │  └─ technologies.json   # 15 technologies (all data lives here)
   └─ components/
      ├─ Navbar.jsx
      ├─ Logo.jsx
      ├─ Hero.jsx
      ├─ TechnologySection.jsx
      ├─ TechnologyCard.jsx
      ├─ TechnologyIcon.jsx
      ├─ YourStack.jsx
      ├─ Loader.jsx
      ├─ Projects.jsx
      ├─ About.jsx
      ├─ Contact.jsx
      ├─ SocialLinks.jsx
      ├─ Legal.jsx
      └─ Footer.jsx
```

---

## 🧠 React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets you write HTML-like markup inside JavaScript. React uses it because it keeps the structure of a component and its logic in one place, and it is easier to read than creating elements manually. Under the hood JSX is converted into regular JavaScript calls that create React elements.

**2. What is the difference between props and state?**
Props are values a parent passes down to a child; they are read-only and the child cannot change them. State is data a component manages itself; it can change over time and updating it causes the component to re-render. In this project, `TechnologyCard` receives data through props, while the selected stack is stored as state in `App`.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a function component a piece of memory that can change and remembers it between renders. It returns the current value and a setter function. In this project `App` uses it for `technologies`, `isLoading`, `error` and `stack`, `Navbar` uses it for the mobile menu, and `TechnologyIcon` uses it to remember if an icon failed to load.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects after rendering, such as fetching data or adding event listeners. Loading the JSON is a side effect, so `App` uses `useEffect` with an async function to import `technologies.json`, store the result in state and switch off the loading flag. The effect also cleans up after itself so it does not update state after the component unmounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell which list items changed, were added or were removed between renders. A unique, stable key (here the technology `id`) helps React update the list correctly and efficiently. Using duplicate or missing keys can cause items to render in the wrong place or behave unexpectedly.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on a condition, usually with `&&` or a ternary. In `YourStack` the empty-state message is shown when the stack is empty, and the list of selected items is shown otherwise — a clear example of conditional rendering.

**7. How do you pass data from a parent to a child, and how does a child send something back to the parent?**
Data goes down through props: `App` passes each `technology` object into `TechnologyCard`. A child sends something back by calling a callback function it received as a prop: when the button is clicked, `TechnologyCard` calls `onAdd(technology)`, which triggers the `handleAddToStack` function defined in the parent `App`.

---

## 🎨 Theme

The whole brand look is controlled by a single CSS custom property in `src/index.css`:

```css
:root {
  --brand-gradient: linear-gradient(120deg, #ff8a3d 0%, #ff4d8d 48%, #8b5cf6 100%);
}
```

The brand name, hero heading highlight and primary buttons all reuse this gradient, so the site can be re-themed by changing one value.

---

## 📄 Notes

- The technology data lives entirely in `src/data/technologies.json` and is loaded asynchronously — it is never hardcoded inside a component.
- Tech icons are loaded from the Devicon CDN, and any icon that fails to load falls back to a neutral placeholder so no broken images appear.
- The app is fully responsive, keyboard accessible and respects the `prefers-reduced-motion` setting.

---

## 👤 Author

Built as part of the **Programming Hero B14-A05 Dev Stack** assignment.
