import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const AppContainer = styled.div`
  margin-top: 1em;
`;

const Widget = styled.div`
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: .25rem;
  border-color: "#fdfdfe";
`;


const Seperator = styled.div`
  margin-bottom: 20px;
`;

class App extends React.Component {

    render() {
        return (
            <AppContainer>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={12} lg={8} >
                            <Widget>
                                <Iframe
                                    url="https://aware.sdpaks.equinor.com"
                                    id="aware"
                                    width="100%"
                                    height="500px" />
                            </Widget>
                            <Seperator />
                            <Widget>
                                <Iframe
                                    url="https://sensu.sdpaks.equinor.com"
                                    id="something"
                                    width="100%"
                                    height="500px" />
                            </Widget>
                        </Col>
                        <Col xs={12} md={12} lg={4}>
                            <Widget>
                                <Iframe
                                    url="https://release-aware.sdpaks.equinor.com"
                                    id="release-aware"
                                    width="100%"
                                     height="1020px" />
                            </Widget>
                        </Col>
                    </Row>
                </Grid>
            </AppContainer>
        );
    }
}

export default App;
