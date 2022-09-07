#!/bin/bash
sudo docker compose build
sudo docker push $DOCKERHUB_USERNAME/iot-control-center:kasa-led-strip-controller
sudo kubectl delete pods --wait=false -l svc=kasa-led-strip-controller
