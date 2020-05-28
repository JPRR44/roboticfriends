import React , { Component } from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Header from '../components/Header'

import { setSearchField , requestRobots} from '../actions';

const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//Dispatch is what triggers the action
const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () =>dispatch(requestRobots())
    }
}

//STATE = The description of your App, in this case are the robots and whatever enters on the search box. it is able to change
//State usually lives in the parent component (APP), describes what can change in the app
class App extends Component{
    componentDidMount(){//Dont se arrow functions because is part of react
        this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending?
            <h1>Loading</h1>:
            (
            <div className = 'tc'>
                <Header/>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>{/*Si algo sale mal con la cardlist, lo va a cachar el error*/}
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        );}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);