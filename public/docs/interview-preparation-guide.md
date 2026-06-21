# Interview Preparation Guide — Hemanth Babu Setti

> Frontend-focused Software Engineer | 3.5+ Years | React.js, Next.js, TypeScript, Tailwind CSS

---

## PHASE 1: INTRODUCTION (5-10 mins)

### "Tell me about yourself"

> "Hi, I'm Hemanth Babu Setti, a Frontend-focused Software Development Engineer with around 3.5 years of experience. I graduated with a B.Tech in CSE from RGUKT RK Valley in 2023 with a CGPA of 8.70. I've been working at Bytup Technologies in Bengaluru since September 2022 — first as an intern, then as SDE-I from July 2023. My core expertise is in React.js, Next.js, TypeScript, and Tailwind CSS. At Bytup, I've built role-based dashboards, SEO-optimized platforms, admin tools, and worked extensively with Redux Toolkit and TanStack Query. Outside of work, I build side projects — like PrepAce, an AI-powered mock interview platform, and a Personal Finance Tracker. I'm now looking for my next challenge where I can grow as an engineer and contribute to a larger-scale product."

### Follow-up questions to expect

**"Why are you looking for a change?"**

- Never badmouth current employer
- Good answers:
  - "Looking for growth opportunities"
  - "Want to work on larger-scale products"
  - "Want to work with a stronger engineering team"
  - "Seeking better career progression"

**"How did you hear about us / Why this company?"**

- Research the company beforehand — their product, tech stack, culture, recent news
- Connect their mission/product to your interests

---

## PHASE 2: WORK EXPERIENCE DEEP DIVE (15-20 mins)

### Questions about Bytup Technologies

**Q: "What does your current company do? Explain your project."**

- Explain the business domain (real estate/property platform)
- Your role: Frontend engineer building dashboards, admin tools, listing management

**Q: "Walk me through the role-based dashboard you built."**

- Explain Agent vs Admin roles, different permissions
- How you handled role-based routing and conditional rendering
- State management approach (Redux Toolkit)
- Be ready to explain: "How did you decide what each role can see?"

**Q: "How did you optimize API re-fetches using cache invalidation?"**

- Explain TanStack Query's `staleTime`, `cacheTime`, `invalidateQueries`
- Specific example of when you invalidated cache vs relied on stale data
- The measurable improvement you achieved

**Q: "Explain the SEO work you did with Next.js."**

- Dynamic routes with `getStaticPaths` + `getStaticProps` or `generateStaticParams` (App Router)
- Nested routes strategy
- Meta tags, Open Graph, structured data
- How you measured organic discoverability improvements

**Q: "Tell me about your testing strategy."**

- Unit tests with Jest for utility functions
- Component testing with React Testing Library
- What you tested: user interactions, API responses, edge cases
- Code coverage targets

**Q: "Describe a challenging bug or problem you solved."**

- Prepare 2-3 real stories using the **STAR method** (Situation, Task, Action, Result)
- Example areas: performance issue, cross-browser bug, complex state management bug

**Q: "How do you collaborate with designers and backend teams?"**

- Figma handoff workflow
- API contract discussions
- How you handle design inconsistencies or missing API fields

---

## PHASE 3: TECHNICAL / SKILLS ASSESSMENT (30-45 mins)

### JavaScript / TypeScript — In-Depth

---

#### 1. Closures

**Definition:**
A closure is a function that **remembers the variables from its outer (enclosing) scope** even after the outer function has finished executing. In JavaScript, every function forms a closure at creation time.

**How it works:**
When a function is created, it captures a reference to its surrounding lexical environment. This means inner functions can access variables from outer functions, even when called later.

```js
function createCounter() {
  let count = 0; // This variable is "closed over"
  return {
    increment: () => ++count,
    getCount: () => count,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount();  // 2
// `count` is not accessible directly, but the returned functions still have access
```

**Real-world use cases in your Bytup work:**

1. **Event handlers with specific data** — When you render a list of properties in your dashboard and each button needs to know which property ID was clicked:
   ```js
   properties.map((property) => (
     <button onClick={() => handleDelete(property.id)}>
       Delete
     </button>
   ));
   // The arrow function closes over `property.id` from the .map() callback
   ```

2. **Debounce / Throttle functions** — For your real-time inquiry search:
   ```js
   function debounce(fn, delay) {
     let timerId; // closed over by the returned function
     return function (...args) {
       clearTimeout(timerId);
       timerId = setTimeout(() => fn(...args), delay);
     };
   }
   const debouncedSearch = debounce(searchProperties, 300);
   ```

3. **Module pattern / data privacy** — Keeping API keys or internal state private:
   ```js
   const authModule = (() => {
     let token = null; // private, not accessible outside
     return {
       setToken: (t) => { token = t; },
       getToken: () => token,
     };
   })();
   ```

**Common interview trap:**
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (not 0, 1, 2) — because `var` is function-scoped
// Fix: use `let` (block-scoped) or create a closure with IIFE
```

---

#### 2. Event Loop

**Definition:**
The Event Loop is the mechanism that allows JavaScript to perform **non-blocking asynchronous operations** despite being single-threaded. It continuously checks if the call stack is empty, then picks tasks from the queues to execute.

**How it works — the full picture:**

```
┌──────────────────────────────┐
│         Call Stack            │  ← Executes synchronous code
└──────────┬───────────────────┘
           │ (when empty, check queues)
           ▼
┌──────────────────────────────┐
│    Microtask Queue           │  ← Promises (.then), queueMicrotask, MutationObserver
│    (Higher priority)         │     ALL microtasks run before any macrotask
└──────────┬───────────────────┘
           ▼
┌──────────────────────────────┐
│    Macrotask Queue           │  ← setTimeout, setInterval, I/O, UI rendering
│    (Lower priority)          │     One macrotask per event loop tick
└──────────────────────────────┘
```

**Classic interview question — What's the output?**
```js
console.log("1");                          // Sync → Call Stack

setTimeout(() => console.log("2"), 0);     // Macrotask Queue

Promise.resolve().then(() => console.log("3")); // Microtask Queue

console.log("4");                          // Sync → Call Stack

// Output: 1, 4, 3, 2
// Why: Sync code runs first (1, 4), then microtasks (3), then macrotasks (2)
```

**Real-world use case in your work:**

1. **Why your UI doesn't freeze** — When you fetch property listings using TanStack Query, the API call is handled by the browser's Web API (not on the call stack). Once the response arrives, the callback enters the macrotask queue and runs only when the stack is clear — keeping your dashboard interactive.

2. **setState batching in React** — React batches state updates within the same microtask, which is why calling `setState` multiple times in a handler results in a single re-render.

3. **setTimeout(fn, 0) trick** — Sometimes used to defer execution after the current rendering cycle:
   ```js
   // Let the DOM paint first, then scroll to element
   setTimeout(() => {
     document.getElementById("new-listing").scrollIntoView();
   }, 0);
   ```

---

#### 3. Promises

**Definition:**
A Promise is an object that represents the **eventual completion (or failure) of an asynchronous operation** and its resulting value. It has three states: `pending`, `fulfilled`, or `rejected`.

```js
const promise = new Promise((resolve, reject) => {
  // async operation
  fetchData()
    ? resolve(data)   // success → .then()
    : reject(error);  // failure → .catch()
});

promise
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("Done")); // runs regardless
```

**Promise static methods — know the difference:**

| Method | Behavior | Use Case |
| --- | --- | --- |
| `Promise.all([p1, p2, p3])` | Resolves when **ALL** resolve. Rejects if **ANY** rejects. | Load dashboard: fetch user + properties + analytics together. If any fails, show error. |
| `Promise.allSettled([p1, p2, p3])` | Waits for **ALL** to settle (resolve or reject). Never short-circuits. | Fetch multiple optional widgets. Show whatever loaded, skip failures. |
| `Promise.race([p1, p2, p3])` | Resolves/rejects as soon as the **FIRST** one settles. | Timeout pattern: race an API call against a timeout. |
| `Promise.any([p1, p2, p3])` | Resolves when the **FIRST** one resolves. Ignores rejections unless ALL reject. | Try multiple CDN sources, use whichever responds first. |

**Real-world use case — Your Bytup dashboard:**
```js
// Loading the admin dashboard — need ALL data before rendering
const [users, properties, analytics] = await Promise.all([
  fetchUsers(),
  fetchProperties(),
  fetchAnalytics(),
]);
// If any fails → catch block → show error screen

// Loading optional dashboard widgets — show what you can
const results = await Promise.allSettled([
  fetchRecentLeads(),
  fetchNotifications(),
  fetchMarketTrends(),
]);
results.forEach((result) => {
  if (result.status === "fulfilled") renderWidget(result.value);
  // Silently skip failed widgets
});
```

**Async/Await** is syntactic sugar over Promises:
```js
async function loadDashboard() {
  try {
    const data = await fetchProperties(); // pauses here until resolved
    setProperties(data);
  } catch (error) {
    showErrorToast(error.message);
  }
}
```

---

#### 4. Hoisting

**Definition:**
Hoisting is JavaScript's default behavior of **moving declarations to the top of their scope** during the compilation phase, before code execution. Only the _declarations_ are hoisted, not the _initializations_.

**How `var`, `let`, and `const` differ:**

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function-scoped | Block-scoped `{}` | Block-scoped `{}` |
| Hoisted? | Yes, initialized as `undefined` | Yes, but in **Temporal Dead Zone (TDZ)** | Yes, but in **TDZ** |
| Re-declaration | Allowed | Not allowed in same scope | Not allowed |
| Re-assignment | Allowed | Allowed | Not allowed |

```js
// var — hoisted and initialized as undefined
console.log(a); // undefined (no error!)
var a = 10;

// let — hoisted but NOT initialized (TDZ)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// const — same as let, plus must be initialized at declaration
const c; // SyntaxError: Missing initializer
```

**Function hoisting:**
```js
// Function declarations are fully hoisted (both name and body)
greet(); // "Hello!" — works even before declaration
function greet() { console.log("Hello!"); }

// Function expressions are NOT fully hoisted
sayBye(); // TypeError: sayBye is not a function
var sayBye = function () { console.log("Bye!"); };
// `var sayBye` is hoisted as undefined, but the function assignment hasn't happened yet
```

**Real-world use case:**
- Always use `const` by default, `let` when you need to reassign, never use `var`
- In your Bytup codebase, block scoping with `let`/`const` prevents bugs in loops, conditionals, and async callbacks

---

#### 5. `this` Keyword

**Definition:**
`this` refers to the **execution context** — the object that is currently calling the function. Its value depends on _how_ and _where_ the function is called, not where it's defined.

**Rules (in order of precedence):**

| Context | `this` refers to | Example |
| --- | --- | --- |
| **Global** | `window` (browser) / `undefined` (strict mode) | `console.log(this)` |
| **Object method** | The object calling the method | `obj.method()` → `this = obj` |
| **`new` keyword** | The newly created instance | `new Person()` → `this = new object` |
| **`call` / `apply` / `bind`** | Explicitly set | `fn.call(obj)` → `this = obj` |
| **Arrow function** | Inherits from **enclosing lexical scope** (no own `this`) | Defined inside a method → uses method's `this` |

```js
const user = {
  name: "Hemanth",
  greet: function () {
    console.log(this.name); // "Hemanth" — `this` = user object
  },
  greetArrow: () => {
    console.log(this.name); // undefined — arrow inherits from outer scope (module/global)
  },
};

