# IT3040 – Assignment 1  
## Automated Testing for Singlish-to-Sinhala Translation

This repository contains **automated test scripts** built with **Playwright** to verify the functionality and UI behavior of the **Singlish-to-Sinhala transliteration system** available at:

🔗 [https://www.swifttranslator.com/](https://www.swifttranslator.com/)

The purpose of this project is to **ensure the transliteration system handles input correctly, responds in real time, and maintains stability** during user interactions.

---

## 📋 Table of Contents

- [Technologies Used](#technologies-used)
- [Test Coverage](#test-coverage)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Test Results](#test-results)
- [CI/CD Integration](#cicd-integration)
- [Author](#author)

---

## 🛠️ Technologies Used

- **Playwright** (v1.48+) - End-to-end testing framework
- **TypeScript** - Type-safe test scripting
- **Node.js** (v18+) - Runtime environment
- **GitHub Actions** - Continuous Integration
- **Browsers**: Chromium, Firefox, WebKit

---

## 📊 Test Coverage

### Test Suite Summary
- **Total Tests**: 35
- **Positive Functional Tests**: 24 (Pos_Fun_0001–0024)
- **Negative Functional Tests**: 10 (Neg_Fun_0001–0010)
- **UI Tests**: 1 (Pos_UI_0002)

### Test Categories

#### ✅ Positive Tests
Verify correct translation of valid Singlish input to Sinhala script:
- Simple phrases (e.g., "oyaata kohomadha?" → "ඔයාට")
- Complex sentences with mixed vocabulary
- Long paragraphs with multiple concepts
- Brand names preservation (e.g., "Zoom", "WIFI")
- Special characters and punctuation handling

#### ❌ Negative Tests
Validate error handling and input validation (Expected to FAIL):
- Malformed input without spaces
- Mixed slang and informal text
- Excessive whitespace
- Special characters and symbols
- Gibberish and random characters
- Empty input handling

#### 🎨 UI Tests
Verify real-time translation behavior:
- Character-by-character translation updates
- Output rendering performance
- Interactive element functionality

---

## 📁 Project Structure

```
Singlish Translator/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD configuration
├── tests/
│   └── singlish-translator.spec.ts # Main test suite
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Dependencies and scripts
├── package-lock.json
├── README.md                        # This file
└── playwright-report/               # Test execution reports
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/Shyni97/ITPM_assignment_it23566552.git
cd ITPM_assignment_it23566552
```

2. **Install dependencies:**
```bash
npm ci
```

3. **Install Playwright browsers:**
```bash
npx playwright install --with-deps
```

---

## ▶️ Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in Specific Browser
```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit (Safari) only
npx playwright test --project=webkit
```

### Run Tests with UI (Interactive Mode)
```bash
npx playwright test --ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Run Specific Test Categories
```bash
# Run only positive tests
npx playwright test -g "Pos_Fun"

# Run only negative tests
npx playwright test -g "Neg_Fun"

# Run only UI tests
npx playwright test -g "Pos_UI"
```

### View Test Report
```bash
npx playwright show-report
```

### Debug a Specific Test
```bash
npx playwright test --debug -g "Pos_Fun_0001"
```

---

## 📈 Test Results

### Expected Outcomes

#### On Local Machine:
```
✅ 24 Positive tests - PASS
❌ 10 Negative tests - FAIL (Expected - demonstrates validation issues)
✅ 1 UI test - PASS
```

#### On GitHub Actions CI:
- Tests run automatically on every push to `main` branch
- Tests execute across all three browsers (Chromium, Firefox, WebKit)
- Test artifacts and reports are generated
- View results in the "Actions" tab

### Sample Output:
```
Running 105 tests using 1 worker

  ✓ 24 Positive functional tests passed
  ✗ 10 Negative functional tests failed (expected)
  ✓ 1 UI test passed

  24 passed (chromium)
  24 passed (firefox)
  24 passed (webkit)
  10 failed (expected - validation tests)
  1 passed (UI)
```

---

## 🔄 CI/CD Integration

This project uses **GitHub Actions** for continuous integration.

### Workflow Configuration
- **Trigger**: Push to `main` branch
- **Environment**: Ubuntu Latest
- **Node Version**: LTS
- **Timeout**: 60 minutes
- **Retry Strategy**: 2 retries on CI failures
- **Artifacts**: Test reports stored for 30 days

### Workflow File
`.github/workflows/playwright.yml`

### View CI Results
Visit: [GitHub Actions](https://github.com/Shyni97/ITPM_assignment_it23566552/actions)

---

## 🔧 Configuration

### Playwright Configuration Highlights

**File**: `playwright.config.ts`

```typescript
- Test Timeout: 45 seconds
- Expect Timeout: 15 seconds
- Navigation Timeout: 30 seconds
- Action Timeout: 15 seconds
- Retries on CI: 2
- Workers on CI: 1 (sequential execution)
- Browsers: Chromium, Firefox, WebKit
```

### Key Features:
- ✅ Optimized for CI environments
- ✅ Automatic retry on flaky tests
- ✅ Trace collection on failures
- ✅ HTML report generation
- ✅ Smart timeout handling for slow networks

---

## 📝 Test Case Documentation

Detailed test case documentation is available in:
- `IT23566552_TestCases.xlsx` - Complete test case spreadsheet
- `tests/singlish-translator.spec.ts` - Executable test code

---

## 📄 License

This project is created for educational purposes as part of IT3040 coursework.

---

## 👤 Author

**Student ID**: IT23566552  
**Course**: IT3040 - IT Project Management  
**Assignment**: Assignment 1 - Automated Testing  
**Institution**: SLIIT  
**Year**: 2026

---

## 🔗 Links

- **GitHub Repository**: [https://github.com/Shyni97/ITPM_assignment_it23566552](https://github.com/Shyni97/ITPM_assignment_it23566552)
- **Application Under Test**: [https://www.swifttranslator.com/](https://www.swifttranslator.com/)
- **Playwright Documentation**: [https://playwright.dev/](https://playwright.dev/)

---



**Last Updated**: January 31, 2026
