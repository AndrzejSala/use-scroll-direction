import * as React from 'react';
import {useScrollDirection} from "../../../../src";
import {DummyText} from '../../DummyText';

type PropsType = {
    onChangeScrollDirection: (newScrollDirection: string) => void
}

export const ComponentRefExample = ({onChangeScrollDirection}: PropsType) => {
    const elementRef = React.useRef(null);
    const scrollDirection = useScrollDirection({ref: elementRef});
    React.useEffect(() => {
        onChangeScrollDirection(scrollDirection)
    }, [scrollDirection]);

    return (
        <div ref={elementRef} style={{background: '#fff3d6', width: '700px', height: '100vh', overflowY: 'scroll'}} >
            <div style={{background: '#fbbe2e', width: '500px', height: '2000px',}}>
                <DummyText />
            </div>
        </div>
    )
};
