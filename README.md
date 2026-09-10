The page contains these main components:

Navbar

Alert

Carousel

Featured Products section

Product Cards

Tooltip

Footer

Note: The code contains a second navbar example inside an HTML
comment (<!-- ... -->). Because it is inside a comment, the browser
does not display it. It is an alternative/example navbar and is
explained separately near the end of this README.

2. Bootstrap Setup

The Bootstrap CSS file is included using:

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

This gives the HTML page access to Bootstrap's predefined CSS classes.

Bootstrap JavaScript is included near the end of the page:

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

The JavaScript bundle is required for interactive Bootstrap components
such as:

Navbar collapse

Dropdown

Carousel

Tooltip

3. Custom CSS Class

The project contains one custom CSS class:

.carousel-image {
    height: 500px;
}

.carousel-image

Purpose: Gives carousel images a fixed height of 500px.

Example:

<img class="d-block w-100 carousel-image">

Here, carousel-image is a class created by the developer, not a
Bootstrap class.

4. Navbar Component

The navbar is the top navigation area of the website.

<nav class="navbar navbar-expand-lg navbar-light bg-danger">

Classes used in the Navbar

.navbar

Purpose: Creates the basic Bootstrap navbar structure.

It provides the required Bootstrap styling and layout for a navigation
bar.

<nav class="navbar">

Think of it as:

"This element is a Bootstrap navigation bar."

.navbar-expand-lg

Purpose: Controls when the navbar changes between expanded and
collapsed forms.

lg means large breakpoint.

Behavior:

On small screens: navigation is collapsed and a hamburger button
appears.

On large screens and above: navigation is displayed normally.

<nav class="navbar navbar-expand-lg">

Simple meaning:

Expand the navbar at the large screen size.

.navbar-light

Purpose: Uses Bootstrap's light navbar color scheme.

It is intended for use with light-colored backgrounds.

In this project it is combined with:

bg-danger

The navbar therefore has a red background with the light navbar styling.

.bg-danger

Purpose: Gives the navbar a Bootstrap danger background color.

Bootstrap's danger color is commonly represented by red.

<nav class="bg-danger">

Simple meaning:

Give the background a red/danger color.

5. Navbar Container

<div class="container-fluid">

.container-fluid

Purpose: Makes the container use the full available width of the
screen.

Compared with .container:

.container → responsive maximum width

.container-fluid → nearly full width

The navbar uses .container-fluid so that the navigation can stretch
across the page.

6. Navbar Brand

<a class="navbar-brand" href="./home.html">ShopEase</a>

.navbar-brand

Purpose: Styles the website's brand name, logo, or main identity.

In this project:

ShopEase

is the brand.

Simple meaning:

The name/logo area of the website.

7. Navbar Toggler

<button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent">

.navbar-toggler

Purpose: Creates the hamburger/menu button that appears when the
navbar is collapsed on smaller screens.

It is normally used together with:

navbar-expand-lg

The button allows the user to open and close the hidden navigation menu.

8. Navbar Toggler Icon

<span class="navbar-toggler-icon"></span>

.navbar-toggler-icon

Purpose: Displays the hamburger-style navigation icon.

The icon looks similar to:

☰

Bootstrap provides the styling for this icon.

9. Navbar Collapse

<div class="collapse navbar-collapse" id="navbarSupportedContent">

Two Bootstrap classes are used here.

.collapse

Purpose: Makes the element capable of being shown or hidden.

In the navbar, the navigation links are hidden on smaller screens until
the toggler button is clicked.

.navbar-collapse

Purpose: Provides the appropriate Bootstrap layout for the
collapsible portion of a navbar.

It works together with:

collapse

and the navbar toggler.

10. Connection Between Toggler and Menu

The button contains:

data-bs-target="#navbarSupportedContent"

The menu contains:

id="navbarSupportedContent"

These two are connected.

How it works

Button
   |
   | data-bs-target="#navbarSupportedContent"
   ↓
Element with id="navbarSupportedContent"
   |
   ↓
Menu opens/closes

# means that Bootstrap is targeting an ID.

