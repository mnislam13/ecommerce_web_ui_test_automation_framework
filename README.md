# ecommerce_web_ui_test_automation_framework - Playwright Test Automation

A comprehensive test automation project built with Playwright for end-to-end testing.
The framework uses TypeScript and the Page Object Model pattern.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Writing Tests](#writing-tests)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🔧 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce_web_ui_test_automation_framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 📁 Project Structure

```
ecommerce_web_ui_test_automation_framework/
├── tests/                 # Test files
├── pages/                 # Page Object Model files
├── fixtures/              # Test fixtures and data
├── utils/                 # Utility functions
├── config/                # Configuration files
├── test-results/          # Test execution results (git-ignored)
├── playwright-report/     # HTML test reports (git-ignored)
├── package.json          # Project dependencies
├── playwright.config.js  # Playwright configuration
└── README.md             # This file
```

## ⚙️ Configuration

The project uses `playwright.config.js` for configuration. Key settings include:

- **Browsers**: Chromium, Firefox, Safari
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Screenshots**: On failure
- **Videos**: On first retry
- **Reports**: HTML and JSON

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (with browser UI)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/example.spec.js
```

### Run tests with specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

## 📊 Test Reports

### View HTML Report
```bash
npx playwright show-report
```

### Generate and view report after test run
The HTML report is automatically generated after test execution and can be found in the `playwright-report/` directory.

## ✍️ Writing Tests

### Available Test Scenarios

**Scenario 1: User Registration**
```bash
npm run test:scenario1
```

**Scenario 2: Product Search**
```bash
npm run test:scenario2
```

**Scenario 3: Shopping Cart**
```bash
npm run test:scenario3
```

### Basic Test Structure
```javascript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

### Using Page Object Model with CSV Data
```javascript
import { test } from '@playwright/test';
import { ProductsPage } from '../pages/products-page';
import { DataHelper } from '../utils/data-helper';

test('parameterized test', async ({ page }) => {
  const testData = DataHelper.readCSV('./data/product-search-data.csv');
  // Use testData for parameterized testing
});
```

## 📝 Best Practices

1. **Use Page Object Model** - Organize your code using the Page Object Model pattern
2. **Wait for Elements** - Always wait for elements to be visible/enabled before interacting
3. **Use Data-Testid** - Prefer `data-testid` attributes for reliable element selection
4. **Independent Tests** - Each test should be independent and not rely on other tests
5. **Clean Test Data** - Clean up test data after each test run
6. **Meaningful Assertions** - Use descriptive assertion messages

## 🐛 Troubleshooting

### Common Issues

**Tests failing due to timeouts:**
- Increase timeout in `playwright.config.js`
- Use proper wait strategies

**Browser installation issues:**
```bash
npx playwright install --force
```

**Dependency issues:**
```bash
npm ci
```

### Debug Mode
Use debug mode to step through tests:
```bash
npx playwright test --debug --project=chromium
```

### Trace Viewer
Enable tracing for detailed debugging:
```bash
npx playwright test --trace on
npx playwright show-trace trace.zip
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

### Coding Standards
- Follow JavaScript/TypeScript best practices
- Write clear, descriptive test names
- Add comments for complex logic
- Ensure all tests pass before submitting PR

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Runner](https://playwright.dev/docs/test-runners)
- [Page Object Model](https://playwright.dev/docs/pom)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 📞 Support

For questions and support:
- Create an issue in the repository
- Review existing documentation
- Check Playwright community resources

---

**Happy Testing!** 🎭

*Mohammad Najrul Islam*