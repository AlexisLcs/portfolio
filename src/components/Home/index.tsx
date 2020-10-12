/**
 * Portfolio personnel - www.alexislcs.fr
 * Application développée par Alexis Lucas.
 *
 * Copyright © 2020 Alexis Lucas
 * Email : contact@alexislcs.fr
 */

import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page, Card, Container, Text, Col, Row, Image, Cell, Notification} from "wix-style-react";

export type AppProps = WithTranslation;

interface SampleState {
    error: string;
}

/**
 * Classe concernant le composant principal, à savoir la page d'accueil.
 */
class Home extends React.Component<AppProps, SampleState> {
    constructor(props: AppProps) {
        super(props);
    }

    /**
     * Contenu de l'entête de page.
     */
    _renderHeader() {
        return <Page.Header title={this.props.t("home.header")} />;
    }

    render() {
        return (
            <Page>
                {this._renderHeader()}
                <Page.Content>
                    <Container>
                        <Cell>
                            <Notification theme="standard" show>
                                <Notification.TextLabel>
                                    <b>{this.props.t("home.notice")}</b>{" "}
                                    {this.props.t("home.creation")}
                                </Notification.TextLabel>
                            </Notification>
                        </Cell>
                        <br />
                        <Row stretchViewsVertically>
                            <Col span={8}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            {this.props.t("home.welcome")}
                                            <br />
                                            <br />
                                            <h2>{this.props.t("home.course")}</h2>
                                            {this.props.t("home.presentation")}
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card>
                                    <Image src="https://cloud.alexislcs.fr/portfolio/images/picture.jpg" />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Page.Content>
            </Page>
        );
    }
}
export default withTranslation()(Home);
