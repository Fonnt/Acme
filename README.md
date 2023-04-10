# ACME

Web development assignment for Frontend Developer position.

## Project Description

- This project is about creating the interface for a fictitious client's website. It
is built with accesibility and progressive enhancement in mind. 
- Coded using React, aiming for an SPA experience.
- In a scenario where JS is disabled, the noscrip in the HTML file is loaded by the browser
and the website remains active and functional.
- A json file was created and filled with all the information that the webside was needing.
This file is imported to the different React components and then "mapped" in order to display that info. 
- If I had more time I would:
  - Simplify and split the CSS file. Create more generic classes and get rid of duplicated lines.
  - Create a hamburger menu for mobile version.
  - Implement more interactivity and visuals with JS and CSS.
  - Create even more subpages to display more content when navigating.
  - Do research: (Correct me if wrong) There are two copies of the same CSS file. 
  That is because React can't have access outsite src(root) folder. A possible solution 
  for only having one CSS that works with public and src, would be using Webpack to bundle CSS files.

## Requirements MVP

- The website must be responsive.
- The website should work in modern browsers and mobile phones. Users should be able 
to consume the content even in older browsers.
- The website should be built with accessibility in mind and work with screen readers and keyboards.

## Stretch goals

- Add one or two subpages to display navigation.
- The website should be built with progressive enhancement in mind - that is, the most 
important features should work in a scenario where JavaScript is disabled or not working for 
other reasons.
- Make sure the form on the page works to post. 
- Publish a working website to a hosting service.

## Built With

- HTML
- CSS
- JavaScript / React

## Getting Started

To get started, simply clone or download the repository and open the files in your preferred text editor.

## View it live

- https://acme-ab.netlify.app/

## Author

David Ballester - https://davidballester.dev
