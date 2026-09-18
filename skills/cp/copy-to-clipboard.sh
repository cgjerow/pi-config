#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -gt 1 ]; then
  echo "usage: $0 [file]" >&2
  exit 2
fi

cleanup() {
  if [ -n "${TMP_FILE:-}" ] && [ -f "$TMP_FILE" ]; then
    rm -f "$TMP_FILE"
  fi
}
trap cleanup EXIT

if [ "$#" -eq 1 ]; then
  SRC="$1"
else
  TMP_FILE="$(mktemp)"
  cat > "$TMP_FILE"
  SRC="$TMP_FILE"
fi

if command -v pbcopy >/dev/null 2>&1; then
  pbcopy < "$SRC"
elif command -v wl-copy >/dev/null 2>&1; then
  wl-copy < "$SRC"
elif command -v xclip >/dev/null 2>&1; then
  xclip -selection clipboard < "$SRC"
elif command -v xsel >/dev/null 2>&1; then
  xsel --clipboard --input < "$SRC"
elif command -v termux-clipboard-set >/dev/null 2>&1; then
  termux-clipboard-set < "$SRC"
elif command -v clip.exe >/dev/null 2>&1; then
  clip.exe < "$SRC"
else
  echo "No supported clipboard command found (tried pbcopy, wl-copy, xclip, xsel, termux-clipboard-set, clip.exe)." >&2
  exit 1
fi
