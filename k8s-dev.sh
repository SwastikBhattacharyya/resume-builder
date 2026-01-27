#!/bin/bash
set -euo pipefail

PIDS=()

cleanup() {
  echo "Stopping port-forwards and tunnel..."
  for pid in "${PIDS[@]}"; do
    kill "$pid" 2>/dev/null || true
  done
}
trap cleanup EXIT INT TERM

echo "Starting port forwards..."

kubectl port-forward -n database svc/mysql-svc 10000:3306 &
PIDS+=($!)

kubectl port-forward -n tool svc/phpmyadmin-svc 9000:80 &
PIDS+=($!)

echo "All port forwards running."
echo "Press Ctrl+C to stop everything."

wait