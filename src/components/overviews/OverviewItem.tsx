import React from 'react';

export type OverviewItemProps = {
    title: string;
}

export const OverviewItem = (props: OverviewItemProps) => {
    return(
        <div>
            {
                props.title
            }
        </div>
    );
}