// Common gotcha with callbacks:
const user2 = {
  name: "Hemanth",
  greet: function () {
    setTimeout(function () {
      console.log(this.name); // undefined — `this` = window (not user2)
    }, 100);
    setTimeout(() => {
      console.log(this.name); // "Hemanth" — arrow function inherits `this` from greet()
    }, 100);
  },
};
```

**Real-world use case — React:**
This is why React class components needed `.bind(this)`:
```js
// Class component (old way)
class Dashboard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this); // Without this, `this` is undefined
  }
  handleClick() { console.log(this.state); }
}

// With arrow function (modern way — no binding needed)
class Dashboard extends React.Component {
  handleClick = () => { console.log(this.state); }; // Arrow inherits `this` from class
}

// Functional components (your current approach) — no `this` issues at all!
```

---

#### 6. Prototypes & Prototypal Inheritance

**Definition:**
Every JavaScript object has a hidden internal property `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf()`). When you access a property on an object, JavaScript first looks on the object itself, then walks up the **prototype chain** until it finds it or reaches `null`.

```
myObj → myObj.__proto__ (Object.prototype) → null
myArr → Array.prototype → Object.prototype → null
```

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const dog = new Animal("Buddy");
dog.speak();        // "Buddy makes a sound" — found on Animal.prototype
dog.toString();     // "[object Object]" — found on Object.prototype (further up the chain)
dog.hasOwnProperty("name"); // true — `name` is on the object itself
dog.hasOwnProperty("speak"); // false — `speak` is on the prototype
```

**ES6 `class` is syntactic sugar over prototypes:**
```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
}
class Dog extends Animal {
  speak() { return `${this.name} barks`; } // overrides parent
}
// Under the hood, Dog.prototype.__proto__ === Animal.prototype
```

**Real-world use case:**
- Array methods like `.map()`, `.filter()`, `.reduce()` live on `Array.prototype` — every array inherits them
- When you do `"hello".toUpperCase()`, the string primitive is temporarily boxed into a `String` object and the method is found on `String.prototype`
- Understanding prototypes helps debug issues like "why is this method undefined" — it's likely a prototype chain issue

---

#### 7. ES6+ Features

**Destructuring — Extract values from objects/arrays:**
```js
// Object destructuring — used everywhere in React
const { name, role, permissions } = user;
const { data, isLoading, error } = useQuery(["properties"], fetchProperties);

// Array destructuring — useState pattern
const [count, setCount] = useState(0);

// Nested destructuring
const { address: { city, pincode } } = user;

// Default values
const { theme = "light" } = settings;

// Rename
const { name: userName } = user;
```

**Spread & Rest operators (`...`):**
```js
// Spread — expand/copy
const updatedUser = { ...user, role: "admin" };       // Object spread (immutable update)
const allItems = [...existingItems, newItem];           // Array spread
<ChildComponent {...props} />                           // JSX spread props

// Rest — collect remaining
function logFirst(first, ...rest) { console.log(rest); } // rest = remaining args
const { id, ...otherProps } = property;                  // rest in destructuring
```

**Real-world use case — Immutable state updates in Redux:**
```js
// In your Bytup Redux slice
const propertySlice = createSlice({
  name: "properties",
  initialState: { items: [], filters: {} },
  reducers: {
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});
```

**Optional Chaining (`?.`) — safe property access:**
```js
// Without — crashes if property or address is null/undefined
const city = property.address.city;

// With optional chaining — returns undefined instead of crashing
const city = property?.address?.city;
const firstTag = property?.tags?.[0];
const result = property?.getPrice?.();
```

**Nullish Coalescing (`??`) — default only for null/undefined:**
```js
const pageSize = userPreference ?? 10;
// Returns 10 ONLY if userPreference is null or undefined
// Unlike || which also treats 0, "", false as falsy

// Real difference:
0 || 10   // 10  (0 is falsy)
0 ?? 10   // 0   (0 is NOT null/undefined)

"" || "default"  // "default" (empty string is falsy)
"" ?? "default"  // ""        (empty string is NOT null/undefined)
```

**Template Literals, Map/Set, Symbol, for...of** — also worth knowing but less frequently asked.

---

#### 8. TypeScript — Types, Interfaces & Generics

**`interface` vs `type` — When to use which:**

| Feature | `interface` | `type` |
| --- | --- | --- |
| Object shapes | Yes | Yes |
| Extend/inherit | `extends` keyword | Intersection `&` |
| Declaration merging | Yes (can re-declare to add fields) | No |
| Union types | No | Yes (`type Status = "active" \| "inactive"`) |
| Primitives, tuples | No | Yes (`type ID = string \| number`) |
| **Convention** | Use for object shapes, API contracts | Use for unions, computed types, everything else |

```ts
// Interface — for object shapes (your API response contracts)
interface Property {
  id: string;
  title: string;
  price: number;
  address: Address;
}

// Extending interfaces
interface FeaturedProperty extends Property {
  isFeatured: boolean;
  featuredUntil: Date;
}

// Type — for unions and computed types
type Role = "agent" | "admin" | "viewer";
type PropertyStatus = "active" | "sold" | "pending";
type ID = string | number;
```

**Generics — Write reusable, type-safe code:**
```ts
// Without generics — lose type info
function getFirst(arr: any[]): any { return arr[0]; }

// With generics — preserve type info
function getFirst<T>(arr: T[]): T { return arr[0]; }
getFirst<string>(["a", "b"]); // return type: string
getFirst([1, 2, 3]);          // return type: number (inferred)

// Real-world — generic API response wrapper
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Usage in your Bytup API calls
type PropertyListResponse = ApiResponse<Property[]>;
type SinglePropertyResponse = ApiResponse<Property>;

// Generic React component
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick: (item: T) => void;
}
function DataTable<T>({ data, columns, onRowClick }: TableProps<T>) { ... }
```

**`unknown` vs `any`:**
```ts
// any — disables ALL type checking (avoid!)
let x: any = "hello";
x.foo.bar; // No error — but will crash at runtime!

// unknown — type-safe version of any (must narrow before using)
let y: unknown = "hello";
y.foo.bar;          // Error! Object is of type 'unknown'
if (typeof y === "string") {
  y.toUpperCase();  // OK — TypeScript knows it's a string now
}
```

**Rule: Use `unknown` for values you don't know yet. Use `any` only as a last resort.**

---

#### 9. TypeScript — Utility Types

Built-in types that transform other types. Essential for daily work.

```ts
interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
}
```

**`Partial<T>`** — Makes ALL properties optional:
```ts
type UpdateUserPayload = Partial<User>;
// { id?: string; name?: string; email?: string; role?: Role; avatar?: string }

// Real-world: PATCH API where you only send changed fields
async function updateUser(id: string, data: Partial<User>) {
  return api.patch(`/users/${id}`, data);
}
updateUser("123", { name: "Hemanth" }); // Only updating name — valid!
```

**`Pick<T, Keys>`** — Pick specific properties:
```ts
type UserPreview = Pick<User, "id" | "name" | "avatar">;
// { id: string; name: string; avatar: string }

// Real-world: Property listing card only needs a few fields
type PropertyCard = Pick<Property, "id" | "title" | "price" | "thumbnail">;
```

**`Omit<T, Keys>`** — Remove specific properties (opposite of Pick):
```ts
type CreateUserPayload = Omit<User, "id">;
// { name: string; email: string; role: Role; avatar: string }
// `id` is auto-generated by backend, so we omit it in creation payload
```

**`Record<Keys, Value>`** — Create an object type with specific keys and value type:
```ts
type RolePermissions = Record<Role, string[]>;
// { agent: string[]; admin: string[]; viewer: string[] }

// Real-world: Your role-based dashboard permissions
const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete", "manage_users"],
  agent: ["read", "write"],
  viewer: ["read"],
};

// Dynamic key mapping
type StatusCounts = Record<PropertyStatus, number>;
// { active: number; sold: number; pending: number }
```

**`Required<T>`** — Makes ALL properties required (opposite of Partial):
```ts
type CompleteUser = Required<Partial<User>>;
// All fields become required again
```

**`Readonly<T>`** — Makes ALL properties readonly:
```ts
type FrozenConfig = Readonly<AppConfig>;
// Cannot reassign any property after creation
```

**`ReturnType<T>`** — Extract the return type of a function:
```ts
function fetchProperties() { return { data: [], total: 0 }; }
type FetchResult = ReturnType<typeof fetchProperties>;
// { data: never[]; total: number }
```

**Combining utility types — common pattern:**
```ts
// API payload: needs everything except id (auto-generated) and timestamps
type CreatePropertyPayload = Omit<Property, "id" | "createdAt" | "updatedAt">;

// Form state: all fields optional for partial form fills
type PropertyFormState = Partial<Omit<Property, "id">>;

// Table row: pick display fields + add computed ones
type PropertyTableRow = Pick<Property, "id" | "title" | "price"> & {
  formattedPrice: string;
  daysOnMarket: number;
};
```

### React.js — In-Depth

---

#### 1. Virtual DOM & Reconciliation

**Definition:**
The Virtual DOM is a **lightweight in-memory JavaScript representation** of the actual DOM. Instead of directly manipulating the browser DOM (which is slow), React creates a virtual copy, computes changes (diffing), and applies only the minimal updates to the real DOM (reconciliation).

**How it works — step by step:**
```
1. State/props change
2. React creates a NEW Virtual DOM tree
3. React DIFFS the new tree against the previous tree
4. React computes the MINIMUM set of changes needed
5. React PATCHES only those changes to the real DOM (commit phase)
```

**The Diffing Algorithm rules:**
1. **Different element types** → Tear down old tree, build new one (`<div>` → `<span>` = full rebuild)
2. **Same element type** → Keep the DOM node, only update changed attributes
3. **Lists with keys** → React uses keys to match old and new children efficiently
4. **Component type same** → Re-render, keep the instance and state

```jsx
// React diffs and only updates the className — NOT the entire div
// Before:
<div className="old" title="hello">Content</div>
// After:
<div className="new" title="hello">Content</div>
// Only className attribute is changed in the real DOM
```

**Real-world use case — Your Bytup dashboard:**
When a new property is added to a listing, React doesn't re-render the entire table. It diffs the virtual DOM, finds the one new row, and inserts only that row into the real DOM. This is why your dashboard stays fast even with hundreds of listings.

**Fiber Architecture (React 16+):**
React Fiber is the reimplementation of the reconciliation algorithm. It enables:
- **Incremental rendering** — split rendering work into chunks
- **Ability to pause, abort, or reuse work**
- **Priority-based updates** — user interactions get higher priority than background data fetching

---

#### 2. React Hooks

**Definition:**
Hooks are functions that let you **"hook into" React state and lifecycle features** from functional components. Introduced in React 16.8 to replace class components.

**Core Hooks — when to use each:**

**`useState`** — Local component state:
```jsx
const [properties, setProperties] = useState([]);         // array state
const [isLoading, setIsLoading] = useState(false);         // boolean state
const [filters, setFilters] = useState({ city: "", type: "" }); // object state

// Functional update — when new state depends on previous state
setCount((prev) => prev + 1); // Always use this in async callbacks
```

