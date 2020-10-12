import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page, Card, Container, Text, Col, Row, Image, Cell, Notification} from "wix-style-react";

export type AppProps = WithTranslation;

interface SampleState {
    error: string;
}

class Home extends React.Component<AppProps, SampleState> {
    constructor(props: AppProps) {
        super(props);
    }

    _renderHeader() {
        return <Page.Header title="Accueil" />;
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
                                    <b>Le saviez-vous ?</b> Ce site a été réalisé par mes soins avec
                                    React en TypeScript !
                                </Notification.TextLabel>
                            </Notification>
                        </Cell>
                        <br />
                        <Row stretchViewsVertically>
                            <Col span={8}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            Bienvenue sur mon portfolio, je suis Alexis Lucas,
                                            élève-ingénieur en cinquième année d’informatique à
                                            l’École Polytechnique Polytechnique Universitaire et en
                                            Maîtrise Informatique à l&apos;Université de Sherbrooke.
                                            Je vous propose de découvrir mon parcours et mes projets
                                            réalisés dans le cadre de mes études, de stages ou
                                            encore par l’intermédiaire de projets personnels.
                                            <br />
                                            <br />
                                            <h2>Mon parcours</h2>
                                            Depuis mon plus jeune âge, une passion s’est ancrée dans
                                            ma vie : l’informatique. Plusieurs personnes m’ont dit
                                            que cette passion pouvait découler du monde des jeux
                                            vidéos, mais en réalité, lorsque nous étudions ce
                                            domaine, nous pouvons découvrir qu’il s’agit en réalité
                                            d’un univers bien vaste. C’est donc par cette vision que
                                            j’ai construit mon parcours pour devenir ingénieur en
                                            informatique, et plus particulièrement dans le
                                            développement logiciel. <br />
                                            <br />
                                            Durant mon parcours, avant l’école d’ingénieur, j’ai eu
                                            le privilège de réaliser de petits travaux, comme des
                                            projets informatiques au collège jusqu’à la réalisation
                                            d’un TIPE autour de la voiture autonome, en classe
                                            préparatoire. <br />
                                            <br />
                                            L’ensemble de ces projets m’ont permis de mieux
                                            comprendre l’intérêt que je porte à l’informatique et ma
                                            persévérance me permettra continuellement d’évoluer.{" "}
                                            <br />
                                            <br />
                                            C’est ainsi que j’ai joint l’École Polytechnique
                                            Universitaire où j’ai pu créer de nouvelles compétences,
                                            notamment en développement logiciel, en gestion de
                                            projet ou encore en intelligence artificielle. J&apos;ai
                                            également poursuivi ma formation à l&apos;Université de
                                            Sherbrooke en me spécialisant dans cette voie.
                                            <br />
                                            <br />
                                            Finalement, j&apos;ai profité de cette période pour
                                            m’investir dans différentes associations dont le Bureau
                                            des Arts de l’école ou encore Ingénieur Sans Frontière.
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
