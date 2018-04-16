package com.siwoo.sprigular.support;

import com.siwoo.sprigular.domain.BasicTime;
import com.siwoo.sprigular.domain.Section;
import com.siwoo.sprigular.domain.Topic;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class FixtureFactory {

    public static List<Section> sections() {
        List sections = new ArrayList();

        Section section = new Section();
        section.setName("Angular");
        section.setDescription("Angular (commonly referred to as \"Angular 5\" or \"Angular 2\") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.");
        section.setBasicTime(new BasicTime(LocalDateTime.now(),LocalDateTime.now()));
        sections.add(section);

        section = new Section();
        section.setName("Spring Boot");
        section.setDescription("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.");
        section.setBasicTime(new BasicTime(LocalDateTime.now(),LocalDateTime.now()));
        sections.add(section);

        return sections;
    }

    public static List<Topic> angularTopics(Section section) {
        List<Topic> topics = new ArrayList<>();
        Topic topic = new Topic();
        topic.setName("Components");
        topic.setDescription("Introduction to components\n" +
                "\n" +
                "You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.\n" +
                "\n" +
                "For example, the HeroListComponent has a heroes property that returns an array of heroes that it acquires from a service. HeroListComponent also has a selectHero() method that sets a selectedHero property when the user clicks to choose a hero from that list." +
                "\n" +
                "The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata. In the example code below, you can see that HeroListComponent is just a class, with no special Angular notation or syntax at all. It's not a component until mark it as one with the @Component decorator.\n" +
                "\n" +
                "The metadata for a component tells Angular where to get the major building blocks it needs to create and present the component and its view. In particular, it associates a template with the component, either directly with inline code, or by reference. Together, the component and its template describe a view.\n" +
                "\n" +
                "In addition to containing or pointing to the template, the @Component metadata configures, for example, how the component can be referenced in HTML and what services it requires.");
        topic.setBasicTime(new BasicTime(LocalDateTime.now(),LocalDateTime.now()));
        topic.setSection(section);
        topics.add(topic);

        topic = new Topic();
        topic.setName("Module");
        topic.setDescription("Introduction to modules Module\n" +
                "Angular apps are modular and Angular has its own modularity system called NgModules. An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. It can contain components, service providers, and other code files whose scope is defined by the containing NgModule. It can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.\n" +
                "\n" +
                "Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your app by bootstrapping the root NgModule.\n" +
                "\n" +
                "While a small application might have only one NgModule, most apps have many more feature modules. The root NgModule for an app is so named because it can include child NgModules in a hierarchy of any depth.");
        topic.setBasicTime(new BasicTime(LocalDateTime.now(),LocalDateTime.now()));
        topic.setSection(section);
        topics.add(topic);

        return topics;
    }

}
