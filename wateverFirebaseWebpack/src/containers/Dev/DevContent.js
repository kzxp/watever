import React from 'react';
import Helmet from 'react-helmet';
import { getBoxContent } from './helper';

class DevContent extends React.Component {

    render() {
        // let data = this.props.pageData.[this.props.params.devId];
        // if ( Object.keys(devPage) ) {
           
            // let currentStatus  = getDynamicText('devStatus')[data.status]
            // let ChildComponent = getDynamicComponent(data.children)

            // let boxProps = {
            //     index: this.props.params.devId,
            //     currentStatus,
            //     title: data.title,
            //     mainImg: data.mainImg,
            //     description: data.description,
            //     key: `dev-${this.props.params.devId}`,
            //     isFullContent: true,
            //     childComponent: <ChildComponent />
            // }
            const boxContent = getBoxContent(Object.assgin(devPage, {
                devId: this.props.params.devId,
                isFullContent: true
            }))

            return (
                <Helmet title="data.title" meta={[{
                    name: "description",
                    content: "Dev page of Chankseam's site"
                }
                ]} />,
                boxContent
            )
        // }

        // return (
        //     <p className="has-text-centered">Not found .. </p>
        // )

    }

}

DevContent.propTypes = {
    devId: React.PropTypes.number,
    devPage: React.PropTypes.object
};

export default DevContent;
