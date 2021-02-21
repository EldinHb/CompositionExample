import React from 'react';
import styles from './Container.module.css';

export type ContainerProps = {
    children?: React.ReactNode;
    flex?: boolean;
    className?: string;
    size?: 'large' | 'medium' | 'small';
    direction?: 'row' | 'column'; 
    centerItems?: boolean;
    height?: string;
    onClick?: () => void;
}

export const Container = (props: ContainerProps) => {

    const _getSize = () => {
        if (!props.size) return styles.medium;
        switch (props.size) {
            case 'large':
                return styles.large;
            case 'medium':
                return styles.medium;
            case 'small':
                return styles.small;
        }
    }

    const _getAlignItems = (): React.CSSProperties => {
        if (props.direction && props.direction === 'column') return { alignItems: 'center' };
        return {
            justifyContent: 'center'
        }
    }

    return(
        <div 
        onClick={props.onClick}
        className={[
            styles.container, 
            styles.flex,
            _getSize(),
            props.className
        ].join(' ')}
        style={{
            height: props.height ? props.height : '100%',
            flexDirection: props.direction ? props.direction : 'row',
            alignItems: props.direction === 'column' ? 'center' : 'start',
        }}
        >
            {
                props.children
            }
        </div>
    );
}