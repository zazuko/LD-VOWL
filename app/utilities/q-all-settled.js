import angular from 'angular';

function configure($provide) {

  $provide.decorator('$q', delegate);

  function delegate($delegate) {
    var $q = $delegate;

    $q.allSettled = function(promises) {
      var wrappedPromises = angular.isArray(promises) ? promises.slice(0) : {};

      angular.forEach(promises, function(promise, index) {
        wrappedPromises[index] = promise.then(function(value) {
          return { state: 'fulfilled', value: value };
        }, function(reason){
          return { state: 'rejected', reason: reason };
        });
      });

      return $q.all(wrappedPromises);
    };

    return $q;
  } // end of delegate

  delegate.$inject = ['$delegate'];

} // end of configure()

configure.$inject = ['$provide'];

export default angular.module('qAllSettled', [])
                      .config(configure)
                      .name;
