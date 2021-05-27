#!/bin/bash

# Home page
curl -X POST http://localhost:8080/AntiCOVID/rest/new_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/total_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/recovered
curl -X POST http://localhost:8080/AntiCOVID/rest/death

# Vaccin page
curl -X POST http://localhost:8080/AntiCOVID/rest/vaccination_center

# Forum page
curl -POST http://localhost:8080/AntiCOVID/rest/add_post -H "Content-Type: application/json" -d '{"author":"Hamza Mouddene", "date": "May 26, 2021", "title": "1st post", "content": "This post is just a test"}'


