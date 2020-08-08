import { createContext} from 'react';

type themeType = [{ backgroundColor: string, color: string}, (theme: { backgroundColor: string, color: string }) => void]

// Pass a hook to context
const ThemeContext = createContext<themeType>(
    [ 
        { backgroundColor: 'green', color: 'black' }, 
        // tslint:disable-next-line:no-empty
        () => {}
    ]
);

export default ThemeContext;
