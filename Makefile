up:
	docker compose up -d
	sleep 3
	npx prisma migrate dev
	npx prisma generate
	npx prisma db seed
