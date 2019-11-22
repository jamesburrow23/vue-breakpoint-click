# vue-breakpoint-click
Responsive click events for VueJS


## Installation

```
npm install vue-breakpoint-click --save
```

## Configuration
Add the directive to vue, I'm using the `click` directive ID but you're free to call it whatever you'd like.
```
import VueBreakpointClick from 'vue-breakpoint-click'

Vue.directive('click', VueBreakpointClick);
```

## Usage
### Default breakpoints
```
{
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
}
```

### Basic Usage
```
v-click:[breakpoints].sm.md.lg.xl="callback"
```

```
<template>
    <a v-click.lg="clicked">Click Me!</a>
</template>


<script>
    export default {
        methods: {
            clicked() {
                alert('This will only fire on screens smaller than 1024px');
            }
        }
    }
</script>
```

### You can also specify your breakpoints manually

```
<template>
    <a v-click:[breakpoints].md="clicked">Click Me!</a>
</template>


<script>
    export default {
        data() {
            return {
                breakpoints: {
                    md: 700,
                }
            }
        },
        methods: {
            clicked() {
                alert('This will only fire on screens smaller than 700px');
            }
        }
    }
</script>
```

### Different callbacks for different screen sizes
```
<template>
    <a v-click.lg="clicked" v-click.sm="clickedIfSmall">Click Me!</a>
</template>


<script>
    export default {
        methods: {
            clicked() {
                alert('This will only fire on screens smaller than 1024px');
            },
            clickedIfSmall() {
                alert('This will only fire on screens smaller than 640px');
            }
        }
    }
</script>
```
