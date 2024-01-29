# COVID-19 Statistics Tracker

## Overview
This JavaScript file is part of a COVID-19 Statistics Tracker application. It's designed to fetch and display real-time data related to COVID-19 cases for a specific country. The data includes total cases, new cases, recoveries, and deaths.

## Features
- **Dynamic Data Fetching**: Retrieves COVID-19 statistics using an API.
- **Real-time Updates**: Provides the latest data about total and new cases, recoveries, and deaths.
- **Error Handling**: Includes basic error handling for failed data fetch attempts.

## How It Works
1. **Data Fetching**: The script fetches data from the `covid19-monitor-pro.p.rapidapi.com` API for a specified country. It uses a GET request to retrieve data.
2. **Data Processing**: Once data is fetched, it processes the data to extract total cases, recoveries, and deaths along with the new cases, recoveries, and deaths since the last update.
3. **Updating the DOM**: After processing, the script updates the webpage's DOM elements to display the latest statistics.

## Implementation Details
- **Data Storage**: Employs arrays to store the lists of cases, recoveries, and deaths, along with corresponding dates.
- **Country Code**: Utilizes a country code to fetch data specific to a user's country.
- **API Integration**: Connects to a third-party API for COVID-19 data using fetch API and updates the data in real-time.

## Dependencies
- **External API**: `covid19-monitor-pro.p.rapidapi.com` for fetching the COVID-19 data.
- **RapidAPI Key**: Requires a valid API key for accessing the COVID-19 data.

## Usage
Replace `user_country` and `country_code` with the desired country's information.
Ensure a valid RapidAPI key is used for API access.

## Error Handling
The script includes basic error handling for the fetch request to alert users in case of any issues in data retrieval.

## Disclaimer
This script is dependent on the data provided by the `covid19-monitor-pro.p.rapidapi.com` API. The accuracy and timeliness of the data are subject to the API's performance.
