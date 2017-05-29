import CONSTANTS from '../utils/constants';

let React = require('react');
let ReactNative = require('react-native');
const {
  AsyncStorage
} = ReactNative;
module.exports = {
  getMembers: function(committeeId) {
    return fetch(CONSTANTS.URL + CONSTANTS.MEMBER_PATH.replace("{0}", committeeId),{
      headers:{
        'Authorization' : CONSTANTS.TOKEN_STR,
        'Content-Type':'application/json'
      }
    })
    .then((response)=>response.json())
    .then((results)=>{
      return results
    });
  },
  createMember: function(memberJson, committeeId) {
    return fetch(CONSTANTS.URL + CONSTANTS.MEMBER_PATH.replace("{0}", committeeId),{
      headers:{
        'Authorization' : CONSTANTS.TOKEN_STR,
        'Content-Type':'application/json'
      },
      method: "POST",
      body: JSON.stringify(memberJson)
    })
    .then((response)=> response.json())
    .then((results)=>{
      return results;
    });
  },
}