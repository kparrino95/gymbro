DOCKER_COMPOSE_FILE = docker-compose.yml

up-local:
	docker-compose -p gymbro --env-file .env.local -f $(DOCKER_COMPOSE_FILE) up -d