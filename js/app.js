angular.module("myApp", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/form/profile');
        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'template/form.html',
                controller: 'formCtrl'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.profile', {
                url: '/profile',
                templateUrl: 'template/profile.html'
            })

            // url will be /form/interests
            .state('form.interests', {
                url: '/interests',
                templateUrl: 'template/interests.html'
            })

            // url will be /form/payment
            .state('form.submit', {
                url: '/submit',
                templateUrl: 'template/submit.html'
            });
    }])
.controller("formCtrl", ["$scope", function($scope){
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');
        };
    }])