Important:

data-bs-target is an HTML data attribute, not a class.

navbarSupportedContent is an ID, not a class.

11. Navbar Navigation List

<ul class="navbar-nav me-auto mb-2 mb-lg-0">

.navbar-nav

Purpose: Styles the <ul> element as a Bootstrap navigation list.

It organizes the navigation items properly inside the navbar.

12. Navbar Spacing Classes

The navigation list contains:

me-auto mb-2 mb-lg-0

These are Bootstrap utility classes.

.me-auto

me means margin-end.

auto means the browser automatically uses the available space.

So:

me-auto

adds automatic margin at the end of the navigation list.

Simple meaning:

Push the navigation content toward the start/left side and use
available space at the end.

.mb-2

mb means margin-bottom.

2 is Bootstrap's spacing level.

So:

mb-2

means:

Add Bootstrap spacing level 2 below the element.

.mb-lg-0

This is responsive.

mb → margin-bottom

lg → large screens and above

0 → no margin

Therefore:

mb-lg-0

means:

At large screens and above, remove the bottom margin.

13. Navigation Item

<li class="nav-item">

.nav-item

Purpose: Represents one item in the navigation list.

For example:

<li class="nav-item">
    <a class="nav-link" href="./products.html">Products</a>
</li>

Here, the complete <li> is one navigation item.

14. Navigation Link

<a class="nav-link" href="./products.html">Products</a>

.nav-link

Purpose: Styles a link inside the Bootstrap navigation bar.

It gives the link the correct navbar appearance, spacing, and
interaction behavior.

Examples:

Products
Services
Items

15. Active Navigation Link

<a class="nav-link active" href="./products.html">Products</a>

Two classes are used:

nav-link
active

.active

Purpose: Indicates that the current/selected navigation item is
active.

In this project:

Products

is marked as active.

Simple meaning:

This is the currently selected navigation item.

16. Dropdown Component

The Categories/Items menu is a dropdown.

<li class="nav-item dropdown">

.dropdown

Purpose: Identifies the navigation item as a dropdown component.

It acts as the parent/container for:

Dropdown trigger

Dropdown menu

17. Dropdown Toggle

<a
    class="nav-link dropdown-toggle"
    href="#"
    id="navbarDropdown"
    role="button"
    data-bs-toggle="dropdown">
    items
</a>

Two classes are used.

.dropdown-toggle

Purpose: Makes the link act as the trigger for a dropdown.

Bootstrap also provides a visual dropdown arrow.

When the user clicks it, the dropdown menu opens.

.nav-link

The same element also has:

nav-link

This gives it the normal navbar link styling.

Therefore:

class="nav-link dropdown-toggle"

means:

Style this as a navbar link and make it a dropdown trigger.

18. Dropdown Menu

<ul class="dropdown-menu">

.dropdown-menu

Purpose: Creates the actual menu that appears when the dropdown is
opened.

For example:

Items
   ↓
+------------------+
| Action            |
| Another action    |
| ---------------- |
| Something else   |
+------------------+

The <ul> containing these options receives:

dropdown-menu

19. Dropdown Item

<a class="dropdown-item" href="./demo1.html">Action</a>

.dropdown-item

Purpose: Styles an individual option inside a dropdown menu.

For example:

Action
Another action
Something else here

Each one uses:

dropdown-item

20. Dropdown Divider

<hr class="dropdown-divider">

.dropdown-divider

Purpose: Adds a horizontal dividing line between dropdown options.

Example:

Action
Another action
----------------
Something else here

It helps visually separate groups of menu items.

21. Alert Component

<div class="alert alert-success text-center mt-5">
    🔥 Mega Sale - 50% Discount Available
</div>

The alert uses three Bootstrap classes.

.alert

Purpose: Creates the basic Bootstrap alert component.

It gives the element the standard alert structure and spacing.

.alert-success

Purpose: Applies the Bootstrap success color scheme.

It is normally associated with positive/successful messages and uses a
green-style appearance.

Here it is being used for:

Mega Sale - 50% Discount Available

