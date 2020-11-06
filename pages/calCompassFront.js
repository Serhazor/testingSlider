import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const DashBoardStyle = styled.div`
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
  z-index: 99;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 10px #E5E4E2;
  position: fixed;
  transition: 1s ease-out;
  left: 0;
  bottom: 0;
  margin-left: 30px;
  margin-bottom: ${ props => props.active % 2 != 0 ? '5vh': '-30vh' };
`;

const Arrow = styled.div`
  margin-top: ${ props => props.active % 2 != 0 ? '': '3vh'};
  border: solid #212121;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 5px;
  transform: ${ props => props.active % 2 != 0 ? 'rotate(405deg)': 'rotate(-135deg)'};
  -webkit-transform: ${ props => props.active % 2 != 0 ? 'rotate(405deg)': 'rotate(-135deg)'};
  transition: 0.5s ease-out;
`;
/*
const DashHead = styled.div`
width: 95%;
height: 10vh;
display: flex;
`;

const DashContainer = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;

const Navigation = styled.div`
width: 10vw;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
background-color: ${props => props.bgColor};
color: ${props => props.color};
`;

*/



class DashBoard extends Component {

    state = {
        active: 0
    }

    toggle = () => {
        this.setState({active: this.state.active + 1});
    }


    render() {

        const UI = (
            <React.Fragment>
                <DashBoardStyle active = { this.state.active }>

                    <div className = { styles.DashHead } onClick = { this.toggle }>
                        <span className = { styles.h }>Cal-Compass Components</span>
                        <div className = {styles.hIcon}>
                            <Arrow active = { this.state.active }>
                                <div></div>
                            </Arrow>
                        </div>
                    </div>

                    <div className = { styles.DashContainer }>

                        <Link href = 'Cards/Cards'>
                            <a className = {styles.nav}>Cards Component</a>
                        </Link>
                        
                    </div>

                </DashBoardStyle>
            </React.Fragment>
        );

        return UI;
    }
}

export default DashBoard;
