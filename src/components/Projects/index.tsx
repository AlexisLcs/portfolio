/**
 * Portfolio personnel - www.alexislcs.fr
 * Application développée par Alexis Lucas.
 *
 * Copyright © 2020 Alexis Lucas
 * Email : contact@alexislcs.fr
 */

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
import "assets/styles/projects.scss";

export type AppProps = WithTranslation;

interface SampleState {
    error: string;
    projects: Project[];
}

export interface Project {
    title: string;
    year: string;
    pedagogy: string;
    goal: string;
    img: string;
    skills: string[];
    github: string;
}

/**
 * Classe concernant le listing des projets.
 */
class Projects extends React.Component<AppProps, SampleState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            error: "",
            projects: []
        };
    }

    /**
     * Contenu de l'entête de page.
     */
    _renderHeader() {
        return <Page.Header title={this.props.t("projects.header")} />;
    }

    /**
     * Lecture des données concernant les projets recensés.
     */
    _readProjects() {
        let index = 1;
        while (
            this.props.t("projects.project_" + index.toString() + ".title") !=
            "projects.project_" + index.toString() + ".title"
        ) {
            let idSkill = 1;
            const skills: string[] = [];
            while (
                this.props.t(
                    "projects.project_" + index.toString() + ".skill_" + idSkill.toString()
                ) !=
                "projects.project_" + index.toString() + ".skill_" + idSkill.toString()
            ) {
                skills.push(
                    this.props.t(
                        "projects.project_" + index.toString() + ".skill_" + idSkill.toString()
                    )
                );
                ++idSkill;
            }

            const project: Project = {
                title: this.props.t("projects.project_" + index.toString() + ".title"),
                year: this.props.t("projects.project_" + index.toString() + ".year"),
                pedagogy: this.props.t("projects.project_" + index.toString() + ".pedagogy"),
                goal: this.props.t("projects.project_" + index.toString() + ".goal"),
                img: this.props.t("projects.project_" + index.toString() + ".img"),
                github: this.props.t("projects.project_" + index.toString() + ".github"),
                skills: skills
            };

            this.state.projects.push(project);
            ++index;
        }

        this.state.projects.reverse();
    }

    /**
     * Méthode permettant de render une compétence comme élément de liste.
     * @param skill Le nom de la compétence.
     */
    _renderSkill(skill: string) {
        return <li>{skill}</li>;
    }

    /**
     * Méthode permettant de render une image si une URL associée existe.
     * @param url L'url contenue dans les données.
     */
    _renderImage(url: string) {
        if (url != "") {
            return (
                <div className="right">
                    <Image width="50%" src={url} />
                </div>
            );
        }

        return null;
    }

    /**
     * Méthode permettant de render l'accès au projet Git si celui-ci a été indiqué.
     * @param url L'url contenue dans les données.
     */
    _renderGit(url: string) {
        if (url != "") {
            return (
                <div className="center">
                    <Icons.GitHubSmall /> <a href={url}>{this.props.t("projects.git")} </a>
                    <Icons.GitHubSmall />
                </div>
            );
        }

        return null;
    }

    /**
     * Méthode permettant de render les informations d'un projet.
     * @param project Le projet à render.
     */
    _renderProject(project: Project) {
        return (
            <div>
                <Row>
                    <Col span={9}>
                        <Card>
                            <Card.Header title={project.title} />
                            <Card.Content>
                                <Text size="small" secondary>
                                    <b>{this.props.t("projects.year")}</b> {project.year}
                                    <br />
                                    <b>{this.props.t("projects.pedagogy")}</b> {project.pedagogy}
                                    <br />
                                    <br />
                                    <b>{this.props.t("projects.goal")}</b> {project.goal}
                                    <br />
                                    <br />
                                    {this._renderImage(project.img)}
                                </Text>
                            </Card.Content>
                        </Card>
                    </Col>
                    <Col span={3}>
                        <Card>
                            <Card.Content>
                                <Text size="small" secondary>
                                    <b>{this.props.t("projects.skill")}</b>
                                    <ul>
                                        {project.skills.map((skill) => {
                                            return this._renderSkill(skill);
                                        })}
                                    </ul>
                                    {this._renderGit(project.github)}
                                </Text>
                            </Card.Content>
                        </Card>
                    </Col>
                </Row>
                <Divider skin="light" />
                <br />
            </div>
        );
    }

    render() {
        this._readProjects();
        return (
            <Page>
                {this._renderHeader()}
                <Page.Content>
                    <Container>
                        <Cell>
                            <Notification theme="standard" show>
                                <Notification.TextLabel>
                                    {this.props.t("projects.notification")}
                                </Notification.TextLabel>
                                <Notification.CloseButton />
                            </Notification>
                        </Cell>
                        <br />
                        {this.state.projects.map((project) => {
                            return this._renderProject(project);
                        })}
                    </Container>
                </Page.Content>
            </Page>
        );
    }
}
export default withTranslation()(Projects);
