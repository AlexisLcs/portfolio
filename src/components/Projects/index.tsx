import React from "react";
import {withTranslation, WithTranslation} from "react-i18next";
import * as Icons from "wix-ui-icons-common";
import {
    Page,
    Container,
    Row,
    Col,
    Card,
    Text,
    Image,
    Cell,
    Notification,
    Divider
} from "wix-style-react";

export type AppProps = WithTranslation;

interface SampleState {
    error: string;
}

class Projects extends React.Component<AppProps, SampleState> {
    constructor(props: AppProps) {
        super(props);
    }

    _renderHeader() {
        return <Page.Header title="Projets réalisés" />;
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
                                    Pour en savoir plus sur l&apos;un des projets, n&apos;hésitez
                                    pas à me contacter !
                                </Notification.TextLabel>
                                <Notification.CloseButton />
                            </Notification>
                        </Cell>
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Portfolio" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2020
                                            <br />
                                            <b>Objectif du projet : </b>
                                            Projet personnel permettant de me présenter à travers
                                            différents projets.
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>React + TypeScript</li>
                                                <li>DNS</li>
                                                <li>Apache + Cert. SSL</li>
                                                <li>Debian 9</li>
                                            </ul>
                                            <br />
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/portfolio">
                                                    Code source du projet
                                                </a>{" "}
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Prédiction de la bourse" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2020
                                            <br />
                                            <b>Context pédagogique : </b>Projet réalisé en groupe
                                            dans le cadre de l&apos;apprentissage de
                                            l&apos;optimisation continue à l&apos;école{" "}
                                            <i>Polytech de Tours</i>.
                                            <br />
                                            <br />
                                            <b>Objectif du projet : </b>
                                            Créer un Perceptron en Python avec une descente de
                                            gradient pour prédire l&apos;évolution de la bourse
                                            (croissance ou décroissance).
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>Python</li>
                                                <li>PyCharm IDE</li>
                                                <li>Théories sur l&apos;optimisation continue.</li>
                                            </ul>
                                            <br />
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/Perceptron">
                                                    Code source du projet
                                                </a>{" "}
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Itinéraires touristiques" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2020
                                            <br />
                                            <b>Context pédagogique : </b>Projet réalisé en groupe
                                            dans le cadre de l&apos;apprentissage de
                                            l&apos;optimisation discrète à l&apos;école{" "}
                                            <i>Polytech de Tours</i>.
                                            <br />
                                            <br />
                                            <b>Objectif du projet: </b>A partir d&apos;un modèle
                                            proposé par l&apos;encadrant (Y. Kergosien),
                                            l&apos;objectif était de trouver le meilleur itinéraire
                                            touristique possible, ceci en prenant en compte une
                                            multitude de contraintes. Pour ce projet, nous avons
                                            tenté une métaheuristique de type parcours.
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>C/C++</li>
                                                <li>
                                                    Théorie sur les problèmes d&apos;optimisations
                                                    discrètes.
                                                </li>
                                            </ul>
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/OptimDiscrete">
                                                    Code source du projet
                                                </a>
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Jeu vidéo - UnPiouMario" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2020
                                            <br />
                                            <b>Context pédagogique : </b>Projet réalisé en groupe
                                            dans le cadre de l&apos;apprentissage du langage QT à
                                            l&apos;école <i>Polytech de Tours</i>.
                                            <br />
                                            <br />
                                            <b>Objectif du projet: </b>
                                            Réaliser un jeu vidéo sur le thème de Mario en concevant
                                            le game design, les graphismes, le moteur graphique,
                                            etc. Nous avions choisi de faire un jeu UnFair, à savoir
                                            un jeu de plate-forme qui regroupe une multitude de
                                            pièges.
                                            <br />
                                            <br />
                                            <div className="right">
                                                <Image
                                                    width="50%"
                                                    src="https://cloud.alexislcs.fr/portfolio/images/waEflUc.gif"
                                                />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>C/C++</li>
                                                <li>Qt Creator</li>
                                            </ul>
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/UnPiouMario">
                                                    Code source du projet
                                                </a>
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Logiciel de gestion de fournitures" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2020
                                            <br />
                                            <b>Context pédagogique : </b>Projet réalisé en groupe
                                            dans le cadre de l&apos;apprentissage du langage C# à
                                            l&apos;école <i>Polytech de Tours</i>.
                                            <br />
                                            <br />
                                            <b>Objectif du projet: </b>
                                            Réaliser un logiciel en C# en suivant le cahier des
                                            charges d&apos;un client pour la gestion de ses
                                            fournitures.
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>C#</li>
                                                <li>SQLite</li>
                                            </ul>
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/Bacchus">
                                                    Code source du projet
                                                </a>
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Logiciel de gestion de vidéos" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2019
                                            <br />
                                            <b>Context pédagogique : </b>Projet tutoré réalisé en
                                            groupe dans le cadre de l&apos;apprentissage des liens
                                            orientés objets avec les bases de données à l&apos;école{" "}
                                            <i>Polytech de Tours</i>.
                                            <br />
                                            <br />
                                            <b>Objectif du projet : </b>
                                            Réaliser un logiciel permettant de gérer une base de
                                            données de vidéos avec des encodeurs, des formats et des
                                            lecteurs. Le but était de réaliser cette application en
                                            utilisant Hibernate.
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>Java</li>
                                                <li>Hibernate</li>
                                                <li>MySQL</li>
                                            </ul>
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/ProjetHibernate">
                                                    Code source du projet
                                                </a>{" "}
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Pointeuse pour les entreprises" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2019
                                            <br />
                                            <b>Context pédagogique : </b>Projet tutoré réalisé en
                                            groupe dans le cadre de l&apos;apprentissage du langage
                                            Java à l&apos;école <i>Polytech de Tours</i>.
                                            <br />
                                            <br />
                                            <b>Objectif du projet : </b>
                                            Réaliser un logiciel de gestion d&apos;une entreprise,
                                            comprenant une gestion d&apos;équipe et un système de
                                            pointage. Le pointage a été simulé à l&apos;aide
                                            d&apos;une pointeuse virtuelle réalisée en Java
                                            également.
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>Java et Swing</li>
                                                <li>Sérialisation de données</li>
                                                <li>Liaisons TCP</li>
                                            </ul>
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/TimeClockManager">
                                                    Code source du projet
                                                </a>{" "}
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                        <Divider skin="standard" />
                        <br />
                        <Row>
                            <Col span={9}>
                                <Card>
                                    <Card.Header title="Le compte est bon !" />
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Année de réalisation :</b> 2016
                                            <br />
                                            <b>Context pédagogique : </b>Projet réalisé en groupe
                                            dans le cadre du baccalauréat au lycée. Il s&apos;agit
                                            de mon premier projet en informatique réalisé, à
                                            l&apos;époque, avec un bagage minimum en JavaScript. Ce
                                            dernier m&apos;a évidemment donné envie de continuer
                                            dans ce domaine.
                                            <br />
                                            <br />
                                            <b>Objectif du projet : </b>
                                            Réaliser le jeu du compte est bon.
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                            <Col span={3}>
                                <Card>
                                    <Card.Content>
                                        <Text size="small" secondary>
                                            <b>Compétences et outils :</b>
                                            <ul>
                                                <li>JavaScript</li>
                                                <li>Canvas</li>
                                            </ul>
                                            <div className="center">
                                                <Icons.GitHubSmall />{" "}
                                                <a href="https://github.com/AlexisLcs/LCEB">
                                                    Code source du projet
                                                </a>
                                                <Icons.GitHubSmall />
                                            </div>
                                        </Text>
                                    </Card.Content>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Page.Content>
            </Page>
        );
    }
}
export default withTranslation()(Projects);
