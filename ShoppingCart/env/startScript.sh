#!/bin/bash
WEBSITE_PATH="development/Front-End-development-LL/Website"
name="web"
echo $WEBSITE_PATH
cd ~
cd $WEBSITE_PATH
#isContainerUp=$(docker ps -a | grep $name)
if [ ! -z "$(docker ps | grep $name)" ]; then
    echo "A running container found with $name, stopping.."
    docker stop $name
fi
if [ ! -z "$(docker ps -a | grep $name)" ]; then
    echo "a Stopped Container exists with $name, removing.."
    docker rm $name
fi
echo "No Container exists with $name, so safe to proceed with Docker run.."
docker run --name $(echo $name) -p 8000:80 -v ./front-end:/usr/share/nginx/html -d nginx

