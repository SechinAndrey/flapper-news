angular.module('flapperNews')
.factory('posts', [function(){
    // service body
    var o = {
        posts: []
    };
    return o;
}])