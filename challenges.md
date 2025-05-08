# Challenges

Extend your "Pick Your Teacher" app with five creative and technical bonus challenges. Each one builds practical skills in React while making your app more interactive and visually engaging.

---

## 🔤 Task 1: Add a Comment to a Teacher Card

**Goal**: Let users leave a comment for a selected teacher.

### Steps:

1. **Add Comment State**

```js
const [comments, setComments] = useState({});
```

2. **Show Input on Selection**

```jsx
{selected === teacher.name && (
  <input
    type="text"
    placeholder="Leave a comment"
    value={comments[teacher.name] || ""}
    onChange={(e) =>
      setComments({ ...comments, [teacher.name]: e.target.value })
    }
  />
)}
```

3. **Display Comment**

```jsx
{comments[teacher.name] && (
  <p className="comment">💬 {comments[teacher.name]}</p>
)}
```

4. **Optional Styling**

```css
.comment {
  font-style: italic;
  color: #444;
  margin-top: 0.5rem;
}
```

---

## ➕ Task 2: Add Your Own Teacher

**Goal**: Let users input a new teacher and add them to the app.

### Steps:

1. **Add State for Form Inputs and Teacher List**

```js
const [newName, setNewName] = useState("");
const [newSubject, setNewSubject] = useState("");
```

2. **Render Form to Add**

```jsx
<input placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
<input placeholder="Subject" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
<button onClick={() => {
  if (!newName || !newSubject) return;
  setTeachers([...teachers, { name: newName, subject: newSubject }]);
  setNewName("");
  setNewSubject("");
}}>Add Teacher</button>
```

---

## 📄 Task 3: Display Teachers on a Separate Page

**Goal**: Show the added teacher on a new view/page.

### Steps:

1. **Add Page State**

```js
const [page, setPage] = useState("home");
```

2. **Conditional Rendering Based on Page**

```jsx
{page === "home" ? (
  <HomePage />
) : (
  <TeacherListPage />
)}
```

3. **Add Navigation Buttons**

```jsx
<button onClick={() => setPage("teachers")}>View All Teachers</button>
<button onClick={() => setPage("home")}>Back to Home</button>
```

4. **Separate Component for TeacherListPage**
   Display the list of all teacher cards on its own page.

---

## 🎨 Task 4: Style Studio for Teacher Cards

**Goal**: Add custom color and emoji for each teacher.

### Steps:

1. **Update Teachers Array with Style Fields**

```js
const teachers = [
  { name: "Ms. Rivera", subject: "Math", color: "#FFD6D6", emoji: "📐" },
  { name: "Mr. Chen", subject: "History", color: "#D6F5FF", emoji: "📜" },
  { name: "Ms. Thompson", subject: "Science", color: "#D6FFD6", emoji: "🔬" },
];
```

2. **Apply Background Color & Emoji**

```jsx
<div className="card" style={{ backgroundColor: teacher.color }}>
  <h2>{teacher.emoji} {teacher.name}</h2>
  <p>{teacher.subject}</p>
</div>
```

---

## 🎨 Task 5: Color & Emoji Picker

**Goal**: Let users customize the appearance of a new teacher card during creation.

### Steps:

1. **Add Color & Emoji Inputs to the Form**

```jsx
<input type="color" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
<input placeholder="Emoji" value={newEmoji} onChange={(e) => setNewEmoji(e.target.value)} />
```

2. **Update the New Teacher Object**

```js
setTeachers([...teachers, {
  name: newName,
  subject: newSubject,
  color: newColor,
  emoji: newEmoji
}]);
```

3. **Add State Variables**

```js
const [newColor, setNewColor] = useState("#ffffff");
const [newEmoji, setNewEmoji] = useState("");
```

---