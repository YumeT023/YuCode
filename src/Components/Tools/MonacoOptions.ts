import * as monaco from 'monaco-editor'
import * as theme from './ThemeCollections'

export const MONACO_OPTIONS: monaco.editor.IEditorConstructionOptions = {
    autoIndent: "advanced",
    automaticLayout: true,
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: {
        scale: 1,
        size: "proportional",
        enabled: true
    },
    readOnly: false,
    scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
    },
};

const YuTheme: any = {
    OneDarkPro: theme.OneDarkPro,
    Monokai: theme.Monokai,
    Active4D: theme.Active4D,
    BlackBoard: theme.BlackBoard,
    PastelsOnDark: theme.PastelsOnDark,
    Dracula: theme.Dracula,
    Twilight: theme.Twilight,
    cloudsMidnight: theme.cloudsMidnight,
    IdleFingers: theme.IdleFingers,
}

export const defineAllTheme = () => {
    for (const theme in YuTheme) {
        monaco.editor.defineTheme(theme, YuTheme[theme])
    }
}