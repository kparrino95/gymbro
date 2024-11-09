### Backend
![Node.js (Backend)](https://img.shields.io/badge/Node.js-23.1.0-green)

### Frontend
![Node.js (Frontend)](https://img.shields.io/badge/Node.js-22.11.0-blue)

### Database
![SurrealDB](https://img.shields.io/badge/SurrealDB-v2.0.4-blue)

# Gymbro - Experimental Gym Management App

Gymbro is an experimental gym management application designed as a learning playground to explore and integrate various innovative technologies. This project is not aimed at delivering a finished or production-ready product, but rather to serve as a hands-on approach to familiarize with modern tech stacks and architectures.

## Project Stack

### Frontend
- **Framework**: Svelte for a high-performance, interactive user interface.
- **UI Library**: SvelteKit, providing flexible routing and server-side rendering.
- **CSS**: Tailwind CSS for a modular, modern styling experience.
- **Authentication & Authorization**: Auth0 for secure user authentication management.

### Backend
- **Database**: SurrealDB, enabling both relational and NoSQL data handling.
- **Orchestration**: Kestra, used for complex flow orchestration and management.
- **Server**: Node.js with GraphQL for efficient and flexible API management.

### API Integration & Communication
- **GraphQL**: Apollo Server, as a smooth communication layer between frontend and backend.
- **Event-driven Architecture**: Kafka or NATS (optional), in case the application requires a message-broker for microservices or asynchronous communication.

### DevOps & Deployment
- **Containerization**: Docker, providing a consistent development environment and containerized application management.
- **Container Orchestration**: Kubernetes, or HashiCorp’s Nomad for a lighter setup.
- **CI/CD**: GitHub Actions for automated CI/CD pipelines, or GitLab CI for those using GitLab.
- **Deployment**: Fly.io or Vercel, for quick deployment with built-in scaling and load balancing.

### Observability & Monitoring
- **Tracing**: Jaeger, to trace service calls and monitor latency.
- **Metrics**: Prometheus & Grafana, for system performance metrics and visualizations.
- **Logging**: Elastic Stack (ELK) for centralized log analysis, or Loki with Grafana for a lighter alternative.

### Testing & Code Quality
- **Testing**: Jest or Vitest for unit tests, and Playwright for end-to-end frontend testing.
- **Linting**: ESLint & Prettier, to enforce consistent code styling.

## Getting Started

### Prerequisites
- Docker
- Node.js
- Surrealist
- GitHub or GitLab account for CI/CD configuration

### Installation

### Utilities
At http://localhost:4000/, once the backend is running, you can find Apollo Studio for GraphQL development.

## Contributing
As Gymbro is intended for exploration and experimentation, contributions that introduce or test new technologies are highly encouraged.