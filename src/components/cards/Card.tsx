import React, { ReactNode } from 'react';
import { Container } from '../containers/Container';

export interface CardProps {
    children?: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Card = (props: CardProps) => {
    return(
        <Container size='large' height='300px' onClick={props.onClick} className={props.className}>
            {
                props.children
            }
        </Container>
    );
}