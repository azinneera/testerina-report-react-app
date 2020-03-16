import React from 'react';

import 'fomantic-ui-css/semantic.min.css';
import './App.css';


import { ReportSummary, StatusReport, ModuleStatusSummary, ModuleCoverageSummary } from './StatusReport';
import { TestData} from './TestData';
import { BallerinaLogo } from './BallerinaLogo';

// app.ts

import data from './data/test_results.json';

// var data = {
//   "projectName":"ServiceTestProject","totalTests":3,"passed":3,"failed":0,"skipped":0,"coveredLines":12,"missedLines":2,"coveragePercentage":85.71429,"moduleStatus":[{"name":"bar","totalTests":2,"passed":2,"failed":0,"skipped":0,"tests":[{"name":"testFunction1","status":"FAILED", "failure_reason":"assertError"},{"name":"testFunction","status":"PASSED"}]},{"name":"myService","totalTests":1,"passed":1,"failed":0,"skipped":0,"tests":[{"name":"testServiceFunction","status":"PASSED"}]}],"moduleCoverage":[{"name":"bar","coveredLines":7,"missedLines":1,"coveragePercentage":87.5,"sourceFiles":[{"name":"mainBal/main.bal","coveredLines":[8,9,10,15,16,23,24],"missedLines":[12],"coveragePercentage":87.5,"sourceCode":"import ballerina/io;\n\n# Prints `Hello World`.\n\npublic function main() {\n    // counter\n    // test\n    int a \u003d 10;\n    if (a \u003d\u003d 10) {\n        io:println(\"a is equal to 10\");\n    } else {\n        io:println(\"a is notttttt equal to 10\");\n    }\n   \n    printHello();\n}\n\n\n// Prints hello\n# Prints hello\npublic function printHello() {\n    // Prints hello \n    io:println(\"Hello World!!\");\n}\n"}]},{"name":"myService","coveredLines":5,"missedLines":1,"coveragePercentage":83.33333,"sourceFiles":[{"name":"main.bal","coveredLines":[10,19,20,23,24],"missedLines":[21],"coveragePercentage":83.33333,"sourceCode":"// A system module containing protocol access constructs\n// Module objects referenced with \u0027http:\u0027 in code\nimport ballerina/http;\nimport ballerina/io;\n\n# A service is a network-accessible API\n# Advertised on \u0027/hello\u0027, port comes from listener endpoint\nservice hello on new http:Listener(9393) {\n\n    # A resource is an invokable API method\n    # Accessible at \u0027/hello/sayHello\n    # \u0027caller\u0027 is the client invoking this resource \n\n    # + caller - Server Connector\n    # + request - Request\n    resource function sayHello(http:Caller caller, http:Request request) {\n        // Send a response back to caller\n        // -\u003e indicates a synchronous network-bound call\n        error? result \u003d caller-\u003erespond(\"Hello Test!\");\n        if (result is error) {\n            io:println(\"Error in responding\", result);\n        }\n    }\n}\n\n"}]}]
// }
 //"projectName":"ServiceTestProject","passed":1,"failed":0,"skipped":0,"coveredLines":0,"missedLines":4,"coveragePercentage":0.0,"moduleStatus":{"bar":{"passed":2,"failed":0,"skipped":0,"tests":{"testFunction":{"status":"PASSED"},"testFunction1":{"status":"PASSED"}}},"myService":{"passed":1,"failed":0,"skipped":0,"tests":{"testServiceFunction":{"status":"PASSED"}}}},"moduleCoverage":{"bar":{"coveredLines":7,"missedLines":1,"coveragePercentage":87.5,"sourceFiles":{"mainBal/main.bal":{"coveredLines":[8,9,10,15,16,23,24],"missedLines":[12],"coveragePercentage":87.5,"sourceCode":"\u003col\u003e\u003cli class \"\"\u003eimport ballerina/io;\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"\"\u003e# Prints `Hello World`.\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"\"\u003epublic function main() {\u003c/li\u003e\n\u003cli class \"\"\u003e    // counter\u003c/li\u003e\n\u003cli class \"\"\u003e    // test\u003c/li\u003e\n\u003cli class \"green\"\u003e    int a \u003d 10;\u003c/li\u003e\n\u003cli class \"green\"\u003e    if (a \u003d\u003d 10) {\u003c/li\u003e\n\u003cli class \"green\"\u003e        io:println(\"a is equal to 10\");\u003c/li\u003e\n\u003cli class \"green\"\u003e    } else {\u003c/li\u003e\n\u003cli class \"red\"\u003e        io:println(\"a is notttttt equal to 10\");\u003c/li\u003e\n\u003cli class \"red\"\u003e    }\u003c/li\u003e\n\u003cli class \"red\"\u003e   \u003c/li\u003e\n\u003cli class \"green\"\u003e    printHello();\u003c/li\u003e\n\u003cli class \"green\"\u003e}\u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e// Prints hello\u003c/li\u003e\n\u003cli class \"green\"\u003e# Prints hello\u003c/li\u003e\n\u003cli class \"green\"\u003epublic function printHello() {\u003c/li\u003e\n\u003cli class \"green\"\u003e    // Prints hello \u003c/li\u003e\n\u003cli class \"green\"\u003e    io:println(\"Hello World!!\");\u003c/li\u003e\n\u003cli class \"green\"\u003e}\u003c/li\u003e\n\u003c/ol\u003e"}}},"myService":{"coveredLines":5,"missedLines":1,"coveragePercentage":83.33333,"sourceFiles":{"main.bal":{"coveredLines":[10,19,20,23,24],"missedLines":[21],"coveragePercentage":83.33333,"sourceCode":"\u003col\u003e\u003cli class \"\"\u003e// A system module containing protocol access constructs\u003c/li\u003e\n\u003cli class \"\"\u003e// Module objects referenced with \u0027http:\u0027 in code\u003c/li\u003e\n\u003cli class \"\"\u003eimport ballerina/http;\u003c/li\u003e\n\u003cli class \"\"\u003eimport ballerina/io;\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"\"\u003e# A service is a network-accessible API\u003c/li\u003e\n\u003cli class \"\"\u003e# Advertised on \u0027/hello\u0027, port comes from listener endpoint\u003c/li\u003e\n\u003cli class \"\"\u003eservice hello on new http:Listener(9393) {\u003c/li\u003e\n\u003cli class \"\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e    # A resource is an invokable API method\u003c/li\u003e\n\u003cli class \"green\"\u003e    # Accessible at \u0027/hello/sayHello\u003c/li\u003e\n\u003cli class \"green\"\u003e    # \u0027caller\u0027 is the client invoking this resource \u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003cli class \"green\"\u003e    # + caller - Server Connector\u003c/li\u003e\n\u003cli class \"green\"\u003e    # + request - Request\u003c/li\u003e\n\u003cli class \"green\"\u003e    resource function sayHello(http:Caller caller, http:Request request) {\u003c/li\u003e\n\u003cli class \"green\"\u003e        // Send a response back to caller\u003c/li\u003e\n\u003cli class \"green\"\u003e        // -\u003e indicates a synchronous network-bound call\u003c/li\u003e\n\u003cli class \"green\"\u003e        error? result \u003d caller-\u003erespond(\"Hello Test!\");\u003c/li\u003e\n\u003cli class \"green\"\u003e        if (result is error) {\u003c/li\u003e\n\u003cli class \"red\"\u003e            io:println(\"Error in responding\", result);\u003c/li\u003e\n\u003cli class \"red\"\u003e        }\u003c/li\u003e\n\u003cli class \"green\"\u003e    }\u003c/li\u003e\n\u003cli class \"green\"\u003e}\u003c/li\u003e\n\u003cli class \"green\"\u003e\u003c/li\u003e\n\u003c/ol\u003e"}}}}}

