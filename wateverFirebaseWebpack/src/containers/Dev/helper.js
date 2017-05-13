import React, { PropTypes } from 'react';

import { getDynamicText } from '../../utilities/DynamicText'
import BoxContent from '../../components/BoxContent'

export function getBoxContent(props) {

    let currentStatus = getDynamicText('devStatus')[props.status]
    let lineComponents;

    if ( props.lines ) {
        
    }

    let boxProps = {
        id: props.devId,
        currentStatus,
        title: props.title,
        mainImg: props.mainImg,
        description: props.description,
        key: `dev-${props.devId}`,
        columnSize: props.isFullContent ? 'is-6' : '.is-full-content',
        lineComponents
    }

    return <BoxContent {...boxProps} />
}

export default getBoxContent;