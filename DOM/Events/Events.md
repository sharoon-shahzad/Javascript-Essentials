# JavaScript Events 📌

JavaScript Events are fundamental for creating dynamic and interactive web applications. This guide covers everything from basics to advanced concepts, ensuring both beginners and senior developers learn something new. 🚀



## 📌 Table of Contents

1. [What are JavaScript Events?](#what-are-javascript-events)
2. [Types of Events](#types-of-events)
3. [Event Listeners](#event-listeners)
4. [Event Object](#event-object)
5. [Event Propagation (Bubbling & Capturing)](#event-propagation-bubbling--capturing)
6. [Event Delegation](#event-delegation)
7. [Preventing Default Behavior](#preventing-default-behavior)
8. [Removing Event Listeners](#removing-event-listeners)
9. [Custom Events](#custom-events)
10. [Performance Optimization with Events](#performance-optimization-with-events)

---

## 🔹 What are JavaScript Events?

Events are actions that happen in the browser, triggered by users (clicks, scrolls, keypresses) or automatically (DOM loading, media playback). JavaScript allows us to listen for these events and execute functions in response.

---

## 🔹 Types of Events

Events can be classified into several categories:

- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`
- **Keyboard Events**: `keydown`, `keypress`, `keyup`
- **Form Events**: `submit`, `focus`, `blur`, `change`, `input`
- **Window Events**: `load`, `resize`, `scroll`
- **Clipboard Events**: `copy`, `cut`, `paste`
- **Media Events**: `play`, `pause`, `ended`, `volumechange`
- **Touch Events**: `touchstart`, `touchmove`, `touchend`

---

## 🔹 Event Listeners

The best way to handle events is by using `addEventListener`:

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

### ✅ Advantages of `addEventListener()`

- Allows multiple event handlers for the same event
- Supports capturing and bubbling phases
- Easily removable with `removeEventListener()`

---

## 🔹 Event Object

Every event handler gets an `event` object containing useful properties.

```javascript
document.addEventListener('click', function(event) {
    console.log(event.type);  // Event type (e.g., 'click')
    console.log(event.target); // Element that triggered the event
    console.log(event.clientX, event.clientY); // Mouse coordinates
});
```

---

## 🔹 Event Propagation (Bubbling & Capturing)

Events propagate through the DOM in two phases:

- **Capturing Phase**: Event moves from the root to the target element.
- **Bubbling Phase**: Event moves from the target element back to the root.

```javascript
document.getElementById('parent').addEventListener('click', () => console.log('Parent clicked'), true); // Capturing

document.getElementById('child').addEventListener('click', () => console.log('Child clicked')); // Bubbling
```

By default, event listeners work in the bubbling phase unless `true` is passed as the third argument to `addEventListener()`.

---

## 🔹 Event Delegation

Instead of adding event listeners to multiple elements, use **event delegation** to optimize performance.

```javascript
document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
    }
});
```

✅ **Why use event delegation?**

- Reduces memory consumption
- Handles dynamically added elements efficiently

---

## 🔹 Preventing Default Behavior

Some elements have default behaviors that we may want to prevent, such as form submission or link navigation.

```javascript
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented');
});
```

---

## 🔹 Removing Event Listeners

Removing event listeners can prevent memory leaks and improve performance.

```javascript
function handleClick() {
    console.log('Clicked');
}

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

⚠️ **Important:** `removeEventListener` requires the exact function reference used in `addEventListener`.

---

## 🔹 Custom Events

You can create and dispatch your own events using `CustomEvent`.

```javascript
const customEvent = new CustomEvent('myEvent', { detail: { message: 'Hello!' } });

document.addEventListener('myEvent', function(event) {
    console.log(event.detail.message);
});

document.dispatchEvent(customEvent);
```

---

## 🔹 Performance Optimization with Events

### ✅ Use Passive Event Listeners for Scroll & Touch Events

```javascript
document.addEventListener('touchmove', function(event) {
    console.log('Scrolling...');
}, { passive: true });
```

### ✅ Throttle or Debounce Events

For events like `scroll` and `resize`, use **throttling** or **debouncing** to prevent excessive function calls.

```javascript
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

window.addEventListener('resize', debounce(() => console.log('Resized!'), 500));
```

---

## 📚 Recommended Resources

- [MDN Web Docs: Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: Events](https://javascript.info/introduction-browser-events)
- [Eloquent JavaScript: Handling Events](https://eloquentjavascript.net/15_event.html)

---

🔔 **Star this repository** if you found this helpful! Happy coding! 🚀

