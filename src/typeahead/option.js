/**
 * @jsx React.DOM
 */

var React = window.React || require('react');
var classSet = require('react/lib/cx');

/**
 * A single option within the TypeaheadSelector
 */
var TypeaheadOption = React.createClass({
  propTypes: {
    customClasses: React.PropTypes.object,
    onClick: React.PropTypes.func,
    children: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      customClasses: {},
      onClick: function(event) {
        event.preventDefault();
      }
    };
  },

  getInitialState: function() {
    return {
      hover: false
    };
  },

  render: function() {
    var classes = {
      hover: this.props.hover
    };
    classes[this.props.customClasses.listItem] = !!this.props.customClasses.listItem;
    var classList = classSet(classes);

    return (
      <li className={classList} onClick={this._onClick}>
        <a href="#" className={this._getClasses()} ref="anchor">
          { this.props.children }
        </a>
      </li>
    );
  },

  _getClasses: function() {
    var classes = {
      "typeahead-option": true,
    };
    classes[this.props.customClasses.listAnchor] = !!this.props.customClasses.listAnchor;
    return classSet(classes);
  },

  _onClick: function() {
    return this.props.onClick();
  }
});


module.exports = TypeaheadOption;
