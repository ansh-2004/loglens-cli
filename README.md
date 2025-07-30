````markdown
# 🔍 loglens-cli

**loglens-cli** is a powerful CLI tool designed for developers and DevOps engineers to quickly filter, inspect, and analyze log files. Whether you're debugging an issue or summarizing errors across days of logs, `loglens-cli` helps you extract just what you need — fast.

---

## ✨ Features

- 🔎 Filter logs by log level (`error`, `warn`, `info`, `debug`)
- ⏱️ Filter logs between specific date/time ranges
- 🎨 Colorized output for better readability
- 📁 Supports line-by-line JSON logs and fallback for raw logs
- 💡 Easy-to-use CLI with helpful options

---

## 📦 Installation

```bash
npm install -g loglens-cli
````

---

## 🚀 Usage

```bash
loglens --file ./your-log-file.log [options]
```

### 📌 Options

| Option    | Alias | Description                                           |
| --------- | ----- | ----------------------------------------------------- |
| `--file`  | `-f`  | Path to your log file (required)                      |
| `--level` | `-l`  | Filter by log level: `error`, `warn`, `info`, `debug` |
| `--from`  |       | Start timestamp (ISO format): `"2025-07-27T10:00:00"` |
| `--to`    |       | End timestamp (ISO format)                            |

---

### ✅ Example Commands

```bash
loglens -f logs/app.log
loglens -f logs/app.log -l error
loglens -f logs/app.log --from "2025-07-27T00:00:00" --to "2025-07-28T00:00:00"
```

---

## 🧪 Sample Log Format

```json
{"timestamp":"2025-07-29T10:45:30","level":"info","message":"User logged in"}
{"timestamp":"2025-07-29T10:46:00","level":"error","message":"Failed to connect to DB"}
```

---

## 🛠️ Development

Clone this repo and run locally:

```bash
git clone https://github.com/ansh-2004/loglens-cli.git
cd loglens
npm link
```

Now you can run `loglens-cli` globally during development.

---

## 📄 License

MIT License

````

# loglens-cli
