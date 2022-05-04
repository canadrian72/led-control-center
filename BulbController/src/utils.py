from datetime import datetime


class BulbRequest:
    def __init__(
        self,
        operation: str,
        h: int = 0,
        s: int = 100,
        v: int = 50,
        brightness: int = None,
        temperature: int = None,
    ):
        self.operation = operation
        self.brightness = brightness
        self.h = h
        self.s = s
        self.v = v
        self.temperature = temperature


def log(topic, message):
    now = datetime.now()
    print(str(now.strftime("%Y-%m-%d %H:%M:%S")))
    print("\tTOPIC:\t\t" + topic)
    print("\tMESSAGE:\t" + message)
