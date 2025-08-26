# Learn Software Testing Using Mini Projects

A collection of mini-projects for learning software testing, including Unit, Integration, End-to-End (E2E), Regression, and Manual/Exploratory testing using React frontend with multiple backends (Express, FastAPI, Laravel).

Each project runs in its own Docker Compose environment, ensuring isolated and reproducible setups.

## Goals

- Learn manual testing discipline (test cases, exploratory testing).
- Learn automated testing at all levels:

  - Unit
  - Integration
  - E2E
  - Regression

- Understand testing across different backend stacks while keeping React as the common frontend.
- Practice Dockerized project environments to simulate real-world workflows.

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

- Manual testing: writing and executing test cases, exploratory testing strategies.
- Unit testing: testing isolated functions (auth utils, validation).
- Integration testing: API endpoints, DB interactions, React + API flow.
- E2E testing: simulating real user flows across frontend + backend.
- Regression testing: ensuring new features don’t break existing ones.

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