Note that Bootstrap's contextual classes can be used for visual purposes
too; they do not force the message to literally be a success.

.text-center

Purpose: Centers the text horizontally.

Without it:

Mega Sale - 50% Discount Available

would normally be aligned according to the element's default text
alignment.

With:

text-center

the text appears in the center.

.mt-5

mt means margin-top.

5 is the Bootstrap spacing level.

Therefore:

mt-5

means:

Add a relatively large margin above the alert.

22. Carousel Component

The carousel code begins with:

<div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="1000">

.carousel

Purpose: Creates the main Bootstrap carousel component.

A carousel is a component that displays multiple items/images one after
another.

.slide

Purpose: Gives the carousel its sliding transition effect.

When one image changes to another, Bootstrap uses the slide animation.

23. Carousel Inner

<div class="carousel-inner">

.carousel-inner

Purpose: Acts as the container for all carousel slides.

The structure is:

carousel
   |
   └── carousel-inner
          |
          ├── carousel-item
          ├── carousel-item
          └── carousel-item

24. Carousel Item

<div class="carousel-item">

.carousel-item

Purpose: Represents one individual slide in the carousel.

For example:

<div class="carousel-item">
    <img src="./photos/hii.jpg">
</div>

Each image is placed inside its own carousel-item.

25. Active Carousel Item

One carousel item has:

class="carousel-item active"

.active

In a carousel, active identifies the slide that should be displayed
initially.

At least one carousel item needs to be active for the carousel to have
an initial slide.

In this project:

<div class="carousel-item active">

is the starting slide.

26. Carousel Image Classes

The images use:

class="d-block w-100 carousel-image"

There are three classes.

.d-block

d means display.

block means display the element as a block-level element.

So:

d-block

means:

Set the element's display property to block.

.w-100

w means width.

100 means 100%.

Therefore:

w-100

means:

Make the image 100% wide relative to its containing element.

.carousel-image

This is the project's custom CSS class.

.carousel-image {
    height: 500px;
}

It sets the image height to 500 pixels.

27. Carousel Data Attributes

The carousel also contains:

data-bs-ride="carousel"
data-bs-interval="1000"

These are not classes. They are Bootstrap data attributes.

data-bs-ride="carousel"

Tells Bootstrap to automatically start/ride the carousel.

In simple terms:

Start the carousel automatically.

data-bs-interval="1000"

Specifies the time between automatic slides.

1000 milliseconds = 1 second.

Therefore:

data-bs-interval="1000"

means:

Change the slide approximately every 1 second.

28. Featured Products Container

<div class="container mt-5">

Two classes are used.

.container

Purpose: Creates a responsive Bootstrap container.

It keeps the content centered and provides appropriate horizontal
spacing at different screen sizes.

.mt-5

Adds margin at the top.

Here it creates space between the carousel and the Featured Products
section.

29. Bootstrap Grid Row

<div class="row">

.row

Purpose: Creates a Bootstrap grid row.

Bootstrap's grid is based on 12 columns.

The product columns are placed inside this row.

Structure:

row
 |
 ├── product column
 ├── product column
 └── product column

30. Responsive Product Columns

Each product uses:

<div class="col-12 col-sm-6 col-md-4">

This is one of the most important Bootstrap classes in the project.

It controls how many products appear in each row depending on screen
size.

.col-12

Default/mobile:

12 / 12 columns

So one product takes the full row.

[ Product ]

.col-sm-6

At the sm breakpoint and above:

6 / 12 columns

So two products can fit in one row.

[ Product ][ Product ]

.col-md-4

At the md breakpoint and above:

4 / 12 columns

So three products can fit in one row.

[ Product ][ Product ][ Product ]

Overall behavior

Mobile:
[ Product ]
[ Product ]
[ Product ]

Small:
[ Product ][ Product ]
[ Product ]

Medium and above:
[ Product ][ Product ][ Product ]

31. Product Card

<div class="card">

or:

<div class="card product-card">

.card

Purpose: Creates a Bootstrap card component.

A card is a rectangular content box commonly used for:

Products

Services

Blog posts

