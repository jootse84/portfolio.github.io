'use_strict';

var PortfolioLink = React.createClass({displayName: "PortfolioLink",
  render: function () {
    return (React.createElement("div", {className: "col-sm-4 portfolio-item flip-container"}, 
        React.createElement("a", {href: "#portfolioModal4", className: "portfolio-link", "data-toggle": "modal"}, 
            React.createElement("div", {className: "caption"}, 
                React.createElement("div", {className: "caption-content"}, 
                    React.createElement("i", {className: "fa fa-search-plus fa-3x"})
                )
            ), 
            React.createElement("img", {src: this.props.img, className: "img-responsive front", alt: ""}), 
            React.createElement("img", {src: this.props.img, className: "img-responsive back", alt: ""})
        )
    ));
  }
});

var PortfolioList = React.createClass({displayName: "PortfolioList",
  render: function () {
    var listPortfolioLink = [],
        count,
        len = this.props.list.length;

    for (count = 0; count < len; count++) {
      listPortfolioLink.push(
        React.createElement(PortfolioLink, {img: this.props.list[count].img})
      );
    }
    return (React.createElement("div", {className: "row"}, 
      React.createElement("div", {className: "col-xs-offset-3 col-xs-6 col-sm-offset-1 col-sm-10"}, 
        listPortfolioLink
      )
    ));
  }
});
