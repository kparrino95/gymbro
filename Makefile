DOCKER_COMPOSE_FILE = docker-compose.yml

up-local:
	docker-compose -p gymbro --env-file .env.local -f $(DOCKER_COMPOSE_FILE) up -d

run-backend:
	echo "Run it via power shell using following command:"
	echo "  cd gymbro-backend"
	echo "  nvs use 23.1.0"
	echo "  node src/index.js"

run frontend:
	echo "Run it via power shell using following command:"
	echo "  cd gymbro-frontend"
	echo "  nvs use 22.11.0"
	echo "  npm run dev -- --open"  