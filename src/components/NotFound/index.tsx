/**
 * Portfolio personnel - www.alexislcs.fr
 * Application développée par Alexis Lucas.
 *
 * Copyright © 2020 Alexis Lucas
 * Email : contact@alexislcs.fr
 */

import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page, Container, Card, Text, Image} from "wix-style-react";
import "assets/styles/notfound.scss";

export type AppProps = WithTranslation;

interface SampleState {
    error: string;
}

/**
 * Classe concernant le composant de l'erreur 404.
 */
class NotFound extends React.Component<AppProps, SampleState> {
    constructor(props: AppProps) {
        super(props);
    }

    /**
     * Contenu de l'entête de page.
     */
    _renderHeader() {
        return <Page.Header title="404 - Not Found" />;
    }

    render() {
        return (
            <Page>
                {this._renderHeader()}
                <Page.Content>
                    <Container>
                        <Card>
                            <Card.Content>
                                <Text size="small" secondary>
                                    <h2>{this.props.t("notfound.notfound")}</h2> <br />
                                    {this.props.t("notfound.dntworry")}
                                </Text>
                                <br />
                                <br />
                                <div className="cookies">
                                    <Image
                                        width="25%"
                                        src="https://cloud.alexislcs.fr/portfolio/images/giphy.webp"
                                    />
                                    <br />
                                    <Text size="tiny" secondary>
                                        {this.props.t("notfound.mention")}{" "}
                                        <a href="https://giphy.com/pusheen">
                                            {this.props.t("notfound.author")}
                                        </a>
                                        .
                                    </Text>
                                </div>
                            </Card.Content>
                        </Card>
                    </Container>
                </Page.Content>
            </Page>
        );
    }
}
export default withTranslation()(NotFound);
