#navbar classes

navbar:- 	            Creates a navigation bar
navbar-expand-lg:-	    Shows/expands the navbar menu on large screens
navbar-light:-	        Gives the navbar a light theme/style
bg-danger:-	            Gives the element a red background
container-fluid:-	    Makes a container use almost the full screen width
navbar-brand:-	        Used for the website name or logo
navbar-toggler:-	    Creates the ☰ menu button for small screens
navbar-toggler-icon:-	Creates the ☰ hamburger icon
collapse:-	        Allows an element to be hidden/shown
navbar-collapse:-	The hide/show part of the navbar
navbar-nav:-	    Creates/stylizes the navbar menu/list
me-auto:-	        Automatically uses extra space at the end
mb-2:-	            Adds small bottom margin
mb-lg-0:-	        Removes bottom margin on large screens
nav-item:-	        Represents one item in the navbar
nav-link:-	        Styles a link as a navbar link
active:-	        Shows that the link is currently selected
dropdown:-	        Creates a dropdown area
dropdown-toggle:-	Allows the dropdown to open/close
dropdown-menu:-	    Creates the dropdown box/menu
dropdown-item:-	    Creates one option inside the dropdown
dropdown-divider:-	Creates a separating line in the dropdown



Quick meanings of important words

Navbar:-	 Navigation bar
Navigation:- Moving between pages/sections
Toggle:-	 Switch between two states, like open/close
Collapse:-	 Hide/show or close/open
Dropdown:-	 A menu that appears when clicked
Active:-	 Currently selected
Container:-	 A box/area that holds content
Fluid:-	     Able to expand according to available space
Margin:-	 Space outside an element
Divider:-	 A line that separates things
Brand:- 	 Website/company name or logo


<button>
     │
     │ navbar-toggler
     ↓
  Make this a navbar menu button
     │
     │ data-bs-toggle="collapse"
     ↓
  Tell Bootstrap to show/hide something
     │
     │ data-bs-target="#navbarSupportedContent"
     ↓
  Tell Bootstrap WHAT to show/hide
     │
     ↓
       <div id="navbarSupportedContent">
     │
     ↓
  Navbar menu