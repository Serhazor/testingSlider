import React, { Component, useState } from 'react';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const CardFrame = styled.div`
width: ${ props => {
    const viewStyle = props.view;
    switch(viewStyle) {
        case 'primary':
            return '16vw';
            break;
        case 'secoundary':
            return '24vw';
            break;
        case 'tertiary':
            return '50vw';
            break;
        default: return;     
    }
}};
height: auto;
padding-bottom: ${ props => props.view == 'tertiary' ? '40px': '' };
display: flex;
flex-direction: column;
background-color: #221f1f;
border-radius: 5px;
transition: 1s ease-out;


margin-left: 30vw;
margin-top: 5vh;
`;

const ImageCardContainer = styled.div`
width: 100%;
height: ${ props => {
    const viewStyle = props.view;
    switch(viewStyle) {
        case 'primary':
            return '20vh';
            break;
        case 'secoundary':
            return '30vh';
            break;
        case 'tertiary':
            return '60vh';
            break;
        default: return;     
    }
}};

border-radius: ${ props => {
    const viewStyle = props.view;
    switch(viewStyle) {
        case 'primary':
            return '5px';
            break;
        case 'secoundary':
            return '10px 10px 0px 0px';
            break;
        case 'tertiary':
            return '10px 10px 0px 0px';
            break;
        default: return;     
    }
}};

position: relative;
cursor: pointer;
`;

const ImageCard = styled.img`
position: absolute;
width: 100%;
height: 100%;
z-index: 1;
border-radius: ${ props => {
    const viewStyle = props.view;
    switch(viewStyle) {
        case 'primary':
            return '5px';
            break;
        case 'secoundary':
            return '10px 10px 0px 0px';
            break;
        case 'tertiary':
            return '10px 10px 0px 0px';
            break;
        default: return;     
    }
}};
`;

const CloseIcon = styled.div`
width: 40px;
height: 40px;
z-index: 5;
display: ${ props => {
    const viewStyle = props.view;
    switch(viewStyle) {
        case 'primary':
            return 'none';
            break;
        case 'secoundary':
            return 'none';
            break;
        case 'tertiary':
            return 'flex';
            break;
        default: return;     
    }
}};
justify-content: center;
align-items: center;
position: absolute;
right: 0;
top: 0;
`;

const TertiaryControl = styled.div`
width: 100%;
height: 100px;
background: linear-gradient(to bottom, transparent, transparent, transparent, transparent, #221f1f);
position: absolute;
bottom: 0;
z-index: 4;
display: ${ props => {
    const viewStyle = props.view;
    switch(viewStyle) {
        case 'primary':
            return 'none';
            break;
        case 'secoundary':
            return 'none';
            break;
        case 'tertiary':
            return 'flex';
            break;
        default: return;     
    }
}};
`;

const ButtonsControl = styled.div`
position: absolute;
width: 300px;
height: 100px;
display: flex;
bottom: 0;
justify-content: space-around;
align-items: center;

`;

const OpenButton = styled.div`
width: 100px;
height: 40px;
border-radius: 5px;
background-color: ${ props => props.btnHovered ? '#E5E4E2': '#ffff' };
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
`;

const IconWrapper = styled.div`
width: 45px;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
border: 2px solid #E5E4E2;
position: relative;
cursor: pointer;
&:hover {
border: 2px solid #ffff;
}
`;

const Flip = styled.div`
    display: ${ props => props.hover ? 'flex': 'none' };
    width: 90px;
    font-weight: bold;
    height: 30px;
    font-size: 12px;
    background-color: wheat;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin-top: -45px;
    margin-left: -20px;
    z-index: 10;
    justify-content: center;
    align-items: center;
    color: #221f1f;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #221f1f;
    &:after {
    content: '';
    width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
    border-top: 10px solid wheat;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: 30px;
    bottom: 0;
    top: 0;
    margin: auto;
    margin-bottom: -8px;
    }
`;


const InterMediateControl = styled.div`
width: 100%;
height: 80px;
display: ${ props => props.view == 'secoundary' ? 'flex': 'none' };
justify-content: space-between;
align-items: center;
`;

