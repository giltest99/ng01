#!/bin/bash

# Build for production
ng build --base-href "https://giltest99.github.io/ng01/"

# Deploy on GH Pages
ngh --dir=dist/test01