User profiles

Other grouped information

.product-card

This is not a standard Bootstrap class in this code.

It is a custom class name.

However, no CSS rule for .product-card is currently provided in the
<style> section.

Therefore, at present, it does not add any visible styling.

It could later be used like:

.product-card {
    border-radius: 15px;
}

32. Card Image

<img
    src="https://picsum.photos/300"
    class="card-img-top"
    alt="no image">

.card-img-top

Purpose: Styles an image as the top image of a Bootstrap card.

It is conventionally placed before the card body:

+----------------------+
|       IMAGE          |
+----------------------+
|      Card Body       |
|      Content         |
+----------------------+

33. Card Body

<div class="card-body">

.card-body

Purpose: Provides the main content area inside a Bootstrap card.

It provides appropriate padding around:

Product name

Price

Buttons

Other content

34. Product Name

The product name is inside:

<h5>
    Smart Phone
</h5>

There is no Bootstrap class on this <h5> in the supplied code.

The same applies to:

<h5>Laptop</h5>
<h5>Headphone</h5>

Bootstrap can style normal HTML headings, but the code does not
explicitly use a Bootstrap heading utility/class here.

35. Price

<p class="price">
    ₹50000
</p>

.price

This is a custom class, not a standard Bootstrap class used by this
project.

There is currently no CSS rule such as:

.price {
    color: red;
}

Therefore, .price does not currently provide custom styling.

It could later be used to style product prices.

Example:

.price {
    font-weight: bold;
}

36. Bootstrap Button

<button class="btn btn-primary">
    Add Cart
</button>

Two classes are used.

.btn

Purpose: Provides the basic Bootstrap button styling.

It gives the button Bootstrap's standard:

Padding

Border

Font styling

Shape

Hover/focus behavior

.btn-primary

Purpose: Applies Bootstrap's primary button color scheme.

It is commonly used for the main action on a page.

In this project:

Add Cart

is the primary action.

37. Tooltip

The first Add Cart button contains:

<button
    class="btn btn-primary"
    data-bs-toggle="tooltip"
    title="Add this product">
    Add Cart
</button>

The Bootstrap classes are:

btn
btn-primary

The tooltip itself is activated through a data attribute.

data-bs-toggle="tooltip"

This is not a class.

It tells Bootstrap:

Treat this element as a tooltip trigger.

title="Add this product"

title is a normal HTML attribute.

It provides the text that the tooltip displays.

When the tooltip is properly initialized, hovering over the button can
show:

Add this product

38. Important Tooltip Note

In Bootstrap 5, tooltips generally require JavaScript initialization.

For example:

const tooltipTriggerList =
    document.querySelectorAll('[data-bs-toggle="tooltip"]');

[...tooltipTriggerList].map(
    tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
);

The Bootstrap JavaScript bundle provides the Tooltip component, but
a function such as showTooltip() would not automatically exist unless
the developer writes it.

39. Footer Component

<footer class="bg-dark text-white text-center p-3 mt-5">
    ShopEase © 2026
</footer>

The footer uses five Bootstrap classes.

.bg-dark

Purpose: Gives the footer a dark background.

.text-white

Purpose: Makes the text white.

This creates good contrast against the dark background.

.text-center

Purpose: Centers the footer text horizontally.

.p-3

p means padding.

3 is the Bootstrap spacing level.

Therefore:

p-3

means:

Add Bootstrap padding level 3 on all four sides.

.mt-5

mt means margin-top.

Therefore:

mt-5

adds space above the footer.

It separates the footer from the product section.

40. Complete Component Hierarchy

The page can be understood using this structure:

