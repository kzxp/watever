import React from 'react';
import Helmet from 'react-helmet'
import BoxContent from '../../components/BoxContent'

export default class Dev extends React.Component {

    // getDevBox() {

    //     return window.dbVal["dev"].data.length && window.dbVal["dev"].data.map((data, index) => {

    //         let currentStatus  = getDynamicText('devStatus')[data.status]

    //         let boxProps = {
    //             index,
    //             currentStatus,
    //             linkTo: `/dev/${index}`,
    //             title: data.title,
    //             mainImg: data.mainImg,
    //             description: data.description,
    //             key: `dev-${index}`
    //         }

    //         return ( <BoxContent {...boxProps} /> )
    //     })
    // }

    render() {
        return (
            <div className="App-dev">
                <Helmet title="Dev" meta={[{
                        name: "description",
                        content: "Dev page of Chankseam's site"
                    }
                ]}/>
                <div className="columns is-multiline">
                    {/*{ this.props.children || this.getDevBox() }*/}
                </div>
            </div>
        );
    }
}
