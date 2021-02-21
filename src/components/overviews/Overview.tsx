import React from 'react';
import { Container } from '../containers/Container';
import { SidePanel } from '../sidepanels';
import styles from './Overview.module.css';

export type OverviewProps<T> = {
    children?: React.ReactNode;
    data: T[];
    onRenderItem: (item: T) => JSX.Element;
    sidePanelContent?: JSX.Element;
    itemsContainerClassName?: string;
}

export const Overview = <T,>(props: OverviewProps<T>) => {
    return(
        <Container size='medium'>
            <SidePanel>
                {props.sidePanelContent}
            </SidePanel>

            <div className={[styles.itemContainer, props.itemsContainerClassName].join(' ')}>
                {
                    props.data.map(x => props.onRenderItem(x))
                }
            </div>
        </Container>
    );
}