BODY
│
├── NAVBAR
│   │
│   ├── container-fluid
│   │
│   ├── navbar-brand
│   │
│   ├── navbar-toggler
│   │   └── navbar-toggler-icon
│   │
│   └── collapse navbar-collapse
│       │
│       └── navbar-nav
│           │
│           ├── nav-item
│           │   └── nav-link active
│           │
│           ├── nav-item
│           │   └── nav-link
│           │
│           └── nav-item dropdown
│               │
│               ├── nav-link dropdown-toggle
│               │
│               └── dropdown-menu
│                   ├── dropdown-item
│                   ├── dropdown-item
│                   ├── dropdown-divider
│                   └── dropdown-item
│
├── ALERT
│   ├── alert
│   ├── alert-success
│   ├── text-center
│   └── mt-5
│
├── CAROUSEL
│   │
│   ├── carousel
│   ├── slide
│   │
│   └── carousel-inner
│       │
│       ├── carousel-item
│       │   └── d-block w-100 carousel-image
│       │
│       ├── carousel-item
│       │   └── d-block w-100 carousel-image
│       │
│       └── carousel-item active
│           └── d-block w-100 carousel-image
│
├── FEATURED PRODUCTS
│   │
│   ├── container
│   │   └── mt-5
│   │
│   └── row
│       │
│       ├── col-12 col-sm-6 col-md-4
│       │   └── card
│       │       ├── card-img-top
│       │       └── card-body
│       │           ├── Product Name
│       │           ├── price
│       │           └── btn btn-primary
│       │
│       ├── col-12 col-sm-6 col-md-4
│       │   └── card product-card
│       │
│       └── col-12 col-sm-6 col-md-4
│           └── card product-card
│
└── FOOTER
    ├── bg-dark
    ├── text-white
    ├── text-center
    ├── p-3
    └── mt-5

41. Bootstrap Class Quick Reference

Class                   Meaning / Purpose

navbar                Creates Bootstrap navbar
navbar-expand-lg      Expands navbar at large screens and above
navbar-light          Light navbar color scheme
bg-danger             Danger/red background
container             Responsive centered container
container-fluid       Full-width responsive container
navbar-brand          Website brand/logo/name
navbar-toggler        Hamburger menu button
navbar-toggler-icon   Hamburger icon
collapse              Enables show/hide behavior
navbar-collapse       Styles collapsible navbar section
navbar-nav            Styles navigation list
nav-item              One navigation item
nav-link              Styles navigation link
active                Marks current/active item
dropdown              Creates dropdown parent
dropdown-toggle       Dropdown trigger
dropdown-menu         Dropdown menu container
dropdown-item         Individual dropdown option
dropdown-divider      Divider line in dropdown
me-auto               Automatic margin at the end
mb-2                  Bottom margin, spacing level 2
mb-lg-0               Removes bottom margin at large screens
alert                 Creates Bootstrap alert
alert-success         Success/green alert styling
text-center           Centers text
mt-5                  Top margin, spacing level 5
carousel              Creates carousel
slide                 Adds slide transition
carousel-inner        Container for carousel slides
carousel-item         One carousel slide
d-block               display: block
w-100                 Width 100%
active                Starting/current carousel slide
row                   Bootstrap grid row
col-12                Full 12-column width
col-sm-6              6-column width at small breakpoint and above
col-md-4              4-column width at medium breakpoint and above
card                  Creates Bootstrap card
card-img-top          Places/styles image at card top
card-body             Main card content area
btn                   Basic Bootstrap button
btn-primary           Primary button styling
bg-dark               Dark background
text-white            White text
p-3                   Padding, spacing level 3

42. Custom Classes in This Project

Not every class in the code comes from Bootstrap.

These are custom/project-specific classes:

Custom Class                        Current Purpose

carousel-image                    Sets carousel image height to 500px

product-card                      Currently has no CSS rule, so it
has no additional visual effect

For example:

.product-card {
    border: 2px solid black;
}

.price {
    font-weight: bold;
}

would give these custom classes an actual visual effect.

43. IDs and Attributes Used in the Project

IDs and attributes are different from classes.

id="navbarSupportedContent"

Identifies the collapsible navbar section.

It is connected to:

data-bs-target="#navbarSupportedContent"

id="navbarDropdown"

Identifies the dropdown trigger.

It is referenced by:

aria-labelledby="navbarDropdown"

id="carouselExampleControls"

Identifies the carousel.

The ID is useful for uniquely identifying the carousel element.

44. Bootstrap Data Attributes

