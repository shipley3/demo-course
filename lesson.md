# Lesson Plan: "Pick Your Teacher" App

## Step 1: From Variables to Objects

**Objective**: Show how separate pieces of data (name, subject) can be grouped into one object.

```js
const teacherName = "Gad Allon;
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

## Step 3: Expanding to an Array + .map()

**Objective**: Create multiple cards with `.map()`

```js
const teachers = [
  { name: "Gad Allon", subject: "Business Management" },
  { name: "Laura Huang", subject: "Entrepreneurship" }
];

{teachers.map(teacher => (
  <TeacherCard teacher={teacher} />
))}
```

**Copilot Prompt**:

```js
// Map over teachers to show each as a card
```

---

## Step 4: Add a “Select” Button

**Objective**: Track and conditionally render selected teacher

```js
const [selected, setSelected] = useState("");

<button onClick={() => setSelected(teacher.name)}>
  {selected === teacher.name ? "Selected" : "Select"}
</button>
```

**Copilot Prompt**:

```js
// Add a button to select this teacher
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