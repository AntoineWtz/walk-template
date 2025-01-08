// Types img personnalisés
declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

// Flag revendeurs
declare module 'react-world-flags' {
    import { FC } from 'react';

    interface FlagProps {
        code: string;
        className?: string;
    }

    const Flag: FC<FlagProps>;
    export default Flag;
}