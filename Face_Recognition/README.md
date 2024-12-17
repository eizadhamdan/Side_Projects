# Face_Recognition

This repository provides a face recognition system using the `face_recognition` library and OpenCV. It includes scripts for recognizing and matching faces from a set of known faces against unknown images as well as real-time video streams.

## Features
- **Face Recognition**: Compares faces in unknown images against a set of known faces and identifies matches.
- **Face Localization**: Detects faces in images and highlights them with bounding boxes.
- **Face Encoding**: Uses face encodings to compare and identify individuals in unknown images.
- **Real-time Visualization**: Displays the results in a window with recognized faces annotated with names.
- **Live Video Display**: Annotates recognized faces with their names and displays the video stream.

## Requirements
- `face_recognition` (for face detection and recognition)
- `opencv-python` (for image processing and visualization)
- Python 3.x

## How to Use
1. Place known face images in the `known_faces` directory, organized by subfolders named after the individuals.
2. Place unknown face images in the `unknown_faces` directory.
3. Install the necessary dependencies.
    ```bash
    pip install -r requirements.txt
    ```
4. Run the script.
    ```bash
    python face_rec_example.py
    ```
   
# Files

## 1. `face_rec_example.py`
This script performs face recognition on static images.

- **Functionality**:
   - Loads images of known individuals from the `known_faces` directory.
   - Processes images in the `unknown_faces` directory.
   - Detects faces, compares them with known encodings, and annotates matches.
- **Output**:
   - Annotated images with recognized faces displayed in windows.

### How it Works
1. **Known Faces**: The script loads images from the `known_faces` directory, encodes the faces, and stores them with associated names.
2. **Unknown Faces**: The script processes images from the `unknown_faces` directory, detects faces, and compares them to the known face encodings.
3. **Face Matching**: If a match is found, the script highlights the detected face in green and displays the name of the matched individual.
4. **Display**: The results are shown using OpenCV, with rectangles around faces and names displayed.


## 2. `video_face_rec.py`
This script implements a real-time face recognition system using the `face_recognition` library and OpenCV. It captures a live video feed from a webcam (or a video file) and matches detected faces against a set of known faces.

- **Functionality**:
   - Loads images of known individuals from the `known_faces` directory.
   - Captures real-time video input from a webcam or a video file.
   - Detects and encodes faces in each video frame.
   - Compares detected face encodings with the known face encodings to identify matches.
   - Highlights recognized faces with bounding boxes and displays their corresponding names.

- **Output**:
   - Live video feed with detected faces highlighted using bounding boxes.
   - Names of recognized individuals displayed above the bounding boxes.
   - The video feed updates in real time until the user stops it by pressing the `q` key.

### How It Works
1. **Loading Known Faces**:
   - The script loads face images from the `known_faces` directory.
   - It encodes each face using `face_recognition.face_encodings` and stores the encodings with their associated names.

2. **Real-Time Video Capture**:
   - The webcam or a video file is used as the input source via `cv2.VideoCapture`.
   - Frames are captured continuously and processed in real time.

3. **Face Detection and Matching**:
   - Detected faces are localized using `face_recognition.face_locations`.
   - Each face encoding is compared to the known face encodings using `face_recognition.compare_faces`.

4. **Visualization**:
   - Faces are highlighted with bounding boxes.
   - Recognized faces are labeled with their names in the video stream.

