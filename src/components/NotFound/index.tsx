import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page, Container, Card, Text, Image} from "wix-style-react";
import "assets/styles/notfound.scss";

export type AppProps = WithTranslation;

interface SampleState {
    error: string;
}

class NotFound extends React.Component<AppProps, SampleState> {
    constructor(props: AppProps) {
        super(props);
    }

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
                                    <h2>La page souhaitée est introuvable.</h2> <br />
                                    Vous êtes perdus ? Ne soyez pas triste, ici il y a des cookies !
                                    Détentez-vous et réessayez plus tard...
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
                                        Illustration de{" "}
                                        <a href="https://giphy.com/pusheen">Pusheen sur giphy</a>.
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
