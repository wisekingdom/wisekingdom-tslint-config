module.exports = {
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {
        "no-unused-expression": true
    },
    "rules": {
        "semicolon": [
            true,
            "never"
        ],
        "no-console": [
            true,
            "assert",
            "dir",
            "info",
            "log",
            "trace",
            "warn"
        ],
        "no-unused-imports": true,
        "no-unused-variable": true,
        "no-empty-interface": false,
        "no-empty": false,
        "eofline": true,
        "quotemark": [
            true,
            "single"
        ],
        "indent": false,
        "member-access": [
            false
        ],
        "ordered-imports": true,
        "max-line-length": [
            true,
            150
        ],
        "member-ordering": [
            false
        ],
        "curly": false,
        "interface-name": [
            false
        ],
        "array-type": [
            false
        ],
        "arrow-parens": false,
        "object-literal-sort-keys": false,
        "max-classes-per-file": false,
        "variable-name": [
            false
        ],
        "one-line": [
            false
        ],
        "one-variable-per-declaration": [
            false
        ],
        "trailing-comma": [
            true,
            {
                "multiline": "always",
                "singleline": "never"
            }
        ],
        "file-name-casing": [
            true, 
            "kebab-case"
        ]
    },
    "rulesDirectory": []
}