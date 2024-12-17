# Face_Recognition

This Python script implements a basic face recognition system using the `face_recognition` library and OpenCV. It detects and matches faces from a set of known faces with those in an unknown set of images.

## Features
- **Face Recognition**: Compares faces in unknown images against a set of known faces and identifies matches.
- **Face Localization**: Detects faces in images and highlights them with bounding boxes.
- **Face Encoding**: Uses face encodings to compare and identify individuals in unknown images.
- **Real-time Visualization**: Displays the results in a window with recognized faces annotated with names.

## How it Works
1. **Known Faces**: The script loads images from the `known_faces` directory, encodes the faces, and stores them with associated names.
2. **Unknown Faces**: The script processes images from the `unknown_faces` directory, detects faces, and compares them to the known face encodings.
3. **Face Matching**: If a match is found, the script highlights the detected face in green and displays the name of the matched individual.
4. **Display**: The results are shown using OpenCV, with rectangles around faces and names displayed.

## Requirements
- `face_recognition` (for face detection and recognition)
- `opencv-python` (for image processing and visualization)
- Python 3.x

## How to Use
1. Place known face images in the `known_faces` directory, organized by subfolders named after the individuals.
2. Place unknown face images in the `unknown_faces` directory.
3. Install teh necessary dependencies. ```pip install -r requirements.txt```
4. Run the script: ```python face_rec_example.py```
