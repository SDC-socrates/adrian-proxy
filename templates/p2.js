module.exports = `
</div>
    <div id='description'></div>
    <div id='Reviews'></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>    <script src='http://localhost:3004/bundle.js'></script>
    <script src='http://ec2-54-174-107-24.compute-1.amazonaws.com:3000/bundle.js'></script>
    <script src='http://ec2-18-216-78-86.us-east-2.compute.amazonaws.com:3000/bundle.js'></script>

    <script>
      ReactDOM.hydrate(React.createElement(Carousel), 
      document.getElementById('carousel'));
    </script>
  </body>
</html>
`;
