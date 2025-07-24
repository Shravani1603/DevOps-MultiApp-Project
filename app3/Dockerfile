# Use nginx base image
FROM nginx:alpine

# Remove default Nginx config and add our custom one
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static HTML content
COPY index.html /usr/share/nginx/html/index.html
