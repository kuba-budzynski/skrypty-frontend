var cloudinary = require('cloudinary').v2

cloudinary.config({ 
  cloud_name: 'wrob-el', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default function handler(req, res) {
  
    cloudinary.api.resources({ 
        type: 'upload', 
        prefix: 'gallery/',
        max_results: 100 
    }, 
    function(error, result){
       if(error){
            res.statusCode = 404
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ name: 'No Data' }))
        }
        else {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ links: result }))
        }      
   });
}