These are not Bootstrap classes.

They provide instructions to Bootstrap JavaScript.

Attribute                                    Purpose

data-bs-toggle="collapse"                  Tells Bootstrap to control a
collapsible element

data-bs-target="#navbarSupportedContent"   Specifies which element should be
collapsed/expanded

data-bs-toggle="dropdown"                  Tells Bootstrap that the element
controls a dropdown

data-bs-ride="carousel"                    Starts the carousel automatically

data-bs-interval="1000"                    Sets the carousel interval to 1000
ms

data-bs-* means Bootstrap-specific HTML data attributes.

45. Accessibility Attributes

The code also contains:

aria-labelledby="navbarDropdown"

aria-* attributes are used for accessibility.

They provide additional information to assistive technologies such as
screen readers.

For example:

aria-labelledby="navbarDropdown"

helps identify which element labels the dropdown menu.

These attributes are not Bootstrap classes.

46. Why Is the Second Navbar Commented Out?

The code contains another navbar inside:

<!--
    second navbar code
-->

Anything inside an HTML comment is ignored by the browser.

Therefore:

<!-- <nav> ... </nav> -->

does not appear on the webpage.

The second navbar is useful as a classroom/reference example, but it is
redundant if the first navbar is already being used.

47. Difference Between the Two Navbar Examples

First navbar

Uses:

navbar navbar-expand-lg navbar-light bg-danger

So it has:

Light navbar styling

Red background

Full-width container

It also contains actual links such as:

ShopEase
Products
Services
items

Second navbar

Uses:

navbar navbar-expand-lg navbar-dark bg-dark

So it demonstrates:

Dark navbar styling

Dark background

Normal centered container

A different dropdown example

It is commented out, so it does not currently run.

48. Important HTML vs Bootstrap Distinction

Students should remember:

Bootstrap class

Example:

class="btn btn-primary"

btn and btn-primary are Bootstrap classes.

Custom class

Example:

class="price"

price is a class created by the developer.

ID

Example:

id="navbarSupportedContent"

This is an ID, not a class.

Data attribute

Example:

data-bs-toggle="collapse"

This is an HTML data attribute, not a class.

49. Page Flow

The final webpage can be understood in this order:

1. Navbar
      ↓
2. Sale Alert
      ↓
3. Image Carousel
      ↓
4. Featured Products Heading
      ↓
5. Product Cards
      ↓
6. Footer

This gives the page a simple e-commerce homepage structure.

50. Final Class Categories

For easy revision, the classes can be divided into groups.

Navbar Classes

navbar
navbar-expand-lg
navbar-light
bg-danger
container-fluid
navbar-brand
navbar-toggler
navbar-toggler-icon
collapse
navbar-collapse
navbar-nav
nav-item
nav-link
active
dropdown
dropdown-toggle
dropdown-menu
dropdown-item
dropdown-divider

Spacing Classes

me-auto
mb-2
mb-lg-0
mt-5
p-3

Alert Classes

alert
alert-success
text-center

Carousel Classes

carousel
slide
carousel-inner
carousel-item
active
d-block
w-100
carousel-image

Grid Classes

container
row
col-12
col-sm-6
col-md-4

Card Classes

card
card-img-top
card-body
product-card

Button Classes

btn
btn-primary

Footer Classes

bg-dark
text-white
text-center
p-3
mt-5

51. Important Teaching Summary

The most important idea for students is:

Bootstrap provides ready-made classes so we do not have to write all
CSS from scratch.

For example:

<button class="btn btn-primary">
    Add Cart
</button>

Instead of writing CSS manually for the button, Bootstrap already
provides the styling.

Similarly:

<div class="row">
    <div class="col-12 col-sm-6 col-md-4">

uses Bootstrap's grid system to make the layout responsive.

And:

<div class="alert alert-success">

quickly creates a styled alert.

Therefore, Bootstrap classes are mainly used to provide:

Layout

Responsive design

Colors

Spacing

Components

Typography

Interactive component styling

This project demonstrates these Bootstrap concepts together in a small
e-commerce webpage.
