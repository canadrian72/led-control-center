from flask import Response
from showrequest import ShowRequest
from movierequest import MovieRequest
from config import Config
import requests


class ReverseProxy:
    def chromecast_movie_request(self, request: MovieRequest) -> Response:
        return requests.post(Config.CHROMECAST_CONTROLLER_URL +
                             "/request/movie", json=request.to_json())

    def chromecast_show_request(self, request: ShowRequest) -> Response:
        return requests.post(Config.CHROMECAST_CONTROLLER_URL +
                             "/request/show", json=request.to_json())
