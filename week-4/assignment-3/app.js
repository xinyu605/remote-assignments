const Header = () =>{
    return (
        <header className="full-width">
            <div className="logo">
                <a href="#">Website Title</a>
            </div>
            <Menu />
        </header>    
    );

}

// Turn on/off mobile menu
class Menu extends React.Component {
    
    state ={
        showUp: false
    }
    
    turnOnMenu = () => {
        this.setState(prevState =>({ showUp: !prevState.showUp }));
    }
    
    turnOffMenu = () =>{
        this.setState(prevState =>({ showUp: !prevState.showUp }));
    }

    render(){
        return(
        <nav className="clearfix">
            <span className="material-icons" id="menuButton" onClick={this.turnOnMenu}><a href="#">dehaze</a></span>
            <PCMenu />
            <div id="mobileMenu" className="clearfix" style={{display: this.state.showUp ? "block":"none"}}>
                <span className="material-icons" id="closeButton" onClick = {this.turnOffMenu}><a href="#">close</a></span>
                <ul>
                    <li><a href="#">item 1</a></li>
                    <li><a href="#">item 2</a></li>
                    <li><a href="#">item 3</a></li>
                    <li><a href="#">item 4</a></li>
                </ul>
            </div>
        </nav> 
        );   
    }
}

const PCMenu = () =>{
    return(
        <ul id="pcMenu">
            <li><a href="#">item 1</a></li>
            <li><a href="#">item 2</a></li>
            <li><a href="#">item 3</a></li>
            <li><a href="#">item 4</a></li>
        </ul>    
    );
}

// Click to change text
class WelcomeSection extends React.Component {
    state = {
        message: "Welcome Message"
    }

    clickMessage = () => {
        this.setState({ message: "Have a Good Time!"});
    } 

    render(){
        return(
            <section className="full-width" id="welcome">
                <h1 onClick = {this.clickMessage}>{this.state.message}</h1>
            </section>        
        );        
    }

}

const SecondSection = (props) => {
    if(props.isAppearing){
        return(
            <section className="full-width" id="callOutSection">
                <div className="container">
                    <div className="col-2 box">
                        <p>Content Box 5</p>
                    </div>
                    <div className="col-2 box">
                        <p>Content Box 6</p>
                    </div>
                    <div className="col-2 box">
                        <p>Content Box 7</p>
                    </div>
                    <div className="col-2 box">
                        <p>Content Box 8</p>
                    </div>
                </div>
            </section>    
        );
    }else{
        return null;
    }
    
}

//Call to show more box
class Main extends React.Component {
    
    state = {
        isAppearing: false
    }

    clickToShow =() => {
        this.setState( prevState => ({isAppearing: !prevState.isAppearing}));
    }
    
    render(){
        return(
            <main>
                <WelcomeSection />
                <section className="full-width" id="about">
                    <h2>Section Title</h2>
                    <div className="container">
                        <div className="col-2 box">
                            <p>Content Box 1</p>
                        </div>
                        <div className="col-2 box">
                            <p>Content Box 2</p>
                        </div>
                        <div className="col-2 box">
                            <p>Content Box 3</p>
                        </div>
                        <div className="col-2 box">
                            <p>Content Box 4</p>
                        </div>
                    </div>
                    <div className="content-btn" id="callOutButton" onClick = {this.clickToShow}>
                        <a href="#callOutSection" className="btn">Call to Action</a>
                    </div>
                </section> 
                <SecondSection isAppearing= {this.state.isAppearing}/>
            </main>    
        );        
    }

}

const App = () => {
    return(
        <div>
            <Header />
            <Main />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);