const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  env: {
        GRAPHCMS_ENDPOINT: 'https://api-eu-central-1.graphcms.com/v2/ckfr8393l1ixo01z41c1j7kd3/master',
        GRAPHCMS_TOKEN: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDE1ODE0NjUsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrZnI4MzkzbDFpeG8wMXo0MWMxajdrZDMvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYmZmNjMyYTItNzU5Zi00OWE0LWEwMmItNDIyNzc2M2QxOTJmIiwianRpIjoiY2tmcjg5NDE3MWw3MzAxejg2a2JuODdqaSJ9.0ZkNzicsMElFTzIfAiwc315rJqLFv3lXlIpY4PuScOQCvJ4lO7NPseg5vez00g35GwBSNDeV3zz1SApXzpvAEloHn7dckpftKZ2sZJ1nk2Aw7Wty7AstB5LBIx13rlYvbXo-TBXfh8iLcoNFCjL7TDLWNU14ip5NgiWoydLI3nIG9KnUCtKxXgW_kLLreFRqhOn4P87JLucGdc3f9vDA-97arVo-OMEXPzs1Ykk-M8SFuJqr_xVgQ9tydMNk8s1DtHP0OV8IUHfI6-UQr3tNoW7Ol7UjgiH6qEVZysQZrIofOFY1o-xS9uG9LkjrUv5PHjKpfBL55S3RtLSDT40x6uwYp7usgGtCebuZVaivA41k_pDYBPCIt3Jh4FR0zifvCGUy_z17Q_HkJstjLtcES2Bt3FSfPX_SO6IorQRP6rIKD7yQKTPymRBiWxaRvyVua9_BIxO3g9zfLU1Xt1s3L_V41I4fvnrtBBF-sSwVGP7V2FD3dLOSBZMURscGdaokDKziLvfT5JQStPP1ovwlxqLq86_SryD-4jLRaufsRzkKBnyLX2ICY87SCPyH3TJdKzKik8sD02tH13Mw5zZlrFJ0E-dFsVruPUnHPkyNst4Yf3FTSxtCUPqyFvBh3Yn3acTaq9fH56nNoZG1fZPyxUXhypl2B9F9j128pz-8pNM',
        MONGODB_PASSOWRD: '5pd0McTfCHnumYH0',
        CLOUDINARY_API_KEY: '849832295865831',
        CLOUDINARY_API_SECRET: 'rqxWo192Rm0hS_-iatlGI30YVOc',
        CLOUDINARY_URL: 'cloudinary://849832295865831:rqxWo192Rm0hS_-iatlGI30YVOc@wrob-el',
        PRISMIC_CLIENT_ENDPOINT: 'https://wrob-el.cdn.prismic.io/api/v2',
        PRISMIC_CLIENT_ID: 'X53wrBAAACIAVOXx',
        PRISMIC_CLIENT_SECRET: '4c8ff1eef0d1c76f0fa772ea9053e688',
        PRICMIC_CLIENT_TOKEN: 'MC5YNTN3ckJBQUFDQUFWT1h5.E--_ve-_ve-_ve-_ve-_vWDvv70H77-9OO-_ve-_vVzvv73vv71W77-977-9R0zvv73vv70a77-9IQREX--_ve-_vRg'
    },
    images: {
      domains: ['images.unsplash.com', 'django-object-recognition.s3.eu-central-1.amazonaws.com']
    }
})
