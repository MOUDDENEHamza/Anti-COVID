#!/bin/bash

# Home page
mkdir data
cd data
rm *
wget https://covid.ourworldindata.org/data/owid-covid-data.csv
curl -X POST http://localhost:8080/AntiCOVID/rest/new_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/total_cases
curl -X POST http://localhost:8080/AntiCOVID/rest/recovered
curl -X POST http://localhost:8080/AntiCOVID/rest/death

# Vaccin page
wget https://www.data.gouv.fr/en/datasets/r/5cb21a85-b0b0-4a65-a249-806a040ec372
mv 5cb21a85-b0b0-4a65-a249-806a040ec372 centres-vaccination.csv
curl -X POST http://localhost:8080/AntiCOVID/rest/vaccination_center

wget https://www.data.gouv.fr/en/datasets/r/7c0f7980-1804-4382-a2a8-1b4af2e10d32
mv 7c0f7980-1804-4382-a2a8-1b4af2e10d32 sites-prelevements-grand-public.csv
curl -X POST http://localhost:8080/AntiCOVID/rest/test_center
