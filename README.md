# Learn Software Testing Using Mini Projects

A collection of mini-projects for learning software testing, including Unit, Integration, End-to-End (E2E), Regression, and Manual/Exploratory testing using React frontend with multiple backends (Express, FastAPI, Laravel).

Each project runs in its own Docker Compose environment, ensuring isolated and reproducible setups.

## Tests

This section outlines the main types of tests used in web development.  
They are categorized by automation vs. manual effort, marked by importance, and explained with a short description.  
These tests will be demonstrated across mini-projects with React frontend and multiple backend stacks.

| Test Type                                    | Automated / Manual | Importance   | Description                                                            |
| -------------------------------------------- | ------------------ | ------------ | ---------------------------------------------------------------------- |
| Unit Tests                                   | Automated          | Critical     | Tests individual functions or components in isolation.                 |
| Integration Tests                            | Automated          | Critical     | Verifies multiple modules (e.g., API + DB) work together.              |
| End-to-End (E2E) Tests                       | Automated          | Critical     | Simulates full user workflows from UI to backend and DB.               |
| API Tests                                    | Automated          | Critical     | Validates REST/GraphQL endpoints: status codes, responses, schema.     |
| Regression Tests (suites)                    | Automated          | Critical     | Ensures new changes don’t break existing functionality.                |
| Smoke Tests                                  | Automated          | Critical     | Quick, shallow checks to confirm the app basically works after deploy. |
| Contract Tests                               | Automated          | Nice-to-have | Ensures provider/consumer services agree on API contracts.             |
| Performance Tests (load/stress)              | Automated          | Nice-to-have | Measures response time, load handling, and scalability.                |
| Accessibility Tests (tools)                  | Automated          | Nice-to-have | Uses tools like axe-core to detect accessibility issues.               |
| Visual Regression Tests                      | Automated          | Nice-to-have | Detects unintended UI changes with screenshots/pixel diffs.            |
| Cross-browser / Cross-device (simulated)     | Automated          | Nice-to-have | Automated checks across different browsers/devices (via emulators).    |
| Exploratory Testing                          | Manual             | Nice-to-have | Tester freely explores app to find unexpected edge cases.              |
| Usability Testing                            | Manual             | Nice-to-have | Real users or QA attempt tasks to uncover UX issues.                   |
| Ad-hoc / Sanity Testing                      | Manual             | Nice-to-have | Quick manual verification after bug fixes or hotfixes.                 |
| Accessibility Audits (manual)                | Manual             | Nice-to-have | Manual screen reader, keyboard navigation, color contrast checks.      |
| Cross-device / Cross-browser (real hardware) | Manual             | Nice-to-have | Real device/browser checks beyond simulations (e.g., iOS Safari).      |
| UI/UX Validation                             | Manual             | Nice-to-have | Human judgment of look, feel, and usability beyond automation.         |

## Goals

- Gain practical understanding of both manual and automated software testing.
- Apply testing concepts across multiple backend stacks (Express, FastAPI, Laravel) with a common React frontend.
- Learn to write and execute structured test cases and exploratory test guides.
- Use Dockerized environments to ensure isolated, reproducible testing setups.
- Build confidence in applying test strategies that scale from small apps to production-level workflows.

## Stacks & Tools

### Frontend (React)

- Unit & Integration: Jest (or Vitest) + React Testing Library
- E2E: Playwright (preferred) or Cypress

### Backends

- Express (Node.js): Jest + Supertest
- FastAPI (Python): Pytest + HTTPX
- Laravel (PHP): PHPUnit / Pest

### Infrastructure

- Docker + Docker Compose

## Project Structure

```
testing-mini-projects/
│
├── todo-app-express-react/
│   ├── backend/              # Express backend
│   ├── frontend/             # React frontend
│   ├── tests/                # automated test suites
│   │   ├── unit/
│   │   ├── integration/
│   │   ├── e2e/
│   │   |── regression/
│   ├── manual-tests/         # manual & exploratory guides
│   │   ├── test-cases.md
│   │   |── exploratory-guide.md
│   |── docker-compose.yml
│
├── todo-app-fastapi-react/
│   |── ...
│
├── todo-app-laravel-react/
│   |── ...
│
chat-app-express-react/
│   ├── backend/
│   ├── frontend/
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   ├── e2e/
│   │   |── regression/
│   ├── manual-tests/
│   │   ├── test-cases.md
│   │   |── exploratory-guide.md
│   |── docker-compose.yml
│
├── chat-app-fastapi-react/
│   ── ...
│
├── chat-app-laravel-react/
│   |── ...
│
|── README.md
```

## What I am going to learn

- Manual testing:

  - **Writing and executing test cases**
  - **Exploratory testing strategies**
  - **Accessibility tests**

- Automated testing:

  - **Unit testing** of isolated functions and components
  - **Integration testing** of APIs, DB interactions, and frontend-to-backend flows
  - **End-to-End (E2E) testing** of full user workflows
  - **Regression testing** suites to prevent breakages
  - **API testing**
  - **Smoke testing**
  - **Performance testing**

- Dev & Infra skills:
  - **Structuring tests** in real-world projects
  - **Running apps and tests** in Docker Compose
  - **Preparing projects** for CI/CD integration (GitHub Actions)

## Learning Flow

- Run the app with Docker Compose.
- Perform manual tests first (checklists, exploratory scenarios).
- Write unit & integration tests for backend and frontend.
- Add E2E tests for complete workflows (signup → login → CRUD → logout).
- Set up regression suites to catch breakages after updates.

## Roadmap

### Step 1

- Project 1: Todo App (React + Express)
- Project 2: Todo App (React + FastAPI)
- Project 3: Todo App (React + Laravel)

### Step 2

- Project 4: Chat App (React + Express)
- Project 5: Chat App (React + FastAPI)
- Project 6: Chat App (React + Laravel)

### Step 3

- Extend the above apps with test automation
- Extend the above apps with CI/CD pipelines (GitHub Actions)
- Add advanced exploratory testing guides

## Getting Started

- Clone the repo and start with the first project:

```
git clone https://github.com/hamid6426/learn-software-testing
cd learn-software-testing/todo-app-express-react # or any other mini project

# Build the services
docker compose build

# Start the services in the background
docker compose up -d
```

- Then open the manual test cases and begin testing.
