# Change Log

All notable changes to this extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## 2019-05-29 [1.1.6]

* Added

  * Support Windows
  * Small reformat code

* Need

  * Clear code

## 2018-07-27 [1.1.5]

* Added

  * Check astyle for installed on machine!

* Needle

  * Check for __.astylerc__ file

## 2018-07-26 [1.1.4]

* Added

  * icon

## 2018-07-09 [1.1.3]

* Added

  * Translate into english
  * Remove tests. It will recreated in future!
  * Add menu point in context menu of file which cpp and title
  * For mac add keybinding __cmd+alt+l__

* Needle

  * Check astyle prog

## 2018-07-06 [1.1.2]

* Added

  * Remove some rules in __.eslintrc.js__ for comfortable work
  * Add editorconfig
  * Migrate to new repository
  * Added new preference - `astyleFormat.messageTimeout`

* Needle

  * Check work with `editor/context menu` in package.json for add point in context menu
  * Translate description in english!

## 2018-07-03 [1.1.1]

* Added

  * Added eslint
  * Fix all eslint errors
  * Write changelog!

* Needle

  * Need tests!

## 2018-07-03 [1.1.0]

* Added

  * Added features __SETTINGS__. Now you can set next settings in your __.vscode/settings.json__ file:

    * `astyleFormat.show-message` : Show message when formatting. By default is __true__
    * `astyleFormat.astylerc` : Where is file __.astylerc__. By default is __null__ (it means that file __.astylerc__ exist in your __HOME__ folder)

## 2018-07-02 [1.0.0]

* Added

  * Add base functional of extension, such like a format using astyle without check an a program exist
