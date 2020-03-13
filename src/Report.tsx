
import React from 'react'; // we need this to make JSX compile
import { TestData} from './TestData';

type ReportProps = {
    data: TestData,
}

export const Report = ( { data }: ReportProps) => <aside>
     <p>Test Report {data.projectName}</p>
</aside>