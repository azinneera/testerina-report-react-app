import React, { useState } from 'react'; // we need this to make JSX compile
import { TestData, ModuleStatus, ModuleCoverage} from './TestData';


type ReportProps = {
    data: TestData,
}

type ModuleStatusProps = {
    data: ModuleStatus
}

type ModuleCoverageProps = {
    data: ModuleCoverage
}

export function ReportSummary ({ data }: ReportProps) {
    let isCoverageAvailable = data.moduleCoverage.length > 0
    let coverage = null
    if (isCoverageAvailable) {
        coverage = <div className="five wide column">
            <h4>Code Coverage: {data.coveragePercentage}%</h4>
            <div className="ui progress" data-percent={data.coveragePercentage}>
                <div className="bar" style={{width: data.coveragePercentage+"%"}}>
                <div className="progress">{data.coveragePercentage}%</div>
                </div>
            </div>
        </div>
      }
    return <div className="ui equal width grid summary details">
        <div className="column">
            <div className="ui segment"><i className="vial icon"></i><br />Total<h1 className="title BLACK">{data.totalTests}</h1></div>
        </div>
        <div className="column">
            <div className="ui segment"><i className="check circle outline icon"></i><br/>Passed<h1 className="title PASSED">{data.passed}</h1></div>
        </div>
        <div className="column">
            <div className="ui segment"><i className="times circle outline icon"></i><br/>Failed<h1 className="title FAILURE">{data.failed}</h1></div>
        </div>
        <div className="column">
            <div className="ui segment"><i className="exclamation triangle icon"></i><br/>Skipped<h1 className="title SKIPPED">{data.skipped}</h1></div>
        </div>
        {coverage}
    </div>;
     
}

export function StatusReport({ data }: ReportProps) {
    const [page, setPage] = useState({ page: "index", module: "" });
    let isCoverageAvailable = data.moduleCoverage.length > 0
    let coverageHeaders = null
    if (isCoverageAvailable) {
        coverageHeaders = [<th>Lines Covered</th>,<th>Lines Missed</th>,<th>Coverage Percentage</th>]
    }
    return <div className="ui equal width grid details">
            <table className="ui celled padded striped table">
                <tr>
                    <th>Module Name</th>
                    <th>Total Functions</th>
                    <th><i className="check circle outline icon"></i></th>
                    <th><i className="times circle outline icon"></i></th>
                    <th><i className="exclamation triangle icon"></i></th>
                    {coverageHeaders}
                </tr>

                {data.moduleStatus.map(function(module, index){
                        let coverageData = null
                        if (isCoverageAvailable) {
                            const moduleCov = data.moduleCoverage[index]
                            coverageData = [<td>{moduleCov.coveredLines}</td>,
                            <td>{moduleCov.missedLines}</td>,
                            <td>
                                <div className="ui progress" data-percent={moduleCov.coveragePercentage}>
                                    <div className="bar" style={{width: moduleCov.coveragePercentage+"%"}}>
                                    <div className="progress">{moduleCov.coveragePercentage}%</div>
                                    </div>
                                </div>
                            </td>]
                        }
                        return <tr id={module.name}>
                        <td><a href={"#"+module.name}>{module.name}</a></td>
                        <td>{module.totalTests}</td>
                        <td>{module.passed}</td>
                        <td>{module.failed}</td>
                        <td>{module.skipped}</td>
                        {coverageData}
                        </tr>;
                    })}
            </table>
        
    </div>;
}

export function ModuleStatusSummary ({ data }: ModuleStatusProps) {
    return <div className="seven wide column">
        <h3>Test Status</h3>
        <table className="ui celled padded striped table">
            <tr>
                    <th>Test Name</th>
                    <th>Status</th>
                </tr>
                {data.tests.map(function(test, index) {
                let failure_reason = null
                if (test.status == "FAILURE") {
                    failure_reason =<tr className={test.status}><td colSpan={2}>{test.failureMessage}</td></tr>
                    
                }
                return [<tr className={test.status} id={test.name}>
                    <td>{test.name}</td>
                    <td>{test.status}</td>
                </tr>,failure_reason]
                
                
            })}
        </table>
    </div>;
}

export function ModuleCoverageSummary ({ data }: ModuleCoverageProps) {
    return <div className="nine wide column">
        <h3>Test Coverage</h3>
        <table className="ui celled padded striped table">
            <tr>
                <th>Source File</th>
                <th>Lines Covered</th>
                <th>Lines Missed</th>
                <th>Coverage Percentage</th>
            </tr>
            {data.sourceFiles.map(function(sourceFile, index) {
                return <tr id={sourceFile.name}>
                    <td>{sourceFile.name}</td>
                    <td>{sourceFile.coveredLines.length}</td>
                    <td>{sourceFile.missedLines.length}</td>
                    <td>
                        <div className="ui progress" data-percent={data.coveragePercentage}>
                            <div className="bar" style={{width: data.coveragePercentage+"%"}}>
                                <div className="progress">{data.coveragePercentage}%</div>
                            </div>
                        </div>
                    </td>
                </tr>
            })}
        </table>
    </div>;
}
