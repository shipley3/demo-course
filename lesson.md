# Lesson Plan: "Pick Your Teacher" App

## Step 3B: Creating a Reusable Component

**Objective**: Refactor the repeated HTML into a reusable `TeacherCard` component.

### `TeacherCard.jsx`

```jsx
import React from "react";

function TeacherCard({ teacher }) {
  return (
    <div className="card">
      <h2>{teacher.name}</h2>
      <p>{teacher.subject}</p>
    </div>
  );
}

export default TeacherCard;
```

### App Usage:

```jsx
import React from "react";
import TeacherCard from "./TeacherCard";

{teachers.map((teacher) => (
  <TeacherCard key={teacher.name} teacher={teacher} />
))}
```

**Copilot Prompt**:

```js
// Create a reusable TeacherCard component with props
```

---
