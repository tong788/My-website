steps to publish image and run container

1. docker build -t my-website:v1 . (can change version based on your commit)
2. docker run --name my-website -p 5173:80 my-website:v1
