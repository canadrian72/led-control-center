# Iot Control Center

A local area network kubernetes cluster for managing and controlling IoT devices.

# Installation

1. Flash an SD card with **Ubuntu Server OS Arm64 Architecture**

   - Can be done using the [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
   - Before flashing, configure the network connection settings and enable SSH to allow the Pi connection to the internet
   - Alternatively, this can be done manually by editing the `/etc/netplan/50-cloud-init.yaml` found in Ubuntu

---

2. Boot up the Raspberry Pi and SSH into it

---

3. Docker and docker-compose Installation

   - [Docker Installation on Ubuntu Docs](https://docs.docker.com/engine/install/ubuntu/#install-docker-engine)

---

4. Login to a [dockerhub](https://hub.docker.com/) account

   - Can be done with the `docker login` command

---

5. Install Kubernetes

   - [Rancher Docs](https://rancher.com/docs/k3s/latest/en/installation/install-options/)

---

6. Clone this Repository

---

7. Build and push the local docker containers to dockerhub

   - `cd` into the `/Kubernetes` folder of this repo
   - Execute the `update_cluster.sh` script to build and push all containers

---

8. Configure your cluster secrets

   - Copy the `secrets.yaml` found under `/Kubernetes/Secrets`. Rename it to `secrets.yaml` or another name of your choosing
   - Edit the file with a text editor to add the secrets. You'll need to add:
     - A Mongo Database Username and Password
     - The address of the Mongo Database (i.e. the address of the current Raspberry Pi. This can be found using `ifconfig`)
   - Apply the secrets to your cluster using `kubernetes apply -f secrets.yaml`

---

9. Deploy the Mongo Database

   - Add the same Mongo credentials to your environment variables:
     - `sudo vim ~/.bashrc`
     - Add the following at the bottom:
       - `export MONGO_DB_USERNAME=<your_username>`
       - `export MONGO_DB_PASSWORD=<your_password>`
   - Build and bring up the docker container for the database
     - `cd` into `/MongoDb`
     - Run `docker-compose up --build -d`

---

10. Deploy the cluster

    - `cd` into `/Kubernetes`
    - Run `deploy_cluster.sh` to deploy the cluster
    - Check your device IP from anywhere on your LAN, you should see the IoT Control Center Home page!

---

<p align="center">
<image src="https://user-images.githubusercontent.com/47571939/151073711-508f1d52-cf0e-45ec-99c4-fd5c7f7579c4.png">
</p>
