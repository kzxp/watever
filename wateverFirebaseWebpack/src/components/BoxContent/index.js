import React from 'react';
import {Link} from 'react-router'

export default class BoxContent extends React.Component {

    render() {
        
        return (
            <div className={`column ${this.props.columnSize}`}>
                <Link className="box-content" to={this.props.linkTo} title={this.props.title}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image">
                                <img src={this.props.mainImg} alt="Main img"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p className="is-clearfix is-marginless">
                                    <span className={`tag ${this.props.currentStatus.className} is-small is-pulled-right`}>{this.props.currentStatus.text}</span>
                                </p>
                                <p>
                                    <strong>
                                        {this.props.title}
                                    </strong>
                                </p>
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </article>
                    {this.props.lines && React.cloneElement(this.props.childComponent, {key: location.pathname})}
                </Link>
            </div>
        );
    }

}
