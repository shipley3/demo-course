# Lesson Plan: "Pick Your Teacher" App

## Step 1: From Variables to Objects

**Objective**: Show how separate pieces of data (name, subject) can be grouped into one object.

```js
const teacherName = "Gad Allon";
const teacherSubject = "Business Management";

// ➡️ Combine
const teacher = {
  name: "Gad Allon",
  subject: "Business Management"
};
```

**Prompt**: “Why might we group this information?”

---

## Step 2: Rendering a Single Teacher Card

**Objective**: Display one teacher visually.

```jsx
return (
  <div>
    <h2>{teacher.name}</h2>
    <p>{teacher.subject}</p>
  </div>
);
```

**Copilot Prompt**:

```js
// Display the teacher's name and subject in a card
```

---

## Step 3A: Inline Mapping with Basic HTML

**Objective**: Show multiple teachers using `.map()` without using a separate component.

```jsx
function App() {
  const teachers = [
    { name: "Gad Allon", subject: "Business Management" },
    { name: "Laura Huang", subject: "Entrepreneurship" }
  ];

  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.name} className="card">
          <h2>{teacher.name}</h2>
          <p>{teacher.subject}</p>
        </div>
      ))}
    </div>
  );
}
```

**Prompt**: “What if we want to repeat this pattern in multiple places?”

---

## Step 3B: Creating a Reusable Component

**Objective**: Refactor the repeated HTML into a reusable `TeacherCard` component.

### `TeacherCard.jsx`

```jsx
function TeacherCard({ teacher }) {
  return (
    <div className="card">
      <h2>{teacher.name}</h2>
      <p>{teacher.subject}</p>
    </div>
  );
}
```

### App Usage:

```jsx
{teachers.map((teacher) => (
  <TeacherCard key={teacher.name} teacher={teacher} />
))}
```

**Copilot Prompt**:

```js
// Create a reusable TeacherCard component with props
```

---

## Step 4: Add a “Select” Button

**Objective**: Track and conditionally render selected teacher

Update your `App` to hold selection state and pass it to the card:

```js
const [selected, setSelected] = useState("");

{teachers.map((teacher) => (
  <TeacherCard
    key={teacher.name}
    teacher={teacher}
    selected={selected}
    onSelect={setSelected}
  />
))}
```

Update your `TeacherCard` component to use the props:

```jsx
function TeacherCard({ teacher, selected, onSelect }) {
  const isSelected = selected === teacher.name;

  return (
    <div className={`card ${isSelected ? "selected" : ""}`}>
      <h2>{teacher.name}</h2>
      <p>{teacher.subject}</p>
      <button onClick={() => onSelect(teacher.name)}>
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
}
```

**Copilot Prompt**:

```js
// Add a button to select this teacher
// Highlight the selected teacher using props
```

---

## Step 5: Add Styling

**Objective**: Highlight selected card with CSS

**CSS**

```css
.card.selected {
  border: 2px solid green;
}
```

**JSX**

```jsx
<div className={`card ${selected === teacher.name ? "selected" : ""}`}>
```

**Copilot Prompt**:

```js
// Add a selected class to the selected teacher's card
```
