/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


//created a function to convert USD to BRL
function currencyUsdToBrl(){

    //created a variable to be a instance of class XMLHttpRequest
    
    var http =  new XMLHttpRequest();
    //here is the end point of the API
    const url = 'http://www.apilayer.net/api/live?access_key=0f592d2601bc85f7961ec1a4c10f82c7&format=1';
    //here i prepared to request
    http.open("get",url);
    // send request
    http.send();
    //here i obtain response and make de currency with this data
    http.onreadystatechange = (e) =>{

        //here i get the response in text format
        var response = http.responseText;
        //here i change the formato from text to json
        var responseJSON = JSON.parse(response);

        //print in the console to test if is working
        console.log(responseJSON);
        // store in a variable the data that i want to make my currency
        var usdBrl = responseJSON.quotes.USDBRL;

        
        // get the data from input and change it from string to INT
        var usd = parseInt(document.getElementById('dollar').value);
        // here i make the currency
        var result = usd* usdBrl + " Reais";

        
        //print in the console to test if is working
        console.log(result);
        //print my currency result on the front end
        document.getElementById('resultReal').innerHTML = result;

    }
}
//created a function to convert BRL to USD

function currencyBrlToUsd(){

     //created a variable to be a instance of class XMLHttpRequest

    var http =  new XMLHttpRequest();
    //here is the end point of the API

    const url = 'http://www.apilayer.net/api/live?access_key=0f592d2601bc85f7961ec1a4c10f82c7&format=1';
    //here i prepared to request

    http.open("get",url);
    // send request

    http.send();
    //here i obtain response and make de currency with this data

    http.onreadystatechange = (e) =>{
        //here i get the response in text format

        var response = http.responseText;
        //here i change the formato from text to json

        var responseJSON = JSON.parse(response);
        //print in the console to test if is working

        console.log(responseJSON);
        // store in a variable the data that i want to make my currency

        var usdBrl = responseJSON.quotes.USDBRL;

        
        // get the data from input and change it from string to INT

        var brl = parseInt(document.getElementById('real').value);
        // here i make the currency

        var result = brl/ usdBrl + " Dollars" ;

        //print in the console to test if is working


        console.log(result);
         //print my currency result on the front end

        document.getElementById('resultDolar').innerHTML = result;

    }
}

