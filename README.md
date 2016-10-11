--start mongodb
sudo docker run -d -p 27017:27017 -v "$(pwd)"/db:/data/db --name mongodb mongo

--start node app and link to mongodb
sudo docker run -d -p 3000:3000 -v $(pwd):/src/SimpleMongoApp --name SimpleMongoApp --link mongodb:mongodb node node /src/SimpleMongoApp/bin/www