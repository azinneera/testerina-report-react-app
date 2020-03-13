import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Report } from './Report';
import { TestData} from './TestData';

var data = {"projectName":"ServiceTestProject","moduleStatus":{"bar":{"passed":2,"failed":0,"skipped":0,"tests":{"testFunction":{"status":"PASSED"},"testFunction1":{"status":"PASSED"}}},"myService":{"passed":1,"failed":0,"skipped":0,"tests":{"testServiceFunction":{"status":"PASSED"}}}},"moduleCoverage":{"bar":{"coveredLines":7,"missedLines":1,"coveragePercentage":87.5,"sourceFiles":{"mainBal/main.bal":{"coveredLines":[8,9,10,15,16,23,24],"missedLines":[12],"coveragePercentage":87.5,"sourceCode":"\u003col\u003e\u003cli class \"\"\u003eimport ballerina/io;\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"\"\u003e# Prints `Hello World`.\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"\"\u003epublic function main() {\u003c/li\u003e\n\u003cli class \"\"\u003e    // counter\u003c/li\u003e\n\u003cli class \"\"\u003e    // test\u003c/li\u003e\n\u003cli class \"green\"\u003e    int a \u003d 10;\u003c/li\u003e\n\u003cli class \"green\"\u003e    if (a \u003d\u003d 10) {\u003c/li\u003e\n\u003cli class \"green\"\u003e        io:println(\"a is equal to 10\");\u003c/li\u003e\n\u003cli class \"green\"\u003e    } else {\u003c/li\u003e\n\u003cli class \"red\"\u003e        io:println(\"a is notttttt equal to 10\");\u003c/li\u003e\n\u003cli class \"red\"\u003e    }\u003c/li\u003e\n\u003cli class \"red\"\u003e   \u003c/li\u003e\n\u003cli class \"green\"\u003e    printHello();\u003c/li\u003e\n\u003cli class \"green\"\u003e}\u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e// Prints hello\u003c/li\u003e\n\u003cli class \"green\"\u003e# Prints hello\u003c/li\u003e\n\u003cli class \"green\"\u003epublic function printHello() {\u003c/li\u003e\n\u003cli class \"green\"\u003e    // Prints hello \u003c/li\u003e\n\u003cli class \"green\"\u003e    io:println(\"Hello World!!\");\u003c/li\u003e\n\u003cli class \"green\"\u003e}\u003c/li\u003e\n\u003c/ol\u003e"}}},"myService":{"coveredLines":5,"missedLines":1,"coveragePercentage":83.33333,"sourceFiles":{"main.bal":{"coveredLines":[10,19,20,23,24],"missedLines":[21],"coveragePercentage":83.33333,"sourceCode":"\u003col\u003e\u003cli class \"\"\u003e// A system module containing protocol access constructs\u003c/li\u003e\n\u003cli class \"\"\u003e// Module objects referenced with \u0027http:\u0027 in code\u003c/li\u003e\n\u003cli class \"\"\u003eimport ballerina/http;\u003c/li\u003e\n\u003cli class \"\"\u003eimport ballerina/io;\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"\"\u003e# A service is a network-accessible API\u003c/li\u003e\n\u003cli class \"\"\u003e# Advertised on \u0027/hello\u0027, port comes from listener endpoint\u003c/li\u003e\n\u003cli class \"\"\u003eservice hello on new http:Listener(9393) {\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e    # A resource is an invokable API method\u003c/li\u003e\n\u003cli class \"green\"\u003e    # Accessible at \u0027/hello/sayHello\u003c/li\u003e\n\u003cli class \"green\"\u003e    # \u0027caller\u0027 is the client invoking this resource \u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e    # + caller - Server Connector\u003c/li\u003e\n\u003cli class \"green\"\u003e    # + request - Request\u003c/li\u003e\n\u003cli class \"green\"\u003e    resource function sayHello(http:Caller caller, http:Request request) {\u003c/li\u003e\n\u003cli class \"green\"\u003e        // Send a response back to caller\u003c/li\u003e\n\u003cli class \"green\"\u003e        // -\u003e indicates a synchronous network-bound call\u003c/li\u003e\n\u003cli class \"green\"\u003e        error? result \u003d caller-\u003erespond(\"Hello Test!\");\u003c/li\u003e\n\u003cli class \"green\"\u003e        if (result is error) {\u003c/li\u003e\n\u003cli class \"red\"\u003e            io:println(\"Error in responding\", result);\u003c/li\u003e\n\u003cli class \"red\"\u003e        }\u003c/li\u003e\n\u003cli class \"green\"\u003e    }\u003c/li\u003e\n\u003cli class \"green\"\u003e}\u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003c/ol\u003e"}}}}}

let testData: TestData = data;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { /*<img src={logo} className="App-logo" alt="logo" />*/ }
        Ballerina testreport
      </header>
      <Report data={ testData }/>
    </div>
  );
}

export default App;
