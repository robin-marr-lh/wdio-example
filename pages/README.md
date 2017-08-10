# Pages

This folder contains implementations of the [Page object pattern](http://webdriver.io/guide/testrunner/pageobjects.html) for loveholidays.com pages.

Each page inherits from the base class in `page.js` which offers some default methods for working with pages like `open` and `isCurrentPage`.

# Partials
The partials folder contains reusable representations of common UI elements found on multiple pages or in multiple places on a page such as the header that is shared throughout the site or a search results card that is displayed multiple times on a page.

Unlike pages, partials don't export a singleton because they should be able to be used multiple times within a page, this also enables them to take some initialization arguments. Partials should never be used outside of a page or another partial .
