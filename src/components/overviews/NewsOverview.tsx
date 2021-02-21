import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import { INewsModel, search } from '../../library';
import { NewsCard } from '../cards';
import { Container } from '../containers/Container';
import { Header, MemoizedHeader } from '../headers';
import { Overview } from './Overview';
import styles from './NewsOverview.module.css';

export type NewsOverviewProps = {
}

export const NewsOverview = (props: NewsOverviewProps) => {
    
    const [newsItems, setNewsItems] = useState<INewsModel[]>([]);
    const [originalItems, setOriginalItems] = useState<INewsModel[]>([]);

    useEffect(() => {
        const items = search.getNewsItems(20);
        setNewsItems([...items]);
        setOriginalItems([...items]);
    }, []);

    const onItemClick = (item: INewsModel) => {
        setNewsItems(oldItems => [...oldItems.filter(x => x.title !== item.title)]);
    }

    const renderItem = (item: INewsModel): JSX.Element => {
        return(
            <NewsCard
                key={item.id}
                item={item}
                onClick={onItemClick}
            />
        );
    }

    const renderSidePanelItems = (): JSX.Element => {
        return(
            <>
                <ChoiceGroup
                     options={[
                         {
                             key: 'NoFilter',
                             text: 'No filter'
                         },
                         {
                             key: 'EvenNumbers',
                             text: 'Even numbers'
                         },
                         {
                             key: 'OddNumbers',
                             text: 'Odd numbers'
                         }
                     ]}
                     
                     defaultSelectedKey='NoFilter'
                     onChange={(_, option) => _onFilterChange(_, option)}
                />
            </>
        );    
    }

    const _onFilterChange = (_: any, option?: IChoiceGroupOption) => {
        if (!option) return;

        switch (option.key) {
            case 'EvenNumbers':
                setNewsItems([...originalItems.filter(x => x.id % 2 === 0)]);
                break;
            case 'OddNumbers':
                setNewsItems([...originalItems.filter(x => x.id % 2 !== 0)]);
                break;
            case 'NoFilter':
                setNewsItems([...originalItems]);
                break;
        }
    }

    return(
        <Container size='large' direction='column'>
            <Header title='Composition' className={styles.container}/>
            <Overview
                data={newsItems}
                onRenderItem={renderItem}
                sidePanelContent={renderSidePanelItems()}
            />
        </Container>
    );
}