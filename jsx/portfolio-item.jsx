'use_strict';

var PortfolioLink = React.createClass({
  render: function () {
    return (<div className="col-sm-4 portfolio-item flip-container">
        <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
            <div className="caption">
                <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                </div>
            </div>
            <img src={this.props.img} className="img-responsive front" alt="" />
            <img src={this.props.img} className="img-responsive back" alt="" />
        </a>
    </div>);
  }
});

var PortfolioList = React.createClass({
  render: function () {
    var listPortfolioLink = [],
        count,
        len = this.props.list.length;

    for (count = 0; count < len; count++) {
      listPortfolioLink.push(
        <PortfolioLink img={this.props.list[count].img} />
      );
    }
    return (<div className="row">
      <div className="col-xs-offset-3 col-xs-6 col-sm-offset-1 col-sm-10">
        {listPortfolioLink}
      </div>
    </div>);
  }
});
