/*jshint esversion: 6 */
import CONSTANTS from '../utils/constants';

let React = require('react');
let ReactNative = require('react-native');
const {
  AsyncStorage
} = ReactNative;
module.exports = {
  getCommittes: function() {
    return fetch(CONSTANTS.URL + CONSTANTS.COMMITTEE_PATH,{
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
  createCommittee: function(committeeJson, callback) {
    return fetch(CONSTANTS.URL + CONSTANTS.COMMITTEE_PATH,{
      headers:{
        'Authorization' : CONSTANTS.TOKEN_STR,
        'Content-Type':'application/json'
      },
      method: "POST",
      body: JSON.stringify(committeeJson)
    })
    .then((response)=> response.json())
    .then((results)=>{
      callback && callback();
      return results;
    });
  },

    updateAppointment: function (appointmentJson, callback) {
      AsyncStorage.getItem('auth-token', (err, result) => {
        fetch(CONSTANTS.URL + CONSTANTS.APPOINTMENT_PATH,{
          headers:{
              'Authorization' : CONSTANTS.TOKEN_STR + result,
            'Content-Type':'application/json'
          },
          method: "PUT",
          body: JSON.stringify(appointmentJson)
        }).then((response)=>{
          return response.json();
        }).then((results)=>{
          callback && callback();
          Store.dispatch({
            type:CONSTANTS.APPOINTMENT_UPDATE,
            appointment: results.appointment
          });
        });
      });
    },
    deleteAppointment: function (appointmentId, callback) {
      AsyncStorage.getItem('auth-token', (err, result) => {
        fetch(CONSTANTS.URL + CONSTANTS.APPOINTMENT_PATH + '/' + appointmentId ,{
          headers:{
              'Authorization' : CONSTANTS.TOKEN_STR + result,
            'Content-Type':'application/json'
          },
          method: "DELETE"
        }).then((response)=>{
          return response.json();
        }).then((results)=>{
          callback && callback();
          Store.dispatch({
            type:CONSTANTS.APPOINTMENT_DELETE,
            appointmentId: appointmentId
          });
        });
      });
    }
  };
