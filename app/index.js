var USER_DATA = {
    name: 'Steven Quadros',
    username: 'stevequadros',
    image: 'https://avatars2.githubusercontent.com/u/4690117?v=3&u=7636955170ffb4593277f125a7ef84010da60122&s=140'
};

var React = require('react');
var ReactDOM = require('react-dom');

var Link = React.createClass({
    changeURL: function() {
        console.log('changeURL fired');
        window.location.replace(this.props.href);
    },
    render: function() {
        return (
            <span
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={this.changeURL}
                data-monkey={'balls'}
                >
                {this.props.children}
            </span>
        )
    }
});

var ProfilePic = React.createClass({
    render: function() {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <div>
                <Link href={'https://www.github.com/' + this.props.username} butt="stuff">
                    {this.props.username}
                </Link>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function() {
        return (
            <div>{this.props.name}</div>
        )
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
});

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);