const GroupIcons = styled.div`
width: 70%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`;

const SeeMore = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

// Data section..................
const DataContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: ${ props => props.view == 'tertiary' ? 'center': '' };
background-color: #221f1f;
`;

const DataHeader = styled.div`
width: ${ props => props.view == 'secoundary' ? '90%': '60%' };
margin-left: ${ props => props.view == 'secoundary' ? '5%': '' };
height: auto;
padding-top: 5px;
padding-bottom: 5px;
display: ${ props => props.view == 'primary' ? 'none': 'flex' };
font-size: 20px;
color: #3EA055;

`;

const DataTitle = styled.div`
width: ${ props => props.view == 'secoundary' ? '90%': '60%' };
margin-left: ${ props => props.view == 'secoundary' ? '5%': '' };
height: auto;
padding-top: 5px;
padding-bottom: 5px;
display: ${ props => props.view == 'primary' ? 'none': 'flex' };
font-size: 18px;
color: #ffff;
`;

const DataBrief = styled.div`
display: ${ props => props.view == 'tertiary' ? 'flex': 'none' };
width: 90%;
height: auto;
padding-top: 10px;
padding-bottom: 10px;
color: #ffffff;
font-size: 25px;
`;

const OrgiDataContainer = styled.div`
display: flex;
flex-direction: column;
width: ${ props => props.view == 'secoundary' ? '100%': '60%' };
`;

const MetaDataContainer = styled.div`
width: 30%;
height: auto;
display: ${ props => props.view == 'tertiary' ? 'flex': 'none' };
flex-direction: column;
align-items: center;

`;

//Related Data [ structure ].........

const RelatedDataContainer = styled.div`
width: 100%;
height: 70px;
background-color: #221f1f;
display: ${ props => props.view == 'tertiary' ? 'flex': 'none' };
justify-content: center;
align-items: center;
`;

const RelatedHeaderContainer = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border-top: 1px solid #736F6E;
`;

const GridDataContainer = styled.div`
width: 100%;
overflow-y: ${ props => props.expanding ? '': 'hidden'};
height: ${ props => props.expanding ? 'auto': '150vh'};
border-bottom: 50px;
display: ${ props => props.view == 'tertiary' ? 'flex': 'none' };
justify-content: center;
background-color: #221f1f;

`;

const GridDataHolder = styled.div`
width: 90%;
height: ${ props => props.expanding ? 'auto': '150vh'};
padding-bottom: 50px;
overflow-y: ${ props => props.expanding ? '': 'hidden'};
position: relative;
background-color: #221f1f;

`;
const Sticky = styled.div`
width: 100%;
height: 40px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
background-color: #221f1f;
opacity: 0.8;
bottom: 0;
left: 0;
right: 0;
margin: auto;
z-index: 10;
box-shadow: 0px 0px 20px 10px #221f1f;
`;

const ArrowHolder = styled.div`
width: 35px;
height: 35px;
display: flex;
margin-bottom: 3px;
justify-content: center;
align-items: center;
background-color: #221f1f;
border: 2px solid #736F6E;
border-radius: 100%;
cursor: pointer;
transform: ${ props => props.expanding ? 'rotate(180deg)': ''};
z-index: 10;

`;

const GridData = styled.div`
width: 100%;
height: auto;
overflow-y: ${ props => props.expanding ? '': 'hidden'};
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: #221f1f;
`;

const RelatedDataComponent = props => {

   const UI = (
        <div className = { styles.dataComponentContainer }>

                <img alt = 'data image' src = { props.imageCover } className = { styles.dataImage }/>
                <div className = { styles.relData }>
                    <div className = { styles.relatedDataHeader }> { props.relatedDataHeader }</div>
                </div>

                <div className = { styles.relDataH }>
                    <div className = { styles.relatedDataSub }> { props.relDataSub }</div>
                </div>

        </div>
   );
   return UI;
}








class Card extends Component {

