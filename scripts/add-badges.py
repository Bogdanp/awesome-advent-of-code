#!/usr/bin/env python3
import re
import os

README_PATH = os.path.join(os.path.dirname(__file__), "..", "README.md")
REPO_RE = re.compile(r"https://github.com/(?P<user>[^/]+?)/(?P<repo>[^/\)]+?)\)")

lines = []
past_solutions = False
with open(README_PATH) as f:
    for line in f:
        if not past_solutions:
            if "### Solutions" in line:
                past_solutions = True

            lines.append(line)
            continue

        match = REPO_RE.search(line)
        if match is not None:
            user = match.groupdict()["user"]
            repo = match.groupdict()["repo"]
            lines.append(
                f"* [{user}/{repo}](https://github.com/{user}/{repo}) "
                f"![Last Commit on GitHub](https://img.shields.io/github/last-commit/{user}/{repo}.svg)"
                f"\n"
            )

        else:
            lines.append(line)

with open(README_PATH, "w") as f:
    f.write("".join(lines))
