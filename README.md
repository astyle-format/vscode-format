# Format-AStyle

Format code with AStyle

<center>

[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/astyle-format/vscode-format.svg)](http://isitmaintained.com/project/astyle-format/vscode-format "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/astyle-format/vscode-format.svg)](http://isitmaintained.com/project/astyle-format/vscode-format "Percentage of issues still open")
[![Scrutinizer Quality Score](https://scrutinizer-ci.com/g/astyle-format/vscode-format/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/astyle-format/vscode-format/)
[![Code Coverage](https://scrutinizer-ci.com/g/astyle-format/vscode-format/badges/coverage.png)](https://scrutinizer-ci.com/g/astyle-format/vscode-format/)
[![Code intelligence](https://scrutinizer-ci.com/g/astyle-format/vscode-format/badges/code-intelligence.svg?b=master)](https://scrutinizer-ci.com/g/astyle-format/vscode-format/)

</center>

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

This extension contributes the following settings:

* `astyleFormat.show-message`: Show message when formatting. By default is __true__
* `astyleFormat.astylerc`: Where is file __.astylerc__. By default is __null__ (it means that file __.astylerc__ exist in your __HOME__ folder)
* `astyleFormat.messageTimeout`: Delay for hide message about formatting

## Known Issues

* If astyle is not installed in system - format will not be succeed
* Need to check for __.astylerc__ file