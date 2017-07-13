# BYU Feature Card

This component is meant to be used to feature a single piece of content (i.e. news story, calendar event, etc.).

# How It Works

In `<head><style>`:

```css
byu-feature-card.myNavyCard {
  --byu-feature-card-title-background: pink;
  --byu-feature-card-title-color: yellow;
}
```
These are option CSS attributes. If you don't specify them, it will default to `white` text with an `#002E5D` background.

In `<body>`:

```html
<byu-feature-card>
  <h2 slot="title">Feature</h2>
  <img slot="feature-left" src="#">
  <ul slot="feature-right">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  <p slot="body">This is where body content goes</p>
</byu-feature-card>
```
The card is divided into three rows: the title row, feature row, and body row. To put elements in the title or body row, set the slot attribute of an element to be `title` or `body`. The feature row can be divided into two sections. To place an element, either add `slot="feature-left"` or `slot="feature-right"` to the element. After forking this repo, you can see a live demo of the component by running the appropriate command from below.

# Development

To contribute to this repository, fork it, make your changes, then submit a pull request. More information about contributing to web components can be found on the [byu-theme-components wiki](https://github.com/byuweb/byu-theme-components/wiki/Contributing-to-this-Repository).

After forking this repository, you'll need to run the following command in the project folder:

```
npm install
```

To run a local development server with a file watch, run

```
npm start
```

To assemble the final distribution bundle, run

```
npm run build
```
You should do this before you submit a pull request.

To run automatic unit tests, run

```
npm test
```

## To Be Developed

- Full width feature slot