**`useEffect`** — Side effects (API calls, subscriptions, DOM manipulation):
```jsx
// Runs on EVERY render (rarely needed)
useEffect(() => { console.log("rendered"); });

// Runs ONCE on mount (empty dependency array)
useEffect(() => {
  fetchProperties().then(setProperties);
}, []);

// Runs when `filters` change
useEffect(() => {
  fetchProperties(filters).then(setProperties);
}, [filters]);

// Cleanup function — runs before next effect and on unmount
useEffect(() => {
  const ws = new WebSocket("wss://api.bytup.com/notifications");
  ws.onmessage = (event) => addNotification(JSON.parse(event.data));
  return () => ws.close(); // Cleanup: close connection on unmount
}, []);
```

**Common pitfall — missing dependencies:**
```jsx
// BUG: `count` is captured at creation time, always logs 0
useEffect(() => {
  const id = setInterval(() => console.log(count), 1000);
  return () => clearInterval(id);
}, []); // Missing `count` in dependency array

// FIX: add count to dependencies, or use functional update
```

**`useRef`** — Mutable value that persists across renders WITHOUT causing re-render:
```jsx
// DOM reference
const inputRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus(); // Direct DOM access

// Storing mutable value (like previous state, timer IDs)
const prevFilters = useRef(filters);
useEffect(() => {
  if (prevFilters.current !== filters) {
    // filters changed — do something
  }
  prevFilters.current = filters;
}, [filters]);
```

**`useMemo`** — Memoize an **expensive computed value**:
```jsx
// Without useMemo — filteredProperties recalculated on EVERY render
const filteredProperties = properties.filter((p) => p.city === selectedCity);

// With useMemo — only recalculates when dependencies change
const filteredProperties = useMemo(
  () => properties.filter((p) => p.city === selectedCity),
  [properties, selectedCity]
);

// Real-world: Sorting + filtering 1000s of property listings on your dashboard
const sortedAndFiltered = useMemo(() => {
  return properties
    .filter((p) => p.status === activeFilter)
    .sort((a, b) => b.price - a.price);
}, [properties, activeFilter]);
```

**`useCallback`** — Memoize a **function reference** (prevents child re-renders):
```jsx
// Without useCallback — new function reference every render → child re-renders
<PropertyCard onClick={() => handleSelect(property.id)} />

// With useCallback — stable reference → child won't re-render unnecessarily
const handleSelect = useCallback((id) => {
  setSelectedProperty(id);
}, []); // Dependencies: none (setSelectedProperty is stable from useState)

// When it matters: passing callbacks to memoized children (React.memo)
```

**When to use useMemo vs useCallback:**
| | `useMemo` | `useCallback` |
| --- | --- | --- |
| Returns | A **value** | A **function** |
| Use when | Expensive calculation | Passing callback to memoized child |
| Equivalent | `useMemo(() => fn, [deps])` | `useCallback(fn, [deps])` |

---

#### 3. Custom Hooks

**Definition:**
A custom hook is a JavaScript function whose name starts with `use` that **extracts and reuses stateful logic** across components. It can call other hooks inside it.

```jsx
// Custom hook for fetching data with loading/error states
function usePropertyData(propertyId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchProperty(propertyId)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [propertyId]);

  return { data, isLoading, error };
}

// Usage — clean component
function PropertyDetail({ id }) {
  const { data, isLoading, error } = usePropertyData(id);
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  return <PropertyView property={data} />;
}
```

**Real-world custom hooks from your Bytup work:**
```jsx
// Debounced search hook
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

// Window size hook for responsive layouts
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

// Auth / role check hook for your role-based dashboard
function useAuth() {
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user?.role === "admin";
  const isAgent = user?.role === "agent";
  return { user, isAdmin, isAgent, isAuthenticated: !!user };
}
```

---

#### 4. State Management — When to Use What

**Definition:**
State management is how you **store, update, and share data** across your React application. The right tool depends on the type of state.

| State Type | Tool | Example |
| --- | --- | --- |
| **Local UI state** | `useState` | Toggle, form input, modal open/close |
| **Complex local state** | `useReducer` | Multi-step form, complex toggle logic |
| **Shared app state** | Context API | Theme, locale, auth user |
| **Global client state** | Redux Toolkit | Role permissions, filters, cart |
| **Server state** | TanStack Query | API data (properties, users, analytics) |
| **URL state** | URL params / search params | Current page, active tab, search query |
| **Form state** | React Hook Form / Formik | Form validation, submission |

**Context API — when and when NOT to use:**
```jsx
// GOOD: Rarely changing data shared across many components
const ThemeContext = createContext("light");
const AuthContext = createContext(null);

// BAD: Frequently changing data — causes ALL consumers to re-render
// Don't put rapidly updating data (like search input value) in context
// Use Redux or state colocation instead
```

**Decision flowchart:**
```
Is it server data (from API)?
  → Yes → TanStack Query
  → No ↓
Does only one component need it?
  → Yes → useState / useReducer
  → No ↓
Is it shared across many components?
  → Does it change frequently? → Redux Toolkit
  → Does it change rarely? → Context API
```

---

#### 5. Performance Optimization

**Definition:**
React re-renders a component whenever its **state changes, props change, or parent re-renders**. Performance optimization is about preventing unnecessary re-renders.

**`React.memo`** — Skip re-render if props haven't changed:
```jsx
// Without memo — re-renders every time parent re-renders, even if props are the same
function PropertyCard({ title, price }) {
  return <div>{title} - {price}</div>;
}

// With memo — only re-renders if title or price actually changed
const PropertyCard = React.memo(function PropertyCard({ title, price }) {
  return <div>{title} - {price}</div>;
});

// Custom comparison function
const PropertyCard = React.memo(
  function PropertyCard({ property }) { ... },
  (prevProps, nextProps) => prevProps.property.id === nextProps.property.id
);
```

**Common re-render causes and fixes:**

```jsx
// PROBLEM: New object/array reference every render
<PropertyList filters={{ city: "Bengaluru" }} /> // New object every time!

// FIX: Memoize with useMemo
const filters = useMemo(() => ({ city: "Bengaluru" }), []);
<PropertyList filters={filters} />

// PROBLEM: Inline function creates new reference
<PropertyCard onClick={() => handleClick(id)} /> // New function every time!

// FIX: useCallback
const handleClick = useCallback((id) => selectProperty(id), []);
```

**React DevTools Profiler** — Use this to identify which components re-render and why. Highlight updates option shows visual re-render flashing.

---

#### 6. Keys in Lists

**Definition:**
Keys are **unique identifiers** that help React identify which items in a list have changed, been added, or removed. They enable efficient reconciliation of lists.

```jsx
// GOOD — unique, stable key
{properties.map((property) => (
  <PropertyCard key={property.id} property={property} />
))}

// BAD — index as key (causes bugs with reordering, deleting, inserting)
{properties.map((property, index) => (
  <PropertyCard key={index} property={property} />
))}
```

**Why index as key is problematic:**
```
Before deletion:        After deleting item B:
Index 0 → Item A        Index 0 → Item A (OK — same key, same item)
Index 1 → Item B        Index 1 → Item C (BUG — key=1 maps to C now, React thinks it's B)
Index 2 → Item C
// React doesn't destroy/recreate — it UPDATES the existing component,
// which can preserve stale state (input values, animations, etc.)
```

**When index as key is OK:**
- List is static (never reordered, filtered, or items removed)
- Items have no internal state
- Example: rendering static menu items

---

#### 7. Error Boundaries

**Definition:**
Error boundaries are React components that **catch JavaScript errors in their child component tree**, log errors, and display a fallback UI instead of crashing the entire app. They only work with class components (no hook equivalent yet).

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error tracking service (Sentry, LogRocket)
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. <button onClick={() => this.setState({ hasError: false })}>Retry</button></div>;
    }
    return this.props.children;
  }
}

// Usage — wrap sections of your dashboard
<ErrorBoundary>
  <AnalyticsDashboard />  {/* If this crashes, only this section shows fallback */}
</ErrorBoundary>
<ErrorBoundary>
  <PropertyListings />     {/* This keeps working even if analytics crashes */}
</ErrorBoundary>
```

**What error boundaries DON'T catch:**
- Event handlers (use try/catch inside them)
- Async code (promises, setTimeout)
- Server-side rendering
- Errors in the error boundary itself

---

#### 8. Controlled vs Uncontrolled Components

**Definition:**
- **Controlled**: React state is the "single source of truth". Form value is controlled by `useState`.
- **Uncontrolled**: The DOM itself holds the state. You read the value using `useRef`.

```jsx
// CONTROLLED — React owns the value
function SearchForm() {
  const [query, setQuery] = useState("");
  return (
    <input
      value={query}                       // React controls this
      onChange={(e) => setQuery(e.target.value)} // Every keystroke updates state
    />
  );
}
// Pros: instant validation, conditional rendering, disable submit button
// Cons: re-renders on every keystroke (mitigated by React's batching)

// UNCONTROLLED — DOM owns the value
function FileUpload() {
  const fileRef = useRef(null);
  const handleSubmit = () => {
    const file = fileRef.current.files[0]; // Read value only when needed
    uploadFile(file);
  };
  return <input type="file" ref={fileRef} />;
}
// Pros: less code, no re-renders, required for file inputs
// Cons: harder to validate in real-time
```

**Real-world rule:**
- Use **controlled** for most forms (search bars, login forms, filters in your dashboard)
- Use **uncontrolled** for file inputs and when integrating with non-React libraries
- Use **React Hook Form** for complex forms (it uses uncontrolled under the hood for performance)

---

### Next.js — In-Depth

---

#### 1. SSR vs SSG vs ISR

**Definition:**
Next.js provides multiple **rendering strategies** to generate HTML. Choosing the right one impacts performance, SEO, and freshness of data.

| Strategy | Full Name | When HTML is Generated | Best For |
| --- | --- | --- | --- |
| **SSG** | Static Site Generation | At **build time** | Blog posts, marketing pages, docs |
| **SSR** | Server-Side Rendering | At **every request** | User-specific data, real-time data |
| **ISR** | Incremental Static Regeneration | At build time + **revalidates** in background | Product pages, listings (semi-dynamic) |
| **CSR** | Client-Side Rendering | In the **browser** | Dashboards, authenticated pages |

```jsx
// SSG — Pages Router
export async function getStaticProps() {
  const properties = await fetchProperties();
  return { props: { properties } }; // HTML generated at build time
}

// SSR — Pages Router
export async function getServerSideProps(context) {
  const user = await getUser(context.req.cookies.token);
  return { props: { user } }; // HTML generated per request
}

