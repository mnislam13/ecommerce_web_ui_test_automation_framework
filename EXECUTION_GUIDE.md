# Test Execution Instructions

## Prerequisites
1. Node.js (version 18 or higher)
2. npm package manager
3. Git for version control

## Installation Steps
1. Clone the repository
2. Navigate to project directory
3. Run `npm install`
4. Run `npx playwright install` to install browsers

## Project Structure
```
ecommerce_web_ui_test_automation_framework/
├── tests/                          # Test specification files
│   ├── user-registration.spec.ts   # Registration test (all browsers)
│   ├── user-registration-chrome.spec.ts # Chrome-specific registration
│   ├── product-search.spec.ts      # Product search test (all browsers) 
│   ├── product-search-single.spec.ts # Chrome-specific product search
│   ├── shopping-cart.spec.ts       # Shopping cart test (all browsers)
│   └── shopping-cart-simple.spec.ts # Chrome-specific shopping cart
├── pages/                          # Page Object Model classes
│   ├── home-page.ts
│   ├── signup-login-page.ts
│   ├── account-information-page.ts
│   ├── account-created-page.ts
│   ├── dashboard-page.ts
│   ├── products-page.ts
│   ├── product-details-page.ts
│   ├── login-page.ts
│   ├── cart-page.ts
│   ├── checkout-page.ts
│   └── payment-page.ts
├── utils/                          # Helper utilities
│   ├── data-helper.ts              # CSV data handling
│   └── common-helpers.ts           # Common functions
├── config/                         # Environment configurations
│   ├── test.config.ts
│   ├── staging.config.ts
│   └── production.config.ts
├── fixtures/                       # Test fixtures
│   ├── environment.ts
│   └── test-fixtures.ts
├── data/                          # Test data files
│   ├── testdata.csv               # User registration CSV data
│   ├── product-search-data.csv    # Product search CSV data
│   ├── login-credentials.csv      # Login credentials
│   └── payment-details.csv        # Payment information
├── playwright.config.ts           # Main Playwright configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## Running Tests

### All Tests (All Browsers)
```bash
npm run test
```

### Specific Browser
```bash
npm run test:chromium
npm run test:firefox  
npm run test:webkit
```

### Headed Mode (With Browser UI)
```bash
npm run test:headed
```

### Debug Mode
```bash
npm run test:debug
```

### UI Mode
```bash
npm run test:ui
```

### Specific Test Files
```bash
# User Registration Tests (Scenario 1)
npm run test:registration
npm run test:scenario1

# Product Search Tests (Scenario 2)  
npm run test:products
npm run test:scenario2

# Shopping Cart Tests (Scenario 3)
npm run test:cart
npm run test:scenario3

# Individual test files
npx playwright test tests/user-registration.spec.ts
npx playwright test tests/product-search.spec.ts
npx playwright test tests/shopping-cart.spec.ts
```

## Test Reports
```bash
npm run report
```

## Environment Configuration
Create a `.env` file based on `.env.example` for custom configurations:
- BASE_URL
- ENVIRONMENT
- USER_EMAIL
- USER_PASSWORD

## Test Data
- CSV files in `data/` directory contain test data
- Random email generation for unique test runs
- Configurable user information

## Features Implemented
✅ TypeScript with Playwright framework
✅ Page Object Model design pattern  
✅ Multiple browser support (Chrome, Firefox, Safari)
✅ CSV data-driven testing
✅ Environment-specific configurations
✅ Random test data generation
✅ Screenshot and video capture on failure
✅ HTML and JSON reporting
✅ Independent test design
✅ Utility functions for common operations
✅ Proper error handling and timeouts

## Test Scenario Coverage
1. **User Registration Flow (Scenario 1)**:
   - Home page navigation and verification
   - Signup/Login page navigation
   - User information form completion
   - Address details completion
   - Account creation confirmation
   - Login verification

2. **Product Search Flow (Scenario 2)**:
   - Home page navigation and verification
   - Products page navigation
   - Product search functionality
   - Product details verification
   - Title and price validation
   - Parameterized testing with CSV data

3. **Shopping Cart Flow (Scenario 3)**:
   - User login with existing credentials
   - Product search and navigation
   - Add to cart functionality
   - Cart management and checkout
   - Payment processing
   - Order confirmation and invoice download

## Troubleshooting
- If tests timeout, check network connectivity
- For browser installation issues: `npx playwright install --force`
- For dependency issues: `npm ci`
- Use debug mode for step-by-step execution