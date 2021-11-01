# use-scroll-direction [![Foo](https://user-images.githubusercontent.com/16742965/138960767-ef7af8a6-da86-4db3-848f-ad8d1aec3beb.png)](https://www.npmjs.com/package/use-scroll-direction)

[![Latest Stable Version](https://img.shields.io/npm/v/use-scroll-direction.svg)](https://www.npmjs.com/package/use-scroll-direction)
[![CI Status](https://github.com/AndrzejSala/use-scroll-direction/workflows/CI/badge.svg)](https://github.com/AndrzejSala/use-scroll-direction/actions)
[![Gzipped size](https://img.shields.io/bundlephobia/min/use-scroll-direction?label=size)](https://www.npmjs.com/package/use-scroll-direction)
[![License](https://img.shields.io/npm/l/use-scroll-direction.svg)](./LICENSE)

A simple, performant, and cross-browser hook for handling scroll in your next react app.

## Installation
```bash
npm i use-scroll-direction
```

## Usage
The hook returns the object with the actual scroll direction which could be one of three states: **'NONE'**, **'DOWN'**, **'UP'**, and useful booleans.

### Use on window object
```tsx
import {useScrollDirection} from "use-scroll-direction";

export const WindowExample = () => {
    const {
        scrollDirection,
        isScrolling,
        isScrollingUp,
        isScrollingDown
    } = useScrollDirection();

    useEffect(() => {
        console.log(scrollDirection)
    }, [scrollDirection]);

    return (
      <div>{...}</div>
    )
};

```
### Use on the specific element
```tsx
import {useScrollDirection} from "use-scroll-direction";

export const ComponentRefExample = () => {
    const elementRef = useRef(null);
    const {scrollDirection} = useScrollDirection({ref: elementRef});

    useEffect(() => {
        console.log(scrollDirection)
    }, [scrollDirection]);

    return (
        //The content needs to overflow a container
        <div ref={elementRef} style={{height: '100vh', overflowY: 'scroll'}} >
            <div>{...}</div>
        </div>
    )
};
```

## Available options

| Name | Type | Description |
| - | - | - |
| `wait` | `?number` | Time in ms for throttling of scroll handler (default: 50)
| `timeToReset` | `?number` | Time in ms after last scroll event to reset the state (default: 250)
| `ref` | `?string` | When passed, the listener will be attached to element instead of window object 