// ISR — Pages Router (SSG + revalidation)
export async function getStaticProps() {
  const properties = await fetchProperties();
  return {
    props: { properties },
    revalidate: 60, // Regenerate page every 60 seconds in the background
  };
}
```

**Real-world at Bytup:**
- **SSG** → Static pages (about, contact, FAQ)
- **ISR** → Property listing pages (new listings appear within 60s, no full rebuild)
- **SSR** → Admin dashboard (needs fresh data + auth check per request)
- **CSR** → Interactive dashboard widgets (charts, filters — client-side after initial load)

---

#### 2. App Router vs Pages Router

**Definition:**
Next.js has two routing systems. **Pages Router** (legacy, `pages/` directory) and **App Router** (modern, `app/` directory, introduced in Next.js 13).

| Feature | Pages Router (`pages/`) | App Router (`app/`) |
| --- | --- | --- |
| Routing | File-based in `pages/` | File-based in `app/` with `layout.tsx`, `page.tsx` |
| Data fetching | `getStaticProps`, `getServerSideProps` | `async` Server Components, `fetch` with cache options |
| Layouts | Manual (`_app.tsx`, `_document.tsx`) | Nested `layout.tsx` (automatic nesting) |
| Components | All Client Components by default | **Server Components by default** |
| Streaming | Limited | Built-in with `loading.tsx` and Suspense |
| Metadata | `<Head>` component | `export const metadata` or `generateMetadata()` |

```tsx
// App Router — Server Component (default, no "use client" directive)
// app/properties/page.tsx
export default async function PropertiesPage() {
  const properties = await fetch("https://api.bytup.com/properties", {
    next: { revalidate: 60 }, // ISR equivalent
  }).then((res) => res.json());

  return <PropertyList properties={properties} />;
}

// App Router — Client Component (needs interactivity)
// app/properties/search.tsx
"use client"; // This directive makes it a Client Component
import { useState } from "react";
export default function PropertySearch() {
  const [query, setQuery] = useState("");
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

**Server Components vs Client Components:**
| | Server Components | Client Components |
| --- | --- | --- |
| Runs on | Server only | Server (SSR) + Client (hydration) |
| Can use hooks? | No | Yes |
| Can access DB? | Yes | No |
| Bundle size | Not sent to client | Included in JS bundle |
| Use for | Data fetching, static content | Interactivity, state, events |

---

#### 3. Dynamic & Nested Routes

**Definition:**
Next.js uses the **file system** for routing. Dynamic segments are created with square brackets.

```
app/
├── page.tsx                          → /
├── properties/
│   ├── page.tsx                      → /properties
│   ├── [id]/
│   │   ├── page.tsx                  → /properties/123
│   │   └── edit/
│   │       └── page.tsx              → /properties/123/edit
│   └── [...slug]/
│       └── page.tsx                  → /properties/bengaluru/apartments/2bhk (catch-all)
├── admin/
│   ├── layout.tsx                    → Shared admin layout (sidebar, nav)
│   ├── page.tsx                      → /admin
│   └── users/
│       └── page.tsx                  → /admin/users
```

```tsx
// Dynamic route — app/properties/[id]/page.tsx
export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await fetchProperty(params.id);
  return <PropertyDetail property={property} />;
}

// Generate static paths for SSG
export async function generateStaticParams() {
  const properties = await fetchAllPropertyIds();
  return properties.map((p) => ({ id: p.id })); // Pre-render these at build time
}
```

**Real-world — Your Bytup SEO work:**
- `/properties/[city]/[type]` → Nested dynamic routes for SEO
- `generateStaticParams` pre-renders top city+type combos
- `generateMetadata` creates unique title/description per page for Google

---

#### 4. SEO in Next.js

**Definition:**
SEO (Search Engine Optimization) ensures your pages are **discoverable and rankable** by search engines. Next.js provides built-in tools for this.

```tsx
// App Router — Static metadata
export const metadata = {
  title: "Properties in Bengaluru | Bytup",
  description: "Find the best properties in Bengaluru with verified listings.",
  openGraph: {
    title: "Properties in Bengaluru",
    description: "Verified property listings",
    images: ["/images/og-bengaluru.jpg"],
  },
};

// App Router — Dynamic metadata (per property)
export async function generateMetadata({ params }) {
  const property = await fetchProperty(params.id);
  return {
    title: `${property.title} | Bytup`,
    description: property.description.slice(0, 160),
    openGraph: {
      images: [property.thumbnail],
    },
  };
}
```

**Sitemap & robots.txt:**
```tsx
// app/sitemap.ts
export default async function sitemap() {
  const properties = await fetchAllProperties();
  return properties.map((p) => ({
    url: `https://bytup.com/properties/${p.id}`,
    lastModified: p.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}

// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin/" },
    sitemap: "https://bytup.com/sitemap.xml",
  };
}
```

---

#### 5. Next.js Middleware

**Definition:**
Middleware runs **before a request is completed**. It can rewrite, redirect, modify headers, or block requests. Runs on the Edge Runtime.

```tsx
// middleware.ts (at project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token");

  // Redirect unauthenticated users away from admin
  if (request.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Add custom headers
  const response = NextResponse.next();
  response.headers.set("x-custom-header", "bytup");
  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"], // Only run on these routes
};
```

**Real-world at Bytup:**
- Protect admin routes — redirect to login if no auth token
- Role-based routing — redirect agents away from admin-only pages
- Geo-based content — show different listings based on location headers

---

#### 6. Image Optimization (`next/image`)

**Definition:**
`next/image` is a built-in component that automatically **optimizes images** with lazy loading, responsive sizes, and modern formats (WebP/AVIF).

```tsx
import Image from "next/image";

<Image
  src={property.thumbnail}
  alt={property.title}
  width={400}
  height={300}
  placeholder="blur"         // Show blurred preview while loading
  blurDataURL={property.blurHash}
  sizes="(max-width: 768px) 100vw, 50vw" // Responsive
  priority                    // Preload for above-the-fold images (disables lazy loading)
/>
```

**Benefits over plain `<img>`:**
- **Lazy loading** by default (only loads when near viewport)
- **Responsive** — serves correct size based on viewport
- **Modern formats** — auto-converts to WebP/AVIF
- **Prevents layout shift** — requires width/height (calculates aspect ratio)

---

### Redux Toolkit — In-Depth

---

#### 1. Core Concepts — Slices, Store & createAsyncThunk

**Definition:**
Redux Toolkit (RTK) is the **official, recommended way** to write Redux logic. It simplifies store setup, reduces boilerplate, and includes utilities like `createSlice` and `createAsyncThunk`.

**Slice — a collection of reducer logic for one feature:**
```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PropertyState {
  items: Property[];
  selectedId: string | null;
  filters: { city: string; type: string };
}

const initialState: PropertyState = {
  items: [],
  selectedId: null,
  filters: { city: "", type: "" },
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.items = action.payload; // Immer allows "mutating" syntax
    },
    selectProperty: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<PropertyState["filters"]>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = { city: "", type: "" };
    },
  },
});

export const { setProperties, selectProperty, updateFilters, clearFilters } = propertySlice.actions;
export default propertySlice.reducer;
```

**createAsyncThunk — handle async operations:**
```ts
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk(
  "properties/fetch",
  async (filters: PropertyFilters, { rejectWithValue }) => {
    try {
      const response = await api.get("/properties", { params: filters });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Handle in slice with extraReducers
const propertySlice = createSlice({
  name: "properties",
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
```

**Store setup:**
```ts
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    properties: propertyReducer,
    auth: authReducer,
    leads: leadsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

#### 2. RTK Query vs TanStack Query

| Feature | RTK Query | TanStack Query |
| --- | --- | --- |
| Built into | Redux Toolkit | Standalone library |
| Cache lives in | Redux store | Its own internal cache |
| Requires Redux? | Yes | No |
| Auto refetching | Yes (tags-based) | Yes (key-based) |
| Devtools | Redux DevTools | TanStack Query DevTools |
| **Best when** | Already using Redux heavily | Server state only, lighter setup |
| **Your Bytup choice** | Redux for client state (roles, filters) | TanStack Query for API data |

---

#### 3. Memoized Selectors — createSelector

**Definition:**
Selectors are functions that **extract specific pieces of state** from the Redux store. `createSelector` (from Reselect) creates memoized selectors that only recompute when inputs change.

```ts
import { createSelector } from "@reduxjs/toolkit";

// Basic selectors
const selectProperties = (state: RootState) => state.properties.items;
const selectFilters = (state: RootState) => state.properties.filters;

// Memoized selector — only recalculates when properties or filters change
const selectFilteredProperties = createSelector(
  [selectProperties, selectFilters],
  (properties, filters) => {
    return properties.filter((p) => {
      if (filters.city && p.city !== filters.city) return false;
      if (filters.type && p.type !== filters.type) return false;
      return true;
    });
  }
);

// Usage in component
const filteredProperties = useSelector(selectFilteredProperties);
// Even if OTHER state changes (auth, leads), this won't recompute
```

---

### TanStack Query (React Query) — In-Depth

---

#### 1. What Problem Does It Solve?

**Definition:**
TanStack Query is a **server state management library**. It handles fetching, caching, synchronizing, and updating server data — things that Redux was never designed for.

**Without TanStack Query (manual approach):**
```jsx
function PropertyList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchProperties()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);
  // Problems: no caching, no refetch on focus, no deduplication,
  // no retry, no pagination, no optimistic updates...
}
```

**With TanStack Query:**
```jsx
function PropertyList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    retry: 3,                  // Retry failed requests 3 times
    refetchOnWindowFocus: true, // Refetch when user returns to tab
  });
  // Caching, deduplication, background refetching — all automatic!
}
```

**TanStack Query vs Redux — they solve DIFFERENT problems:**
| | Redux Toolkit | TanStack Query |
| --- | --- | --- |
| **Purpose** | Client state (UI state, user choices) | Server state (API data) |
| **Data source** | User interactions | Backend APIs |
| **Examples** | Theme, auth role, sidebar open, filters selected | Properties list, user profile, analytics data |
| **Caching** | Manual | Automatic with staleTime/gcTime |
| **Synchronization** | Manual | Auto refetch on focus, reconnect, interval |

---

#### 2. Caching — staleTime vs gcTime

```
┌──────────────────────────────────────────────────────────┐
│ Query Lifecycle:                                          │
│                                                          │
│  fetch → FRESH (staleTime) → STALE → INACTIVE (gcTime) → GARBAGE COLLECTED
│                                                          │
│  staleTime = 5min: Data is "fresh" for 5 min, no refetch │
│  gcTime = 10min:   Inactive cache kept for 10 min         │
└──────────────────────────────────────────────────────────┘
```

| Config | Default | Meaning |
| --- | --- | --- |
| `staleTime` | `0` (immediately stale) | How long data is considered "fresh". While fresh, no background refetch occurs. |
| `gcTime` (v5) / `cacheTime` (v4) | `5 minutes` | How long INACTIVE (unmounted) query data stays in cache before garbage collection. |

```tsx
// Your Bytup property listing — data changes occasionally
useQuery({
  queryKey: ["properties", filters],
  queryFn: () => fetchProperties(filters),
  staleTime: 2 * 60 * 1000,  // Fresh for 2 min — don't refetch within 2 min
  gcTime: 10 * 60 * 1000,    // Keep in cache 10 min after unmount
});

// User profile — rarely changes
useQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId),
  staleTime: 30 * 60 * 1000, // Fresh for 30 min
});

// Real-time notifications — always fresh
useQuery({
  queryKey: ["notifications"],
  queryFn: fetchNotifications,
  staleTime: 0,                // Always stale → refetch on every focus
  refetchInterval: 30 * 1000,  // Also poll every 30 seconds
});
```

---

#### 3. Mutations & Optimistic Updates

**Definition:**
Mutations are used for **creating, updating, or deleting data** (POST/PUT/PATCH/DELETE). Optimistic updates immediately update the UI before the server responds.

```tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

function PropertyActions({ propertyId }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/properties/${id}`),

    // OPTIMISTIC UPDATE — update UI immediately
    onMutate: async (id) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["properties"] });
      // Snapshot previous value
      const previousProperties = queryClient.getQueryData(["properties"]);
      // Optimistically remove from cache
      queryClient.setQueryData(["properties"], (old: Property[]) =>
        old.filter((p) => p.id !== id)
      );
      return { previousProperties }; // Context for rollback
    },

    // ROLLBACK on error
    onError: (err, id, context) => {
      queryClient.setQueryData(["properties"], context.previousProperties);
      toast.error("Failed to delete property");
    },

    // REFETCH after success to ensure server/client sync
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });

  return <button onClick={() => deleteMutation.mutate(propertyId)}>Delete</button>;
}
```

---

#### 4. Query Invalidation

**Definition:**
Invalidation marks cached queries as **stale**, triggering a background refetch. This is how you keep your UI in sync after mutations.

```tsx
const queryClient = useQueryClient();

