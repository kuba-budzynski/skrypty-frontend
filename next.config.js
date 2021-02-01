const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  env: {
        BACKEND: "http://app-back.tk:8000",
        ADMIN: "http://app-back.tk:8000/admin/"
    },
    images: {
      domains: ['images.unsplash.com', 'django-object-recognition.s3.eu-central-1.amazonaws.com']
    }
})
