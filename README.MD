# Weather App

A dynamic web application that provides detailed weather information for any city. The app fetches real-time weather data from the Visual Crossing Weather API and presents it in an intuitive, user-friendly interface.

## Features

- Current temperature and conditions display
- Hourly weather forecast carousel
- Daily weather forecast carousel
- Detailed weather statistics including:
  - Feels like temperature
  - Humidity levels
  - Wind speed
  - UV index
  - Sunrise and sunset times
- Unit toggle between metric and imperial measurements
- Loading animations for better user experience
- Error handling for invalid city searches

## Getting Started

### Prerequisites

- A modern web browser
- Visual Crossing Weather API key

## Usage

1. Type a city name in the search box
2. Click the search button to get weather information
3. Toggle between metric and imperial units using the unit switch
4. Scroll through hourly and daily forecasts using the carousel controls

## API Reference

This project uses the Visual Crossing Weather API.

## Technical Notes

- Built with vanilla JavaScript
- Uses async/await for API calls
- Implements debouncing to prevent multiple simultaneous API calls
- Responsive design for various screen sizes
