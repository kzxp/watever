import React from 'react'
import Helmet from 'react-helmet'
import InfoColumns from 'components/InfoColumns'
import { connect } from 'react-redux';
import { getDataStateByKey } from 'selectors';

class Info extends React.Component {

  render() {

    const { mainImg, data, endSpecficLinkText } = this.props

    return (
        <div className="App-info">
            <Helmet title="Info"
            meta={[
                { name: "description", content: "Info page of Chankseam's site" },
                ]}
            />
            <InfoColumns image={mainImg} data={data} endSpecficLinkText={endSpecficLinkText} />
        </div>
    );
  }
}

export default connect((state) => getDataStateByKey(state, 'info'))(Info)