    state = {
        // Data Cover...
        mainCover: 'https://file.mockplus.com/image/2018/04/5fc8b569-d76f-4d5d-809a-6dc6968e28f7.gif',
        //..............
        view: 'primary',
        openBtnHovered: false,
        addPlusHover: false,
        like: false,
        dislike: false,
        opened: false,
        more: false,
        expanded: false,

       // Meta Data...
        header: '',
        title: '',
        brief: '',
        author: '',
        post: '',
        link: '',
        date: '',
        //...........

        relatedData: []
        
    }


    componentDidMount = () => {
        const api = 'https://raw.githubusercontent.com/freelancer2020/hexa/master/cal.json';

        fetch(api)
        .then( response => response.json() )
        .then(data => {
            data.map( info => {
                this.setState({mainCover: info.cover, header: info.header, title: info.title, brief: info.brief, author: info.metadata.author, post: info.metadata.post, link: info.metadata.link, date: new Date().toLocaleDateString()})
            })
        })
    }

   
    secoundary = (e) => {
        e = window.event;
        if (e.target.id != 'mango') return;
        this.setState({ view: 'secoundary' });
        
    }

    tertiary = () => {
        this.setState({ view: 'tertiary' });
        
    }

    closeView = () => {
        this.setState({ view: 'primary' });
    }



    btnHover = () => {
        this.setState({ openBtnHovered: true });
    }

    btnOut = () => {
        this.setState({ openBtnHovered: false });
    }

    showPlus = () => {
        this.setState( {addPlusHover: true} );
    }
    hidePlus = () => {
        this.setState( {addPlusHover: false} );
    }

    showLike = () => {
        this.setState( {like: true} );
    }
    hideLike = () => {
        this.setState( {like: false} );
    }

    showdislike = () => {
        this.setState( {dislike: true} );

    }
    hidedislike = () => {
        this.setState( {dislike: false} );
    }

    openFile = () => {
        this.setState( {opened: true} );
    }
    closeFile = () => {
        this.setState( {opened: false} );
    }

    showMore = () => {
        this.setState( {more: true} );

    }

    hideMore = () => {
        this.setState( {more: false} );
    }

    expand = () => {
        this.state.expanded ? this.setState( {expanded: false} ): this.setState( {expanded: true} );
    }

    fetchRelatedData = () => {
        const api = 'https://raw.githubusercontent.com/freelancer2020/hexa/master/relatedDatae.json';
        fetch(api)
        .then( response => response.json() )
        .then(data => this.setState({relatedData: data}))
        .catch( err => alert(err.stack)); // <= Dev Mode
    }




