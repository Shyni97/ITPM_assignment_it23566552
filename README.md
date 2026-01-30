# IT3040 – Assignment 1  
## Automated Testing for Singlish-to-Sinhala Translation

This repository contains **automated test scripts** built with **Playwright** to verify the functionality and UI behavior of the **Singlish-to-Sinhala transliteration system** available at:

[https://www.swifttranslator.com/](https://www.swifttranslator.com/)

The purpose of this project is to **ensure the transliteration system handles input correctly, responds in real time, and maintains stability** during user interactions.

---

## Technologies Used

- Playwright  
- TypeScript / JavaScript  
- Node.js  
- Chromium browser  

---

## Test Coverage

The automated tests focus on:

- Entering Singlish text into the input area  
- Real-time UI updates during transliteration  
- Handling of both normal and edge-case inputs  
- Overall responsiveness and stability of the web application  

---

## Project Structure

- `tests/` → Contains all test scripts  
  - Positive functional tests (`Pos_Fun_0001–0024`)  
  - Negative functional tests (`Neg_Fun_0001–0010`)  
  - UI/real-time tests (`Pos_UI_0001–0002`)  
- `playwright.config.ts` → Configuration for Playwright  
- `package.json` → Dependencies and test scripts  
- `README.md` → Project instructions and details  
- `IT23566552_TestCases.xlsx` → Completed test cases  
- `IT23566552_GitLink.txt` → Link to public GitHub repository  

---

## How to Set Up

1. Clone the repository:  
```bash
git clone https://github.com/Shyni97/ITPM_assignment_it23566552.git
