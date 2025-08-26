# Testing Mini Projects

A collection of mini-projects for learning software testing, including Unit, Integration, End-to-End (E2E), Regression, and Manual/Exploratory testing using React frontend with multiple backends (Express, FastAPI, Laravel).

Each project runs in its own Docker Compose environment for isolated, reproducible setups.

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
├── task-manager-express-react/
│   ├── backend/              # Express backend
│   ├── frontend/             # React frontend
│   ├── tests/                # automated test suites
│   │   ├── unit/
│   │   ├── integration/
│   │   ├── e2e/
│   │   └── regression/
│   ├── manual-tests/         # manual & exploratory guides
│   │   ├── test-cases.md
│   │   └── exploratory-guide.md
│   └── docker-compose.yml
│
├── task-manager-fastapi-react/
│   └── ...
│
├── task-manager-laravel-react/
│   └── ...
│
└── README.md                 # this file
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

- Project 1: Task Manager (React + Express)
- Project 2: Task Manager (React + FastAPI)
- Project 3: Task Manager (React + Laravel)
- Project 4: Auth Flow (React + Express)
- Project 5: Auth Flow (React + FastAPI)
- Project 6: Auth Flow (React + Laravel)
- Extend with CI/CD pipelines (GitHub Actions + test automation)
- Add advanced exploratory testing guides

## Getting Started

Clone the repo and start with the first project:

```
git clone https://github.com/hamid6426/learn-software-testing.git
cd testing-mini-projects/task-manager-express-react
docker compose up --build
```

Then open the manual test cases and begin testing.