// Invalidate one specific query
queryClient.invalidateQueries({ queryKey: ["properties"] });

// Invalidate all queries starting with "properties"
queryClient.invalidateQueries({ queryKey: ["properties"] }); // Matches ["properties"], ["properties", "123"], etc.

// Invalidate everything
queryClient.invalidateQueries();

// Real-world flow at Bytup:
// 1. Agent creates a new property listing
// 2. Mutation succeeds
// 3. Invalidate property list → triggers refetch → new listing appears in table
const createMutation = useMutation({
  mutationFn: createProperty,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["properties"] });
    queryClient.invalidateQueries({ queryKey: ["analytics"] }); // Update counts too
    toast.success("Property created!");
  },
});
```

---

### CSS / Tailwind CSS — In-Depth

---

#### 1. Flexbox vs Grid

**Definition:**
- **Flexbox** = **One-dimensional** layout (row OR column). Best for distributing items along a single axis.
- **Grid** = **Two-dimensional** layout (rows AND columns). Best for complex page layouts.

```css
/* FLEXBOX — navigation bar, card row, centering */
.navbar {
  display: flex;
  justify-content: space-between; /* Main axis (horizontal) */
  align-items: center;            /* Cross axis (vertical) */
  gap: 1rem;
}

/* GRID — dashboard layout, gallery, complex forms */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr 300px; /* Sidebar | Main | Panel */
  grid-template-rows: 60px 1fr 40px;      /* Header | Content | Footer */
  gap: 1rem;
  height: 100vh;
}
```

**When to use which:**
| Use Case | Flexbox | Grid |
| --- | --- | --- |
| Navbar | Yes | |
| Card row | Yes | |
| Centering content | Yes | |
| Full page layout | | Yes |
| Dashboard with sidebar | | Yes |
| Image gallery | | Yes |
| Form layout | | Yes |
| Items in a single line | Yes | |

**Tailwind equivalents:**
```html
<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">...</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">...</div>
<div class="grid grid-cols-[250px_1fr_300px] grid-rows-[60px_1fr_40px]">...</div>
```

---

#### 2. Responsive Design

**Definition:**
Responsive design ensures your UI **adapts to different screen sizes** (mobile, tablet, desktop). Tailwind uses a **mobile-first** approach.

**Mobile-first means:**
- Default styles apply to **mobile (smallest screens)**
- Use breakpoints to **add styles for larger screens**

```html
<!-- Mobile-first with Tailwind -->
<div class="
  grid grid-cols-1        /* Mobile: 1 column */
  md:grid-cols-2          /* Tablet (768px+): 2 columns */
  lg:grid-cols-3          /* Desktop (1024px+): 3 columns */
  xl:grid-cols-4          /* Large desktop (1280px+): 4 columns */
  gap-4
">
  {properties.map(p => <PropertyCard key={p.id} />)}
</div>
```

**Tailwind breakpoints:**
| Prefix | Min-width | Typical device |
| --- | --- | --- |
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large screens |

---

#### 3. Tailwind CSS — Pros, Cons & Custom Themes

**Definition:**
Tailwind CSS is a **utility-first CSS framework** that provides low-level utility classes to build designs directly in your HTML/JSX.

**Pros:**
- No context-switching between HTML and CSS files
- Consistent spacing, colors, typography via design tokens
- Smaller production bundle (purges unused CSS)
- Easy responsive design with breakpoint prefixes
- Great DX with IDE autocomplete

**Cons:**
- Long class strings in JSX (mitigate with component extraction)
- Learning curve for utility names
- Harder to override in third-party components

**Custom themes in `tailwind.config.js`:**
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          500: "#3b82f6",
          900: "#1e3a5f",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
};
// Usage: <div class="bg-brand-500 font-sans p-18">
```

---

#### 4. CSS Specificity

**Definition:**
Specificity determines **which CSS rule wins** when multiple rules target the same element. It's calculated as a weighted score.

```
Specificity hierarchy (highest to lowest):

1. !important                           → Overrides everything (avoid!)
2. Inline styles (style="...")           → (1,0,0,0)
3. IDs (#header)                        → (0,1,0,0)
4. Classes, attributes, pseudo-classes   → (0,0,1,0)
   (.card, [type="text"], :hover)
5. Elements, pseudo-elements             → (0,0,0,1)
   (div, h1, ::before)
```

```css
/* Specificity examples */
div { }                    /* (0,0,0,1) */
.card { }                  /* (0,0,1,0) — wins over div */
#header { }                /* (0,1,0,0) — wins over .card */
#header .nav .link { }     /* (0,1,2,0) */
div.card.active { }        /* (0,0,2,1) */
```

**Why this matters with Tailwind:** Tailwind classes all have the same specificity (single class = `0,0,1,0`), so the **last one in the CSS file wins**, not the last one in your class string. This is why `tailwind-merge` library exists — to resolve conflicts.

---

#### 5. CSS Methodologies — BEM & CSS Modules

**BEM (Block Element Modifier):**
```css
/* Block */       .property-card { }
/* Element */     .property-card__title { }
/* Modifier */    .property-card--featured { }
```

**CSS Modules — scoped CSS per component:**
```css
/* PropertyCard.module.css */
.card { background: white; }
.title { font-size: 1.2rem; }
```
```jsx
import styles from "./PropertyCard.module.css";
<div className={styles.card}>
  <h2 className={styles.title}>{property.title}</h2>
</div>
// Compiled: <div class="PropertyCard_card_x7a2f">
// Classes are automatically scoped — no naming collisions!
```

**What you use at Bytup:** Primarily Tailwind CSS (utility-first), occasionally CSS Modules for complex component-specific styles.

---

### Testing — In-Depth

---

#### 1. Jest

**Definition:**
Jest is a JavaScript **testing framework** by Meta. It provides test runner, assertion library, mocking, and code coverage — all in one.

**Core concepts:**
```js
// describe — group related tests
describe("PropertyCard", () => {
  // it/test — individual test case
  it("should display the property title", () => {
    render(<PropertyCard title="2BHK in Bengaluru" price={5000000} />);
    expect(screen.getByText("2BHK in Bengaluru")).toBeInTheDocument();
  });

  it("should format price correctly", () => {
    expect(formatPrice(5000000)).toBe("₹50,00,000");
  });
});

// Common matchers
expect(value).toBe(42);               // Strict equality (===)
expect(value).toEqual({ a: 1 });      // Deep equality (objects/arrays)
expect(value).toBeTruthy();            // Boolean truthiness
expect(value).toBeNull();
expect(array).toContain("item");
expect(fn).toThrow("error message");
expect(fn).toHaveBeenCalledWith(arg);
expect(fn).toHaveBeenCalledTimes(2);
```

**Mocking API calls:**
```js
// Mock a module
jest.mock("../api/properties", () => ({
  fetchProperties: jest.fn(),
}));

import { fetchProperties } from "../api/properties";

it("should load properties on mount", async () => {
  // Setup mock return value
  fetchProperties.mockResolvedValue([
    { id: "1", title: "2BHK Apartment" },
  ]);

  render(<PropertyList />);

  // Wait for async data to appear
  expect(await screen.findByText("2BHK Apartment")).toBeInTheDocument();
  expect(fetchProperties).toHaveBeenCalledTimes(1);
});

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [] }),
  })
);
```

**Snapshot testing:**
```js
it("should match snapshot", () => {
  const { container } = render(<PropertyCard title="Test" price={100} />);
  expect(container).toMatchSnapshot();
  // First run: creates a snapshot file
  // Next runs: compares against saved snapshot
  // Update snapshots: jest --updateSnapshot
});
// Use sparingly — snapshots break easily and don't test behavior
```

---

#### 2. React Testing Library (RTL)

**Definition:**
RTL encourages testing **from the user's perspective** — interact with components the way users do (clicking, typing, reading text), not testing implementation details.

**Core philosophy:** _"The more your tests resemble the way your software is used, the more confidence they give you."_

**Query priority (most preferred to least):**

| Priority | Query | Use When |
| --- | --- | --- |
| 1 (Best) | `getByRole` | Accessible elements — buttons, links, headings, textboxes |
| 2 | `getByLabelText` | Form inputs with labels |
| 3 | `getByPlaceholderText` | Inputs without visible labels |
| 4 | `getByText` | Non-interactive text content |
| 5 | `getByDisplayValue` | Current value of form elements |
| 6 (Last resort) | `getByTestId` | No accessible way to query (add `data-testid`) |

```jsx
// GOOD — tests like a user
it("should filter properties when user types in search", async () => {
  render(<PropertySearch />);

  const searchInput = screen.getByRole("textbox", { name: /search/i });
  await userEvent.type(searchInput, "Bengaluru");

  expect(screen.getByText("2BHK in Bengaluru")).toBeInTheDocument();
  expect(screen.queryByText("3BHK in Mumbai")).not.toBeInTheDocument();
});

// GOOD — testing form submission
it("should submit lead form with correct data", async () => {
  const onSubmit = jest.fn();
  render(<LeadForm onSubmit={onSubmit} />);

  await userEvent.type(screen.getByLabelText(/name/i), "Hemanth");
  await userEvent.type(screen.getByLabelText(/email/i), "hemanth@test.com");
  await userEvent.type(screen.getByLabelText(/phone/i), "9989191478");
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(onSubmit).toHaveBeenCalledWith({
    name: "Hemanth",
    email: "hemanth@test.com",
    phone: "9989191478",
  });
});

// BAD — testing implementation details
it("should set state correctly", () => {
  // DON'T test useState values directly
  // DON'T test internal function calls
  // DON'T test CSS class names
});
```

**Async queries:**
```jsx
// findBy — waits for element to appear (returns Promise)
const element = await screen.findByText("Property loaded");

// waitFor — wait for assertion to pass
await waitFor(() => {
  expect(screen.getByText("3 results found")).toBeInTheDocument();
});

// waitForElementToBeRemoved — wait for loading spinner to disappear
await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
```

---

#### 3. Playwright — E2E Testing

