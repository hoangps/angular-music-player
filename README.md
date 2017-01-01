# angular-music-player
An Angular module provides service to play music using HTML5 audio

# Install

``` html
<script src="angularMusicPlayer.js"></script>
```

``` javascript
var myApp = angular.module('myApp', ['angularMusicPlayer']);
myApp.controller('mainController', function ($scope, $http, $musicPlayer) {}
```

# Usage

``` javascript
$scope.player = $musicPlayer;
```

# Properties

``` javascript
this.player = {};
this.player.audio = new Audio();
this.player.isPlaying = false;
this.player.currentTime = 0;
this.player.track = {};
this.player.playlist = [];
this.player.trackElapsedPercentage = 0;
this.player.trackElapsedPercentageStyle = { 'width': 0 };
```

# Methods

``` javascript
this.player.play = function (playlist, track)

this.player.resume = function()

this.player.pause = function ()

this.player.prev = function ()

this.player.next = function ()

this.player.goToTrack = function (trackIndex)

```

Please see my example for more practical information
