from flask import Request
from config import Config
from device import Device, LightingDeviceTypes
import requests


class ReverseProxy:
    def __init__(self, device: Device):
        self.device = device
        self.proxy = {
            LightingDeviceTypes.KasaBulb: self.kasa_bulb_request,
            LightingDeviceTypes.CustomLedStrip: self.custom_led_strip_request,
            LightingDeviceTypes.KasaLedStrip: self.kasa_led_strip_request,
        }

    def handle(self):
        self.proxy[self.device.model]()

    def kasa_bulb_request(self, request: Request):
        requests.post(Config.BULB_CONTROLLER_URL +
                      "/request", json=request.get_json())

    def custom_led_strip_request(self, request: Request):
        requests.post(
            f"http://{self.device.ip}:8000/request", json=request.get_json())

    def kasa_led_strip_request(self, request: Request):
        requests.post(Config.LED_CONTROLLER_URL +
                      "/request", json=request.get_json())
