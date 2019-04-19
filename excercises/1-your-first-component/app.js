////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - only render mexican food (hint: arrays have a "filter" method)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
////////////////////////////////////////////////////////////////////////////////

var React = require('react');

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Hello from JSX</h1>
        <ul>
          <li>Marc with C</li>
          <li>Mark with K</li>
        </ul>
      </div>
    )
  }
})

React.render(<App />, document.body);
