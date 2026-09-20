This project is a E-Commerce UI test automation.
The goal is to build simple and readable automated tests using Playwright with TypeScript, following the Page Object Model (POM) structure. Write the code like a beginner type coder. DO NOT COMMENT.

Please adhere to the following guidelines when developing your automation project.
✅ Project Setup
● Initialize a new project with a Playwright testing framework
● Set up Git and create a .gitignore file
● Push the repository to the remote server
● Create a README.md file with setup and execution instructions
✅ Test Design & Structure
● Keep all test cases independent for easy execution
● Use global setup for authorization
● Store confidential data as system environment variables
● Create helper files for reusable functions and utilities
● Implement the Page Object Model (POM) design pattern
● Maintain separate configuration files for Test, Staging, and Production
● Use CSV files for external test data
* DO not 
✅ Execution & Environment
● Enable execution on multiple browsers
● Execute tests via terminal commands
✅ Quality & Best Practices
● Follow coding best practices
● Capture screenshots and videos after test execution
✅ Reporting
● Generate detailed HTML reports 4

Please create an automation project using Playwright with TypeScript, including the following test scenarios.


Scenario 1: User Registration Test
Steps:
1. Launch browser
a. Open URL: http://automationexercise.com
b. Verify that the home page is visible successfully
2. Go to the registration page
a. Click on the 'Signup / Login' button
b. Verify 'New User Signup!' is visible
c. Enter name and email address
d. Click the 'Signup' button
3. Fill in the registration details
a. Title, Name, Email, Password, Date of birth
b. Select the checkbox 'Sign up for our newsletter!'
c. Select the checkbox 'Receive special offers from our partners!'
4. Fill in the Address details
a. First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
b. Example: [Company: Brainstation23, Address: Financial Center 8 Stone Street, Country: United States, State: New York, City: New York City, Zipcode: 10006, Mobile: 7019976600]
5. Submit and validate account creation
a. Click on the 'Create Account' button
b. Verify that 'ACCOUNT CREATED!' is visible
c. Click on the 'Continue' button
d. Verify that 'Logged in as {username}' is visible

Scenario 2: Search Product Test
Note: Save all table data in a CSV file, then use it to create parameterized test cases.

title                                    price
Printed Off Shoulder Top - White        Rs. 315
Grunt Blue Slim Fit Jeans               Rs. 1400
Stylish Dress                           Rs. 1500
Frozen Tops For Kids                    Rs. 278
Sleeves Top and Short - Blue & Pink     Rs. 478

Steps:
1. Launch browser
a. Open URL: http://automationexercise.com
b. Verify that the home page is visible successfully
2. Go to product page
a. Click on the 'Products' button
b. Verify the user is navigated to ALL PRODUCTS page successfully
3. Search product:
a. Enter the product {title} in the search field
b. Click on the search button
c. Click on the 'View Product'
d. Verify that the correct product {title} is displayed
e. Verify that the correct product {price} is displayed

Scenario 3: Shopping Cart Functionality Test

Steps:
1. Navigate browser
a. Open http://automationexercise.com
b. Click on the 'Signup / Login' button
c. Log in with credentials:
i. Email: faizulcse@yopmail.com 2
ii. Password: Pass@1234
2. Add product to cart
a. Click on the 'Products' to view all the product details
b. Search product 'Premium Polo T-Shirts'
c. Click on the search button
d. Click on the 'View Product' button
e. Set Quantity to 2
f. Click on 'Add to cart'
g. Verify success modal message: 'Your product has been added to cart.'
h. Click on the 'Continue Shopping'
3. Complete checkout
a. Click on 'Cart' button
b. Click on 'Proceed to checkout'
c. Click on 'Place Order'
d. Click 'Proceed To Checkout' button
e. Verify 'Address Details' and 'Review Your Order'
f. Enter description in the comment text area and click 'Place Order'
4. Enter payment details:
a. Name on Card, Card Number, CVC, Expiration date
b. Example: [Card Name: Paypal, Card number: 4242424242424242, CVC:123, Expiration date: Any future date]
c. Click 'Pay and Confirm Order' button
d. Verify the success message 'Congratulations! Your order has been confirmed!
e. Click the 'Download Invoice' button and verify invoice is downloaded successfully.'
