import * as React from 'react';
import {useScrollDirection} from "../../../../src/useScrollDirection";
import {DummyText} from '../../DummyText';

type PropsType = {
    onChangeScrollDirection: (newScrollDirection: string) => void
}

export const WindowExample = ({onChangeScrollDirection}: PropsType) => {
    const scrollDirection = useScrollDirection();
    React.useEffect(() => {
        onChangeScrollDirection(scrollDirection)
    }, [scrollDirection]);

    return (
        <div style={{background: '#fff3d6', height: '2000px'}}>
            <DummyText />
        </div>
    )
};