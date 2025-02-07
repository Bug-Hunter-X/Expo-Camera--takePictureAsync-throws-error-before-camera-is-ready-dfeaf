# Expo Camera: takePictureAsync Error

This repository demonstrates a common error encountered when using the Expo Camera API's `takePictureAsync` method. The error occurs when this method is called before the camera has finished loading. The solution provided uses the `onCameraReady` callback to ensure that `takePictureAsync` is only called after the camera is fully initialized.

## Steps to Reproduce

1. Clone this repository.
2. Run the `bug.js` file.
3. Observe the error in the console.
4. Run the `bugSolution.js` file to see the corrected implementation.

## Solution

The `bugSolution.js` file demonstrates the correct way to use the Expo Camera API by calling `takePictureAsync` only after the camera is fully ready, as indicated by the `onCameraReady` callback.