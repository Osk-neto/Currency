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



function currencyUsdToBrl(){

    var http =  new XMLHttpRequest();

    const url = 'http://www.apilayer.net/api/live?access_key=0f592d2601bc85f7961ec1a4c10f82c7&format=1';

    http.open("get",url);

    http.send();

    http.onreadystatechange = (e) =>{

        var response = http.responseText;

        var responseJSON = JSON.parse(response);

        console.log(responseJSON);
        var usdBrl = responseJSON.quotes.USDBRL;

        //console.log(usdBrl);
        
        var usd = parseInt(document.getElementById('dollar').value);

        var result = usd* usdBrl + " Reais";

        

        console.log(result);
        document.getElementById('resultReal').innerHTML = result;

    }
}

function currencyBrlToUsd(){

    var http =  new XMLHttpRequest();

    const url = 'http://www.apilayer.net/api/live?access_key=0f592d2601bc85f7961ec1a4c10f82c7&format=1';

    http.open("get",url);

    http.send();

    http.onreadystatechange = (e) =>{

        var response = http.responseText;

        var responseJSON = JSON.parse(response);

        console.log(responseJSON);
        var usdBrl = responseJSON.quotes.USDBRL;

        //console.log(usdBrl);
        
        var brl = parseInt(document.getElementById('real').value);

        var result = brl/ usdBrl + " Dollars" ;

        

        console.log(result);
        document.getElementById('resultDolar').innerHTML = result;

    }
}

