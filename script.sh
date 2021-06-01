#!/bin/bash

# Home page
<<<<<<< HEAD
# wget https://covid.ourworldindata.org/data/owid-covid-data.csv
=======
>>>>>>> 03b4d0bc364d634257be7afd39b527d792652472
curl -X POST http://localhost:8080/AntiCOVID/rest/new_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/total_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/recovered
curl -X POST http://localhost:8080/AntiCOVID/rest/death

# Vaccin page
<<<<<<< HEAD
# https://www.data.gouv.fr/en/datasets/lieux-de-vaccination-contre-la-covid-19/
# https://www.data.gouv.fr/en/datasets/sites-de-prelevements-pour-les-tests-covid/
curl -X POST http://localhost:8080/AntiCOVID/rest/vaccination_center
=======
curl -X POST http://localhost:8080/AntiCOVID/rest/vaccination_center

# Forum page
>>>>>>> 03b4d0bc364d634257be7afd39b527d792652472
