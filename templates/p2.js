module.exports = `
</div>
    <script src='./lib/react.production.min.js'></script>
    <script src='./lib/react-dom.production.min.js'></script>
    <script src='http://localhost:3004/bundle.js'></script>
    <script>
      ReactDOM.hydrate(React.createElement(Carousel), 
      document.getElementById('carousel'));
    </script>
  </body>
</html>
`;
