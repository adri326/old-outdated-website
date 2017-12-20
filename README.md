# What is this?

This is a small project that I started some weeks ago, on my main website, to make it easier and quicker for me to create layouts and websites.
I started by adding some basic features: spacers, title bar, background colors and a solid nav. Then it started to be great, and I added multiple style and color themes support.

Then I used this for my homeworks, and it was really helpful. I used this project to create a presentation and added by the way an plugin folder.

# How to use it?

## Importing

Use this piece of code to import the code in any of your html page; it'll have to be put inside of the `head` block:
```
<link rel="stylesheet" href="https://adri326.github.io/loader.css" />
```

*You can optionally add this if you are using my JavaScript features:*

```
<noscript><link rel="stylesheet" href="https://adri326.github.io/noJS.css" /></noscript>
```

After this is set up, you will need to specify which theme you want to use as classes on the `body` element:

```
<body class="theme color-theme">
	---your stuff---
</body>
```

There is only one available theme for now, which is **material-style**.
For the color-theme, you can choose between :
* white-color
* black-color

This setup will enable the styling that this project gives to you.

## Structure and usage

All the (main) content of the page will be put inside of a div, which `id` is `container`; the header has its own `header` element, with, as `id`, `header`.

```
<body class="material-style white-color">
	<header id="header">
		<!-- Header content: links, menus and title -->
	</header>
	<div id="content">
		<!-- The main content -->
	</div>
</body>
```

### Header usage

The title is put inside of a `div` element with the `title` class. You can also give it the `center` class to center the title.
To add links, simply add another `div` with the `links` class. Any element in it will be styled to become a link

The links feature also requires you to add some classes to the `header` element:

* `links-flat`, `links-buttons` or `links-flat-buttons` to specify the kind of links you will want to have (**required**)
* `animate-links` to show the background animation on the links (optional)

### Main content

There are a couple basic elements that makes up the content of your page:

* `bar`: A title-like bar, useful to separate two things and to add some color to your page. Exists in multiple sizes: `very-small-bar`, `small-bar`, `big-bar`. Supports background color
* `spacer`: An empty space, to keep things readable :) Exists in multiple sizes: `very-small-spacer`, `small-spacer`, `medium-spacer` (same as `spacer`)
* `paragraph`: can be mixed with `center`: used to put text in it (or lists)
* `center`: centers its content

To use them, simply specify one of the above type as a class of a `div`.
e.g: `<div class="small-bar">Hello</div>` displays a small bar with "*Hello*" written in it

### Coloring

To add background color to any element, simply add one of these classes to the element:

* `blueBG`
* `greenBG`
* `yellowBG`
* `orangeBG`
* `redBG`
* `purpleBG`
* `greyBG`

These can also be added to the `header` element to give it a color

# Which features will be added in the future?

More themes, of course

# Examples?


There you go:


```
<!DOCTYPE html>
<html>
  <head>
    <title>
      Your title
    </title>
    <link rel="stylesheet" href="https://adri326.github.com/loader.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:light,thin" />
    <style>
      body {
        font-family: "Roboto", sans-serif;
      }
    </style>
  </head>
  <body class="material-style white-color">
  	<header id="header" class="purpleBG links-buttons">
      <div class="center title">
          Your title
      </div>
      <div class="links">
        <a href="">
          A link
        </a>
      </div>
    </header>
    <div id="container">
    	<div class="spacer"></div>
    	<div class="medium-bar redBG thin">What a wonderful website!</div>
    	<div class="big-spacer"></div>
    	<div class="small-bar purpleBG light">I love it!</div>
    </div>
  </body>
</html>
```
