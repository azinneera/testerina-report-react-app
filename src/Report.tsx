
import React from 'react'; // we need this to make JSX compile

export type TestData = {
    projectName: string,
}

type ReportProps = {
    data: TestData,
}

export const Report = ( { data }: ReportProps) => <aside>
     <p>Test Report {data.projectName}</p>
</aside>