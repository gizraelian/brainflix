import React from 'react';
import VidSideBarContainer from './VidSideBarContainer';
import FirstBox from './FirstBox';

class VidSideBar extends React.Component{
    render(){
        let vids = this.props.videoArr;
        let VidSideBarContainers = [];

        for (let i = 0; i < vids.length; i++){
            let vid = <VidSideBarContainer 
            id={vids[i].id}
            image={vids[i].image} 
            title={ vids[i].title } 
            channel={ vids[i].channel }
            views={vids[i].views} 
            />
          VidSideBarContainers.push(vid);
        }

        return(
            <div className="vidSideBar">Up next
                { VidSideBarContainers }
            </div>
        )
    }
}

export default VidSideBar;
