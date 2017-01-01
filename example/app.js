var myApp = angular.module('myApp', ['angularMusicPlayer']);

myApp.controller('mainController', function ($scope, $http, $musicPlayer) {

    $scope.player = $musicPlayer;
    $scope.trackList = {};
    $scope.trackList.tracks = [];

    $scope.getTrackDuration = function (time) {
        if(isNaN(time)) return "00:00";

        var totalSeconds = parseInt(time / 1000);
        var hours = parseInt(totalSeconds / 3600);
        var minutes = parseInt((totalSeconds % 3600) / 60);
        var seconds = totalSeconds % 60;

        return hours > 0 ? hours + ":" + ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2) : ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);

    }

    var init = function () {

        $http.get("tracks.json").then(function (res) {

            for (var i = 0; i < res.data.length; i++) {
                res.data[i].stream_url = res.data[i].stream_url + "?client_id=b23455855ab96a4556cbd0a98397ae8c";
            }

            $scope.trackList.tracks = res.data;
        });
    }

    init();

});
