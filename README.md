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

* [jayfoad/aoc2021apl](https://github.com/jayfoad/aoc2021apl) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [pitr/aoc](https://github.com/pitr/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [rak1507/Advent-Of-Code-APL](https://github.com/rak1507/Advent-Of-Code-APL) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Assembly

*Solutions to AoC in Assembly.*

#### AWK

*Solutions to AoC in AWK.*

* [nusretipek/Advent-of-Code-2021](https://github.com/nusretipek/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ofrank123/AoC2021](https://github.com/ofrank123/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [phillbush/aoc](https://github.com/phillbush/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Bash

*Solutions to AoC in Bash.*

* [ColasNahaboo/advent-of-code-my-solutions](https://github.com/ColasNahaboo/advent-of-code-my-solutions) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Theo-rhone/Advent-Of-Code-Bash](https://github.com/Theo-rhone/Advent-Of-Code-Bash) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### C

*Solutions to AoC in C.*

* [Fritz179/aoc-2021](https://github.com/Fritz179/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Jamesbarford/advent-of-code-2021](https://github.com/Jamesbarford/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [federicovilla55/Advent-of-Code]
* [breakthatbass/advent_of_code2021](https://github.com/breakthatbass/advent_of_code2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen)
* [jeromkiller/AoC2021](https://github.com/jeromkiller/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [sbancuz/aoc-2021](https://github.com/sbancuz/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [vierofernando/ansi-adventure](https://github.com/vierofernando/ansi-adventure) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### C#

*Solutions to AoC in C#.*

* [DjordjeNedovic/Advent-of-Code](https://github.com/DjordjeNedovic/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ShootMe/AdventOfCode](https://github.com/ShootMe/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Virenbar/AdventOfCode](https://github.com/Virenbar/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [eduherminio/AoC2021](https://github.com/eduherminio/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [encse/adventofcode](https://github.com/encse/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [norrbacka/aoc2021](https://github.com/norrbacka/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ntovas/AdventOfCode](https://github.com/ntovas/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [viceroypenguin/adventofcode](https://github.com/viceroypenguin/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### C++

*Solutions to AoC in C++.*

* [FilipHusnjak/AdventOfCode-2021](https://github.com/FilipHusnjak/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [LMesaric/AoC-2021](https://github.com/LMesaric/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [TheRealMolen/adventofcode21](https://github.com/TheRealMolen/adventofcode21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [lento234/advent2021](https://github.com/lento234/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [lvrcek/advent-of-code-2021](https://github.com/lvrcek/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [m3m0ry/aoc2021](https://github.com/m3m0ry/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Clojure

*Solutions to AoC in Clojure.*

* [slotThe/AOC-2021](https://github.com/slotThe/AOC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [unparalloser/advent-of-code-2021](https://github.com/unparalloser/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Common Lisp

*Solutions to AoC in Common Lisp.*

* [guojing0/aoc-2021](https://github.com/guojing0/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [dwclark/advent-of-code-2021](https://github.com/dwclark/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Crystal

*Solutions to AoC in Crystal.*

* [jazcarate/advent-of-code-2021](https://github.com/jazcarate/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)

#### D

*Solutions to AoC in D.*

#### Dart

*Solutions to AoC in Dart.*

* [S-ecki/AdventOfCode-2021](https://github.com/S-ecki/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [julemand101/AdventOfCode2021](https://github.com/julemand101/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Elixir

*Solutions to AoC in Elixir.*

* [MarcusCemes/advent-of-code-2021](https://github.com/MarcusCemes/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [YauHsien/advent-of-code-2021](https://github.com/YauHsien/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ballpointcarrot/advent-of-code-2021](https://github.com/ballpointcarrot/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [edwardzhou/advent_code_2021](https://github.com/edwardzhou/advent_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [maco/advent_of_code](https://github.com/maco/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [memoriesadrift/AoC2021-Elixir](https://github.com/memoriesadrift/AoC2021-Elixir) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [sevenseacat/advent_of_code](https://github.com/sevenseacat/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [wasi0013/advent_of_code](https://github.com/wasi0013/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Tyflomate/advent_of_code](https://github.com/Tyflomate/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Elm

*Solutions to AoC in Elm and Literate Elm.*

* [ryanolsonx/aocelm2021](https://github.com/ryanolsonx/aocelm2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen)

#### Erlang

*Solutions to AoC in Erlang.*

* [hypothermic/advent-of-code-2021](https://github.com/hypothermic/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Excel

*Solutions to AoC in Excel.*

* [Kolsky/AoC-2021-Excel](https://github.com/Kolsky/AoC-2021-Excel) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [detrang1301/adventofcode-2021-excel](https://github.com/detrang1301/adventofcode-2021-excel) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### F#

*Solutions to AoC in F#.*

* [JanDotNet/AdventOfCode](https://github.com/JanDotNet/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Texl/AdventOfCode](https://github.com/Texl/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen)
* [ThomasGoetzmann/AdventOfCode2021](https://github.com/ThomasGoetzmann/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Go

*Solutions to AoC in Go.*

* [Alex-Wauters/advent-go-2021](https://github.com/Alex-Wauters/advent-go-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [BorisLeMeec/adventofcode](https://github.com/BorisLeMeec/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Christheoreo/advent-of-code-2021](https://github.com/Christheoreo/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Maitgon/Advent2021](https://github.com/Maitgon/Advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [SwiftPush/advent-of-code-2021](https://github.com/SwiftPush/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [angristan/advent-of-code-2021](https://github.com/angristan/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [chigley/advent2021](https://github.com/chigley/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [dergeberl/aoc](https://github.com/dergeberl/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [devries/advent_of_code_2021](https://github.com/devries/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [jsgv/advent-of-code](https://github.com/jsgv/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [nobbs/advent-of-code-in-go](https://github.com/nobbs/advent-of-code-in-go) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [obalunenko/advent-of-code](https://github.com/obalunenko/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen)
* [orfeasa/advent-of-code-2021](https://github.com/orfeasa/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ostcar/aoc2021](https://github.com/ostcar/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [ridaamirini/advent-of-code](https://github.com/ridaamirini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [shytikov/advent-of-go](https://github.com/shytikov/advent-of-go) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [pvainio/adventofcode](https://github.com/pvainio/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Groovy

*Solutions to AoC in Groovy.*

#### Hamler

*Solutions to AoC in Hamler.*

#### Haskell

*Solutions to AoC in Haskell.*

* [DestyNova/advent_of_code_2021](https://github.com/DestyNova/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [SoleneGK/advent-of-code](https://github.com/SoleneGK/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [TommasoAmici/haskell-aoc-2021](https://github.com/TommasoAmici/haskell-aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [Vince7778/adventofcode2021](https://github.com/Vince7778/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [daggy1234/aoc2021](https://github.com/daggy1234/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ggzor/advent-of-code-2021](https://github.com/ggzor/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ilyasm0919/AdventOfCode2021](https://github.com/ilyasm0919/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [p-kostic/AdventOfCode2021](https://github.com/p-kostic/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [shepherdjerred/advent-of-code-2021](https://github.com/shepherdjerred/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [sonowz/advent-of-code-haskell](https://github.com/sonowz/advent-of-code-haskell) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Haxe

*Solutions to AoC in Haxe.*

#### Idris

*Solutions to AoC in Idris.*

#### J

*Solutions to AoC in J.*

* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Java

*Solutions to AoC in Java.*

* [OmarAssadi/advent-2021](https://github.com/OmarAssadi/advent-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [SimonBaars/AdventOfCode-Java](https://github.com/SimonBaars/AdventOfCode-Java) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Sycix-HK/Advent-of-Code-2021](https://github.com/Sycix-HK/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [akaritakai/AdventOfCode2021](https://github.com/akaritakai/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [akbence/adventofcode](https://github.com/akbence/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [amalagraba/adventofcode-2021](https://github.com/amalagraba/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [nsirons/programming-puzzles](https://github.com/nsirons/programming-puzzles) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [pvainio/adventofcode](https://github.com/pvainio/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### JavaScript

*Solutions to AoC in JavaScript.*

* [Fritz179/aoc-2021](https://github.com/Fritz179/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [NullDev/Advent-of-Code](https://github.com/NullDev/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Omay238/advent-of-code](https://github.com/Omay238/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen)
* [Pandicon/Advent-of-Code](https://github.com/Pandicon/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [Totto16/AOC-2021](https://github.com/Totto16/AOC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ald890/advent-of-code](https://github.com/ald890/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [chinesedfan/adventofcode](https://github.com/chinesedfan/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--01--09-brightgreen)
* [joaomlneto/advent-of-code](https://github.com/joaomlneto/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [thejan14/adventofcode2021](https://github.com/thejan14/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [xhayper/advent-of-code](https://github.com/xhayper/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Scttpr/Advent-of-Code](https://github.com/Scttpr/advent-of-code/tree/master/2021/ts) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### jq

*Solutions to AoC in jq.*

* [christianberg/advent](https://github.com/christianberg/advent) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Julia

*Solutions to AoC in Julia.*

* [CmdQ/AoC](https://github.com/CmdQ/AoC) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [JakobSachs/aoc21](https://github.com/JakobSachs/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [goggle/AdventOfCode2021.jl](https://github.com/goggle/AdventOfCode2021.jl) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [lostella/advent-of-code](https://github.com/lostella/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [racinmat/advent_of_code_2021](https://github.com/racinmat/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Kotlin

*Solutions to AoC in Kotlin.*

* [7rebux/advent-of-code-2021](https://github.com/7rebux/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ArpitShukIa/AdventOfCode2021](https://github.com/ArpitShukIa/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [RaphaelTarita/AoC-2021](https://github.com/RaphaelTarita/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [The-Self-Taught-Software-Engineer/advent-of-code-2021](https://github.com/The-Self-Taught-Software-Engineer/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [agrison/advent-of-code](https://github.com/agrison/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [edgars-supe/advent-of-code](https://github.com/edgars-supe/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [hughjdavey/aoc-2021](https://github.com/hughjdavey/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [marc-bouvier-katas/Kotlin_EduTools_Advent_of_Code_2021](https://github.com/marc-bouvier-katas/Kotlin_EduTools_Advent_of_Code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen)
* [matios13/advent_of_code](https://github.com/matios13/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [tchojnacki/advent-of-code-2021-kotlin](https://github.com/tchojnacki/advent-of-code-2021-kotlin) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [sanderploegsma/advent-of-code](https://github.com/sanderploegsma/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### LDPL

*Solutions to AoC in LDPL.*

#### Lua

*Solutions to AoC in Lua.*

* [jwise/aoc](https://github.com/jwise/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [xhayper/advent-of-code](https://github.com/xhayper/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### MATLAB

*Solutions to AoC in MATLAB (Octave).*

#### Nim

*Solutions to AoC in Nim.*

* [AP2008/nim-aoc2021](https://github.com/AP2008/nim-aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [vanyle/AdventOfCode2021](https://github.com/vanyle/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Objective-C

*Solutions to AoC in Objective-C.*

#### OCaml

*Solutions to AoC in OCaml.*

* [jamespwilliams/aoc2021](https://github.com/jamespwilliams/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### PHP

*Solutions to AoC in PHP.*

* [arxeiss/advent-of-code-2021](https://github.com/arxeiss/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [jvwag/advent-of-code](https://github.com/jvwag/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [kirara/advent-of-code](https://github.com/kirara/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [ridaamirini/advent-of-code](https://github.com/ridaamirini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [vuryss/aoc-php](https://github.com/vuryss/aoc-php) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Perl

*Solutions to AoC in Perl.*

#### Pony

*Solutions to AoC in Pony.*

#### Prolog

*Solutions to AoC in Prolog.*

* [YauHsien/advent-of-code-2021](https://github.com/YauHsien/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [jayhardee9/aoc-2021](https://github.com/jayhardee9/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### PowerShell

*Solutions to AoC in PowerShell.*

#### Python

*Solutions to AoC in Python.*

* [AkaruiYami/AdventOfCode-2021](https://github.com/AkaruiYami/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [Arrezz/AdventOfCode2021](https://github.com/Arrezz/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen)
* [Aufbakanleitung/advent-of-code-2021](https://github.com/Aufbakanleitung/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [GeertLitjens/advent-of-code-2021](https://github.com/GeertLitjens/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [IanFindlay/advent-of-code](https://github.com/IanFindlay/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [James-Ansley/adventofcode](https://github.com/James-Ansley/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [JohnScolaro/advent-of-code](https://github.com/JohnScolaro/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [MasterMedo/aoc](https://github.com/MasterMedo/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [NimVek/advent-of-code](https://github.com/NimVek/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [SwampThingTom/AoC2021](https://github.com/SwampThingTom/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [TechnoTone/AdventOfCode2021](https://github.com/TechnoTone/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [TomDufall/prog-puzzles](https://github.com/TomDufall/prog-puzzles) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [Vasile-Hij/AOC-2021](https://github.com/Vasile-Hij/AOC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [adamml/advent-of-code](https://github.com/adamml/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [alihacks/advent-of-code](https://github.com/alihacks/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [alvesvaren/AoC-2021](https://github.com/alvesvaren/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen)
* [benediktwerner/AdventOfCode](https://github.com/benediktwerner/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [cobanov/advent-of-code](https://github.com/cobanov/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [codemicro/adventOfCode](https://github.com/codemicro/adventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [daggy1234/aoc2021](https://github.com/daggy1234/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [dhimmel/advent-of-code](https://github.com/dhimmel/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [dionyziz/advent-of-code](https://github.com/dionyziz/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ernestoarbitrio/AoC2021](https://github.com/ernestoarbitrio/AoC2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [filipmlynarski/Advent-of-Code](https://github.com/filipmlynarski/Advent-of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [fridokus/advent-of-code](https://github.com/fridokus/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [fuglede/adventofcode](https://github.com/fuglede/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [gamma032steam/advent-of-code-2021](https://github.com/gamma032steam/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [grigoresc/adventofcode.2021](https://github.com/grigoresc/adventofcode.2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [jhrcook/advent-of-code_2021](https://github.com/jhrcook/advent-of-code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [jopein/aoc2021](https://github.com/jopein/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen)
* [k2bd/advent-of-code](https://github.com/k2bd/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [kresimir-lukin/AdventOfCode2021](https://github.com/kresimir-lukin/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [lostella/advent-of-code](https://github.com/lostella/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [lypnol/adventofcode-2021](https://github.com/lypnol/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [martino-vic/Advent](https://github.com/martino-vic/Advent) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [mathstrains21/Advent-Of-Code](https://github.com/mathstrains21/Advent-Of-Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--04-brightgreen)
* [mebeim/aoc](https://github.com/mebeim/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [nhrade/advent-of-code](https://github.com/nhrade/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [nitekat1124/advent-of-code-2021](https://github.com/nitekat1124/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [noah-kg/AdventOfCode](https://github.com/noah-kg/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [novoselov-ab/adventofcode-2021-python](https://github.com/novoselov-ab/adventofcode-2021-python) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [orfeasa/advent-of-code-2021](https://github.com/orfeasa/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [pranasziaukas/advent-of-code-2021](https://github.com/pranasziaukas/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [prashnts/advent-of-code--2021](https://github.com/prashnts/advent-of-code--2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [python-b5/advent-of-code-2021](https://github.com/python-b5/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [redraw/aoc](https://github.com/redraw/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [rosscon/rosscon_advent_of_code](https://github.com/rosscon/rosscon_advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [sejaldua/advent-of-code-2021](https://github.com/sejaldua/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [smetanin-av/advent_of_code](https://github.com/smetanin-av/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen)
* [taddeus/advent-of-code](https://github.com/taddeus/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [tobi6112/AoC-2021](https://github.com/tobi6112/AoC-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [viliampucik/adventofcode](https://github.com/viliampucik/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [vlopezferrando/advent-of-code](https://github.com/vlopezferrando/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [w-m/aoc2021](https://github.com/w-m/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [widdin/advent-of-code](https://github.com/widdin/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [xanthoko/Advent-of-code-2021](https://github.com/xanthoko/Advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [yspreen/adventofcode](https://github.com/yspreen/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [zedrdave/advent_of_code](https://github.com/zedrdave/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### R

*Solutions to AoC in R.*

* [Zedseayou/advent_of_code](https://github.com/Zedseayou/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [czeildi/advent-of-code](https://github.com/czeildi/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [plannapus/Advent_of_Code](https://github.com/plannapus/Advent_of_Code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [rrrlw/advent-of-code](https://github.com/rrrlw/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [midoriyama0323/adventofcode2021](https://github.com/midoriyama0323/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Racket

*Solutions to AoC in Racket.*

* [Bogdanp/aoc2021](https://github.com/Bogdanp/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [filiplajszczak/advent-of-code-2021](https://github.com/filiplajszczak/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen)
* [lojic/LearningRacket](https://github.com/lojic/LearningRacket) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [parry84/aoc2021](https://github.com/parry84/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Raku

*Solutions to AoC in Raku.*

* [Hydrazer/advent-of-code](https://github.com/Hydrazer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### ReasonML

*Solutions to AoC in ReasonML.*

#### Red

*Solutions to AoC in Red.*

#### Ruby

*Solutions to AoC in Ruby.*

* [damyvv/advent-of-code-2021](https://github.com/damyvv/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [danhealy/advent-of-code-2021](https://github.com/danhealy/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [narze/advent-of-code-2021](https://github.com/narze/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [zsarge/advent-of-code-2021](https://github.com/zsarge/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Rust

*Solutions to AoC in Rust.*

* [Basicprogrammer10/Advent-Of-Code-2021](https://github.com/Basicprogrammer10/Advent-Of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [Hydrazer/advent-of-code](https://github.com/Hydrazer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [agubelu/Advent-of-Code-2021](https://github.com/agubelu/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [asdrubalini/advent-of-code](https://github.com/asdrubalini/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [believer/advent-of-code](https://github.com/believer/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [hashedone/aoc2021](https://github.com/hashedone/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [janreggie/aoc-rs](https://github.com/janreggie/aoc-rs) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [martinxxd/adventofcode-2021-rust](https://github.com/martinxxd/adventofcode-2021-rust) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--05-brightgreen)
* [mayjs/advent_of_code_2021](https://github.com/mayjs/advent_of_code_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [megatank58/adventofcode](https://github.com/megatank58/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [nickyvanurk/advent-of-code](https://github.com/nickyvanurk/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [pemoreau/advent-of-code-2021](https://github.com/pemoreau/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [poyea/aoc](https://github.com/poyea/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [richardneililagan/adventofcode-2021](https://github.com/richardneililagan/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [sathwikmatsa/aoc21](https://github.com/sathwikmatsa/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [sergree/aoc2021](https://github.com/sergree/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--02-brightgreen)
* [sigma67/aoc21](https://github.com/sigma67/aoc21) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [snxk/adventofcode-2021](https://github.com/snxk/adventofcode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [tobiges/advent-of-code-2021](https://github.com/tobiges/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [varunmehrishi/AdventOfCode2021](https://github.com/varunmehrishi/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [yeurch/advent-of-code](https://github.com/yeurch/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [zsacul/AdventOfCode2021](https://github.com/zsacul/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ManevilleF/AdventOfCode2021](https://github.com/ManevilleF/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [fee1-dead/aoc](https://github.com/fee1-dead/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Smalltalk

*Solutions to AoC in Smalltalk.*

#### Scala

*Solutions to AoC in Scala.*

* [2m/adventofcode2021](https://github.com/2m/adventofcode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [FlorianCassayre/AdventOfCode-2021](https://github.com/FlorianCassayre/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [fdlk/advent-2021](https://github.com/fdlk/advent-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ggzor/advent-of-code-2021](https://github.com/ggzor/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [gnmathur/AdventOfCode-2021](https://github.com/gnmathur/AdventOfCode-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [mzielinski/advent-of-code-2021](https://github.com/mzielinski/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [sim642/adventofcode](https://github.com/sim642/adventofcode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [williamhaw/advent-of-code-2021](https://github.com/williamhaw/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Scheme

*Solutions to AoC in Scheme.*

* [AiziChen/advent-of-code](https://github.com/AiziChen/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [jitwit/aoc](https://github.com/jitwit/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Solidity

*Solutions to AoC in Solidity.*

* [ethsgo/aoc](https://github.com/ethsgo/aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### SpectX

*Solutions to AoC in SpectX.*

#### SQL

*Solutions to AoC in SQL.*

* [alihacks/advent-of-code](https://github.com/alihacks/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)

#### Swift

*Solutions to AoC in Swift.*

* [Frugghi/Advent-of-Code-2021](https://github.com/Frugghi/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [bence-t0th/Advent-of-Code-2021](https://github.com/bence-t0th/Advent-of-Code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--01-brightgreen)
* [bhargavg/AdventOfCode](https://github.com/bhargavg/AdventOfCode) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [fguchelaar/AdventOfCode2021](https://github.com/fguchelaar/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [onevcat/advent2021](https://github.com/onevcat/advent2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [scottluxenberg/AdventOfCode2021](https://github.com/scottluxenberg/AdventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)

#### TypeScript

*Solutions to AoC in TypeScript.*

* [Charlesworth/adventOfCode2021](https://github.com/Charlesworth/adventOfCode2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [DarthGandalf/advent-of-code](https://github.com/DarthGandalf/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [atme/advent-of-code-2021](https://github.com/atme/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [caderek/aoc2021](https://github.com/caderek/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [marcobiedermann/advent-of-code](https://github.com/marcobiedermann/advent-of-code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [pierreyoda/advent-2021-svelte](https://github.com/pierreyoda/advent-2021-svelte) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--03-brightgreen)
* [sanraith/aoc2021](https://github.com/sanraith/aoc2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [fstreicher/aoc-2021](https://github.com/fstreicher/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Deno

*Solutions to AoC in Deno (TypeScript).*

* [Im-Beast/advent_of_code](https://github.com/Im-Beast/advent_of_code) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [LionC/aoc-2021](https://github.com/LionC/aoc-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [N8Brooks/deno_aoc](https://github.com/N8Brooks/deno_aoc) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--07-brightgreen)
* [ismtabo/advent-of-code-2021](https://github.com/ismtabo/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Unison

*Solutions to AoC in Unison.*

#### VB.NET

*Solutions to AoC in VB.NET.*

#### Whitespace

*Solutions to AoC in Whitespace.*

* [andrewarchi/ws-challenges](https://github.com/andrewarchi/ws-challenges) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

#### Zig

*Solutions to AoC in Zig.*

* [jwarwick/aoc_2021](https://github.com/jwarwick/aoc_2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)
* [scorphus/advent-of-code-2021](https://github.com/scorphus/advent-of-code-2021) ![Last Commit on GitHub](https://img.shields.io/badge/last%20commit-2021--12--06-brightgreen)

### Live Streams

*Folks who are live streaming their process.*

* [Aufbakanleitung](https://youtube.com/playlist?list=PLDeBWauprDRjbplIuyhVhXhIt7k4NuOad)
