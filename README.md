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
    * [APL](#apl)
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
    * [Excel](#excel)
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
* [ismtabo/advent-of-code-deno-template](https://github.com/ismtabo/advent-of-code-deno-template) *(TypeScript / Deno)*
* [alvesvaren/AoC-template](https://github.com/alvesvaren/AoC-template) *(Python)*

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
* [aoc_rb](https://github.com/pacso/aoc_rb) -- A Ruby gem that generates an empty AoC project, and provides command-line tools for fetching input and submitting solutions  *(Ruby)*
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
* [aoctimer](https://github.com/caderek/aoctimer) -- A language-agnostic, multiplatform tool to measure your solution time in relative units, so you can share and compare your results with others.
* [aocrunner](https://github.com/caderek/aocrunner) -- A fast solutions runner and template generator, with simple CLI, customizable template, simple testing utility, live reload, and adventofcode.com integration. *(JavaScript, TypeScript)*

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

#### APL

*Solutions to AoC in APL.*

* [jayfoad/aoc2021apl](https://github.com/jayfoad/aoc2021apl) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jayfoad/aoc2021apl)
* [pitr/aoc](https://github.com/pitr/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/pitr/aoc)
* [rak1507/Advent-Of-Code-APL](https://github.com/rak1507/Advent-Of-Code-APL) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/rak1507/Advent-Of-Code-APL)

#### Assembly

*Solutions to AoC in Assembly.*

#### AWK

*Solutions to AoC in AWK.*

* [nusretipek/Advent-of-Code-2021](https://github.com/nusretipek/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/nusretipek/Advent-of-Code-2021)
* [ofrank123/AoC2021](https://github.com/ofrank123/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/ofrank123/AoC2021)
* [phillbush/aoc](https://github.com/phillbush/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/phillbush/aoc)

#### Bash

*Solutions to AoC in Bash.*

* [ColasNahaboo/advent-of-code-my-solutions](https://github.com/ColasNahaboo/advent-of-code-my-solutions) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ColasNahaboo/advent-of-code-my-solutions)
* [Theo-rhone/Advent-Of-Code-Bash](https://github.com/Theo-rhone/Advent-Of-Code-Bash) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**Therhone/Advent-Of-Code-Bash)

#### C

*Solutions to AoC in C.*

* [Fritz179/aoc-2021](https://github.com/Fritz179/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Fritz179/aoc-2021)
* [Jamesbarford/advent-of-code-2021](https://github.com/Jamesbarford/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Jamesbarford/advent-of-code-2021)
* [breakthatbass/advent_of_code2021](https://github.com/breakthatbass/advent_of_code2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen) ![Stars](https://img.shields.io/github/breakthatbass/advent_of_code2021)
* [jeromkiller/AoC2021](https://github.com/jeromkiller/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/jeromkiller/AoC2021)
* [sbancuz/aoc-2021](https://github.com/sbancuz/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/sbancuz/aoc-2021)
* [vierofernando/ansi-adventure](https://github.com/vierofernando/ansi-adventure) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/vierofernando/ansi-adventure)

#### C#

*Solutions to AoC in C#.*

* [DjordjeNedovic/Advent-of-Code](https://github.com/DjordjeNedovic/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/DjordjeNedovic/Advent-of-Code)
* [ShootMe/AdventOfCode](https://github.com/ShootMe/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ShootMe/AdventOfCode)
* [Virenbar/AdventOfCode](https://github.com/Virenbar/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Virenbar/AdventOfCode)
* [eduherminio/AoC2021](https://github.com/eduherminio/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/eduherminio/AoC2021)
* [encse/adventofcode](https://github.com/encse/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/encse/adventofcode)
* [norrbacka/aoc2021](https://github.com/norrbacka/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/norrbacka/aoc2021)
* [ntovas/AdventOfCode](https://github.com/ntovas/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ntovas/AdventOfCode)
* [viceroypenguin/adventofcode](https://github.com/viceroypenguin/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/viceroypenguin/adventofcode)

#### C++

*Solutions to AoC in C++.*

* [FilipHusnjak/AdventOfCode-2021](https://github.com/FilipHusnjak/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/FilipHusnjak/AdventOfCode-2021)
* [LMesaric/AoC-2021](https://github.com/LMesaric/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/LMesaric/AoC-2021)
* [TheRealMolen/adventofcode21](https://github.com/TheRealMolen/adventofcode21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/TheRealMolen/adventofcode21)
* [lento234/advent2021](https://github.com/lento234/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/lento234/advent2021)
* [lvrcek/advent-of-code-2021](https://github.com/lvrcek/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/lvrcek/advent-of-code-2021)
* [m3m0ry/aoc2021](https://github.com/m3m0ry/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/m3m0ry/aoc2021)

#### Clojure

*Solutions to AoC in Clojure.*

* [slotThe/AOC-2021](https://github.com/slotThe/AOC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/slotThe/AOC-2021)
* [unparalloser/advent-of-code-2021](https://github.com/unparalloser/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/unparalloser/advent-of-code-2021)

#### Common Lisp

*Solutions to AoC in Common Lisp.*

* [guojing0/aoc-2021](https://github.com/guojing0/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/guojing0/aoc-2021)
* [dwclark/advent-of-code-2021](https://github.com/dwclark/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/dwclark/advent-of-code-2021)

#### Crystal

*Solutions to AoC in Crystal.*

* [jazcarate/advent-of-code-2021](https://github.com/jazcarate/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/jazcarate/advent-of-code-2021)

#### D

*Solutions to AoC in D.*

#### Dart

*Solutions to AoC in Dart.*

* [S-ecki/AdventOfCode-2021](https://github.com/S-ecki/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**ecki/AdventOfCode-2021)
* [julemand101/AdventOfCode2021](https://github.com/julemand101/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/julemand101/AdventOfCode2021)

#### Elixir

*Solutions to AoC in Elixir.*

* [MarcusCemes/advent-of-code-2021](https://github.com/MarcusCemes/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/MarcusCemes/advent-of-code-2021)
* [YauHsien/advent-of-code-2021](https://github.com/YauHsien/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/YauHsien/advent-of-code-2021)
* [ballpointcarrot/advent-of-code-2021](https://github.com/ballpointcarrot/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ballpointcarrot/advent-of-code-2021)
* [edwardzhou/advent_code_2021](https://github.com/edwardzhou/advent_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/edwardzhou/advent_code_2021)
* [maco/advent_of_code](https://github.com/maco/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/maco/advent_of_code)
* [memoriesadrift/AoC2021-Elixir](https://github.com/memoriesadrift/AoC2021-Elixir) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/memoriesadrift/AoC2021-Elixir)
* [sevenseacat/advent_of_code](https://github.com/sevenseacat/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/sevenseacat/advent_of_code)
* [wasi0013/advent_of_code](https://github.com/wasi0013/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/wasi0013/advent_of_code)

#### Elm

*Solutions to AoC in Elm and Literate Elm.*

* [ryanolsonx/aocelm2021](https://github.com/ryanolsonx/aocelm2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen) ![Stars](https://img.shields.io/github/ryanolsonx/aocelm2021)

#### Erlang

*Solutions to AoC in Erlang.*

* [hypothermic/advent-of-code-2021](https://github.com/hypothermic/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/hypothermic/advent-of-code-2021)

#### Excel

*Solutions to AoC in Excel.*

* [Kolsky/AoC-2021-Excel](https://github.com/Kolsky/AoC-2021-Excel) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Kolsky/AoC-2021-Excel)
* [detrang1301/adventofcode-2021-excel](https://github.com/detrang1301/adventofcode-2021-excel) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/detrang1301/adventofcode-2021-excel)

#### F#

*Solutions to AoC in F#.*

* [JanDotNet/AdventOfCode](https://github.com/JanDotNet/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/JanDotNet/AdventOfCode)
* [Texl/AdventOfCode](https://github.com/Texl/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen) ![Stars](https://img.shields.io/github/Texl/AdventOfCode)
* [ThomasGoetzmann/AdventOfCode2021](https://github.com/ThomasGoetzmann/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/ThomasGoetzmann/AdventOfCode2021)

#### Go

*Solutions to AoC in Go.*

* [Alex-Wauters/advent-go-2021](https://github.com/Alex-Wauters/advent-go-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**AleWauters/advent-go-2021)
* [BorisLeMeec/adventofcode](https://github.com/BorisLeMeec/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/BorisLeMeec/adventofcode)
* [Christheoreo/advent-of-code-2021](https://github.com/Christheoreo/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Christheoreo/advent-of-code-2021)
* [Maitgon/Advent2021](https://github.com/Maitgon/Advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Maitgon/Advent2021)
* [SwiftPush/advent-of-code-2021](https://github.com/SwiftPush/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/SwiftPush/advent-of-code-2021)
* [angristan/advent-of-code-2021](https://github.com/angristan/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/angristan/advent-of-code-2021)
* [chigley/advent2021](https://github.com/chigley/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/chigley/advent2021)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/codemicro/adventOfCode)
* [dergeberl/aoc](https://github.com/dergeberl/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/dergeberl/aoc)
* [devries/advent_of_code_2021](https://github.com/devries/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/devries/advent_of_code_2021)
* [jsgv/advent-of-code](https://github.com/jsgv/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/jsgv/advent-of-code)
* [nobbs/advent-of-code-in-go](https://github.com/nobbs/advent-of-code-in-go) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/nobbs/advent-of-code-in-go)
* [obalunenko/advent-of-code](https://github.com/obalunenko/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen) ![Stars](https://img.shields.io/github/obalunenko/advent-of-code)
* [orfeasa/advent-of-code-2021](https://github.com/orfeasa/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/orfeasa/advent-of-code-2021)
* [ostcar/aoc2021](https://github.com/ostcar/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/ostcar/aoc2021)
* [ridaamirini/advent-of-code](https://github.com/ridaamirini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ridaamirini/advent-of-code)
* [shytikov/advent-of-go](https://github.com/shytikov/advent-of-go) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/shytikov/advent-of-go)
* [pvainio/adventofcode](https://github.com/pvainio/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/pvainio/adventofcode)

#### Groovy

*Solutions to AoC in Groovy.*

#### Hamler

*Solutions to AoC in Hamler.*

#### Haskell

*Solutions to AoC in Haskell.*

* [DestyNova/advent_of_code_2021](https://github.com/DestyNova/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/DestyNova/advent_of_code_2021)
* [SoleneGK/advent-of-code](https://github.com/SoleneGK/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/SoleneGK/advent-of-code)
* [TommasoAmici/haskell-aoc-2021](https://github.com/TommasoAmici/haskell-aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/TommasoAmici/haskell-aoc-2021)
* [Vince7778/adventofcode2021](https://github.com/Vince7778/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Vince7778/adventofcode2021)
* [daggy1234/aoc2021](https://github.com/daggy1234/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/daggy1234/aoc2021)
* [ggzor/advent-of-code-2021](https://github.com/ggzor/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ggzor/advent-of-code-2021)
* [ilyasm0919/AdventOfCode2021](https://github.com/ilyasm0919/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/ilyasm0919/AdventOfCode2021)
* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jitwit/aoc)
* [p-kostic/AdventOfCode2021](https://github.com/p-kostic/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**kostic/AdventOfCode2021)
* [shepherdjerred/advent-of-code-2021](https://github.com/shepherdjerred/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/shepherdjerred/advent-of-code-2021)
* [sonowz/advent-of-code-haskell](https://github.com/sonowz/advent-of-code-haskell) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/sonowz/advent-of-code-haskell)

#### Haxe

*Solutions to AoC in Haxe.*

#### Idris

*Solutions to AoC in Idris.*

#### J

*Solutions to AoC in J.*

* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jitwit/aoc)

#### Java

*Solutions to AoC in Java.*

* [OmarAssadi/advent-2021](https://github.com/OmarAssadi/advent-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/OmarAssadi/advent-2021)
* [SimonBaars/AdventOfCode-Java](https://github.com/SimonBaars/AdventOfCode-Java) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/SimonBaars/AdventOfCode-Java)
* [Sycix-HK/Advent-of-Code-2021](https://github.com/Sycix-HK/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**SyciHK/Advent-of-Code-2021)
* [akaritakai/AdventOfCode2021](https://github.com/akaritakai/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/akaritakai/AdventOfCode2021)
* [akbence/adventofcode](https://github.com/akbence/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/akbence/adventofcode)
* [amalagraba/adventofcode-2021](https://github.com/amalagraba/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/amalagraba/adventofcode-2021)
* [nsirons/programming-puzzles](https://github.com/nsirons/programming-puzzles) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/nsirons/programming-puzzles)
* [pvainio/adventofcode](https://github.com/pvainio/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/pvainio/adventofcode)

#### JavaScript

*Solutions to AoC in JavaScript.*

* [Fritz179/aoc-2021](https://github.com/Fritz179/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Fritz179/aoc-2021)
* [NullDev/Advent-of-Code](https://github.com/NullDev/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/NullDev/Advent-of-Code)
* [Omay238/advent-of-code](https://github.com/Omay238/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen) ![Stars](https://img.shields.io/github/Omay238/advent-of-code)
* [Pandicon/Advent-of-Code](https://github.com/Pandicon/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Pandicon/Advent-of-Code)
* [Totto16/AOC-2021](https://github.com/Totto16/AOC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Totto16/AOC-2021)
* [ald890/advent-of-code](https://github.com/ald890/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/ald890/advent-of-code)
* [chinesedfan/adventofcode](https://github.com/chinesedfan/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--01--09-brightgreen) ![Stars](https://img.shields.io/github/chinesedfan/adventofcode)
* [joaomlneto/advent-of-code](https://github.com/joaomlneto/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/joaomlneto/advent-of-code)
* [thejan14/adventofcode2021](https://github.com/thejan14/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/thejan14/adventofcode2021)
* [xhayper/advent-of-code](https://github.com/xhayper/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/xhayper/advent-of-code)

#### jq

*Solutions to AoC in jq.*

* [christianberg/advent](https://github.com/christianberg/advent) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/christianberg/advent)

#### Julia

*Solutions to AoC in Julia.*

* [CmdQ/AoC](https://github.com/CmdQ/AoC) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/CmdQ/AoC)
* [JakobSachs/aoc21](https://github.com/JakobSachs/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/JakobSachs/aoc21)
* [goggle/AdventOfCode2021.jl](https://github.com/goggle/AdventOfCode2021.jl) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/goggle/AdventOfCode2021.jl)
* [lostella/advent-of-code](https://github.com/lostella/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/lostella/advent-of-code)
* [racinmat/advent_of_code_2021](https://github.com/racinmat/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/racinmat/advent_of_code_2021)

#### Kotlin

*Solutions to AoC in Kotlin.*

* [7rebux/advent-of-code-2021](https://github.com/7rebux/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/7rebux/advent-of-code-2021)
* [ArpitShukIa/AdventOfCode2021](https://github.com/ArpitShukIa/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ArpitShukIa/AdventOfCode2021)
* [RaphaelTarita/AoC-2021](https://github.com/RaphaelTarita/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/RaphaelTarita/AoC-2021)
* [The-Self-Taught-Software-Engineer/advent-of-code-2021](https://github.com/The-Self-Taught-Software-Engineer/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**The-Self-Taught-SoftwarEngineer/advent-of-code-2021)
* [agrison/advent-of-code](https://github.com/agrison/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/agrison/advent-of-code)
* [edgars-supe/advent-of-code](https://github.com/edgars-supe/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**edgarsupe/advent-of-code)
* [hughjdavey/aoc-2021](https://github.com/hughjdavey/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/hughjdavey/aoc-2021)
* [marc-bouvier-katas/Kotlin_EduTools_Advent_of_Code_2021](https://github.com/marc-bouvier-katas/Kotlin_EduTools_Advent_of_Code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen) ![Stars](https://img.shields.io/github/**marc-bouviekatas/Kotlin_EduTools_Advent_of_Code_2021)
* [matios13/advent_of_code](https://github.com/matios13/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/matios13/advent_of_code)
* [tchojnacki/advent-of-code-2021-kotlin](https://github.com/tchojnacki/advent-of-code-2021-kotlin) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/tchojnacki/advent-of-code-2021-kotlin)
* [sanderploegsma/advent-of-code](https://github.com/sanderploegsma/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/sanderploegsma/advent-of-code)

#### LDPL

*Solutions to AoC in LDPL.*

#### Lua

*Solutions to AoC in Lua.*

* [jwise/aoc](https://github.com/jwise/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jwise/aoc)
* [xhayper/advent-of-code](https://github.com/xhayper/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/xhayper/advent-of-code)

#### MATLAB

*Solutions to AoC in MATLAB (Octave).*

#### Nim

*Solutions to AoC in Nim.*

* [AP2008/nim-aoc2021](https://github.com/AP2008/nim-aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen) ![Stars](https://img.shields.io/github/AP2008/nim-aoc2021)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/codemicro/adventOfCode)
* [vanyle/AdventOfCode2021](https://github.com/vanyle/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/vanyle/AdventOfCode2021)

#### Objective-C

*Solutions to AoC in Objective-C.*

#### OCaml

*Solutions to AoC in OCaml.*

* [jamespwilliams/aoc2021](https://github.com/jamespwilliams/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jamespwilliams/aoc2021)

#### PHP

*Solutions to AoC in PHP.*

* [arxeiss/advent-of-code-2021](https://github.com/arxeiss/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/arxeiss/advent-of-code-2021)
* [jvwag/advent-of-code](https://github.com/jvwag/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jvwag/advent-of-code)
* [kirara/advent-of-code](https://github.com/kirara/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/kirara/advent-of-code)
* [ridaamirini/advent-of-code](https://github.com/ridaamirini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ridaamirini/advent-of-code)
* [vuryss/aoc-php](https://github.com/vuryss/aoc-php) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/vuryss/aoc-php)

#### Perl

*Solutions to AoC in Perl.*

#### Pony

*Solutions to AoC in Pony.*

#### Prolog

*Solutions to AoC in Prolog.*

* [YauHsien/advent-of-code-2021](https://github.com/YauHsien/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/YauHsien/advent-of-code-2021)
* [jayhardee9/aoc-2021](https://github.com/jayhardee9/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jayhardee9/aoc-2021)

#### PowerShell

*Solutions to AoC in PowerShell.*

#### Python

*Solutions to AoC in Python.*

* [AkaruiYami/AdventOfCode-2021](https://github.com/AkaruiYami/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/AkaruiYami/AdventOfCode-2021)
* [Arrezz/AdventOfCode2021](https://github.com/Arrezz/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen) ![Stars](https://img.shields.io/github/Arrezz/AdventOfCode2021)
* [Aufbakanleitung/advent-of-code-2021](https://github.com/Aufbakanleitung/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Aufbakanleitung/advent-of-code-2021)
* [GeertLitjens/advent-of-code-2021](https://github.com/GeertLitjens/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/GeertLitjens/advent-of-code-2021)
* [IanFindlay/advent-of-code](https://github.com/IanFindlay/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/IanFindlay/advent-of-code)
* [James-Ansley/adventofcode](https://github.com/James-Ansley/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**JameAnsley/adventofcode)
* [JohnScolaro/advent-of-code](https://github.com/JohnScolaro/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/JohnScolaro/advent-of-code)
* [MasterMedo/aoc](https://github.com/MasterMedo/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/MasterMedo/aoc)
* [NimVek/advent-of-code](https://github.com/NimVek/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/NimVek/advent-of-code)
* [SwampThingTom/AoC2021](https://github.com/SwampThingTom/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/SwampThingTom/AoC2021)
* [TechnoTone/AdventOfCode2021](https://github.com/TechnoTone/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/TechnoTone/AdventOfCode2021)
* [TomDufall/prog-puzzles](https://github.com/TomDufall/prog-puzzles) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/TomDufall/prog-puzzles)
* [Vasile-Hij/AOC-2021](https://github.com/Vasile-Hij/AOC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**VasilHij/AOC-2021)
* [adamml/advent-of-code](https://github.com/adamml/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/adamml/advent-of-code)
* [alihacks/advent-of-code](https://github.com/alihacks/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/alihacks/advent-of-code)
* [alvesvaren/AoC-2021](https://github.com/alvesvaren/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen) ![Stars](https://img.shields.io/github/alvesvaren/AoC-2021)
* [benediktwerner/AdventOfCode](https://github.com/benediktwerner/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/benediktwerner/AdventOfCode)
* [cobanov/advent-of-code](https://github.com/cobanov/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/cobanov/advent-of-code)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/codemicro/adventOfCode)
* [daggy1234/aoc2021](https://github.com/daggy1234/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/daggy1234/aoc2021)
* [dhimmel/advent-of-code](https://github.com/dhimmel/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/dhimmel/advent-of-code)
* [dionyziz/advent-of-code](https://github.com/dionyziz/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/dionyziz/advent-of-code)
* [ernestoarbitrio/AoC2021](https://github.com/ernestoarbitrio/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ernestoarbitrio/AoC2021)
* [filipmlynarski/Advent-of-Code](https://github.com/filipmlynarski/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/filipmlynarski/Advent-of-Code)
* [fridokus/advent-of-code](https://github.com/fridokus/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/fridokus/advent-of-code)
* [fuglede/adventofcode](https://github.com/fuglede/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/fuglede/adventofcode)
* [gamma032steam/advent-of-code-2021](https://github.com/gamma032steam/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/gamma032steam/advent-of-code-2021)
* [grigoresc/adventofcode.2021](https://github.com/grigoresc/adventofcode.2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/grigoresc/adventofcode.2021)
* [jhrcook/advent-of-code_2021](https://github.com/jhrcook/advent-of-code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jhrcook/advent-of-code_2021)
* [jopein/aoc2021](https://github.com/jopein/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen) ![Stars](https://img.shields.io/github/jopein/aoc2021)
* [k2bd/advent-of-code](https://github.com/k2bd/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/k2bd/advent-of-code)
* [kresimir-lukin/AdventOfCode2021](https://github.com/kresimir-lukin/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**kresimilukin/AdventOfCode2021)
* [lostella/advent-of-code](https://github.com/lostella/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/lostella/advent-of-code)
* [lypnol/adventofcode-2021](https://github.com/lypnol/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/lypnol/adventofcode-2021)
* [martino-vic/Advent](https://github.com/martino-vic/Advent) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**martinvic/Advent)
* [mathstrains21/Advent-Of-Code](https://github.com/mathstrains21/Advent-Of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen) ![Stars](https://img.shields.io/github/mathstrains21/Advent-Of-Code)
* [mebeim/aoc](https://github.com/mebeim/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/mebeim/aoc)
* [nhrade/advent-of-code](https://github.com/nhrade/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/nhrade/advent-of-code)
* [nitekat1124/advent-of-code-2021](https://github.com/nitekat1124/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/nitekat1124/advent-of-code-2021)
* [noah-kg/AdventOfCode](https://github.com/noah-kg/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**noakg/AdventOfCode)
* [novoselov-ab/adventofcode-2021-python](https://github.com/novoselov-ab/adventofcode-2021-python) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**novoseloab/adventofcode-2021-python)
* [orfeasa/advent-of-code-2021](https://github.com/orfeasa/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/orfeasa/advent-of-code-2021)
* [pranasziaukas/advent-of-code-2021](https://github.com/pranasziaukas/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/pranasziaukas/advent-of-code-2021)
* [prashnts/advent-of-code--2021](https://github.com/prashnts/advent-of-code--2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/prashnts/advent-of-code--2021)
* [python-b5/advent-of-code-2021](https://github.com/python-b5/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**pythob5/advent-of-code-2021)
* [redraw/aoc](https://github.com/redraw/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/redraw/aoc)
* [rosscon/rosscon_advent_of_code](https://github.com/rosscon/rosscon_advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/rosscon/rosscon_advent_of_code)
* [sejaldua/advent-of-code-2021](https://github.com/sejaldua/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/sejaldua/advent-of-code-2021)
* [smetanin-av/advent_of_code](https://github.com/smetanin-av/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen) ![Stars](https://img.shields.io/github/**smetaniav/advent_of_code)
* [taddeus/advent-of-code](https://github.com/taddeus/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/taddeus/advent-of-code)
* [tobi6112/AoC-2021](https://github.com/tobi6112/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/tobi6112/AoC-2021)
* [viliampucik/adventofcode](https://github.com/viliampucik/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/viliampucik/adventofcode)
* [vlopezferrando/advent-of-code](https://github.com/vlopezferrando/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/vlopezferrando/advent-of-code)
* [w-m/aoc2021](https://github.com/w-m/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/*-m/aoc2021)
* [widdin/advent-of-code](https://github.com/widdin/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/widdin/advent-of-code)
* [xanthoko/Advent-of-code-2021](https://github.com/xanthoko/Advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/xanthoko/Advent-of-code-2021)
* [yspreen/adventofcode](https://github.com/yspreen/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/yspreen/adventofcode)
* [zedrdave/advent_of_code](https://github.com/zedrdave/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/zedrdave/advent_of_code)

#### R

*Solutions to AoC in R.*

* [Zedseayou/advent_of_code](https://github.com/Zedseayou/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Zedseayou/advent_of_code)
* [czeildi/advent-of-code](https://github.com/czeildi/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/czeildi/advent-of-code)
* [plannapus/Advent_of_Code](https://github.com/plannapus/Advent_of_Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/plannapus/Advent_of_Code)
* [rrrlw/advent-of-code](https://github.com/rrrlw/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/rrrlw/advent-of-code)
* [midoriyama0323/adventofcode2021](https://github.com/midoriyama0323/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/midoriyama0323/adventofcode2021)

#### Racket

*Solutions to AoC in Racket.*

* [Bogdanp/aoc2021](https://github.com/Bogdanp/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Bogdanp/aoc2021)
* [filiplajszczak/advent-of-code-2021](https://github.com/filiplajszczak/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen) ![Stars](https://img.shields.io/github/filiplajszczak/advent-of-code-2021)
* [lojic/LearningRacket](https://github.com/lojic/LearningRacket) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/lojic/LearningRacket)
* [parry84/aoc2021](https://github.com/parry84/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/parry84/aoc2021)

#### Raku

*Solutions to AoC in Raku.*

* [Hydrazer/advent-of-code](https://github.com/Hydrazer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Hydrazer/advent-of-code)

#### ReasonML

*Solutions to AoC in ReasonML.*

#### Red

*Solutions to AoC in Red.*

#### Ruby

*Solutions to AoC in Ruby.*

* [damyvv/advent-of-code-2021](https://github.com/damyvv/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/damyvv/advent-of-code-2021)
* [danhealy/advent-of-code-2021](https://github.com/danhealy/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/danhealy/advent-of-code-2021)
* [narze/advent-of-code-2021](https://github.com/narze/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/narze/advent-of-code-2021)
* [zsarge/advent-of-code-2021](https://github.com/zsarge/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/zsarge/advent-of-code-2021)

#### Rust

*Solutions to AoC in Rust.*

* [Basicprogrammer10/Advent-Of-Code-2021](https://github.com/Basicprogrammer10/Advent-Of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Basicprogrammer10/Advent-Of-Code-2021)
* [Hydrazer/advent-of-code](https://github.com/Hydrazer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Hydrazer/advent-of-code)
* [agubelu/Advent-of-Code-2021](https://github.com/agubelu/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/agubelu/Advent-of-Code-2021)
* [asdrubalini/advent-of-code](https://github.com/asdrubalini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/asdrubalini/advent-of-code)
* [believer/advent-of-code](https://github.com/believer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/believer/advent-of-code)
* [hashedone/aoc2021](https://github.com/hashedone/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/hashedone/aoc2021)
* [janreggie/aoc-rs](https://github.com/janreggie/aoc-rs) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/janreggie/aoc-rs)
* [martinxxd/adventofcode-2021-rust](https://github.com/martinxxd/adventofcode-2021-rust) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen) ![Stars](https://img.shields.io/github/martinxxd/adventofcode-2021-rust)
* [mayjs/advent_of_code_2021](https://github.com/mayjs/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/mayjs/advent_of_code_2021)
* [megatank58/adventofcode](https://github.com/megatank58/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/megatank58/adventofcode)
* [nickyvanurk/advent-of-code](https://github.com/nickyvanurk/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/nickyvanurk/advent-of-code)
* [pemoreau/advent-of-code-2021](https://github.com/pemoreau/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/pemoreau/advent-of-code-2021)
* [poyea/aoc](https://github.com/poyea/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/poyea/aoc)
* [richardneililagan/adventofcode-2021](https://github.com/richardneililagan/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/richardneililagan/adventofcode-2021)
* [sathwikmatsa/aoc21](https://github.com/sathwikmatsa/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/sathwikmatsa/aoc21)
* [sergree/aoc2021](https://github.com/sergree/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen) ![Stars](https://img.shields.io/github/sergree/aoc2021)
* [sigma67/aoc21](https://github.com/sigma67/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/sigma67/aoc21)
* [snxk/adventofcode-2021](https://github.com/snxk/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/snxk/adventofcode-2021)
* [tobiges/advent-of-code-2021](https://github.com/tobiges/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/tobiges/advent-of-code-2021)
* [varunmehrishi/AdventOfCode2021](https://github.com/varunmehrishi/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/varunmehrishi/AdventOfCode2021)
* [yeurch/advent-of-code](https://github.com/yeurch/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/yeurch/advent-of-code)
* [zsacul/AdventOfCode2021](https://github.com/zsacul/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/zsacul/AdventOfCode2021)
* [ManevilleF/AdventOfCode2021](https://github.com/ManevilleF/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ManevilleF/AdventOfCode2021)
* [fee1-dead/aoc](https://github.com/fee1-dead/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/**feedead/aoc)

#### Smalltalk

*Solutions to AoC in Smalltalk.*

#### Scala

*Solutions to AoC in Scala.*

* [2m/adventofcode2021](https://github.com/2m/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/2m/adventofcode2021)
* [FlorianCassayre/AdventOfCode-2021](https://github.com/FlorianCassayre/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/FlorianCassayre/AdventOfCode-2021)
* [fdlk/advent-2021](https://github.com/fdlk/advent-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/fdlk/advent-2021)
* [ggzor/advent-of-code-2021](https://github.com/ggzor/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ggzor/advent-of-code-2021)
* [gnmathur/AdventOfCode-2021](https://github.com/gnmathur/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/gnmathur/AdventOfCode-2021)
* [mzielinski/advent-of-code-2021](https://github.com/mzielinski/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/mzielinski/advent-of-code-2021)
* [sim642/adventofcode](https://github.com/sim642/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/sim642/adventofcode)
* [williamhaw/advent-of-code-2021](https://github.com/williamhaw/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/williamhaw/advent-of-code-2021)

#### Scheme

*Solutions to AoC in Scheme.*

* [AiziChen/advent-of-code](https://github.com/AiziChen/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/AiziChen/advent-of-code)
* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/jitwit/aoc)

#### Solidity

*Solutions to AoC in Solidity.*

* [ethsgo/aoc](https://github.com/ethsgo/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/ethsgo/aoc)

#### SpectX

*Solutions to AoC in SpectX.*

#### SQL

*Solutions to AoC in SQL.*

* [alihacks/advent-of-code](https://github.com/alihacks/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/alihacks/advent-of-code)

#### Swift

*Solutions to AoC in Swift.*

* [Frugghi/Advent-of-Code-2021](https://github.com/Frugghi/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/Frugghi/Advent-of-Code-2021)
* [bence-t0th/Advent-of-Code-2021](https://github.com/bence-t0th/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen) ![Stars](https://img.shields.io/github/**benct0th/Advent-of-Code-2021)
* [bhargavg/AdventOfCode](https://github.com/bhargavg/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/bhargavg/AdventOfCode)
* [fguchelaar/AdventOfCode2021](https://github.com/fguchelaar/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/fguchelaar/AdventOfCode2021)
* [onevcat/advent2021](https://github.com/onevcat/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/onevcat/advent2021)
* [scottluxenberg/AdventOfCode2021](https://github.com/scottluxenberg/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/scottluxenberg/AdventOfCode2021)

#### TypeScript

*Solutions to AoC in TypeScript.*

* [Charlesworth/adventOfCode2021](https://github.com/Charlesworth/adventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/Charlesworth/adventOfCode2021)
* [DarthGandalf/advent-of-code](https://github.com/DarthGandalf/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/DarthGandalf/advent-of-code)
* [atme/advent-of-code-2021](https://github.com/atme/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/atme/advent-of-code-2021)
* [caderek/aoc2021](https://github.com/caderek/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/caderek/aoc2021)
* [marcobiedermann/advent-of-code](https://github.com/marcobiedermann/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/marcobiedermann/advent-of-code)
* [pierreyoda/advent-2021-svelte](https://github.com/pierreyoda/advent-2021-svelte) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen) ![Stars](https://img.shields.io/github/pierreyoda/advent-2021-svelte)
* [sanraith/aoc2021](https://github.com/sanraith/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/sanraith/aoc2021)
* [fstreicher/aoc-2021](https://github.com/fstreicher/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/fstreicher/aoc-2021)

#### Deno

*Solutions to AoC in Deno (TypeScript).*

* [Im-Beast/advent_of_code](https://github.com/Im-Beast/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/**IBeast/advent_of_code)
* [LionC/aoc-2021](https://github.com/LionC/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/LionC/aoc-2021)
* [N8Brooks/deno_aoc](https://github.com/N8Brooks/deno_aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen) ![Stars](https://img.shields.io/github/N8Brooks/deno_aoc)
* [ismtabo/advent-of-code-2021](https://github.com/ismtabo/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/ismtabo/advent-of-code-2021)

#### Unison

*Solutions to AoC in Unison.*

#### VB.NET

*Solutions to AoC in VB.NET.*

#### Whitespace

*Solutions to AoC in Whitespace.*

* [andrewarchi/ws-challenges](https://github.com/andrewarchi/ws-challenges) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/andrewarchi/ws-challenges)

#### Zig

*Solutions to AoC in Zig.*

* [jwarwick/aoc_2021](https://github.com/jwarwick/aoc_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/jwarwick/aoc_2021)
* [scorphus/advent-of-code-2021](https://github.com/scorphus/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen) ![Stars](https://img.shields.io/github/scorphus/advent-of-code-2021)

### Live Streams

*Folks who are live streaming their process.*

* [Aufbakanleitung](https://youtube.com/playlist?list=PLDeBWauprDRjbplIuyhVhXhIt7k4NuOad)
