# Base image
FROM nginx:alpine

# Copy your application files
COPY . /usr/share/nginx/html
