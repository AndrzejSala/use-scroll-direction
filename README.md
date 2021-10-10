# use-scroll-direction
A simple, performant and versatile hook for handling scroll in your react app.

## Installation
```bash
npm i use-scroll-direction
```

## Usage
The hook returns the actual scroll direction which could be one of three states: **'NONE', 'DOWN', 'UP'**;

### On window
```tsx
import {useScrollDirection} from "use-scroll-direction";

export const WindowExample = () => {
    const scrollDirection = useScrollDirection();
    useEffect(() => {
        console.log(scrollDirection)
    }, [scrollDirection]);

    return (
      <div>{...}</div>
    )
};

```
### On the element ref
```tsx
import {useScrollDirection} from "use-scroll-direction";

export const ComponentRefExample = () => {
    const elementRef = useRef(null);
    const scrollDirection = useScrollDirection({ref: elementRef});

    return (
        <div ref={elementRef} style={{height: '100vh', overflowY: 'scroll'}} >
            <div>{...}</div>
        </div>
    )
};
```

For more specific examples, check the demo app in `./example`