font-family: 'Be Vietnam Pro', sans-serif;# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

Bright Red: hsl(12, 88%, 59%)
Dark Blue: hsl(228, 39%, 23%)

### Neutral

Dark Grayish Blue: hsl(227, 12%, 61%)
Very Dark Blue: hsl(233, 12%, 13%)
Very Pale Red: hsl(13, 100%, 96%)
Vary Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px
<!-- #f25f3a -->
### Font

- Family: [Be Vietnam](https://fonts.google.com/specimen/Be+Vietnam)
- Weights: 400, 500, 700

## Icons

For the social icons, you can use the icons provided or a font icon library. Some suggestions for font icon libraries can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

 const randomNumber = Math.floor(Math.random()*datas.length)
    let img = datas[randomNumber].img
    let name = datas[randomNumber].name
    let feedback = datas[randomNumber].feedback

    feedBox.innerHTML = 
    ` 
        <div class="feedback">
            <img src=${img} alt="">
            <h3>${name}</h3>
            <p>${feedback}</p>
        </div>
    `