# MERN Cloudinary
A simple client-side tool for uploading files with a MERN stack
<div>
    <img alt="cloudinary" src="https://cloudinary-res.cloudinary.com/image/upload/c_fill,w_770/dpr_auto,f_auto,fl_lossy,q_auto/Migrate_Blog_.png">
</div>

## Introduction
What is cloudinary and why should we use it?

Cloudinary is a cloud service that offers a solution to a web application's entire image management pipeline. It allows for easily uploading of images to the cloud and seamless delivery through a fast CDN (Content Delivery Network).

To start off, we'll need to create an account with cloudinary.
- https://cloudinary.com/

## Getting Started
Next we'll look at the options provided by a cloudinary account along with configurations and evironments. A few key things to note:
- Cloudinary Dashboard and API information
- Media Library
- Settings > Uploads > Upload Presets

Make sure to `npm i` inside the root directory of this repo as well as within the client directory to install dependencies for both our client and API.
- `touch .env` inside our client directory. We will need to use this four our `REACT_APP` environment variables.

## Client Based Widget
Cloudinary can be used both on the backend with `Node.js` and on the frontend. In this case, we will be using an upload widget provided by cloudinary. 
- https://cloudinary.com/documentation/upload_widget_reference
- Inside `client/public/index.html` of our React client, we need to add a script inside the `<head>` tag of our document to be able to use this. 
```js
<script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
```


