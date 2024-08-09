# Inventory Tracker
An inventory management application built with Next.js and Firebase Firestore. This project allows users to add, view, and remove inventory items, tracking their quantities in real-time.


## Usage
- Add a new item:
Click the "Add New Item" button.
Enter the item name in the modal that appears.
Click the "Add" button to add the item to the inventory.
- View Inventory:
The inventory list is displayed on the main page, showing item names and their quantities.
- Remove an item:
Click the "Remove" button next to an item to decrease its quantity.
The item's quantity will be removed from the inventory if it reaches zero.

## Dependencies
- Next.js
- Firebase
- Material-UI

### Deployment Status

This project faced deployment issues on Vercel. Specifically, the build process encountered a few critical errors:

1. **Next.js Configuration Issue:** The deployment failed due to an error in loading the `next.config.mjs` file. This was caused by a `ReferenceError: module is not defined in ES module scope`. The root cause is that Vercel's deployment environment and the Next.js configuration weren't compatible in the current setup.

2. **Static Pages Generation:** Although the build process was able to compile successfully and generate static pages, it eventually failed when attempting to collect diagnostics. The error message indicated that a critical file, `routes-manifest.json`, was missing. This error suggests a misconfiguration in the project structure or the Vercel setup, which prevented the application from deploying properly.

3. **Dependency Warnings:** Several outdated dependencies were detected, some of which are deprecated. These might contribute to instability and issues during deployment.

I have made multiple attempts to resolve these issues by adjusting the Next.js configuration, updating dependencies, and revising the project structure. **Despite these efforts, the deployment was not successful.** Future steps could involve further dependency updates, exploring alternative configurations, or considering different deployment platforms.


