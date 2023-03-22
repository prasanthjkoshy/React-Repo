# Makeover-Studio-App

## Description
Welcome to 'Makeover Studio' project! This is a Makeover Studio App made using React, typescript, Redux Toolkit ,Material UI which lists a whole variety of Makeup products retrieved from the makeup api url. It allows users to easily select their required make-up products by just using the search bar provided. With this App, users can effortlessly manage their requirements by entering which product they require and the retrieved data will be shown with the lowest priced item appearing first!

In thi project, you can find two main functionalities:

### Product Listing
This functionality includes retrieving data from the makeup api url ('http://makeup-api.herokuapp.com/api/v1/products.json') on page Load with lowest price items appearing at top. Initially a few products are loaded by default and on scrolling down, automatically more products will be loaded 8 at a time.

### Product Search
This Functionality includes a Search Bar Icon where the user can enter their favourite/required product name which will display only products based on the searched content.