**Definition:**
Playwright is an **end-to-end testing framework** that tests your complete application in a real browser (Chromium, Firefox, WebKit). It simulates real user flows across multiple pages.

```ts
import { test, expect } from "@playwright/test";

test("admin can create a new property listing", async ({ page }) => {
  // Navigate and login
  await page.goto("/login");
  await page.getByLabel("Email").fill("admin@bytup.com");
  await page.getByLabel("Password").fill("password123");
  await page.getByRole("button", { name: "Login" }).click();

  // Navigate to property creation
  await page.getByRole("link", { name: "Properties" }).click();
  await page.getByRole("button", { name: "Add New" }).click();

  // Fill form
  await page.getByLabel("Title").fill("3BHK Villa in Bengaluru");
  await page.getByLabel("Price").fill("15000000");
  await page.getByLabel("City").selectOption("Bengaluru");

  // Submit and verify
  await page.getByRole("button", { name: "Create" }).click();
  await expect(page.getByText("Property created successfully")).toBeVisible();
  await expect(page.getByText("3BHK Villa in Bengaluru")).toBeVisible();
});

test("agent cannot access admin settings", async ({ page }) => {
  // Login as agent
  await loginAs(page, "agent@bytup.com");
  await page.goto("/admin/settings");
  await expect(page).toHaveURL("/unauthorized"); // Should redirect
});
```

**When to use E2E vs Unit/Integration:**
| | Unit (Jest) | Integration (RTL) | E2E (Playwright) |
| --- | --- | --- | --- |
| Speed | Fast (ms) | Medium (ms-s) | Slow (seconds) |
| Scope | Single function/component | Component with children | Full user flow |
| Cost | Cheap | Medium | Expensive |
| Confidence | Low | Medium | High |
| **Ratio** | Many | Some | Few |

**The Testing Trophy (Kent C. Dodds):**
```
        ╱╲
       ╱ E2E ╲         ← Few, critical user flows
      ╱────────╲
     ╱Integration╲     ← Most tests here (RTL)
    ╱──────────────╲
   ╱  Unit (Static)  ╲ ← TypeScript + ESLint catch these
  ╱────────────────────╲
```

---

#### 4. Code Coverage — What Matters More

**Definition:**
Code coverage measures **what percentage of your code is executed** during tests. Common metrics: lines, branches, functions, statements.

```bash
# Run Jest with coverage
npx jest --coverage

# Output:
# Statements: 85%  | Branches: 78%  | Functions: 90%  | Lines: 85%
```

**Good targets:**
- **80%+** overall coverage is a reasonable target
- **100% is NOT the goal** — it leads to brittle tests and false confidence

**What's MORE important than coverage:**
1. **Testing the right things** — critical user paths, edge cases, error states
2. **Test quality** — does the test actually catch bugs?
3. **Testing behavior, not implementation** — tests should survive refactoring
4. **Integration tests** — test components working together, not in isolation

```jsx
// HIGH coverage but LOW value
it("should render", () => {
  render(<PropertyCard property={mockProperty} />);
  // 100% line coverage, but catches zero bugs
});

// LOWER coverage but HIGH value
it("should show 'Sold' badge and disable contact button for sold properties", () => {
  render(<PropertyCard property={{ ...mockProperty, status: "sold" }} />);
  expect(screen.getByText("Sold")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /contact/i })).toBeDisabled();
});
```

---

## PHASE 4: SYSTEM DESIGN / ARCHITECTURE (10-15 mins)

> At the SDE-I / SDE-II level, interviewers don't expect you to design Twitter. They want to see that you can **think in components, understand data flow, and make reasonable trade-offs** for frontend systems.

---

### 1. "Design a dashboard component that handles multiple user roles"

**This is directly from your Bytup experience. Walk them through your actual architecture.**

**Step 1 — Define the roles and permissions:**
```ts
type Role = "admin" | "agent" | "viewer";

const PERMISSIONS: Record<Role, string[]> = {
  admin: ["view_analytics", "manage_users", "manage_properties", "manage_settings", "view_leads"],
  agent: ["view_own_properties", "manage_own_properties", "view_own_leads"],
  viewer: ["view_properties"],
};
```

**Step 2 — Auth hook for role checking:**
```tsx
function useAuth() {
  const user = useSelector((state: RootState) => state.auth.user);
  const hasPermission = (permission: string) =>
    PERMISSIONS[user.role]?.includes(permission) ?? false;
  return { user, role: user.role, hasPermission };
}
```

**Step 3 — Route protection with middleware (Next.js):**
```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const role = decodeToken(token)?.role;

  if (request.nextUrl.pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
}
```

**Step 4 — Conditional rendering in dashboard:**
```tsx
function Dashboard() {
  const { role, hasPermission } = useAuth();

  return (
    <DashboardLayout>
      {/* Everyone sees this */}
      <PropertyListings />

      {/* Only agents and admins */}
      {hasPermission("view_own_leads") && <LeadManagement />}

      {/* Admin only */}
      {hasPermission("view_analytics") && <AnalyticsDashboard />}
      {hasPermission("manage_users") && <UserManagement />}
    </DashboardLayout>
  );
}
```

**Step 5 — Component hierarchy diagram:**
```
App
├── AuthProvider (Context — stores user + role)
├── Layout
│   ├── Sidebar (links filtered by role)
│   ├── Header (user info, notifications)
│   └── Main Content
│       ├── /dashboard → <Dashboard /> (role-based widgets)
│       ├── /properties → <PropertyList /> (filtered by role)
│       ├── /leads → <LeadManagement /> (agent/admin only)
│       ├── /admin/users → <UserManagement /> (admin only)
│       └── /admin/settings → <AdminSettings /> (admin only)
```

**Key points to mention:**
- Permissions are centralized, not scattered across components
- Backend ALSO validates permissions (frontend is just UX, not security)
- Route-level protection (middleware) + component-level protection (hasPermission)

---

### 2. "How would you structure a large React application?"

**Two main approaches:**

**Feature-based (Recommended for large apps — what you likely use at Bytup):**
```
src/
├── features/
│   ├── properties/
│   │   ├── components/          # PropertyCard, PropertyForm, PropertyTable
│   │   ├── hooks/               # usePropertyData, usePropertyFilters
│   │   ├── api/                 # fetchProperties, createProperty
│   │   ├── store/               # propertySlice.ts
│   │   ├── types/               # Property, PropertyFilters
│   │   └── index.ts             # Public API — what this feature exports
│   ├── leads/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── api/
│   │   └── ...
│   ├── auth/
│   │   ├── components/          # LoginForm, ProtectedRoute
│   │   ├── hooks/               # useAuth, usePermissions
│   │   └── ...
│   └── analytics/
│       └── ...
├── shared/
│   ├── components/              # Button, Modal, Table, Toast (design system)
│   ├── hooks/                   # useDebounce, useWindowSize, useLocalStorage
│   ├── utils/                   # formatPrice, formatDate, cn()
│   ├── types/                   # ApiResponse<T>, PaginatedResponse<T>
│   └── constants/               # API_BASE_URL, ROLES, ROUTES
├── app/                         # Next.js App Router pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── properties/
│       └── [id]/page.tsx
├── store/                       # Redux store setup
│   └── index.ts
└── styles/
    └── globals.css
```

**Why feature-based is better:**
- Each feature is **self-contained** — easy to find all related code
- Can be worked on by **different team members** without merge conflicts
- Easy to **delete a feature** — just remove the folder
- Scales well as the app grows

**Layer-based (common in smaller apps):**
```
src/
├── components/       # ALL components mixed together
├── hooks/            # ALL hooks
├── api/              # ALL API calls
├── store/            # ALL Redux slices
└── utils/            # ALL utilities
```
Problem: As the app grows, each folder becomes a dumping ground with 50+ unrelated files.

---

### 3. "How would you build a real-time notification system on the frontend?"

**Three approaches — compare and pick:**

| Approach | How It Works | Latency | Complexity | Best For |
| --- | --- | --- | --- | --- |
| **Polling** | Client sends request every N seconds | High (N seconds) | Low | Simple alerts, low-frequency updates |
| **SSE (Server-Sent Events)** | Server pushes events over HTTP | Low | Medium | One-way server→client updates |
| **WebSockets** | Full duplex persistent connection | Very low | High | Chat, real-time collaboration, bidirectional |

**For notifications, SSE or WebSockets are best. Here's a WebSocket approach:**

```tsx
// hooks/useNotifications.ts
function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("wss://api.bytup.com/notifications");

    ws.onopen = () => console.log("Connected to notification server");

    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      setNotifications((prev) => [notification, ...prev]);
      setUnreadCount((prev) => prev + 1);

      // Show browser notification if tab is not focused
      if (document.hidden && Notification.permission === "granted") {
        new Notification(notification.title, { body: notification.message });
      }
    };

    ws.onclose = () => {
      // Reconnect after 3 seconds
      setTimeout(() => connectWebSocket(), 3000);
    };

    return () => ws.close(); // Cleanup on unmount
  }, []);

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
    api.patch(`/notifications/${id}/read`); // Sync with server
  };

  return { notifications, unreadCount, markAsRead };
}
```

**State management choice for notifications:**
- **Small app** → `useState` + Context (like above)
- **Large app with Redux** → Redux slice with `extraReducers` for WebSocket events
- **With TanStack Query** → Use `queryClient.setQueryData` to inject real-time data into cache

**Fallback strategy:**
- Primary: WebSocket for real-time
- Fallback: Polling every 30s if WebSocket fails
- Offline: Queue notifications in IndexedDB, sync when back online

---

### 4. "How would you handle authentication in a Next.js app?"

**Complete auth flow — step by step:**

```
┌─────────────────────────────────────────────────────────┐
│                     AUTH FLOW                             │
│                                                          │
│  1. User submits login form                              │
│  2. POST /api/auth/login → Server validates credentials  │
│  3. Server returns JWT + sets httpOnly cookie             │
│  4. Client stores user data in Redux/Context              │
│  5. Middleware checks cookie on every protected route     │
│  6. Token expires → Refresh token flow → New access token │
│  7. Refresh fails → Redirect to /login                   │
└─────────────────────────────────────────────────────────┘
```

**Step 1 — Login API route (Next.js):**
```tsx
// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await validateCredentials(email, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  const response = NextResponse.json({ user: { id: user.id, name: user.name, role: user.role } });

  // httpOnly cookies — NOT accessible via JavaScript (prevents XSS)
  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: true,       // HTTPS only
    sameSite: "lax",    // CSRF protection
    maxAge: 15 * 60,    // 15 minutes
    path: "/",
  });

  response.cookies.set("refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/api/auth",         // Only sent to auth endpoints
  });

  return response;
}
```

**Step 2 — Middleware for route protection:**
```tsx
// middleware.ts
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // Public routes — no auth needed
  const publicPaths = ["/login", "/register", "/forgot-password"];
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // No token → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

    // Role-based route protection
    if (request.nextUrl.pathname.startsWith("/admin") && payload.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    return NextResponse.next();
  } catch {
    // Token expired or invalid → try refresh or redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};
```

