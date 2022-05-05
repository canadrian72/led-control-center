from flask import Flask, Response, request
from flask_cors import CORS
from utils import ApiMqttClient, BulbRequest, LedStripRequest
import json

app: Flask = Flask("__main__")
CORS(app)

api_client = ApiMqttClient()


@app.route("/")
def index() -> Response:
    return Response(status=200)


@app.route("/lighting/ledstrip", methods=["POST"])
def led_strip() -> Response:
    body = request.get_json()
    try:
        led_request = LedStripRequest(**body)
        api_client.publish_lighting_request(led_request, "led-strip")
    except:
        return Response("Invalid JSON body in request.", 400)

    return Response(status=200)


@app.route("/lighting/bulb1", methods=["POST"])
def bulb_1() -> Response:
    body = request.get_json()
    try:
        bulb_request = BulbRequest(**body)
        api_client.publish_lighting_request(bulb_request, "bulb-1")
    except:
        return Response("Invalid JSON body in request.", 400)

    return Response(status=200)


@app.route("/lighting/bulb2", methods=["POST"])
def bulb_2() -> Response:
    body = request.get_json()
    try:
        bulb_request = BulbRequest(**body)
        api_client.publish_lighting_request(bulb_request, "bulb-2")
    except:
        return Response("Invalid JSON body in request.", 400)

    return Response(status=200)


if __name__ == "__main__":
    api_client.client.loop_start()
    app.run(host="0.0.0.0", threaded=True, port=8000)
