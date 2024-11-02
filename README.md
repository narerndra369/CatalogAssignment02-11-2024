
# Shamir's Secret Sharing Implementation

This project implements Shamir's Secret Sharing algorithm using JavaScript. The program reads input data from a JSON file and calculates secrets based on provided keys.

## Project Structure

- `catalog.js` - The main script containing the implementation of Shamir's Secret Sharing.
- `input.json` - Contains the test cases to run the algorithm. *(Note: The input.json file is included in the repository)*

## Steps to Clone and Run the Project

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/narerndra369/CatalogAssignment02-11-2024.git
   ```

2. **Navigate to the Project Directory**

   Change into the project directory:

   ```bash
   cd CatalogAssignment02-11-2024
   ```

3. **Run the Program**

   Execute the program using Node.js:

   ```bash
   node catalog.js
   ```

## How It Works

The program reads the data from the `input.json` file, which contains multiple test cases. Each test case specifies parameters for the Shamir's Secret Sharing algorithm, including the number of roots (`n`) and the minimum required roots (`k`).

The algorithm processes the data and outputs the computed secrets for the provided test cases.
