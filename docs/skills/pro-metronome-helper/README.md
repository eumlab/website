# Pro Metronome Helper — Skill

A portable knowledge skill that turns Claude or ChatGPT into a step-by-step **Pro Metronome**
(by EUMLab) support expert. Built from EUMLab's official tutorial videos.

- **`SKILL.md`** — the skill itself (YAML frontmatter + instructions + full feature knowledge).
  It is fully self-contained, so it works as both a Claude skill and pasteable ChatGPT instructions.

## Use it in Claude

**Claude Code / Agent SDK / Claude.ai (skills):**
1. Place the `pro-metronome-helper/` folder where your skills live (Claude Code:
   `~/.claude/skills/` or a plugin's `skills/` dir), **or** install the packaged
   `pro-metronome-helper.skill` file.
2. Ask a question — e.g. *"How do I set up a 3:2 polyrhythm in Pro Metronome?"* — and the
   skill triggers automatically based on its `description`.

To package it as a single installable file (zip of the folder, renamed `.skill`):
```bash
cd docs/skills && zip -r pro-metronome-helper.skill pro-metronome-helper -x '*.DS_Store'
```

## Use it in ChatGPT

ChatGPT has no "skill" import, so use the body of `SKILL.md` as instructions:

- **Custom GPT:** create a GPT → **Configure** → paste everything **below the YAML frontmatter**
  (i.e. from `# Pro Metronome Helper` down) into the **Instructions** box. Optionally upload
  `SKILL.md` and the website's `pro-metronome-support.md` as **Knowledge** files.
- **Plain chat / Projects:** paste the same body as the first message or as Project instructions.

## Source

All content is derived from the official EUMLab Pro Metronome tutorials by drummer
**Brett Clur** (Sep 2024). The skill includes timestamped links so answers can cite the exact
moment a feature is demonstrated. For anything outside the skill's scope: **team@eumlab.com**.
