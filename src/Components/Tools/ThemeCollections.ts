import * as monaco from 'monaco-editor'

export const OneDarkPro : monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: '', foreground: 'D4D4D4', background: '282C34' },
        { token: 'invalid', foreground: 'f44747' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },
        { token: 'function', foreground: '61afef', fontStyle: 'italic' },
        { token: 'variable.predefined', foreground: 'e06c75' },
        { token: 'variable.parameter', foreground: '9CDCFE', fontStyle: 'italic' },
        { token: 'constant', foreground: 'cd6839' },
        { token: 'comment', foreground: '7f848e' },
        { token: 'number', foreground: 'd19a66' },
        { token: 'number.hex', foreground: 'd19a66' },
        { token: 'regexp', foreground: 'e06c75' },
        { token: 'annotation', foreground: 'cc6666' },
        { token: 'type', foreground: '3DC9B0' },
        { token: 'delimiter', foreground: 'DCDCDC' },
        { token: 'method', foreground: '61afef' },
        { token: 'delimiter.html', foreground: '808080' },
        { token: 'delimiter.xml', foreground: '808080' },
        { token: 'tag', foreground: '569CD6' },
        { token: 'tag.id.pug', foreground: '4F76AC' },
        { token: 'tag.class.pug', foreground: '4F76AC' },
        { token: 'meta.scss', foreground: 'A79873' },
        { token: 'meta.tag', foreground: 'CE9178' },
        { token: 'metatag', foreground: 'DD6A6F' },
        { token: 'metatag.content.html', foreground: '9CDCFE' },
        { token: 'metatag.html', foreground: '569CD6' },
        { token: 'metatag.xml', foreground: '569CD6' },
        { token: 'metatag.php', fontStyle: 'bold' },
        { token: 'key', foreground: 'e06c75', fontStyle: 'italic' },
        { token: 'string.key.json', foreground: '9CDCFE' },
        { token: 'string.value.json', foreground: 'CE9178' },
        { token: 'attribute.name', foreground: '9CDCFE' },
        { token: 'attribute.value', foreground: 'CE9178' },
        { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
        { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
        { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },
        { token: 'string', foreground: '98c379' },
        { token: 'string.sql', foreground: '98c379' },
        { token: 'keyword', foreground: 'c678dd' },
        { token: 'keyword.flow', foreground: 'C586C0' },
        { token: 'keyword.json', foreground: 'CE9178' },
        { token: 'keyword.flow.scss', foreground: '569CD6' },
        { token: 'predefined.sql', foreground: 'FF00FF' },
        { token: 'identifier', foreground: 'e06c75' },
        { token: 'listFocusBackground', background: '252525'}
    ],
    encodedTokensColors: [],
    colors: {
        ['editor.background'] : '#282C34',
        'editor.lineHighlightBackground': '#303541',
    }
}
export const cloudsMidnight: monaco.editor.IStandaloneThemeData = {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
        {
        "background": "191919",
        "token": ""
        },
        {
        "foreground": "3c403b",
        "token": "comment"
        },
        {
        "foreground": "5d90cd",
        "token": "string"
        },
        {
        "foreground": "46a609",
        "token": "constant.numeric"
        },
        {
        "foreground": "39946a",
        "token": "constant.language"
        },
        {
        "foreground": "927c5d",
        "token": "keyword"
        },
        {
        "foreground": "927c5d",
        "token": "support.constant.property-value"
        },
        {
        "foreground": "927c5d",
        "token": "constant.other.color"
        },
        {
        "foreground": "366f1a",
        "token": "keyword.other.unit"
        },
        {
        "foreground": "a46763",
        "token": "entity.other.attribute-name.html"
        },
        {
        "foreground": "4b4b4b",
        "token": "keyword.operator"
        },
        {
        "foreground": "e92e2e",
        "token": "storage"
        },
        {
        "foreground": "858585",
        "token": "entity.other.inherited-class"
        },
        {
        "foreground": "606060",
        "token": "entity.name.tag"
        },
        {
        "foreground": "a165ac",
        "token": "constant.character.entity"
        },
        {
        "foreground": "a165ac",
        "token": "support.class.js"
        },
        {
        "foreground": "606060",
        "token": "entity.other.attribute-name"
        },
        {
        "foreground": "e92e2e",
        "token": "meta.selector.css"
        },
        {
        "foreground": "e92e2e",
        "token": "entity.name.tag.css"
        },
        {
        "foreground": "e92e2e",
        "token": "entity.other.attribute-name.id.css"
        },
        {
        "foreground": "e92e2e",
        "token": "entity.other.attribute-name.class.css"
        },
        {
        "foreground": "616161",
        "token": "meta.property-name.css"
        },
        {
        "foreground": "e92e2e",
        "token": "support.function"
        },
        {
        "foreground": "ffffff",
        "background": "e92e2e",
        "token": "invalid"
        },
        {
        "foreground": "e92e2e",
        "token": "punctuation.section.embedded"
        },
        {
        "foreground": "606060",
        "token": "punctuation.definition.tag"
        },
        {
        "foreground": "a165ac",
        "token": "constant.other.color.rgb-value.css"
        },
        {
        "foreground": "a165ac",
        "token": "support.constant.property-value.css"
        }
    ],
    "colors": {
        "editor.foreground": "#929292",
        "editor.background": "#191919",
        "editor.selectionBackground": "#000000",
        "editor.lineHighlightBackground": "#D7D7D708",
        "editorCursor.foreground": "#7DA5DC",
        "editorWhitespace.foreground": "#BFBFBF"
    }
}
export const Active4D: monaco.editor.IStandaloneThemeData = 
{
    "base": "vs",
    "inherit": true,
    "rules": [
      {
        "background": "FFFFFF",
        "token": ""
      },
      {
        "background": "e2e9ff5e",
        "token": "text.html source.active4d"
      },
      {
        "foreground": "000000",
        "token": "text.xml"
      },
      {
        "foreground": "af82d4",
        "token": "comment.line"
      },
      {
        "foreground": "af82d4",
        "token": "comment.block"
      },
      {
        "foreground": "666666",
        "token": "string"
      },
      {
        "foreground": "66ccff",
        "fontStyle": "bold",
        "token": "string.interpolated variable"
      },
      {
        "foreground": "a8017e",
        "token": "constant.numeric"
      },
      {
        "foreground": "66ccff",
        "fontStyle": "bold",
        "token": "constant.other.date"
      },
      {
        "foreground": "66ccff",
        "fontStyle": "bold",
        "token": "constant.other.time"
      },
      {
        "foreground": "a535ae",
        "token": "constant.language"
      },
      {
        "foreground": "6392ff",
        "fontStyle": "bold",
        "token": "variable.other.local"
      },
      {
        "foreground": "0053ff",
        "fontStyle": "bold",
        "token": "variable"
      },
      {
        "foreground": "6988ae",
        "token": "variable.other.table-field"
      },
      {
        "foreground": "006699",
        "fontStyle": "bold",
        "token": "keyword"
      },
      {
        "foreground": "ff5600",
        "token": "storage"
      },
      {
        "foreground": "21439c",
        "token": "entity.name.type"
      },
      {
        "foreground": "21439c",
        "token": "entity.name.function"
      },
      {
        "foreground": "7a7a7a",
        "token": "meta.tag"
      },
      {
        "foreground": "016cff",
        "token": "entity.name.tag"
      },
      {
        "foreground": "963dff",
        "token": "entity.other.attribute-name"
      },
      {
        "foreground": "45ae34",
        "fontStyle": "bold",
        "token": "support.function"
      },
      {
        "foreground": "b7734c",
        "token": "support.constant"
      },
      {
        "foreground": "a535ae",
        "token": "support.type"
      },
      {
        "foreground": "a535ae",
        "token": "support.class"
      },
      {
        "foreground": "a535ae",
        "token": "support.variable"
      },
      {
        "foreground": "ffffff",
        "background": "990000",
        "token": "invalid"
      },
      {
        "foreground": "ffffff",
        "background": "656565",
        "token": "meta.diff"
      },
      {
        "foreground": "ffffff",
        "background": "1b63ff",
        "token": "meta.diff.range"
      },
      {
        "foreground": "000000",
        "background": "ff7880",
        "token": "markup.deleted.diff"
      },
      {
        "foreground": "000000",
        "background": "98ff9a",
        "token": "markup.inserted.diff"
      },
      {
        "foreground": "5e5e5e",
        "token": "source.diff"
      }
    ],
    "colors": {
      "editor.foreground": "#3B3B3B",
      "editor.background": "#FFFFFF",
      "editor.selectionBackground": "#BAD6FD",
      "editor.lineHighlightBackground": "#00000012",
      "editorCursor.foreground": "#000000",
      "editorWhitespace.foreground": "#BFBFBF"
    }
}
export const BlackBoard: monaco.editor.IStandaloneThemeData = {
  "base": "vs-dark",
  "inherit": true,
  "rules": [
    {
      "background": "0C1021",
      "token": ""
    },
    {
      "foreground": "aeaeae",
      "token": "comment"
    },
    {
      "foreground": "d8fa3c",
      "token": "constant"
    },
    {
      "foreground": "ff6400",
      "token": "entity"
    },
    {
      "foreground": "fbde2d",
      "token": "keyword"
    },
    {
      "foreground": "fbde2d",
      "token": "storage"
    },
    {
      "foreground": "61ce3c",
      "token": "string"
    },
    {
      "foreground": "61ce3c",
      "token": "meta.verbatim"
    },
    {
      "foreground": "8da6ce",
      "token": "support"
    },
    {
      "foreground": "ab2a1d",
      "fontStyle": "italic",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "f8f8f8",
      "background": "9d1e15",
      "token": "invalid.illegal"
    },
    {
      "foreground": "ff6400",
      "fontStyle": "italic",
      "token": "entity.other.inherited-class"
    },
    {
      "foreground": "ff6400",
      "token": "string constant.other.placeholder"
    },
    {
      "foreground": "becde6",
      "token": "meta.function-call.py"
    },
    {
      "foreground": "7f90aa",
      "token": "meta.tag"
    },
    {
      "foreground": "7f90aa",
      "token": "meta.tag entity"
    },
    {
      "foreground": "ffffff",
      "token": "entity.name.section"
    },
    {
      "foreground": "d5e0f3",
      "token": "keyword.type.variant"
    },
    {
      "foreground": "f8f8f8",
      "token": "source.ocaml keyword.operator.symbol"
    },
    {
      "foreground": "8da6ce",
      "token": "source.ocaml keyword.operator.symbol.infix"
    },
    {
      "foreground": "8da6ce",
      "token": "source.ocaml keyword.operator.symbol.prefix"
    },
    {
      "fontStyle": "underline",
      "token": "source.ocaml keyword.operator.symbol.infix.floating-point"
    },
    {
      "fontStyle": "underline",
      "token": "source.ocaml keyword.operator.symbol.prefix.floating-point"
    },
    {
      "fontStyle": "underline",
      "token": "source.ocaml constant.numeric.floating-point"
    },
    {
      "background": "ffffff08",
      "token": "text.tex.latex meta.function.environment"
    },
    {
      "background": "7a96fa08",
      "token": "text.tex.latex meta.function.environment meta.function.environment"
    },
    {
      "foreground": "fbde2d",
      "token": "text.tex.latex support.function"
    },
    {
      "foreground": "ffffff",
      "token": "source.plist string.unquoted"
    },
    {
      "foreground": "ffffff",
      "token": "source.plist keyword.operator"
    }
  ],
  "colors": {
    "editor.foreground": "#F8F8F8",
    "editor.background": "#0C1021",
    "editor.selectionBackground": "#253B76",
    "editor.lineHighlightBackground": "#FFFFFF0F",
    "editorCursor.foreground": "#FFFFFFA6",
    "editorWhitespace.foreground": "#FFFFFF40"
  }
}
export const Dracula: monaco.editor.IStandaloneThemeData = {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
      {
        "background": "282a36",
        "token": ""
      },
      {
        "foreground": "6272a4",
        "token": "comment"
      },
      {
        "foreground": "f1fa8c",
        "token": "string"
      },
      {
        "foreground": "bd93f9",
        "token": "constant.numeric"
      },
      {
        "foreground": "bd93f9",
        "token": "constant.language"
      },
      {
        "foreground": "bd93f9",
        "token": "constant.character"
      },
      {
        "foreground": "bd93f9",
        "token": "constant.other"
      },
      {
        "foreground": "ffb86c",
        "token": "variable.other.readwrite.instance"
      },
      {
        "foreground": "ff79c6",
        "token": "constant.character.escaped"
      },
      {
        "foreground": "ff79c6",
        "token": "constant.character.escape"
      },
      {
        "foreground": "ff79c6",
        "token": "string source"
      },
      {
        "foreground": "ff79c6",
        "token": "string source.ruby"
      },
      {
        "foreground": "ff79c6",
        "token": "keyword"
      },
      {
        "foreground": "ff79c6",
        "token": "storage"
      },
      {
        "foreground": "8be9fd",
        "fontStyle": "italic",
        "token": "storage.type"
      },
      {
        "foreground": "50fa7b",
        "fontStyle": "underline",
        "token": "entity.name.class"
      },
      {
        "foreground": "50fa7b",
        "fontStyle": "italic underline",
        "token": "entity.other.inherited-class"
      },
      {
        "foreground": "50fa7b",
        "token": "entity.name.function"
      },
      {
        "foreground": "ffb86c",
        "fontStyle": "italic",
        "token": "variable.parameter"
      },
      {
        "foreground": "ff79c6",
        "token": "entity.name.tag"
      },
      {
        "foreground": "50fa7b",
        "token": "entity.other.attribute-name"
      },
      {
        "foreground": "8be9fd",
        "token": "support.function"
      },
      {
        "foreground": "6be5fd",
        "token": "support.constant"
      },
      {
        "foreground": "66d9ef",
        "fontStyle": " italic",
        "token": "support.type"
      },
      {
        "foreground": "66d9ef",
        "fontStyle": " italic",
        "token": "support.class"
      },
      {
        "foreground": "f8f8f0",
        "background": "ff79c6",
        "token": "invalid"
      },
      {
        "foreground": "f8f8f0",
        "background": "bd93f9",
        "token": "invalid.deprecated"
      },
      {
        "foreground": "cfcfc2",
        "token": "meta.structure.dictionary.json string.quoted.double.json"
      },
      {
        "foreground": "6272a4",
        "token": "meta.diff"
      },
      {
        "foreground": "6272a4",
        "token": "meta.diff.header"
      },
      {
        "foreground": "ff79c6",
        "token": "markup.deleted"
      },
      {
        "foreground": "50fa7b",
        "token": "markup.inserted"
      },
      {
        "foreground": "e6db74",
        "token": "markup.changed"
      },
      {
        "foreground": "bd93f9",
        "token": "constant.numeric.line-number.find-in-files - match"
      },
      {
        "foreground": "e6db74",
        "token": "entity.name.filename"
      },
      {
        "foreground": "f83333",
        "token": "message.error"
      },
      {
        "foreground": "eeeeee",
        "token": "punctuation.definition.string.begin.json - meta.structure.dictionary.value.json"
      },
      {
        "foreground": "eeeeee",
        "token": "punctuation.definition.string.end.json - meta.structure.dictionary.value.json"
      },
      {
        "foreground": "8be9fd",
        "token": "meta.structure.dictionary.json string.quoted.double.json"
      },
      {
        "foreground": "f1fa8c",
        "token": "meta.structure.dictionary.value.json string.quoted.double.json"
      },
      {
        "foreground": "50fa7b",
        "token": "meta meta meta meta meta meta meta.structure.dictionary.value string"
      },
      {
        "foreground": "ffb86c",
        "token": "meta meta meta meta meta meta.structure.dictionary.value string"
      },
      {
        "foreground": "ff79c6",
        "token": "meta meta meta meta meta.structure.dictionary.value string"
      },
      {
        "foreground": "bd93f9",
        "token": "meta meta meta meta.structure.dictionary.value string"
      },
      {
        "foreground": "50fa7b",
        "token": "meta meta meta.structure.dictionary.value string"
      },
      {
        "foreground": "ffb86c",
        "token": "meta meta.structure.dictionary.value string"
      }
    ],
    "colors": {
      "editor.foreground": "#f8f8f2",
      "editor.background": "#282a36",
      "editor.selectionBackground": "#44475a",
      "editor.lineHighlightBackground": "#44475a",
      "editorCursor.foreground": "#f8f8f0",
      "editorWhitespace.foreground": "#3B3A32",
      "editorIndentGuide.activeBackground": "#9D550FB0",
      "editor.selectionHighlightBorder": "#222218"
    }
}
export const IdleFingers: monaco.editor.IStandaloneThemeData = {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
      {
        "background": "323232",
        "token": ""
      },
      {
        "foreground": "ffffff",
        "token": "text"
      },
      {
        "foreground": "cdcdcd",
        "background": "282828",
        "token": "source"
      },
      {
        "foreground": "bc9458",
        "fontStyle": "italic",
        "token": "comment"
      },
      {
        "foreground": "ffe5bb",
        "token": "meta.tag"
      },
      {
        "foreground": "ffe5bb",
        "token": "declaration.tag"
      },
      {
        "foreground": "ffe5bb",
        "token": "meta.doctype"
      },
      {
        "foreground": "ffc66d",
        "token": "entity.name"
      },
      {
        "foreground": "fff980",
        "token": "source.ruby entity.name"
      },
      {
        "foreground": "b7dff8",
        "token": "variable.other"
      },
      {
        "foreground": "cccc33",
        "token": "support.class.ruby"
      },
      {
        "foreground": "6c99bb",
        "token": "constant"
      },
      {
        "foreground": "6c99bb",
        "token": "support.constant"
      },
      {
        "foreground": "cc7833",
        "token": "keyword"
      },
      {
        "foreground": "d0d0ff",
        "token": "other.preprocessor.c"
      },
      {
        "fontStyle": "italic",
        "token": "variable.parameter"
      },
      {
        "foreground": "ffffff",
        "background": "575757",
        "token": "source comment.block"
      },
      {
        "foreground": "a5c261",
        "token": "string"
      },
      {
        "foreground": "aaaaaa",
        "token": "string constant.character.escape"
      },
      {
        "foreground": "000000",
        "background": "cccc33",
        "token": "string.interpolated"
      },
      {
        "foreground": "cccc33",
        "token": "string.regexp"
      },
      {
        "foreground": "cccc33",
        "token": "string.literal"
      },
      {
        "foreground": "787878",
        "token": "string.interpolated constant.character.escape"
      },
      {
        "fontStyle": "underline",
        "token": "entity.name.class"
      },
      {
        "fontStyle": "italic underline",
        "token": "entity.other.inherited-class"
      },
      {
        "foreground": "b83426",
        "token": "support.function"
      },
      {
        "foreground": "6ea533",
        "token": "markup.list.unnumbered.textile"
      },
      {
        "foreground": "6ea533",
        "token": "markup.list.numbered.textile"
      },
      {
        "foreground": "c2c2c2",
        "fontStyle": "bold",
        "token": "markup.bold.textile"
      },
      {
        "foreground": "ffffff",
        "background": "ff0000",
        "token": "invalid"
      },
      {
        "foreground": "323232",
        "background": "fff980",
        "token": "collab.user1"
      }
    ],
    "colors": {
      "editor.foreground": "#FFFFFF",
      "editor.background": "#323232",
      "editor.selectionBackground": "#5A647EE0",
      "editor.lineHighlightBackground": "#353637",
      "editorCursor.foreground": "#91FF00",
      "editorWhitespace.foreground": "#404040"
    }
}
export const Twilight: monaco.editor.IStandaloneThemeData = {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
      {
        "background": "141414",
        "token": ""
      },
      {
        "foreground": "5f5a60",
        "fontStyle": "italic",
        "token": "comment"
      },
      {
        "foreground": "cf6a4c",
        "token": "constant"
      },
      {
        "foreground": "9b703f",
        "token": "entity"
      },
      {
        "foreground": "cda869",
        "token": "keyword"
      },
      {
        "foreground": "f9ee98",
        "token": "storage"
      },
      {
        "foreground": "8f9d6a",
        "token": "string"
      },
      {
        "foreground": "9b859d",
        "token": "support"
      },
      {
        "foreground": "7587a6",
        "token": "variable"
      },
      {
        "foreground": "d2a8a1",
        "fontStyle": "italic underline",
        "token": "invalid.deprecated"
      },
      {
        "foreground": "f8f8f8",
        "background": "562d56bf",
        "token": "invalid.illegal"
      },
      {
        "background": "b0b3ba14",
        "token": "text source"
      },
      {
        "background": "b1b3ba21",
        "token": "text.html.ruby source"
      },
      {
        "foreground": "9b5c2e",
        "fontStyle": "italic",
        "token": "entity.other.inherited-class"
      },
      {
        "foreground": "daefa3",
        "token": "string source"
      },
      {
        "foreground": "ddf2a4",
        "token": "string constant"
      },
      {
        "foreground": "e9c062",
        "token": "string.regexp"
      },
      {
        "foreground": "cf7d34",
        "token": "string.regexp constant.character.escape"
      },
      {
        "foreground": "cf7d34",
        "token": "string.regexp source.ruby.embedded"
      },
      {
        "foreground": "cf7d34",
        "token": "string.regexp string.regexp.arbitrary-repitition"
      },
      {
        "foreground": "8a9a95",
        "token": "string variable"
      },
      {
        "foreground": "dad085",
        "token": "support.function"
      },
      {
        "foreground": "cf6a4c",
        "token": "support.constant"
      },
      {
        "foreground": "8996a8",
        "token": "meta.preprocessor.c"
      },
      {
        "foreground": "afc4db",
        "token": "meta.preprocessor.c keyword"
      },
      {
        "foreground": "494949",
        "token": "meta.tag.sgml.doctype"
      },
      {
        "foreground": "494949",
        "token": "meta.tag.sgml.doctype entity"
      },
      {
        "foreground": "494949",
        "token": "meta.tag.sgml.doctype string"
      },
      {
        "foreground": "494949",
        "token": "meta.tag.preprocessor.xml"
      },
      {
        "foreground": "494949",
        "token": "meta.tag.preprocessor.xml entity"
      },
      {
        "foreground": "494949",
        "token": "meta.tag.preprocessor.xml string"
      },
      {
        "foreground": "ac885b",
        "token": "declaration.tag"
      },
      {
        "foreground": "ac885b",
        "token": "declaration.tag entity"
      },
      {
        "foreground": "ac885b",
        "token": "meta.tag"
      },
      {
        "foreground": "ac885b",
        "token": "meta.tag entity"
      },
      {
        "foreground": "e0c589",
        "token": "declaration.tag.inline"
      },
      {
        "foreground": "e0c589",
        "token": "declaration.tag.inline entity"
      },
      {
        "foreground": "e0c589",
        "token": "source entity.name.tag"
      },
      {
        "foreground": "e0c589",
        "token": "source entity.other.attribute-name"
      },
      {
        "foreground": "e0c589",
        "token": "meta.tag.inline"
      },
      {
        "foreground": "e0c589",
        "token": "meta.tag.inline entity"
      },
      {
        "foreground": "cda869",
        "token": "meta.selector.css entity.name.tag"
      },
      {
        "foreground": "8f9d6a",
        "token": "meta.selector.css entity.other.attribute-name.tag.pseudo-class"
      },
      {
        "foreground": "8b98ab",
        "token": "meta.selector.css entity.other.attribute-name.id"
      },
      {
        "foreground": "9b703f",
        "token": "meta.selector.css entity.other.attribute-name.class"
      },
      {
        "foreground": "c5af75",
        "token": "support.type.property-name.css"
      },
      {
        "foreground": "f9ee98",
        "token": "meta.property-group support.constant.property-value.css"
      },
      {
        "foreground": "f9ee98",
        "token": "meta.property-value support.constant.property-value.css"
      },
      {
        "foreground": "8693a5",
        "token": "meta.preprocessor.at-rule keyword.control.at-rule"
      },
      {
        "foreground": "ca7840",
        "token": "meta.property-value support.constant.named-color.css"
      },
      {
        "foreground": "ca7840",
        "token": "meta.property-value constant"
      },
      {
        "foreground": "8f9d6a",
        "token": "meta.constructor.argument.css"
      },
      {
        "foreground": "f8f8f8",
        "background": "0e2231",
        "fontStyle": "italic",
        "token": "meta.diff"
      },
      {
        "foreground": "f8f8f8",
        "background": "0e2231",
        "fontStyle": "italic",
        "token": "meta.diff.header"
      },
      {
        "foreground": "f8f8f8",
        "background": "0e2231",
        "fontStyle": "italic",
        "token": "meta.separator"
      },
      {
        "foreground": "f8f8f8",
        "background": "420e09",
        "token": "markup.deleted"
      },
      {
        "foreground": "f8f8f8",
        "background": "4a410d",
        "token": "markup.changed"
      },
      {
        "foreground": "f8f8f8",
        "background": "253b22",
        "token": "markup.inserted"
      },
      {
        "foreground": "f9ee98",
        "token": "markup.list"
      },
      {
        "foreground": "cf6a4c",
        "token": "markup.heading"
      }
    ],
    "colors": {
      "editor.foreground": "#F8F8F8",
      "editor.background": "#141414",
      "editor.selectionBackground": "#DDF0FF33",
      "editor.lineHighlightBackground": "#FFFFFF08",
      "editorCursor.foreground": "#A7A7A7",
      "editorWhitespace.foreground": "#FFFFFF40"
    }
}
export const PastelsOnDark: monaco.editor.IStandaloneThemeData = {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
      {
        "background": "211E1E",
        "token": ""
      },
      {
        "foreground": "555555",
        "token": "comment"
      },
      {
        "foreground": "555555",
        "token": "comment.block"
      },
      {
        "foreground": "ad9361",
        "token": "string"
      },
      {
        "foreground": "cccccc",
        "token": "constant.numeric"
      },
      {
        "foreground": "a1a1ff",
        "token": "keyword"
      },
      {
        "foreground": "2f006e",
        "token": "meta.preprocessor"
      },
      {
        "fontStyle": "bold",
        "token": "keyword.control.import"
      },
      {
        "foreground": "a1a1ff",
        "token": "support.function"
      },
      {
        "foreground": "0000ff",
        "token": "declaration.function function-result"
      },
      {
        "fontStyle": "bold",
        "token": "declaration.function function-name"
      },
      {
        "fontStyle": "bold",
        "token": "declaration.function argument-name"
      },
      {
        "foreground": "0000ff",
        "token": "declaration.function function-arg-type"
      },
      {
        "fontStyle": "italic",
        "token": "declaration.function function-argument"
      },
      {
        "fontStyle": "underline",
        "token": "declaration.class class-name"
      },
      {
        "fontStyle": "italic underline",
        "token": "declaration.class class-inheritance"
      },
      {
        "foreground": "fff9f9",
        "background": "ff0000",
        "fontStyle": "bold",
        "token": "invalid"
      },
      {
        "background": "ffd0d0",
        "token": "invalid.deprecated.trailing-whitespace"
      },
      {
        "fontStyle": "italic",
        "token": "declaration.section section-name"
      },
      {
        "foreground": "c10006",
        "token": "string.interpolation"
      },
      {
        "foreground": "666666",
        "token": "string.regexp"
      },
      {
        "foreground": "c1c144",
        "token": "variable"
      },
      {
        "foreground": "6782d3",
        "token": "constant"
      },
      {
        "foreground": "afa472",
        "token": "constant.character"
      },
      {
        "foreground": "de8e30",
        "fontStyle": "bold",
        "token": "constant.language"
      },
      {
        "fontStyle": "underline",
        "token": "embedded"
      },
      {
        "foreground": "858ef4",
        "token": "keyword.markup.element-name"
      },
      {
        "foreground": "9b456f",
        "token": "keyword.markup.attribute-name"
      },
      {
        "foreground": "9b456f",
        "token": "meta.attribute-with-value"
      },
      {
        "foreground": "c82255",
        "fontStyle": "bold",
        "token": "keyword.exception"
      },
      {
        "foreground": "47b8d6",
        "token": "keyword.operator"
      },
      {
        "foreground": "6969fa",
        "fontStyle": "bold",
        "token": "keyword.control"
      },
      {
        "foreground": "68685b",
        "token": "meta.tag.preprocessor.xml"
      },
      {
        "foreground": "888888",
        "token": "meta.tag.sgml.doctype"
      },
      {
        "fontStyle": "italic",
        "token": "string.quoted.docinfo.doctype.DTD"
      },
      {
        "foreground": "909090",
        "token": "comment.other.server-side-include.xhtml"
      },
      {
        "foreground": "909090",
        "token": "comment.other.server-side-include.html"
      },
      {
        "foreground": "858ef4",
        "token": "text.html declaration.tag"
      },
      {
        "foreground": "858ef4",
        "token": "text.html meta.tag"
      },
      {
        "foreground": "858ef4",
        "token": "text.html entity.name.tag.xhtml"
      },
      {
        "foreground": "9b456f",
        "token": "keyword.markup.attribute-name"
      },
      {
        "foreground": "777777",
        "token": "keyword.other.phpdoc.php"
      },
      {
        "foreground": "c82255",
        "token": "keyword.other.include.php"
      },
      {
        "foreground": "de8e20",
        "fontStyle": "bold",
        "token": "support.constant.core.php"
      },
      {
        "foreground": "de8e10",
        "fontStyle": "bold",
        "token": "support.constant.std.php"
      },
      {
        "foreground": "b72e1d",
        "token": "variable.other.global.php"
      },
      {
        "foreground": "00ff00",
        "token": "variable.other.global.safer.php"
      },
      {
        "foreground": "bfa36d",
        "token": "string.quoted.single.php"
      },
      {
        "foreground": "6969fa",
        "token": "keyword.storage.php"
      },
      {
        "foreground": "ad9361",
        "token": "string.quoted.double.php"
      },
      {
        "foreground": "ec9e00",
        "token": "entity.other.attribute-name.id.css"
      },
      {
        "foreground": "b8cd06",
        "fontStyle": "bold",
        "token": "entity.name.tag.css"
      },
      {
        "foreground": "edca06",
        "token": "entity.other.attribute-name.class.css"
      },
      {
        "foreground": "2e759c",
        "token": "entity.other.attribute-name.pseudo-class.css"
      },
      {
        "foreground": "ffffff",
        "background": "ff0000",
        "token": "invalid.bad-comma.css"
      },
      {
        "foreground": "9b2e4d",
        "token": "support.constant.property-value.css"
      },
      {
        "foreground": "e1c96b",
        "token": "support.type.property-name.css"
      },
      {
        "foreground": "666633",
        "token": "constant.other.rgb-value.css"
      },
      {
        "foreground": "666633",
        "token": "support.constant.font-name.css"
      },
      {
        "foreground": "7171f3",
        "token": "support.constant.tm-language-def"
      },
      {
        "foreground": "7171f3",
        "token": "support.constant.name.tm-language-def"
      },
      {
        "foreground": "6969fa",
        "token": "keyword.other.unit.css"
      }
    ],
    "colors": {
      "editor.foreground": "#DADADA",
      "editor.background": "#211E1E",
      "editor.selectionBackground": "#73597E80",
      "editor.lineHighlightBackground": "#353030",
      "editorCursor.foreground": "#FFFFFF",
      "editorWhitespace.foreground": "#4F4D4D"
    }
}
export const Monokai: monaco.editor.IStandaloneThemeData = {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
        {
        "background": "272822",
        "token": ""
        },
        {
        "foreground": "75715e",
        "token": "comment"
        },
        {
        "foreground": "e6db74",
        "token": "string"
        },
        {
        "foreground": "ae81ff",
        "token": "constant.numeric"
        },
        {
        "foreground": "ae81ff",
        "token": "constant.language"
        },
        {
        "foreground": "ae81ff",
        "token": "constant.character"
        },
        {
        "foreground": "ae81ff",
        "token": "constant.other"
        },
        {
        "foreground": "f92672",
        "token": "keyword"
        },
        {
        "foreground": "f92672",
        "token": "storage"
        },
        {
        "foreground": "66d9ef",
        "fontStyle": "italic",
        "token": "storage.type"
        },
        {
        "foreground": "a6e22e",
        "fontStyle": "underline",
        "token": "entity.name.class"
        },
        {
        "foreground": "a6e22e",
        "fontStyle": "italic underline",
        "token": "entity.other.inherited-class"
        },
        {
        "foreground": "a6e22e",
        "token": "entity.name.function"
        },
        {
        "foreground": "fd971f",
        "fontStyle": "italic",
        "token": "variable.parameter"
        },
        {
        "foreground": "f92672",
        "token": "entity.name.tag"
        },
        {
        "foreground": "a6e22e",
        "token": "entity.other.attribute-name"
        },
        {
        "foreground": "66d9ef",
        "token": "support.function"
        },
        {
        "foreground": "66d9ef",
        "token": "support.constant"
        },
        {
        "foreground": "66d9ef",
        "fontStyle": "italic",
        "token": "support.type"
        },
        {
        "foreground": "66d9ef",
        "fontStyle": "italic",
        "token": "support.class"
        },
        {
        "foreground": "f8f8f0",
        "background": "f92672",
        "token": "invalid"
        },
        {
        "foreground": "f8f8f0",
        "background": "ae81ff",
        "token": "invalid.deprecated"
        },
        {
        "foreground": "cfcfc2",
        "token": "meta.structure.dictionary.json string.quoted.double.json"
        },
        {
        "foreground": "75715e",
        "token": "meta.diff"
        },
        {
        "foreground": "75715e",
        "token": "meta.diff.header"
        },
        {
        "foreground": "f92672",
        "token": "markup.deleted"
        },
        {
        "foreground": "a6e22e",
        "token": "markup.inserted"
        },
        {
        "foreground": "e6db74",
        "token": "markup.changed"
        },
        {
        "foreground": "ae81ffa0",
        "token": "constant.numeric.line-number.find-in-files - match"
        },
        {
        "foreground": "e6db74",
        "token": "entity.name.filename.find-in-files"
        }
    ],
    "colors": {
        "editor.foreground": "#F8F8F2",
        "editor.background": "#272822",
        "editor.selectionBackground": "#49483E",
        "editor.lineHighlightBackground": "#3E3D32",
        "editorCursor.foreground": "#F8F8F0",
        "editorWhitespace.foreground": "#3B3A32",
        "editorIndentGuide.activeBackground": "#9D550FB0",
        "editor.selectionHighlightBorder": "#222218"
    }
}