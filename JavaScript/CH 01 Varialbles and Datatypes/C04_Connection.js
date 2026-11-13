/*
=================================================
       CONNECTING JAVASCRIPT WITH HTML
=================================================


/ 1. INTERNAL JAVASCRIPT

/ Write JS inside the HTML file using <script>.

<body>

    <h1>Hello World</h1>

    <script>
        console.log("Hello JavaScript");
    </script>

</body>


/ 2. EXTERNAL JAVASCRIPT (RECOMMENDED)

/ Folder Structure:

project/
│
├── index.html
└── script.js


/ index.html

<!DOCTYPE html>
<html>
<head>
    <title>JS Connection</title>
    <script src="script.js" defer></script>
</head>
<body>

    <h1>Hello World</h1>

</body>
</html>


/ script.js

console.log("JavaScript Connected Successfully!");


/ IMPORTANT POINTS:

/ src       -> Specifies JavaScript file path.
/ defer     -> Executes JS after HTML parsing.
/ async     -> Executes JS as soon as downloaded.
/ script    -> HTML tag used to include JavaScript.

/ BEST PRACTICE:
/ Use external JS files with the defer attribute.

=================================================
*/