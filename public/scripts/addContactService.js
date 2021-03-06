angular.module('myApp').service('addContactService', function ($http,$location) {

      console.log('add contact service loaded');
      //some way to send a post request to our server
      // this.getPeople=function(){
      //   console.log('get people');
      //   return $http.get('/person').then(function(res){
      //     console.log(res);
      //     return res.data;
      //   }).catch(function(err){
      //     console.log("error getting people",err);
      //   });
      // };
      //
      // this.addPerson=function(first,last,home,movie){
      //   var data={firstName:first,lastName:last,homeTown:home,favMovie:movie};
      //   console.log('get people');
      //   $http.post('/person',data).then(function(res){
      //     console.log('successful add');
      //   }).catch(function(err){
      //     console.log("error adding people",err);
      //   });
      // };

      this.addContact=function(contactUsername){
        console.log('add contact',contactUsername);
        var data={contact:contactUsername};
        $http.get('/router/'+contactUsername).then(function(res){//check to see if user is in db
              console.log('found',res.data);
              if(res.data){
                  $http.put('/router',data).then(function(res){//add user to contact list
                    console.log('return from user check',res);
                    // res.data;
                  }).catch(function(err){
                    console.log("error changing person",err);
                  });
                  alertify.alert('Contact added succesfully');
              }else{
                alertify.alert('User does not exist');
              }
          }).catch(function(err){
            console.log("error getting people",err);
          });

      };

      // this.deletePerson=function(id){
      //   console.log('Delete person');
      //   $http.delete('/person/'+id).then(function(res){
      //     console.log(res);
      //   }).catch(function(err){
      //     console.log("error deleting person",err);
      //   });
      // };

});
