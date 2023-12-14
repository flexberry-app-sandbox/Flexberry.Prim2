docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prim2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t prim2-java/app ../../..
