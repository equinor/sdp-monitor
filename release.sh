#!/bin/bash

docker-compose build
docker tag sdpequinor/monitor:latest sdpequinor/monitor:$1
docker push sdpequinor/monitor:$1