    render() {

        const UI = (
            <CardFrame view = { this.state.view } expanding = { this.state.expanded }>
                <div>

                    <ImageCardContainer view = { this.state.view } onClick= { this.secoundary} >
                        <ImageCard src = { this.state.mainCover } view = { this.state.view } alt = 'js' id = 'mango' />
                        <CloseIcon view = { this.state.view } onClick = { this.closeView }>
                           <i className ="fas fa-times-circle"></i>
                        </CloseIcon>

                        <TertiaryControl view = { this.state.view }>

                            <ButtonsControl>

                                <OpenButton btnHovered = { this.state.openBtnHovered } onMouseOver = { this.btnHover } onMouseOut = { this.btnOut }>
                                    <i className ="fas fa-folder-open"></i>
                                    <div>Open</div>
                                </OpenButton>

                                <IconWrapper onMouseOver = { this.showPlus } onMouseOut = { this.hidePlus }>
                                        <Flip hover = { this.state.addPlusHover } > Add to List</Flip>
                                        <i className ="fas fa-plus"></i>
                                </IconWrapper>

                                <IconWrapper onMouseOver = { this.showLike } onMouseOut = { this.hideLike }>
                                        <Flip hover = { this.state.like } > I like this</Flip>
                                        <i className ="far fa-thumbs-up"></i>
                                </IconWrapper>

                                <IconWrapper onMouseOver = { this.showdislike } onMouseOut = { this.hidedislike }>
                                        <Flip hover = { this.state.dislike } > Not for me</Flip>
                                        <i className ="far fa-thumbs-down"></i>
                                </IconWrapper>


                            </ButtonsControl>

                        </TertiaryControl>

                    </ImageCardContainer>
                    
                    <InterMediateControl view = { this.state.view } >
                        <GroupIcons>

                                <IconWrapper onMouseOver = { this.openFile } onMouseOut = { this.closeFile }>
                                        <Flip hover = { this.state.opened } > Open</Flip>
                                        <i class="fas fa-book-open"></i>
                                </IconWrapper>
                                <IconWrapper onMouseOver = { this.showPlus } onMouseOut = { this.hidePlus }>
                                        <Flip hover = { this.state.addPlusHover } > Add to List</Flip>
                                        <i className ="fas fa-plus"></i>
                                </IconWrapper>
                                <IconWrapper onMouseOver = { this.showLike } onMouseOut = { this.hideLike }>
                                        <Flip hover = { this.state.like } > I like this</Flip>
                                        <i className ="far fa-thumbs-up"></i>
                                </IconWrapper>
                                <IconWrapper onMouseOver = { this.showdislike } onMouseOut = { this.hidedislike }>
                                        <Flip hover = { this.state.dislike } > Not for me</Flip>
                                        <i className ="far fa-thumbs-down"></i>
                                </IconWrapper>

                        </GroupIcons>
                        <SeeMore onClick = { this.tertiary }> 

                                <IconWrapper onMouseOver = { this.showMore } onMouseOut = { this.hideMore } fixed = '1'
                                onClick = { this.fetchRelatedData }>
                                        <Flip hover = { this.state.more } > See more!</Flip>
                                        
                                        <i className ="fas fa-angle-down" onClick = { this.tertiary }></i>
                                </IconWrapper>

                        </SeeMore>

                    </InterMediateControl>

                    <DataContainer view = { this.state.view }>

                        <OrgiDataContainer>
                            <DataHeader view = { this.state.view }> { this.state.header } </DataHeader>
                            <DataTitle view = { this.state.view }> { this.state.title } </DataTitle>
                            <DataBrief view = { this.state.view }> { this.state.brief } </DataBrief>
                        </OrgiDataContainer>

                        <MetaDataContainer view = { this.state.view }>

                            <div className = { styles.metaContainer }>
                                <span className = { styles.metaData }>Author: </span> <p className = {styles.meta}> { this.state.author } </p>
                            </div>
                            <div className = { styles.metaContainer }>
                                <span className = { styles.metaData }>Post: </span> <p className = {styles.meta}> { this.state.post } </p>
                            </div>
                            <div className = { styles.metaContainer }>
                                <span className = { styles.metaData }>Link: </span> <p className = {styles.meta}> { this.state.link } </p>
                            </div>
                            <div className = { styles.metaContainer }>
                                <span className = { styles.metaData }>Date: </span> <p className = {styles.meta}> { this.state.date } </p>
                            </div>
                            
                        </MetaDataContainer>

                    </DataContainer>

                    <RelatedDataContainer view = { this.state.view }>

                        <RelatedHeaderContainer>
                            <div className = { styles.moreLike}>More Like This</div>

                        </RelatedHeaderContainer>

                    </RelatedDataContainer>

                    <GridDataContainer view = { this.state.view } expanding = { this.state.expanded }>
                        <GridDataHolder expanding = { this.state.expanded }>

                            <GridData expanding = { this.state.expanded }>

                                { this.state.relatedData.map( (data, index) => {
                                    return <RelatedDataComponent
                                            key = {index.toString()}
                                            imageCover = {data.image}
                                            relatedDataHeader = {data.header}
                                            relDataSub = {data.topic}
                                            />    
                                })}

                            </GridData>

                            <Sticky>
                                <ArrowHolder onClick = { this.expand } expanding = { this.state.expanded }>
                                    
                                    
                                    <i class="fas fa-chevron-circle-down"></i>
                                </ArrowHolder>
                            </Sticky>
                        </GridDataHolder>

                    </GridDataContainer>

                    
                  
                  
               </div>
            </CardFrame>
            
            

        );

        return UI;
    }


    
}

export default Card;