let testData: TestData = data;

function App() {
  let isCoverageAvailable = testData.moduleCoverage.length > 0
  let statusIcon
  if (testData.failed > 0) {
    statusIcon = <i className="times circle outline icon"></i>
  } else if (testData.passed > 0) {
    statusIcon = <i className="check circle outline icon"></i>
  } else {
    statusIcon = <i className="exclamation triangle icon"></i>
  }

  return (
    <div className="App">
    <div className="ui container">
      <header className="App-header ui equal wide grid">
        <div className="twelve wide column">
        <h1><BallerinaLogo></BallerinaLogo> Test Report</h1>
      </div>
      <div className="title_projectname four wide column">
        <h2>{statusIcon} {testData.projectName}</h2>
      </div>
      </header>
      <ReportSummary data={testData}/>
      <StatusReport data={ testData }/>

      {testData.moduleStatus.map(function(test, index) {
                let moduleCoverageHtml = null
                if (isCoverageAvailable) {
                  moduleCoverageHtml = <ModuleCoverageSummary data={testData.moduleCoverage[index]} />
                }
                return <div className="ui equal width grid details">
                  <h2 id={testData.moduleStatus[index].name} className="ui dividing header sixteen wide column">{testData.moduleStatus[index].name}</h2>
                  <ModuleStatusSummary data={testData.moduleStatus[index]}/>
                  {moduleCoverageHtml}
                </div>

            })}
    </div>
    </div>
  );
}

export default App;

