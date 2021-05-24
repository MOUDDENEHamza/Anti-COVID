#!/bin/bash

# Home page
curl -X POST http://localhost:8080/AntiCOVID/rest/new_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/total_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/recovered
curl -X POST http://localhost:8080/AntiCOVID/rest/death

# Vaccin page
curl -X POST http://localhost:8080/AntiCOVID/rest/vaccination_center

