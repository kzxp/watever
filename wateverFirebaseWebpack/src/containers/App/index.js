import React from 'react'
import Helmet from 'react-helmet';
import Header from 'components/Header'
import Section from 'components/Section'
import Footer from 'components/Footer'
import Loading from 'components/Loading'
import { includeRoutes } from '../../routes'
import { getAppState } from 'selectors'
import { connect } from 'react-redux'

const App = (props) => {
  
  return (
    <div className="App">
      <Helmet
        titleTemplate="Chkm | %s"
        defaultTitle="Chkm's site"
        meta={[{
          name: "description",
          content: "Chankseam's site"
        }
      ]}/>

      <Header routes={ includeRoutes } />
      { 
        props.loading ? 
          <Loading /> :
          <Section>
            { props.children && React.cloneElement(props.children, {key: location.pathname}) }
          </Section>
      }
      <Footer>
      </Footer>
    </div>
  );
}

export default connect((state) => getAppState(state))(App)
