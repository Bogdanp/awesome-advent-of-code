# Awesome Advent of Code

This is a collection of awesome resources related to the yearly
[Advent of Code] challenge.

[Advent of Code]: https://adventofcode.com/

* [The Official AoC Website](https://adventofcode.com/)
* [The AoC Subreddit](https://www.reddit.com/r/adventofcode/)
* [Project Templates](#project-templates)
* [Tools and Utilities](#tools-and-utilities)
* [Other Advent Calendars](#other-advent-calendars)
* [2018](/2018.md)
* [2019](/2019.md)
* [2020](/2020.md)
* [2021](/2021.md)
* [2022](#2022)
  * [Solutions](#solutions)
    * [Ada](#ada)
    * [APL](#apl)
    * [Assembly](#assembly)
    * [AWK](#awk)
    * [Bash](#bash)
    * [BQN](#bqn)
    * [C](#c)
    * [C#](#c-1)
    * [C++](#c-2)
    * [Clojure](#clojure)
    * [Common Lisp](#common-lisp)
    * [Crystal](#crystal)
    * [D](#d)
    * [Dart](#dart)
    * [Elixir](#elixir)
    * [Elm](#elm)
    * [Erlang](#erlang)
    * [Excel](#excel)
    * [F#](#f)
    * [Go](#go)
    * [Groovy](#groovy)
    * [Hamler](#hamler)
    * [Haskell](#haskell)
    * [Haxe](#haxe)
    * [HolyC](#holyc)
    * [Hoon](#hoon)
    * [Idris](#idris)
    * [J](#J)
    * [Java](#java)
    * [JavaScript](#javascript)
    * [jq](#jq)
    * [Julia](#julia)
    * [Kotlin](#kotlin)
    * [LDPL](#ldpl)
    * [Lua](#lua)
    * [MATLAB](#matlab)
    * [Nim](#nim)
    * [Objective-C](#objc)
    * [OCaml](#ocaml)
    * [PHP](#php)
    * [Perl](#perl)
    * [Pony](#pony)
    * [PowerShell](#powershell)
    * [Prolog](#prolog)
    * [Python](#python)
    * [R](#r)
    * [Racket](#racket)
    * [Raku](#raku)
    * [ReasonML](#reasonml)
    * [Red](#red)
    * [REXX](#rexx)
    * [Ruby](#ruby)
    * [Rust](#rust)
    * [Smalltalk](#smalltalk)
    * [Scala](#scala)
    * [Scheme](#scheme)
    * [Solidity](#solidity)
    * [SpectX](#spectx)
    * [SQL](#sql)
    * [Standard ML](#standard-ml)
    * [Swift](#swift)
    * [TypeScript](#typescript)
      * [Deno](#deno)
    * [Unison](#unison)
    * [VB.NET](#vbnet)
    * [Whitespace](#whitespace)
    * [Zig](#zig)
    * [Zsh](#zsh)
  * [Live Streams](#live-streams)

---

## Project Templates

*Templates, cookiecutters and skeletons for quickly setting up projects
in your favourite language.*

* [S-ecki/AdventOfCode-Starter-Dart](https://github.com/S-ecki/AdventOfCode-Starter-Dart) *(Dart)*
* [Reason Starter kit for Advent of Code](https://github.com/ManasJayanth/reason-aoc-starter) *(Reason and OCaml)*
* [dave-burke/advent-of-code-java-starter](https://github.com/dave-burke/advent-of-code-java-starter) *(Java)*
* [gobanos/cargo-aoc](https://github.com/gobanos/cargo-aoc) *(Rust)*
* [nickyvanurk/advent-of-code-rust-template](https://github.com/nickyvanurk/advent-of-code-rust-template) *(Rust)*
* [fspoettel/advent-of-code-rust](https://github.com/fspoettel/advent-of-code-rust) *(Rust)*
* [kotlin-hands-on/advent-of-code-kotlin-template](https://github.com/kotlin-hands-on/advent-of-code-kotlin-template) *(Kotlin)*
* [hughjdavey/aoc-kotlin-starter](https://github.com/hughjdavey/aoc-kotlin-starter) *(Kotlin)*
* [Jadarma/advent-of-code-kotlin](https://github.com/Jadarma/advent-of-code-kotlin/tree/clean-template) *(Kotlin)*
* [kindermoumoute/adventofcode](https://github.com/kindermoumoute/adventofcode/tree/master/template) *(Go)*
* [staylorwr/elixir_aoc](https://github.com/staylorwr/elixir_aoc) *(Elixir)*
* [mhanberg/advent-of-code-elixir-starter](https://github.com/mhanberg/advent-of-code-elixir-starter) *(Elixir)*
* [AlexeSimon/adventofcode](https://github.com/AlexeSimon/adventofcode) *(Python)*
* [UncleCJ/advent-of-code](https://github.com/UncleCJ/advent-of-code) *(Jupyter Python Notebooks)*
* [sindrekjr/AdventOfCodeBase](https://github.com/sindrekjr/AdventOfCodeBase) *(C#)*
* [mhanberg/advent-of-code-clojure-starter](https://github.com/mhanberg/advent-of-code-clojure-starter) *(Clojure)*
* [caderek/aoc-starter-js](https://github.com/caderek/aoc-starter-js) *(JavaScript)*
* [caderek/aoc-starter-ts](https://github.com/caderek/aoc-starter-ts) *(TypeScript)*
* [mariotacke/template-advent-of-code](https://github.com/mariotacke/template-advent-of-code) *(JavaScript)*
* [arkadye/advent_of_code](https://github.com/arkadye/advent_of_code_framework) *(C++)*
* [eduherminio/AdventOfCode.Template](https://github.com/eduherminio/AdventOfCode.Template) *(C#)*
* [izexi/aoc-ts-template](https://github.com/izexi/aoc-ts-template) *(TypeScript)*
* [advent-of-code-template](https://github.com/ridaamirini/advent-of-code-template) *(PHP)*
* [amorriscode/advent-of-code](https://github.com/amorriscode/advent-of-code) *(JavaScript)*
* [nnari/aoc-typescript-starter](https://github.com/nnari/aoc-typescript-starter) *(TypeScript)*
* [SpexGuy/Zig-AoC-Template](https://github.com/SpexGuy/Zig-AoC-Template) *(Zig)*
* [pacso/aoc_rb](https://github.com/pacso/aoc_rb) *(Ruby)*
* [wizardofzos/aoc2021](https://github.com/wizardofzos/aoc2021) *(Flask-API, Python running REXX on Mainframes)*
* [ismtabo/advent-of-code-deno-template](https://github.com/ismtabo/advent-of-code-deno-template) *(TypeScript / Deno)*
* [alvesvaren/AoC-template](https://github.com/alvesvaren/AoC-template) *(Python)*
* [jjcomer/aoc-helper](https://github.com/jjcomer/aoc-helper) *(Clojure)*
* [mMosiur/AdventOfCodeDayTemplate](https://github.com/mMosiur/AdventOfCodeDayTemplate) *(C#)*

## Tools and Utilities

* Browser extension for private leaderboard visualization
  * [Chrome extension](https://chrome.google.com/webstore/detail/advent-of-code-ranking/jbnlafikncgjjhdkmfhokcplgahebmjl)
  * [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/aoc-ranking/)
* Browser extension which enhances your personal stats page with a time from Part 1 to Part 2 column (it also tracks when you've first opened a puzzle and offsets the completion times accordingly)
  * [Chrome extension](https://chrome.google.com/webstore/detail/advent-of-code-part-2-timer/fhmjpoppaplfhgnknpbaaklgdnnimfbn)
  * [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/advent-of-code-part-2-timer/)
* [Globals medals overview](http://www.maurits.vdschee.nl/scatterplot/medals.html) -- Alternative global leaderboard showing first, second and third places as gold, silver and bronze medals.
* [Scatterplot of first 100](http://www.maurits.vdschee.nl/scatterplot/) -- Scatterplot of the time taken to solve the parts of each puzzle by the first 100 people that solved it.
* [aocdl](https://github.com/GreenLightning/advent-of-code-downloader) -- Command-line utility that automatically downloads your personal input file while you read the puzzle description *(Go)*.
* [aocinput](https://github.com/dds/aoc2020/blob/main/cmd/aocinput/aocinput.go) -- CLI for getting inputs. Clipboard support. Polite to AoC. Nice help and options. *(Go)*
* [aoc_rb](https://github.com/pacso/aoc_rb) -- A Ruby gem that generates an empty AoC project, and provides command-line tools for fetching input and submitting solutions  *(Ruby)*
* [aoc-cli](https://github.com/keirua/aoc-cli) -- Command-line utility that helps solve problems in ruby: it downloads your personal input file, creates the sample source files and benchmarks your solutions *(Ruby)*.
* [AoCHelper](https://github.com/eduherminio/AoCHelper) -- NuGet library that simplifies puzzle solving and provides benchmarking *(.NET)*.
* [AdventOfCode.Runner](https://github.com/vladsm/adventofcode-runner) -- NuGet package that automatically provides your puzzles solvers with the input from the AOC site and verifies calculated answers *(.NET / C#)*.
* [aocleaderboard](https://github.com/scarvalhojr/aocleaderboard) -- get over the 200-member limit for private leaderboards and combine multiple leaderboards in a single page with recalculated scores.
* [advent-of-code-api](https://hackage.haskell.org/package/advent-of-code-api) -- Haskell library for querying AOC prompts, inputs, and leaderboards *(Haskell)*
* [advent-of-code-ocr](https://github.com/mstksg/advent-of-code-ocr#readme) -- Command line utility and Haskell library for parsing AoC ascii art words *(Haskell)*
* [advent-of-code-ocr](https://github.com/bsoyka/advent-of-code-ocr) -- Python module for parsing AoC ascii art words *(Python)*
* [aoc-ranking](https://github.com/freedomofkeima/aoc-ranking) -- Show all non-zero score AoC participants in one, global scoreboard. *(Python)*
* [aoc-cli](https://github.com/scarvalhojr/aoc-cli) -- Read puzzle descriptions, download input, and submit answers from the comfort of your terminal. *(Rust)*
* [adventofcode-badge](https://github.com/stackcats/adventofcode-badge) -- An interface over Shields.io to facilitate the creation of badges from Advent of Code.
* [@aocjs/cli](https://github.com/aocjs/cli) -- Package for executing solutions with hot reload and data fetching *(JavaScript, TypeScript)*
* [eggnog](https://github.com/breakthatbass/eggnog) -- CLI for getting input, directions (with nice colors!), and submitting answers. Caches absolutely everything. *(C)*
* [aoc-badges-action](https://github.com/J0B10/aoc-badges-action) -- A GitHub action for updating various aoc-related badges in your README *(GitHub Action, Python)*
* [advent-readme-stars](https://github.com/k2bd/advent-readme-stars) -- A GitHub action that adds and maintains a table of your AoC progress to your README *(GitHub Action, Python)*
* [aoctimer](https://github.com/caderek/aoctimer) -- A language-agnostic, multiplatform tool to measure your solution time in relative units, so you can share and compare your results with others.
* [aocrunner](https://github.com/caderek/aocrunner) -- A fast solutions runner and template generator, with simple CLI, customizable template, simple testing utility, live reload, and adventofcode.com integration. *(JavaScript, TypeScript)*
* [advent-of-code-client](https://github.com/toblu/advent-of-code-client) -- A Node.js package for fetching inputs, running puzzle challenges and submitting answers to adventofcode.com directly from your JavaScript code. Also includes some commonly used & customizable input transformation functions. *(JavaScript)*
* [AoC-execution-time-table-generator](https://github.com/coralkashri/AoC-execution_time_table_generator) -- A C++20 tool to generate an execution time table for both parts of each AoC day, based on input file with time details.
* [aocf](https://github.com/nuxeh/aocf) -- A CLI tool (and also, optionally, crate) written in Rust, with a CLI inspired by git. Problem briefs may be displayed in a scrollable ANSI terminal (mostly) faithful to the AoC website.
* [AdventOfCodeAbstractions](https://github.com/mMosiur/AdventOfCodeAbstractions) -- A NuGet package that contains extendable abstractions and generalized helpers to simplify and streamline .NET AoC puzzle solving. *(C#)*
* [aocd](https://github.com/Macil/aocd) -- A template generator and library for solving AoC with Deno that handles input fetching and solution submitting. *(TypeScript / Deno)*
* [advent_of_code_utils](https://github.com/mathsaey/advent_of_code_utils) -- Input fetcher and boilerplate generator for those solving AoC in Elixir. *(Elixir)*

## Other Advent Calendars

*24 days of cool stuff regarding <insert-technology-here>.*

* [Raku Advent Calendar](https://raku-advent.blog/)
* [QEMU Advent Calendar](https://www.qemu-advent-calendar.org/)

## 2022

**WARNING:** All of these likely contain spoilers.

Read [CONTRIBUTING.md](/.github/CONTRIBUTING.md) to learn how to add your own repos.

### Solutions

#### Ada

*Solutions to AoC in Ada.*

#### APL

*Solutions to AoC in APL.*

#### Assembly

*Solutions to AoC in Assembly.*

#### AWK

*Solutions to AoC in AWK.*

#### Bash

*Solutions to AoC in Bash.*

#### BQN

*Solutions to AoC in BQN.*

#### C
* [happycoder74/adventofcode](https://github.com/happycoder74/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

*Solutions to AoC in C.*

#### C#

*Solutions to AoC in C#.*

* [ShootMe/AdventOfCode](https://github.com/ShootMe/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--28-brightgreen)
* [eduherminio/AoC2022](https://github.com/eduherminio/AoC2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--13-brightgreen)
* [encse/adventofcode](https://github.com/encse/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--12-brightgreen)
* [mMosiur/AdventOfCode2022](https://github.com/mMosiur/AdventOfCode2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

#### C++

*Solutions to AoC in C++.*

#### Clojure

*Solutions to AoC in Clojure.*

#### Common Lisp

*Solutions to AoC in Common Lisp.*

* [verdammelt/advent-of-code](https://github.com/verdammelt/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/github/last-commit/verdammelt/advent-of-code)

#### Crystal

*Solutions to AoC in Crystal.*

#### D

*Solutions to AoC in D.*

#### Dart

*Solutions to AoC in Dart.*

* [julemand101/AdventOfCode2022](https://github.com/julemand101/AdventOfCode2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--29-brightgreen)

#### Elixir

*Solutions to AoC in Elixir.*

* [gahjelle/advent_of_code](https://github.com/gahjelle/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)
* [mathsaey/adventofcode](https://github.com/mathsaey/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--29-brightgreen)

#### Elm

*Solutions to AoC in Elm and Literate Elm.*

#### Erlang

*Solutions to AoC in Erlang.*

#### Excel

*Solutions to AoC in Excel.*

#### F#

*Solutions to AoC in F#.*

* [Texl/advent-of-code](https://github.com/Texl/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--29-brightgreen)

#### Go

*Solutions to AoC in Go.*

* [pemoreau/advent-of-code](https://github.com/pemoreau/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--28-brightgreen)
* [shpikat/advent-of-code-2022](https://github.com/shpikat/advent-of-code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--29-brightgreen)

#### Groovy

*Solutions to AoC in Groovy.*

#### Hamler

*Solutions to AoC in Hamler.*

#### Haskell

*Solutions to AoC in Haskell.*

#### Haxe

*Solutions to AoC in Haxe.*

#### HolyC

*Solutions to AoC in HolyC (TempleOS).*

#### Hoon

*Solutions to AoC in Hoon (Urbit).*

#### Idris

*Solutions to AoC in Idris.*

#### J

*Solutions to AoC in J.*

#### Java

*Solutions to AoC in Java.*

* [magnushjensen/adventofcode](https://github.com/magnushjensen/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

#### JavaScript

*Solutions to AoC in JavaScript.*

* [thejan14/adventofcode2022](https://github.com/thejan14/adventofcode2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--26-brightgreen)
* [topener/adventofcode](https://github.com/topener/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--14-brightgreen)
* [rico-vz/advent-of-code-2022](https://github.com/rico-vz/advent-of-code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--27-brightgreen)

#### jq

*Solutions to AoC in jq.*

#### Julia

*Solutions to AoC in Julia.*

* [DarthGandalf/advent-of-code](https://github.com/DarthGandalf/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--29-brightgreen)

#### Kotlin

*Solutions to AoC in Kotlin.*

* [edgars-supe/advent-of-code](https://github.com/edgars-supe/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--26-brightgreen)
* [ClouddJR/advent-of-code-2022](https://github.com/ClouddJR/advent-of-code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--27-brightgreen)
* [LiquidFun/adventofcode](https://github.com/LiquidFun/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

#### LDPL

*Solutions to AoC in LDPL.*

#### Lua

*Solutions to AoC in Lua.*

#### MATLAB

*Solutions to AoC in MATLAB (Octave).*

#### Nim

*Solutions to AoC in Nim.*

#### Objective-C

*Solutions to AoC in Objective-C.*

#### OCaml

*Solutions to AoC in OCaml.*

#### PHP

*Solutions to AoC in PHP.*

#### Perl

*Solutions to AoC in Perl.*

#### Pony

*Solutions to AoC in Pony.*

#### Prolog

*Solutions to AoC in Prolog.*

#### PowerShell

*Solutions to AoC in PowerShell.*

#### Python

*Solutions to AoC in Python.*

* [orfeasa/advent-of-code-2022](https://github.com/orfeasa/advent-of-code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)
* [NimVek/advent-of-code](https://github.com/NimVek/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--27-brightgreen)
* [r0f1/adventofcode2022](https://github.com/r0f1/adventofcode2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--19-brightgreen)
* [nitekat1124/advent-of-code-2022](https://github.com/nitekat1124/advent-of-code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--29-brightgreen)
* [happycoder74/adventofcode](https://github.com/happycoder74/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)
* [gahjelle/advent_of_code](https://github.com/gahjelle/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

#### R

*Solutions to AoC in R.*

* [plannapus/Advent_of_Code](https://github.com/plannapus/Advent_of_Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--23-brightgreen)

#### Racket

*Solutions to AoC in Racket.*

#### Raku

*Solutions to AoC in Raku.*

#### ReasonML

*Solutions to AoC in ReasonML.*

#### Red

*Solutions to AoC in Red.*

#### REXX

*Solutions to AoC in REXX.*

#### Ruby

*Solutions to AoC in Ruby.*

#### Rust

*Solutions to AoC in Rust.*

* [sivertjoe/Advent-of-Code](https://github.com/sivertjoe/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--24-brightgreen)
* [dellink/advent-of-code](https://github.com/dellink/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--26-brightgreen)
* [fspoettel/advent-of-code-2022](https://github.com/fspoettel/advent-of-code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)
* [bertptrs/adventofcode](https://github.com/bertptrs/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)
* [zsacul/AdventOfCode2022](https://github.com/zsacul/AdventOfCode2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

#### Smalltalk

*Solutions to AoC in Smalltalk.*

#### Scala

*Solutions to AoC in Scala.*

* [sim642/adventofcode](https://github.com/sim642/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)

#### Scheme

*Solutions to AoC in Scheme.*

#### Solidity

*Solutions to AoC in Solidity.*

#### SpectX

*Solutions to AoC in SpectX.*

#### SQL

*Solutions to AoC in SQL.*

#### Standard ML

*Solutions to AoC in Standard ML.*

#### Swift

*Solutions to AoC in Swift.*

* [bence-t0th/Advent-of-Code-2022](https://github.com/bence-t0th/Advent-of-Code-2022) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2022--11--30-brightgreen)
* [gereons/AoC2022](https://github.com/gereons/AoC2022) ![Last Commit on GitHub](https://img.shields.io/github/last-commit/gereons/AoC2022.svg)

#### TypeScript

*Solutions to AoC in TypeScript.*

#### Deno

*Solutions to AoC in Deno (TypeScript).*

#### Unison

*Solutions to AoC in Unison.*

#### VB.NET

*Solutions to AoC in VB.NET.*

#### Whitespace

*Solutions to AoC in Whitespace.*

#### Zig

*Solutions to AoC in Zig.*

#### Zsh

*Solutions to AoC in Zsh.*


### Live Streams

*Folks who are live streaming their process.*
