# Format-AStyle

Format code with AStyle

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