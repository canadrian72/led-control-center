#!/bin/bash
sudo docker compose build
sudo docker push $DOCKERHUB_USERNAME/iot-control-center:lighting-service
sudo kubectl delete pods --wait=false -l svc=lighting-service
