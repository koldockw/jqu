# Defense guide: Manyakina Yuliya

## What I worked on
I worked on the About and Contact pages, page text and simple jQuery interactions. I also helped with the home page animation and the interface for notifications and copying links.

## About page: js/about.js
- `$(document).ready(function(){...})`: waits until the HTML page is loaded.
- `$('#more').hide()`: hides the extra paragraph at the beginning.
- `$('#read-more').on('click',function(){...})`: runs the function when the button is clicked.
- `$('#more').slideToggle()`: smoothly opens or closes the hidden text.
- `$(this).text(...)`: changes the button label from Read more to Show less and back.

## Home page: js/home.js
- `let value=0`: starts the counter at zero.
- `setInterval(function(){...},25)`: repeats the function every 25 milliseconds.
- `value+=5`: adds five on each step.
- `$('#counter').text(value+'+')`: shows the current number on the page.
- `if(value>=100)clearInterval(timer)`: stops the counter at 100.
- `$('#welcome').hide().fadeIn(900)`: makes the welcome text appear smoothly in 900 milliseconds.

## Simple interface: js/common.js
- `$('.copy-link').on('click',...)`: listens for a click on Copy page link.
- `navigator.clipboard.writeText(window.location.href)`: copies the current page address.
- `showToast('Link copied!')`: shows a temporary message.
- `$('#toast').text(message).fadeIn(200).delay(1800).fadeOut(400)`: sets the message, shows it, waits and hides it.
- The scroll-progress calculation in this shared file was implemented by Bakdaulet.

## Contact page
- HTML `form` contains fields for name, email and message.
- `required` means the browser checks that a field is filled in.
- `type="email"` asks the browser to check the email format.
- The form-loading script in `js/contact.js` was implemented by Bakdaulet.
- This is a demo: no email is actually sent.

## Questions and short answers
**What is jQuery?** A JavaScript library that makes selecting elements, events and animations easier.

**What does `$` mean?** It is the jQuery function used to select HTML elements.

**What is `#more`?** The CSS ID selector for the element with `id="more"`.

**What does `.on('click')` do?** It runs a function when a user clicks an element.

**What is `slideToggle()`?** It shows or hides content with a sliding animation.

**What is `fadeIn()`?** It gradually makes a hidden element visible.

**Why use `clearInterval()`?** To stop the counter when it reaches 100.

**What is the difference between HTML, CSS and JS?** HTML is structure, CSS is design, JS is behavior.

**Does the contact form send messages?** No. It simulates a successful submission for a frontend assignment.

## 40-second defense speech (English B1)
Hello, my name is Yuliya. Our project is ESSENCE, a perfume store website. We created four pages: Home, Perfumes, About and Contact. I worked on the About and Contact pages and simple jQuery effects. On the About page, I used slideToggle to show and hide extra text. On the Home page, we use a counter and fadeIn animation. I also helped with the copy link button and notifications. jQuery helps us make the website interactive with short and simple code. Thank you.
