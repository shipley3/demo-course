## Pre-Class Document #1: Setup Instructions

### 🚀 Getting Ready: VS Code, GitHub Copilot, and Your Files

#### 1. Install Visual Studio Code (VS Code)

* Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Click "Download for \[Your OS]"
* Follow the installation prompts

#### 2. Install Node.js

* Go to [https://nodejs.org/](https://nodejs.org/)
* Download the **LTS version** (Long Term Support)
* Install and restart your computer if needed

#### 3. Set Up GitHub Copilot

* Create a **GitHub Education account** using your Penn email:
    * Go to [https://education.github.com/](https://education.github.com/)
    * Click "Get benefits" and follow the instructions to verify your student status
* Once approved, you can access GitHub Copilot for free
* Install the **GitHub Copilot extension** in VS Code
* Sign in to VS Code with your GitHub Education account
* Ensure GitHub Copilot is enabled (check the bottom bar of VS Code)

#### 4. Download the Project Files

* You will receive a link to download a `.zip` file with the project
* Unzip the folder and open it in VS Code:

  * VS Code > File > Open Folder > Select unzipped folder

#### 5. Run the App

In your terminal inside VS Code:

```bash
npm install
npm run dev
```

Then open your browser and go to: `http://localhost:5173`

---

## Pre-Class Document #2: Quick React Dictionary

### 🧠 Key Terms to Know

| Term       | Definition                                                              |
| ---------- | ----------------------------------------------------------------------- |
| JSX        | HTML-like code inside JavaScript — used to build UI elements in React   |
| Component  | A reusable piece of UI — like a custom tag (`<App />`)                  |
| Prop       | A value you pass to a component to customize it                         |
| State      | Data that changes — React watches it and updates the UI                 |
| useState   | React function that creates a piece of state inside a component         |
| map()      | A function to loop through arrays and render elements                   |
| const      | Declares a variable you won’t reassign (preferred in React)             |
| Vite       | A tool that runs your app and bundles it for the browser                |
| Bundle     | A compressed, combined version of all your files ready for browsers     |
| Dev Server | Runs locally so you can test your app in the browser during development |

---

## Pre-Class Document #3: How React Files Flow

### 🗂️ File Structure and Flow

```
my-app-folder/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── (your components like TeacherCard.jsx)
```

### 🔁 The Flow:

1. **index.html** — A static HTML file with a single `<div id="root">`
2. **main.jsx** — JavaScript starts here. It tells React to take over the `#root` div.

```js
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

3. **App.jsx** — This is your first component. It returns the JSX layout of your app.

### 🔄 Summary

```html
index.html ➝ main.jsx ➝ App.jsx ➝ Your components
```

* Your app begins in HTML, but the moment JS loads, React takes over the screen.
* From `App.jsx`, you can import and use smaller components to build your UI.