**Step 3 — Token refresh flow:**
```tsx
// utils/apiClient.ts
const apiClient = axios.create({ baseURL: "/api" });

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and haven't retried yet → try refreshing token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post("/api/auth/refresh"); // Sets new access_token cookie
        return apiClient(originalRequest);     // Retry original request
      } catch {
        window.location.href = "/login";       // Refresh failed → logout
      }
    }
    return Promise.reject(error);
  }
);
```

**Why httpOnly cookies over localStorage:**

| | httpOnly Cookie | localStorage |
| --- | --- | --- |
| XSS attack | Safe — JS can't access | Vulnerable — JS can read |
| CSRF attack | Needs sameSite/CSRF token | Not vulnerable |
| Sent automatically | Yes, with every request | No, must manually attach |
| **Verdict** | **Recommended for auth tokens** | OK for non-sensitive data |

---

## PHASE 5: BEHAVIORAL / SITUATIONAL QUESTIONS (10 mins)

> Behavioral questions assess **soft skills** — communication, teamwork, problem-solving under pressure. Use the **STAR method** for structured answers.

**STAR Method:**
```
S — Situation: Set the scene. Where were you? What was the context?
T — Task:      What was your responsibility or challenge?
A — Action:    What specifically did YOU do? (Use "I", not "we")
R — Result:    What was the measurable outcome?
```

---

### 1. "Tell me about a time you disagreed with a teammate."

**What they're assessing:** Conflict resolution, professionalism, ability to compromise.

**Sample STAR answer (adapt to your real experience):**

> **Situation:** At Bytup, while building the property listing page, our backend developer wanted to return all property data in a single large API response, while I preferred paginated responses with filters handled server-side.
>
> **Task:** I needed to convince the team that pagination was better for performance without creating friction.
>
> **Action:** Instead of just arguing my point, I built a quick prototype showing load times with 500+ properties — the single response took 4+ seconds on mobile. I shared the data in our standup and proposed a paginated API with cursor-based pagination. I also offered to handle the frontend pagination logic with TanStack Query's `useInfiniteQuery`.
>
> **Result:** The team agreed. We shipped paginated responses, and the page load time dropped to under 1 second. The backend developer appreciated the data-driven approach, and we continued collaborating well.

**Key tips:**
- Never say "I was right, they were wrong"
- Show that you **listened**, proposed a **solution with evidence**, and found a **win-win**

---

### 2. "Describe a time you missed a deadline."

**What they're assessing:** Accountability, honesty, learning from mistakes.

**Sample STAR answer:**

> **Situation:** During a sprint at Bytup, I was assigned to build the analytics dashboard for admins. I estimated it would take one sprint (2 weeks).
>
> **Task:** I needed to deliver the dashboard with charts, filters, and data export functionality.
>
> **Action:** I underestimated the complexity of the chart library integration and responsive design for different screen sizes. By mid-sprint, I realized I was behind. Instead of silently struggling, I raised it in our standup, explained where I was stuck, and proposed splitting the feature — deliver the core dashboard this sprint and add export + advanced filters in the next sprint.
>
> **Result:** The team agreed. We shipped the core dashboard on time, and the remaining features came in the next sprint. I learned to **break large features into smaller milestones** and to **flag blockers early** rather than waiting until the deadline.

**Key tips:**
- Never say "I've never missed a deadline" — sounds dishonest
- Show what you **learned** and how you **prevented it from happening again**

---

### 3. "How do you handle ambiguous requirements?"

**What they're assessing:** Independence, communication, initiative.

**Sample STAR answer:**

> **Situation:** I was tasked with building a "lead management" module at Bytup, but the product requirements were vague — just "agents should be able to manage their leads."
>
> **Task:** I needed to clarify what "manage" meant and what the UI should look like before writing code.
>
> **Action:** I took a three-step approach:
> 1. I researched 3-4 competitor platforms to see how they handle lead management
> 2. I created a simple wireframe in Figma showing a table view with status filters, and shared it with the PM
> 3. I listed specific questions: "Should agents see all leads or only their assigned ones? Do we need email notifications for new leads? What are the possible lead statuses?"
>
> **Result:** The PM clarified the scope, the designer refined my wireframe, and I had clear requirements within 2 days. The module shipped smoothly and became one of the most-used features for agents.

**Key tips:**
- Show that you **don't wait passively** — you research, propose, and ask smart questions
- Mention a specific process or framework you follow

---

### 4. "Tell me about a time you mentored someone."

**What they're assessing:** Leadership potential, communication, patience.

**Sample STAR answer:**

> **Situation:** A new intern joined Bytup and was assigned to work on the frontend with me. They had basic React knowledge but hadn't worked with Next.js, Redux Toolkit, or TanStack Query before.
>
> **Task:** Help them become productive within their first month while not slowing down my own deliverables.
>
> **Action:** I created a structured onboarding plan:
> 1. **Week 1:** Paired programming on small bug fixes to understand the codebase
> 2. **Week 2:** Assigned a self-contained feature (a static page) with detailed code review
> 3. **Week 3-4:** Gradually assigned more complex tasks with less hand-holding
> I also set up 15-minute daily check-ins and created a shared doc with links to useful resources, our code conventions, and common patterns in our codebase.
>
> **Result:** By the end of the first month, the intern was independently shipping small features. They mentioned in their feedback that the structured onboarding helped them ramp up much faster than expected.

---

### 5. "What's your biggest professional failure?"

**What they're assessing:** Self-awareness, growth mindset, honesty.

**Sample STAR answer:**

> **Situation:** Early in my time as an SDE-I, I was working on replacing repetitive HTML templates with JSON-driven dynamic rendering — a task I'd actually done during my internship. I was confident and didn't ask for code review before merging.
>
> **Task:** Refactor the property listing templates to be dynamic and maintainable.
>
> **Action:** I completed the refactor quickly and merged it. However, I missed an edge case where some property types had optional fields. The dynamic renderer didn't handle `null` values gracefully, causing blank sections to appear on production for about 6 hours before it was noticed.
>
> **Result:** I hotfixed it within 30 minutes of being notified. But the real lesson was: **confidence doesn't replace code review**. Since then, I always request code review regardless of how familiar I am with the code, and I write unit tests for edge cases before merging. I also added null-safe rendering as a default pattern in our component library.

**Key tips:**
- Pick a **real failure** but not something catastrophic
- Focus 70% on the **lesson learned** and **what you changed**

---

### 6. "How do you prioritize when you have multiple tasks?"

**What they're assessing:** Time management, decision-making, communication.

**Sample answer:**

> I use a simple framework:
> 1. **Urgency + Impact matrix** — Is this blocking someone else? Does it affect production? High-impact + urgent goes first.
> 2. **Check with stakeholders** — If two tasks seem equally important, I ask my manager or PM to help prioritize.
> 3. **Break into smaller chunks** — I break large tasks into 2-4 hour chunks so I can context-switch if needed.
> 4. **Communicate proactively** — If I realize I can't finish everything, I flag it early and negotiate deadlines rather than silently missing them.
>
> For example, at Bytup, during one sprint I had both a production bug fix and a new feature to deliver. I fixed the bug first (production impact), communicated to the PM that the feature would be delayed by a day, and then focused fully on the feature.

---

### 7. "Describe a time you went above and beyond."

**What they're assessing:** Initiative, ownership, passion.

**Sample STAR answer:**

> **Situation:** At Bytup, our property listing pages were not ranking well on Google despite having good content.
>
> **Task:** My primary task was just to build the listing pages, not to worry about SEO.
>
> **Action:** But I noticed the pages were client-side rendered (CSR), meaning Google's crawler wasn't indexing the content. On my own initiative, I:
> 1. Proposed converting listing pages from CSR to SSG with ISR (revalidation every 60 seconds)
> 2. Added dynamic metadata generation per property (title, description, Open Graph images)
> 3. Created a sitemap.xml and robots.txt
> 4. Added structured data (JSON-LD) for rich search results
>
> **Result:** Within 6 weeks, organic traffic to property listing pages increased significantly. My manager appreciated that I identified and solved a problem that wasn't even assigned to me. It also became a talking point in our quarterly review.

---

## PHASE 6: RELOCATION QUESTIONS — In-Depth

> These questions seem simple but can be deal-breakers. Having clear, prepared answers shows professionalism.

---

### 1. "Are you open to relocating?"

**Context:** You're from Andhra Pradesh but already working in Bengaluru at Bytup.

**Strong answer:**
> "Yes, absolutely. I've already relocated from Andhra Pradesh to Bengaluru for my current role, so I'm very comfortable with relocation. I'm open to [Bengaluru / Hyderabad / any metro city / wherever the role requires]. Could you tell me about the work location for this role?"

**If the role is in a city you're unsure about:**
> "I'm open to it. I'd love to know more about the office location and whether there's a relocation assistance policy. That would help me plan the transition smoothly."

**Things to clarify:**
- Is relocation assistance provided? (Moving expenses, temporary accommodation)
- How soon do they expect you to relocate?
- Is there a probation period you can work remotely during?

---

### 2. "Are you open to work from office / hybrid?"

**Know the common models:**
| Model | What It Means | Your Preparation |
| --- | --- | --- |
| **Full WFO** | 5 days in office | Must be ready to commit if accepting |
| **Hybrid** | 2-3 days office, rest remote | Most common — ask which days |
| **Remote-first** | Primarily remote, occasional office | Ideal for flexibility |
| **Full Remote** | 100% remote, no office | Less common in India for SDE roles |

**Strong answer:**
> "I'm comfortable with both office and hybrid setups. Currently at Bytup, I work [mention your current arrangement]. For me, what matters most is the team's productivity and collaboration. Could you share your current work-from-office policy?"

**What NOT to say:**
- Don't say "I only want remote" unless you're sure about it — it can be a dealbreaker
- Don't say "anything is fine" — it sounds like you haven't thought about it

---

### 3. "Do you have a notice period?"

**This is critical — companies often reject candidates with long notice periods.**

**Know these details before the interview:**
- Your exact notice period (check your offer letter — usually 30, 60, or 90 days)
- Whether it's negotiable (can your manager approve early release?)
- Whether you can buy out the notice period (some companies allow paying salary in lieu of notice)

**Strong answer (if 30 days):**
> "My current notice period is 30 days. I can start within a month of accepting the offer."

**Strong answer (if 60-90 days):**
> "My official notice period is 90 days, but I've spoken with my manager and I believe I can negotiate an early release. Realistically, I can join within 45-60 days. If you need someone sooner, I'm happy to discuss options."

**Strong answer (if you can be immediate):**
> "I can join within 15 days / immediately, as I'm [currently in my notice period / have already discussed with my manager]."

**Pro tip:** If you know you'll be job searching, start the conversation with your current manager early about a shorter notice period. Many companies prioritize candidates who can join sooner.

---

### 4. "When can you start?" / "What's your earliest joining date?"

**Calculate realistically:**
```
Offer acceptance date
+ Notice period (negotiated)
+ 3-5 days buffer (handover, relocation)
= Joining date
```

**Sample answer:**
> "Assuming I receive the offer by [date], I can serve my notice and join by [specific date]. I'll ensure a smooth handover at my current organization."

---

## PHASE 7: COMPENSATION NEGOTIATION — In-Depth

> This is where most candidates leave money on the table. Being prepared makes a huge difference.

---

### Understanding Your Compensation — Key Terms

