import { Stylesheet } from '@fluentui/react';
import React from 'react';
import { INewsModel } from '../../library';
import { Card, CardProps } from './Card';
import styles from './NewsCard.module.css';

export interface NewsCardProps {
    item: INewsModel;
    onClick?: (item: INewsModel) => void;
}

export const NewsCard = (props: NewsCardProps ) => {
    const _onClick = () => {
        if (props.onClick) props.onClick(props.item);
    }

    return(
        <Card onClick={_onClick} className={styles.newsCard}>
            <h2>
                {
                    props.item.title
                }
            </h2>
        </Card>
    );
}