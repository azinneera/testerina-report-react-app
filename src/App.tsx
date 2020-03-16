import React from 'react';

import 'fomantic-ui-css/semantic.min.css';
import './App.css';


import { ReportSummary, StatusReport, ModuleStatusSummary, ModuleCoverageSummary } from './StatusReport';
import { TestData} from './TestData';
import { BallerinaLogo } from './BallerinaLogo';

// app.ts

// import data from './data/test_results.json';

let testData: TestData = JSON.parse('__data__')

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
        <h2>{testData.projectName}</h2>
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

