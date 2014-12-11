/** @jsx React.DOM */

var bs = React.Bootstrap;

var UserWidget = React.createBackboneClass({
  render: function () {
    var user = this.getModel();
    var imgUrl = (user && user.get('gravatarUrl')) || 'https://gravatar.com/avatar';
    var username = (user && user.get('username')) || '';
    return (
      <bs.Well className='header'>
        <img src={imgUrl} id='avatar' />
        <bs.DropdownButton title={username}>
          <bs.MenuItem>
            <span className='fa fa-user fa-fw' />
            Profile
          </bs.MenuItem>
          <bs.MenuItem>
            <span className='fa fa-power-off fa-fw' />
            Logout
          </bs.MenuItem>
        </bs.DropdownButton>
      </bs.Well>
    );
  }
});

module.exports = UserWidget;