```
┌────────────────────────────────────────────┐
│           TOTAL CTC (Cost to Company)       │
│                                            │
│  ┌──────────────────────────────────┐      │
│  │         FIXED COMPONENT          │      │
│  │                                  │      │
│  │  Basic Salary      → 40-50%     │      │
│  │  HRA               → 40-50% of  │      │
│  │                       basic      │      │
│  │  Special Allowance  → Variable   │      │
│  │  PF (Employer)      → 12% of    │      │
│  │                       basic      │      │
│  └──────────────────────────────────┘      │
│                                            │
│  ┌──────────────────────────────────┐      │
│  │       VARIABLE COMPONENT         │      │
│  │                                  │      │
│  │  Performance Bonus  → 10-20%    │      │
│  │  Joining Bonus      → One-time  │      │
│  │  ESOPs/RSUs         → Vesting   │      │
│  └──────────────────────────────────┘      │
│                                            │
│  ┌──────────────────────────────────┐      │
│  │         BENEFITS                  │      │
│  │                                  │      │
│  │  Insurance (Health, Life)        │      │
│  │  Gratuity                        │      │
│  │  Meal/Internet Allowance         │      │
│  │  Learning Budget                 │      │
│  └──────────────────────────────────┘      │
│                                            │
│  In-hand = Fixed - (PF + Tax deductions)   │
└────────────────────────────────────────────┘
```

**Key formula:**
```
CTC ≠ In-hand salary
In-hand (monthly) ≈ (CTC × 0.65 to 0.75) / 12
Example: 15 LPA CTC → ~₹80,000-95,000 in-hand per month
```

---

### 1. "What is your current CTC?"

**Why they ask:** To anchor their offer around your current salary.

**How to answer:**

**If your CTC is competitive:**
> "My current CTC is X LPA, with a fixed-to-variable split of approximately 85:15. My in-hand monthly salary is approximately ₹Y."

**If your CTC is lower than market:**
> "My current CTC is X LPA. However, I believe I'm underpaid for my skill level and the impact I've delivered — which is also one of my reasons for exploring new opportunities. Based on my research, the market rate for my experience and skill set is in the Y-Z LPA range."

**Important rules:**
- **Be honest** — they may verify via payslips, Form 16, or bank statements
- **Mention the full picture** — if you have variable pay, mention it separately
- **Don't inflate** — if caught, you'll be immediately rejected or offer rescinded

---

### 2. "What are your salary expectations?"

**Strategy: Deflect first, then give a range.**

**Step 1 — Try to get their range first:**
> "I'd love to understand the compensation band you've budgeted for this role. That way, I can share if we're in the same ballpark."

**Step 2 — If they insist on your number first:**
> "Based on my research and the scope of this role, I'm looking for a total compensation in the range of X to Y LPA. That said, I'm flexible — the right opportunity, growth potential, and team culture matter to me as well."

**Market rates for 3.5 years React/Next.js/TypeScript (India, 2025-2026):**

| Company Tier | CTC Range | Examples |
| --- | --- | --- |
| **Early-stage startups** | 8–14 LPA | Seed/Series A companies |
| **Funded startups** | 12–20 LPA | Series B/C companies |
| **Mid-size product** | 16–25 LPA | Razorpay, Swiggy, CRED, Zerodha |
| **Large product** | 20–35 LPA | Google, Microsoft, Amazon, Flipkart |
| **Service companies** | 8–16 LPA | TCS, Infosys, Wipro, Cognizant |

**How much hike to ask for:**
| Your Current CTC | Reasonable Hike | Stretch Hike |
| --- | --- | --- |
| Below market rate | 50-80% | 100%+ (correction) |
| At market rate | 30-40% | 50-60% |
| Above market rate | 15-25% | 30-40% |

---

### 3. "Why do you deserve a hike?"

**This is your pitch. Connect your value to numbers and impact.**

> "A few reasons:
>
> 1. **Growth trajectory** — I joined Bytup as an intern and grew to SDE-I within 10 months, which shows I ramp up quickly and take on increasing responsibility.
>
> 2. **End-to-end ownership** — I've independently built and shipped major features: role-based dashboards, lead management, property listings, admin tools, and analytics modules.
>
> 3. **Technical depth** — I work across the full frontend stack: React, Next.js, TypeScript, Redux Toolkit, TanStack Query, Jest, and Playwright. I don't just write UI code — I optimize performance, write tests, and implement SEO strategies.
>
> 4. **Measurable impact** — My SEO work with Next.js improved organic discoverability. My cache optimization with TanStack Query reduced unnecessary API calls. These directly impacted business metrics.
>
> 5. **Initiative beyond work** — I build side projects like PrepAce (AI-powered mock interviews) and maintain a personal blog, which shows I'm constantly learning and pushing myself."

---

### 4. Negotiation Scripts — Ready to Use

**When the offer is lower than expected:**
> "Thank you for the offer. I'm excited about the role and the team. The base compensation of X LPA is a bit below what I was expecting based on my market research and the scope of the role. Is there flexibility to bring it closer to Y LPA? I'm happy to discuss."

**When they say "this is our final offer":**
> "I understand. Would it be possible to bridge the gap through a signing bonus, additional stock options, or an earlier performance review (6 months instead of 12)?"

**When you have competing offers:**
> "I've received another offer at Y LPA from [company]. I'm more interested in joining your team because of [specific reason], but I want to make sure the compensation is competitive. Can we discuss?"

**When they ask "Is this offer acceptable?":**
> "I appreciate the offer. I'd like to take 24-48 hours to review the complete package and get back to you. Is that alright?"

---

### 5. Things to Negotiate Beyond Base Salary

| Component | How to Negotiate |
| --- | --- |
| **Signing/Joining Bonus** | "Can we add a one-time joining bonus to bridge the gap?" |
| **ESOPs/RSUs** | "Is there a stock option component? What's the vesting schedule?" |
| **Performance Bonus** | "Is the variable pay guaranteed in the first year?" |
| **Early Review** | "Can I have a performance review at 6 months instead of 12?" |
| **Learning Budget** | "Is there a conference or course reimbursement budget?" |
| **Remote/Flex Days** | "Would it be possible to have 1-2 remote days per week?" |
| **Relocation Assistance** | "Do you provide relocation support (temporary housing, moving expenses)?" |
| **Notice Period Buyout** | "My notice period is 90 days. Can the company do a notice period buyout?" |

---

## PHASE 8: YOUR QUESTIONS TO ASK THEM — In-Depth

> Asking smart questions shows genuine interest and helps YOU evaluate whether this company is right for you. Never say "I don't have any questions."

---

### Category 1: About the Team & Role

**"What does the team structure look like? How many frontend engineers?"**
- **Why ask:** Helps you understand if you'll be the only frontend person (more ownership but more pressure) or part of a team (more mentorship and code review)
- **Red flag:** "You'll be the only frontend engineer and we need you to also handle backend and DevOps" — you may be stretched too thin

**"Who will I report to? What's their management style?"**
- **Why ask:** Direct manager is the #1 factor in job satisfaction
- **Good sign:** "Your manager is a senior engineer who does 1:1s weekly and focuses on career growth"

**"What does a typical day/week look like for someone in this role?"**
- **Why ask:** Understand if it's meeting-heavy vs coding-heavy, how sprints work

---

### Category 2: About the Tech

**"What's the tech stack? Are you on Next.js App Router or Pages Router?"**
- **Why ask:** Shows you're thinking about whether your skills align and whether you'll be working with modern tools
- **Good sign:** Modern stack, recent upgrades, tech debt acknowledged and planned for

**"How do you handle code reviews and deployments?"**
- **Why ask:** Tells you about engineering culture — strict reviews = quality code, CI/CD = modern practices
- **Red flag:** "We just push to main" or "No code reviews, we trust our developers"

**"What's your testing strategy? Do you have CI/CD pipelines?"**
- **Why ask:** Shows you care about code quality (aligns with your Jest/RTL/Playwright experience)

---

### Category 3: About Growth

**"What does growth look like for this role in 1-2 years?"**
- **Why ask:** You're an SDE-I looking for SDE-II or Senior. Understand the promotion path.
- **Good sign:** Clear leveling framework with defined expectations per level
- **Red flag:** "We're a flat organization" (sometimes means no promotion path)

**"How do you support learning? Is there a conference or education budget?"**
- **Why ask:** Shows you're growth-oriented. Also a nice financial perk.

**"Are there opportunities to mentor junior engineers or lead small projects?"**
- **Why ask:** Shows leadership ambition without being pushy

---

### Category 4: About the Product & Culture

**"What's the biggest technical challenge the team is facing right now?"**
- **Why ask:** Shows you're already thinking about contributing. Also reveals if there's significant tech debt or scaling issues.
- **Bonus:** If you can relate it to your experience, say "That sounds interesting — at Bytup I worked on a similar challenge with [X]"

**"How does the team handle production incidents?"**
- **Why ask:** Tells you about on-call culture, incident response, and stress levels

**"What do you enjoy most about working here?"**
- **Why ask:** Personal question that builds rapport. Their enthusiasm (or lack of it) tells you a lot.

---

### Questions to AVOID Asking

| Don't Ask | Why |
| --- | --- |
| "What does your company do?" | Shows you didn't research |
| "How soon can I get promoted?" | Too aggressive too early |
| "Can I work fully remote from day one?" | Sounds like you're not committed (ask diplomatically instead) |
| "How many leaves do I get?" | Save for HR round, not technical/manager round |
| "When will I hear back?" | OK to ask but frame it as "What are the next steps in the process?" |

---

## PRE-INTERVIEW CHECKLIST

### 3 Days Before
- [ ] Research the company — product, funding, tech blog, Glassdoor reviews, LinkedIn
- [ ] Find your interviewer on LinkedIn — know their role, background, and interests
- [ ] Review the job description line by line — map each requirement to your experience
- [ ] Know your current CTC breakdown (fixed, variable, in-hand, benefits)
- [ ] Decide your target salary range (minimum acceptable + ideal)

### 1 Day Before
- [ ] Practice 2-3 STAR stories from your Bytup experience out loud
- [ ] Revise JS/TS fundamentals (closures, promises, event loop, this keyword)
- [ ] Revise React hooks lifecycle and rendering behavior
- [ ] Revise Next.js SSR/SSG/ISR concepts
- [ ] Review your projects — PrepAce, Finance Tracker, Blog Platform — be ready to demo
- [ ] Prepare 5+ questions to ask the interviewer

### Day Of
- [ ] Test your camera/mic/internet if video call
- [ ] Keep your resume open on screen for quick reference
- [ ] Have a glass of water, pen, and paper nearby
- [ ] Keep your laptop charger plugged in
- [ ] Join 2-3 minutes early
- [ ] Smile, make eye contact (look at the camera, not the screen)
- [ ] Speak slowly and clearly — pausing to think is better than rambling

### After the Interview
- [ ] Send a thank-you email within 24 hours
- [ ] Note down questions you were asked (helps with future interviews)
- [ ] Note down any follow-up items they mentioned
- [ ] If you don't hear back in the stated timeline, send a polite follow-up

---

> **Good luck, Hemanth!** Focus on being confident about what you've built at Bytup — your experience with role-based dashboards, SEO optimization, and state management with Redux Toolkit + TanStack Query are strong talking points. You've got this.
