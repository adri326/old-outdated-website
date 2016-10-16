# What is this?

This is a small project that I started some weeks ago, on my main website, to make me easier and quicker to create layouts and style.
I started by adding some basic features: spacers, title bar, background colors and a solid nav. Then it started to be great, and I added multiple style and color themes support.

Then I used this for my homeworks, and it was really helpful. I used this project to create a presentation and added by the way an plugin folder.

# How to use it?

First, load the codes to your project:

```
<link rel="stylesheet" href="https://adri326.github.io/loader.css" />
```

*You can optionally add this if you are using my JavaScript features:*

```
<noscript><link rel="stylesheet" href="https://adri326.github.io/noJS.css" /></noscript>
```

After this is set up, you will need to specify which theme you want to use:

```
<body class="theme color-theme">
	---your stuff---
</body>
```

There is only one available theme for now, which is **material-style**.
For the color-theme, you can choose between :
* white-color
* black-color

And now you can use your themes, you can create bars with important stuff, center text and justify it...

# Which features will be added?

I plan on adding more themes, a main-sub color scheme handling, so that you can modify the colors with just one word and a better header system

# Examples?


Of course!


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
      <div class="center">
          Your title
      </div>
      <div id="table-container">
        <table>
          <tbody>
            <tr>
              <td class="hoverAnimation">
                <a href="">
                  A link
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
