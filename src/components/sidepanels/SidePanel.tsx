import React from 'react';
import { Container } from '../containers/Container';
import styles from './SidePanel.module.css';

export type SidePanelProps = {
    children?: JSX.Element;
}

export const SidePanel = (props: SidePanelProps) => {
    return(
        <Container size='small' height='400px' className={styles.sidePanelContainer}>
            {
                props.children
            }
        </Container>
    );
}