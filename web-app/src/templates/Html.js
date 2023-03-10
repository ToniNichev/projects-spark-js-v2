import React from 'react';

const publicPath = `${process.env.APP_HOST}:${process.env.ASSETS_SERVER_PORT}/dist/`;

const Html = ({ content, cssBundles, jsBundles, apiData }) => (
  <html lang="en">  
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
    <script> 
      var startTime = new Date();
    </script>
    <title>Server Side Rendering and Bundle Splitting</title>

    { // don't add this to DEV since there, it will be served from Webpack-dev-server
      process.env.ENVIRONMENT !== 'development' && (
      <link
        href={`${publicPath}main.css`}
        rel="stylesheet"
        as="style"
        media="screen, projection"
        type="text/css"
        charSet="UTF-8"
      />)
    }
    {
      cssBundles.map( (bundle) => 
        (<link
          href={`${bundle.publicPath}`}
          rel="stylesheet"
          as="style"
          media="screen, projection"
          type="text/css"
          charSet="UTF-8"
        />))
    }

    {jsBundles.map( ( {file}) => (<script src={`${publicPath}${file}`}>{file}</script>) )}

    <script dangerouslySetInnerHTML={{
          __html: `window.__API_DATA__=${JSON.stringify(apiData)}`}} />    
       
  </head>
  <body>
    <div id="root" dangerouslySetInnerHTML={{ __html: content }} />  
    <script src={`${publicPath}main-bundle.js`}></script>
  </body>
</html>  

);

export default Html;  