var app = angular.module("reddit", []);

app.controller('mainController', ['$scope', function($scope) {

    $scope.dropdown = 'score';

    $scope.submitForm = function(isValid) {
        if (isValid) {
            var newPost = new this.Post();
            newPost.title = this.post.title;
            newPost.author = this.post.author;
            newPost.image = this.post.image;
            newPost.description = this.post.description;
            $scope.posts.push(newPost);
            $scope.post = {};
        }
    };

    $scope.createPostView = false;
    $scope.togglePostView = function() {
        if ($scope.createPostView === false) {
            $scope.createPostView = true;
        } else {
            $scope.createPostView = false;
        }
    };

    $scope.upvote = function (post) {
      post.score += 1;
    };

    $scope.downvote = function (post) {
      post.score -= 1;
    };

    $scope.addComment =function (post) {
      var newComment = angular.copy(post.formComment);
      post.comments.push(newComment);
    };

    $scope.Post = function() {
        this.date = new Date();
        this.score = 0;
        this.comments = [];
      };

    $scope.posts = [{
        title: "Zika hits Rio Olympics",
        author: "Zach Zimmerman",
        image: "http://ichef-1.bbci.co.uk/news/660/cpsprodpb/C67C/production/_89821805_89820834.jpg",
        description: "Are you there?",
        date: new Date(),
        score: 1,
        comments: [{
            author: 'Carl',
            comment: "This is my first comment",
            date: new Date()
        }, {
            author: 'Berg',
            comment: "This is my 2 comment",
            date: new Date()
        }]
    }, {
        title: "Best Friend Dad",
        author: "Zach Zimmerman",
        image: "http://images.boomsbeat.com/data/images/full/1384/brad-pitt-as-baby-childhood-jpg.jpg",
        description: "I'm your father - Zach Zimmerman",
        date: new Date(),
        score: 1,
        comments: [{
            author: 'Carl',
            comment: "This is my first comment",
            date: new Date()
        }, {
            author: 'Berg',
            comment: "This is my 2 comment",
            date: new Date()
        }
       ]
    }
   ];
}]);
