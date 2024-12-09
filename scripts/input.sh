#!/bin/bash

# Prompt the user for input
read -p "Enter your input: " userInput

# Simulate "yes" or "no" response
if [ "$userInput" == "yes" ]; then
  echo "Automated response: yes"
elif [ "$userInput" == "no" ]; then
  echo "Automated response: no"
else
  echo "User input: $userInput"
fi
