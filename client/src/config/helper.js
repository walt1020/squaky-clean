// Include the axios package for performing HTTP requests
var axios = require("axios");
var api_url = process.env.API_URL || 'http://localhost:3001'
// Helper functions for making API Calls
var helper = {
    
    loginUser: function(data) {
      
         return axios.post(api_url + '/api/login/', data);
      
    }
    // ,
    // getHighestBid: function(currentCow) {
      
    //       return axios.get(api_url + '/api/highestBid/',{params:{cowid: currentCow}});
     
    // },
    // getCows: function() {
    //     return axios.get(api_url + '/api/cows/');
    // },
    // postBid: function(currentCow, bidder, bidAmount){
    //     return axios.post(api_url + '/api/postBid/',
    //         {
    //        bidder: bidder,
    //            bidAmount: bidAmount,
    //        cowid: currentCow
    //         }
    //     ).then(function(response){
    //         // console.log(response);
    //     if (response){
    //      return response
    //         }
    //     }).catch(function(error){
    //         console.log("error", error);
    //     });
    // }
}
// We export the API helper
module.exports = helper;