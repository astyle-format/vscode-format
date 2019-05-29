# Format-AStyle

Format code with AStyle

[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/astyle-format/vscode-format.svg)](http://isitmaintained.com/project/astyle-format/vscode-format "Average time to resolve an issue")
[![Percentage of issues still open](https://isitmaintained.com/badge/open/astyle-format/vscode-format.svg)](http://isitmaintained.com/project/astyle-format/vscode-format "Percentage of issues still open")

***

## Requirements

You need to install [AStyle](http://astyle.sourceforge.net/)

### Installation

#### Debian

If you on *.debian systems, try

```bash
sudo apt install astyle
```

> But remember, in repository may have older version!

The best way - build app using [cmake](https://cmake.org)

#### Windows

* Download source from [sourceforge](http://astyle.sourceforge.net)
* Extract archive
* Put `bin/astyle.exe` into your bin path or add current folder path to your env `PATH`

Make sure, that shell command `where astyle.exe` work correctly!

## How to use

For format document you need to click __CTRL+ALT+L__ combination (just like in *IDEA Studio*) in opened, and saved document in HDD.

For Mac __CMD+ALT+L__ (i don't have a MacBook...)

## Extension Settings

This extension contributes the following settings:

* `astyleFormat.show-message`: Show message when formatting. By default is __true__
* `astyleFormat.astylerc`: Where is file __.astylerc__. By default is __null__ (it means that file __.astylerc__ exist in your __HOME__ folder)
* `astyleFormat.messageTimeout`: Delay for hide message about formatting

## Known Issues

* Need to check for __.astylerc__ file
* If document not exists, format will not be proceed
