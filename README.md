# AvatarMaker.js

Library for adding an Avatar Generator into your application. 

## Landing Page 

https://glacial-hollows-21399.herokuapp.com/home.html

## Documentation

https://glacial-hollows-21399.herokuapp.com/documentation.html

## Getting Started

1. Download the stylesheet and JavaScript for the library from [here](https://github.com/csc309-winter-2022/js-library-fazilnur/blob/main/pub/AvatarMaker.zip)

2. Include JQuery

```
<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

3. Link the CSS stylesheet for the library 

```
<link rel="stylesheet" type="text/css" href="AvatarMaker.css">
```

4. Include the JavaScript file for the library. 
```
<script defer type="text/javascript" src="./js/AvatarMaker.js"></script>
```

5. Create a div element in your body. Give it an id. This is where the generator will go. For example: 
```
<div id="generator-container"></div>
```

6. Create a new JavaScript file and include it in your HTML. Place it after you import the library. For example: 
```
<script defer type="text/javascript" src="./js/documentation.js"></script>
```

7. In the JavaScript file, instantiate the library and call createGenerator(). The generator should appear on the page. 

```
const avatar = new AvatarMaker()
avatar.createGenerator("#generator-container")
```