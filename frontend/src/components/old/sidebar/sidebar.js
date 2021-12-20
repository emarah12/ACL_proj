export default class NavBar extends Component {

    render() {
        const { lang } = this.props
        return (
        
            <div className="topnav">
                <div className="logo-nav">
                  
                </div>
                <div className="links">
                    <a href="http://localhost:3000/api/flights">
                        Home
                    </a>
                    <a className="active" href="/">Reviews</a>
                    {/* <a href="/questions">Questions</a> */}
                    <div onClick={this.props.handleLang} className="lang-btn">
                        <div style={{ display: 'flex', gap: '2px' }}>
                            <p style={{ color: lang ? 'white' : 'rgb(209, 209, 209)' }} >ENG </p>
                            <p> | </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}