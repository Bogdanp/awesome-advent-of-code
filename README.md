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
* [2021](#2021)
  * [Solutions](#solutions)
    * [Ada](#ada)
    * [Assembly](#assembly)
    * [AWK](#awk)
    * [Bash](#Bash)
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
    * [F#](#f)
    * [Go](#go)
    * [Groovy](#groovy)
    * [Hamler](#hamler)
    * [Haskell](#haskell)
    * [Haxe](#haxe)
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
    * [Ruby](#ruby)
    * [Rust](#rust)
    * [Smalltalk](#smalltalk)
    * [Scala](#scala)
    * [Scheme](#scheme)
    * [Solidity](#solidity)
    * [SpectX](#spectx)
    * [SQL](#sql)
    * [Swift](#swift)
    * [TypeScript](#typescript)
      * [Deno](#deno)
    * [Unison](#unison)
    * [VB.NET](#vbnet)
    * [Whitespace](#whitespace)
    * [Zig](#zig)
  * [Live Streams](#live-streams)

---

## Project Templates

*Templates, cookiecutters and skeletons for quickly setting up projects
in your favourite language.*

* [Reason Starter kit for Advent of Code](https://github.com/ManasJayanth/reason-aoc-starter) *(Reason and OCaml)*
* [dave-burke/advent-of-code-java-starter](https://github.com/dave-burke/advent-of-code-java-starter) *(Java)*
* [gobanos/cargo-aoc](https://github.com/gobanos/cargo-aoc) *(Rust)*
* [nickyvanurk/advent-of-code-rust-template](https://github.com/nickyvanurk/advent-of-code-rust-template) *(Rust)*
* [hughjdavey/aoc-kotlin-starter](https://github.com/hughjdavey/aoc-kotlin-starter) *(Kotlin)*
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

## Tools and Utilities

* [Alfie](https://alfie.prodo.ai/) -- Online JS editor that helps users solve AoC problems.
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
* [aoc-cli](https://github.com/keirua/aoc-cli) -- Command-line utility that helps solve problems in ruby: it downloads your personal input file, creates the sample source files and benchmarks your solutions *(Ruby)*.
* [AoCHelper](https://github.com/eduherminio/AoCHelper) -- NuGet library that simplifies puzzle solving and provides benchmarking *(.NET)*.
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

## Other Advent Calendars

*24 days of cool stuff regarding <insert-technology-here>.*

* [Raku Advent Calendar](https://raku-advent.blog/)
* [QEMU Advent Calendar](https://www.qemu-advent-calendar.org/)

## 2021

**WARNING:** All of these likely contain spoilers.

Read [CONTRIBUTING.md](/CONTRIBUTING.md) to learn how to add your own repos.

### Solutions

#### Ada

*Solutions to AoC in Ada.*


#### Assembly

*Solutions to AoC in Assembly.*


#### AWK

*Solutions to AoC in AWK.*

* [nusretipek/Advent-of-Code-2021](https://github.com/nusretipek/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ofrank123/AoC2021](https://github.com/ofrank123/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Bash

*Solutions to AoC in Bash.*


#### C

*Solutions to AoC in C.*


#### C#

*Solutions to AoC in C#.*

* [DjordjeNedovic/Advent-of-Code](https://github.com/DjordjeNedovic/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ShootMe/AdventOfCode](https://github.com/ShootMe/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [eduherminio/AoC2021](https://github.com/eduherminio/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [encse/adventofcode](https://github.com/encse/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [norrbacka/aoc2021](https://github.com/norrbacka/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [viceroypenguin/adventofcode](https://github.com/viceroypenguin/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### C++

*Solutions to AoC in C++.*

* [FilipHusnjak/AdventOfCode-2021](https://github.com/FilipHusnjak/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [LMesaric/AoC-2021](https://github.com/LMesaric/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [TheRealMolen/adventofcode21](https://github.com/TheRealMolen/adventofcode21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [lento234/advent2021](https://github.com/lento234/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [m3m0ry/aoc2021](https://github.com/m3m0ry/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [lvrcek/advent-of-code-2021](https://github.com/lvrcek/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### Clojure

*Solutions to AoC in Clojure.*


#### Common Lisp

*Solutions to AoC in Common Lisp.*

* [guojing0/aoc-2021](https://github.com/guojing0/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Crystal

*Solutions to AoC in Crystal.*
 
* [jazcarate/advent-of-code-2021](https://github.com/jazcarate/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)


#### D

*Solutions to AoC in D.*


#### Dart

*Solutions to AoC in Dart.*

* [julemand101/AdventOfCode2021](https://github.com/julemand101/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Elixir

* [YauHsien/advent-of-code-2021](https://github.com/YauHsien/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [ballpointcarrot/advent-of-code-2021](https://github.com/ballpointcarrot/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [maco/advent_of_code](https://github.com/maco/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [sevenseacat/advent_of_code](https://github.com/sevenseacat/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Elm

*Solutions to AoC in Elm and Literate Elm.*

* [ryanolsonx/aocelm2021](https://github.com/ryanolsonx/aocelm2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Erlang

*Solutions to AoC in Erlang.*

* [hypothermic/advent-of-code-2021](https://github.com/hypothermic/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### F#

*Solutions to AoC in F#.*

* [JanDotNet/AdventOfCode](https://github.com/JanDotNet/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ThomasGoetzmann/AdventOfCode2021](https://github.com/ThomasGoetzmann/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Go

*Solutions to AoC in Go.*

* [Alex-Wauters/advent-go-2021](https://github.com/Alex-Wauters/advent-go-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [BorisLeMeec/adventofcode](https://github.com/BorisLeMeec/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [Maitgon/Advent2021](https://github.com/Maitgon/Advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [SwiftPush/advent-of-code-2021](https://github.com/SwiftPush/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [chigley/advent2021](https://github.com/chigley/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [nobbs/advent-of-code-in-go](https://github.com/nobbs/advent-of-code-in-go) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [orfeasa/advent-of-code-2021](https://github.com/orfeasa/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ridaamirini/advent-of-code](https://github.com/ridaamirini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [shytikov/advent-of-go]

#### Groovy

*Solutions to AoC in Groovy.*

#### Hamler

*Solutions to AoC in Hamler.*

#### Haskell

*Solutions to AoC in Haskell.*

* [DestyNova/advent_of_code_2021](https://github.com/DestyNova/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [TommasoAmici/haskell-aoc-2021](https://github.com/TommasoAmici/haskell-aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [p-kostic/AdventOfCode2021](https://github.com/p-kostic/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [sonowz/advent-of-code-haskell](https://github.com/sonowz/advent-of-code-haskell) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Haxe

*Solutions to AoC in Haxe.*

#### Idris

*Solutions to AoC in Idris.*

#### J

*Solutions to AoC in J.*

* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Java

*Solutions to AoC in Java.*

* [SimonBaars/AdventOfCode-Java](https://github.com/SimonBaars/AdventOfCode-Java) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [akaritakai/AdventOfCode2021](https://github.com/akaritakai/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### JavaScript

*Solutions to AoC in JavaScript.*

* [thejan14/adventofcode2021](https://github.com/thejan14/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ald890/advent-of-code](https://github.com/ald890/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [joaomlneto/advent-of-code](https://github.com/joaomlneto/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### jq

*Solutions to AoC in jq.*

#### Julia

*Solutions to AoC in Julia.*

* [CmdQ/AoC](https://github.com/CmdQ/AoC) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [JakobSachs/aoc21](https://github.com/JakobSachs/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [goggle/AdventOfCode2021.jl](https://github.com/goggle/AdventOfCode2021.jl) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [racinmat/advent_of_code_2021](https://github.com/racinmat/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Kotlin

*Solutions to AoC in Kotlin.*

* [7rebux/advent-of-code-2021](https://github.com/7rebux/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [The-Self-Taught-Software-Engineer/advent-of-code-2021](https://github.com/The-Self-Taught-Software-Engineer/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [agrison/advent-of-code](https://github.com/agrison/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [edgars-supe/advent-of-code](https://github.com/edgars-supe/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [hughjdavey/aoc-2021](https://github.com/hughjdavey/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [matios13/advent_of_code](https://github.com/matios13/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### LDPL

*Solutions to AoC in LDPL.*

#### Lua

*Solutions to AoC in Lua.*

#### MATLAB

*Solutions to AoC in MATLAB (Octave).*

#### Nim

*Solutions to AoC in Nim.*

* [AP2008/nim-aoc2021](https://github.com/AP2008/nim-aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### Objective-C

*Solutions to AoC in Objective-C.*

#### OCaml

*Solutions to AoC in OCaml.*

#### PHP

*Solutions to AoC in PHP.*

* [jvwag/advent-of-code](https://github.com/jvwag/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ridaamirini/advent-of-code](https://github.com/ridaamirini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [vuryss/aoc-php](https://github.com/vuryss/aoc-php) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [kirara/advent-of-code](https://github.com/kirara/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### Perl

*Solutions to AoC in Perl.*

#### Pony

*Solutions to AoC in Pony.*

#### Prolog

*Solutions to AoC in Prolog.*

* [YauHsien/advent-of-code-2021](https://github.com/YauHsien/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### PowerShell

*Solutions to AoC in PowerShell.*

#### Python

*Solutions to AoC in Python.*

* [Arrezz/AdventOfCode2021](https://github.com/Arrezz/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [IanFindlay/advent-of-code](https://github.com/IanFindlay/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [James-Ansley/adventofcode](https://github.com/James-Ansley/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [NimVek/advent-of-code](https://github.com/NimVek/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [TechnoTone/AdventOfCode2021](https://github.com/TechnoTone/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [TomDufall/prog-puzzles](https://github.com/TomDufall/prog-puzzles) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [adamml/advent-of-code](https://github.com/adamml/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-resource%20not%20available-red)
* [alihacks/advent-of-code](https://github.com/alihacks/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [breakthatbass/advent_of_code2021](https://github.com/breakthatbass/advent_of_code2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [cobanov/advent-of-code](https://github.com/cobanov/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [grigoresc/adventofcode.2021](https://github.com/grigoresc/adventofcode.2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [jopein/aoc2021](https://github.com/jopein/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [k2bd/advent-of-code](https://github.com/k2bd/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [lostella/advent-of-code](https://github.com/lostella/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [lypnol/adventofcode-2021](https://github.com/lypnol/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [mathstrains21/Advent-Of-Code](https://github.com/mathstrains21/Advent-Of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--11--21-brightgreen)
* [mebeim/aoc](https://github.com/mebeim/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [nitekat1124/advent-of-code-2021](https://github.com/nitekat1124/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [novoselov-ab/adventofcode-2021-python](https://github.com/novoselov-ab/adventofcode-2021-python) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [orfeasa/advent-of-code-2021](https://github.com/orfeasa/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [smetanin-av/advent_of_code](https://github.com/smetanin-av/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [ernestoarbitrio/AoC2021](https://github.com/ernestoarbitrio/AoC2021) ![Last Commit on GitHub](https://img.shields.io/github/last-commit/ernestoarbitrio/AoC2021)]

#### R

*Solutions to AoC in R.*

* [plannapus/Advent_of_Code](https://github.com/plannapus/Advent_of_Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [rrrlw/advent-of-code](https://github.com/rrrlw/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Racket

*Solutions to AoC in Racket.*

* [Bogdanp/aoc2021](https://github.com/Bogdanp/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [lojic/LearningRacket](https://github.com/lojic/LearningRacket) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Raku

*Solutions to AoC in Raku.*

* [Hydrazer/advent-of-code](https://github.com/Hydrazer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### ReasonML

*Solutions to AoC in ReasonML.*

#### Red

*Solutions to AoC in Red.*

#### Ruby

*Solutions to AoC in Ruby.*

* [damyvv/advent-of-code-2021](https://github.com/damyvv/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Rust

*Solutions to AoC in Rust.*

* [Hydrazer/advent-of-code](https://github.com/Hydrazer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [sergree/aoc2021](https://github.com/sergree/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)
* [agubelu/Advent-of-Code-2021](https://github.com/agubelu/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [believer/advent-of-code](https://github.com/believer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [hashedone/aoc2021](https://github.com/hashedone/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [nickyvanurk/advent-of-code](https://github.com/nickyvanurk/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [pemoreau/advent-of-code-2021](https://github.com/pemoreau/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [richardneililagan/adventofcode-2021](https://github.com/richardneililagan/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [sathwikmatsa/aoc21](https://github.com/sathwikmatsa/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [yeurch/advent-of-code](https://github.com/yeurch/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [zsacul/AdventOfCode2021](https://github.com/zsacul/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [megatank58/adventofcode](https://github.com/megatank58/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen)

#### Smalltalk

*Solutions to AoC in Smalltalk.*

#### Scala

*Solutions to AoC in Scala.*

* [sim642/adventofcode](https://github.com/sim642/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [FlorianCassayre/AdventOfCode-2021](https://github.com/FlorianCassayre/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### Scheme

*Solutions to AoC in Scheme.*

* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Solidity

*Solutions to AoC in Solidity.*

* [ethsgo/aoc](https://github.com/ethsgo/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### SpectX

*Solutions to AoC in SpectX.*

#### SQL

*Solutions to AoC in SQL.*

* [alihacks/advent-of-code](https://github.com/alihacks/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### Swift

*Solutions to AoC in Swift.*

* [Frugghi/Advent-of-Code-2021](https://github.com/Frugghi/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [bence-t0th/Advent-of-Code-2021](https://github.com/bence-t0th/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [fguchelaar/AdventOfCode2021](https://github.com/fguchelaar/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### TypeScript

*Solutions to AoC in TypeScript.*

* [pierreyoda/advent-2021-svelte](https://github.com/pierreyoda/advent-2021-svelte) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [sanraith/aoc2021](https://github.com/sanraith/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [atme/advent-of-code-2021](https://github.com/atme/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-red)

#### Deno

*Solutions to AoC in Deno (TypeScript).*

#### Unison

*Solutions to AoC in Unison.*

#### VB.NET

*Solutions to AoC in VB.NET.*

#### Whitespace

*Solutions to AoC in Whitespace.*

* [andrewarchi/ws-challenges](https://github.com/andrewarchi/ws-challenges) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

#### Zig

*Solutions to AoC in Zig.*

* [jwarwick/aoc_2021](https://github.com/jwarwick/aoc_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [scorphus/advent-of-code-2021](https://github.com/scorphus/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)

### Live Streams

*Folks who are live streaming their process.*
