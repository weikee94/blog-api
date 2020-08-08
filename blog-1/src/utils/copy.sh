#!/bin/sh
cd /Users/weikeehaw/Desktop/blog-api/blog-1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log