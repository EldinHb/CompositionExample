import React from 'react';
import { withMemo } from '../hoc/WithMemo';
import styles from './Header.module.css';

export type HeaderProps = {
    title?: string;
    className?: string;
}

export const Header = (props: HeaderProps) => {
    return(
        <div className={[styles.header, props.className].join(' ')}>
            {
                props.title
            }
        </div>
    );
}

export const MemoizedHeader = withMemo(Header, ['title', 'className']);