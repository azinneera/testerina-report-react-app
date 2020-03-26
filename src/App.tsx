import React, { Component } from 'react';

//import 'fomantic-ui-css/semantic.min.css';
import './App.css';

import ProjectReport, { ReportSummary } from './StatusReport';
import ModuleStatusSummary, { ModuleSummaryView } from './ModuleReport';
import { TestData} from './TestData';
import { BallerinaLogo } from './BallerinaLogo';
import {ReactComponent as PassedIcon} from "./images/success.svg";
import {ReactComponent as FailedIcon} from "./images/failed.svg";
import {ReactComponent as SkippedIcon} from "./images/skipped.svg";

// app.ts

import data from './test_results.json';
import ModuleCoverageSummary from './ModuleCoverage';
import FileCoverage from './FileCoverage';

//let testData: TestData = JSON.parse('__data__')
let testData: TestData = data

interface IState {
  view: string;
  moduleIndex: number
  fileIndex: number
}

class App extends Component {
  state: IState;
  constructor(props: any) {
    super(props);
    this.state = { view: "index", moduleIndex: 0 , fileIndex: 0}
    this.handleStateChange = this.handleStateChange.bind(this);
  }
 
  handleStateChange (value: string, moduleIndex: number, fileIndex: number) {
      this.setState({ view: value, moduleIndex: moduleIndex, fileIndex: fileIndex});
  }

  getModuleTableView(testData: TestData, moduleIndex: number, isCoverageAvailable: boolean) {
    let moduleCoverageHtml = null
    if (isCoverageAvailable) {
      moduleCoverageHtml = <ModuleCoverageSummary 
      module={testData.moduleCoverage[this.state.moduleIndex]} 
      modIndex={this.state.moduleIndex} 
      updateState={this.handleStateChange}
      />
      
    }
    return <div className="module-content">
      <div className="title row">
      <span className="back-arrow" onClick={() => this.handleStateChange("index", 0, 0)}>&#60;</span>
      <h5 id={testData.moduleStatus[moduleIndex].name}>
      {testData.moduleStatus[moduleIndex].name}
      </h5>
    
      </div>
      <div className="row">
      <ModuleStatusSummary module={testData.moduleStatus[moduleIndex]}/>
      {moduleCoverageHtml}
    </div>
  </div>
  }
 
  render() {

    let isCoverageAvailable = testData.moduleCoverage.length > 0
    let statusIcon
    let statusReport = null
    if (testData.failed > 0) {
      statusIcon = <FailedIcon className="icon failed-icon" />
    } else if (testData.passed > 0) {
      statusIcon = <PassedIcon className="icon passed-icon" />
    } else {
      statusIcon = <SkippedIcon className="icon skipped-icon" />
    }

    let projName = testData.projectName
    // if (!projName.includes(".bal")) {
    //   statusReport = <StatusReport data={ testData }/>  
    // }
    let tableView
    let summaryView
    let coveragetableView = null
    if (this.state.view.includes("index")) {
        tableView = <ProjectReport data={testData} updateState={this.handleStateChange} />
        summaryView = <ReportSummary data={testData}/>
    } else if (this.state.view.includes("module")){
        console.log(testData.moduleStatus[this.state.moduleIndex])
        tableView = this.getModuleTableView(testData, this.state.moduleIndex, isCoverageAvailable)
        summaryView = <ModuleSummaryView data={testData} index={this.state.moduleIndex}/> 
      } else if (this.state.view.includes("coverage")){
        tableView = null
        summaryView = <FileCoverage 
        moduleName={testData.moduleCoverage[this.state.moduleIndex].name}
        modIndex={this.state.moduleIndex}
        file={testData.moduleCoverage[this.state.moduleIndex].sourceFiles[this.state.fileIndex]} 
        updateState={this.handleStateChange}
        />
    }
    return (
      // <div>
      //   <div className="h1 bg-secondary text-white text-center p-2">
      //     {this.state.view}
      //   </div>
      //   <div className="text-center">
      //     <button className="btn btn-secondary" onClick={this.loadModuleSummary}>
      //       Click Me
      //     </button>
      //   </div>
      // </div>



// --------------------------------------------

<div className="App">
  <div className="header-section">
    <div className="container-fluid">
      <header className="App-header row justify-content-md-center">
        <div className="col-sm-6">
          <div className="row">
            <span className="logo pull-left"><BallerinaLogo /></span>
            <h4 className="header-title">Test Report</h4>
          </div>
        </div>
        <div className="title_projectname col-sm-2">
        <h4>{statusIcon} {testData.projectName}</h4>
      </div>
      
      </header>
      </div>
  </div>
  <div className="container-fluid content-section">
      {summaryView}
  </div>
  <div className="container-fluid content-section">
      {tableView}
      {coveragetableView}
  </div>
</div>

    );
  }
}

export default App;
