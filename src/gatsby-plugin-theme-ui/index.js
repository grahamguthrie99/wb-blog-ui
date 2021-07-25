import { future } from '@theme-ui/presets'

export default {
    ...future,
    styles: {
        ...future.styles,
    },
    colors: {
        text: '#063831',
        background: '#f5fff9',
        primary: '#25c19b',
        secondary: '#3176f4'
    },
    buttons: {
        primary: {
            color: 'background',
            bg: 'primary',
            '&:hover': {
                bg: 'text',
            }
        },
        secondary: {
            color: 'background',
            bg: 'secondary',
        },
    },
    forms: {
        label: {
            fontSize: 0,
            textTransform: "uppercase"
        }
    },
    sizes: {
        container: 768,
    }
}