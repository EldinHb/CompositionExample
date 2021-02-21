import React from 'react';

export const withMemo = <T,>(component: React.FC<T>, propsToCheck: string[]) => {
    function isEqual(prevProps: any, nextProps: any): boolean {
        let isEqual: boolean = true;
        propsToCheck.forEach(x => {
            if (JSON.stringify(prevProps[x]) !== JSON.stringify(nextProps[x])) {
                isEqual = false;
                return;
            }
        });

        return isEqual;
    }

    return React.memo(component, isEqual);
}