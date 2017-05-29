import CONSTANTS from '../utils/constants';

let React = require('react');
let ReactNative = require('react-native');
const {
  AsyncStorage
} = ReactNative;
module.exports = {
  getInstalments: function(committeeId) {
    return fetch(CONSTANTS.URL + CONSTANTS.INSTALMENT_PATH.replace("{0}", committeeId),{
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
  createInstalment: function(instalmentJson, committeeId) {
    return fetch(CONSTANTS.URL + CONSTANTS.INSTALMENT_PATH.replace("{0}", committeeId),{
      headers:{
        'Authorization' : CONSTANTS.TOKEN_STR,
        'Content-Type':'application/json'
      },
      method: "POST",
      body: JSON.stringify(instalmentJson)
    })
    .then((response)=> response.json())
    .then((results)=>{
      return results;
    });
  },
  addMemberInstalment: function(memberInstalmentJson, committeeId, memberId) {
    return fetch(CONSTANTS.URL + CONSTANTS.MEMBER_INSTALMENT_PATH.replace("{0}", committeeId).replace("{1}", memberId),{
      headers:{
        'Authorization' : CONSTANTS.TOKEN_STR,
        'Content-Type':'application/json'
      },
      method: "POST",
      body: JSON.stringify(memberInstalmentJson)
    })
    .then((response)=> response.json())
    .then((results)=>{
      return results;
    });
  },
}