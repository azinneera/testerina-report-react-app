
import React, { useState } from 'react'; // we need this to make JSX compile
import { TestData } from './TestData';

type ReportProps = {
    data: TestData,
}

export function Report({ data }: ReportProps) {
    const [page, setPage] = useState({ page: "index", module: "" });
    
    return <aside>
    <h2>{data.projectName}</h2>
    <div className="ui equal width grid">
        <div className="column">
            <div className="ui segment">
                <h2>81</h2>
                <div>Total Tests</div>
            </div>
        </div>
        <div className="column">
            <div className="ui segment">
                <h2>40/81</h2>
                <div>Passed</div>
            </div>
        </div>
        <div className="column">
            <div className="ui segment">
                <h2>18/81</h2>
                <div>Failed</div>
            </div>
        </div>
        <div className="column">
            <div className="ui segment">
                <h2>23/81</h2>
                <div>Skipped</div>
            </div>
        </div>
        <div className="six wide column">
            <div className="ui segment">
                <div>Code Coverage : 62%</div>
            </div>
        </div>
    </div>
    <table className="ui celled table">
        <thead>
            <tr>
                <th>Module</th>
                <th>Total Tests</th>
                <th>Passed</th>
                <th>Faild</th>
                <th>Skiped</th>
                <th>Lines Covered</th>
                <th>Lines Missed</th>
                <th>Coverage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>myService</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</aside>;

}