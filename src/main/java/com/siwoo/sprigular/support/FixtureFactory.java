package com.siwoo.sprigular.support;

import com.siwoo.sprigular.domain.*;
import lombok.extern.slf4j.Slf4j;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
public class FixtureFactory {

    public static List<Book> books() {
        List books = new ArrayList();

        try {
            Book book = new Book();
            book.setTitle("토비의 스프링 3.1");
            book.setDescription("대한민국 전자정부 표준 프레임워크 스프링을 설명하는 책. 스프링을 처음 접하거나 스프링을 경험했지만 스프링이 어렵게 느껴지는 개발자부터 스프링을 활용한 아키텍처를 설계하고 프레임워크를 개발하려고 하는 아키텍트에 이르기까지 모두 참고할 수 있는 스프링 완벽 바이블이다.\n");
            book.setAuthor("이일민");
            book.setGithubURL(new URL("https://github.com/Siwoo-Kim/app-toby"));
            book.setPublisher("에이콘");
            book.setRating(5);
            books.add(book);

            book = new Book();
            book.setTitle("Pro Spring 5");
            book.setDescription("Master Spring basics and core topics, and share the authors’ insights and real–world experiences with remoting, Hibernate, and EJB. Beyond the basics, you'll learn how to leverage the Spring Framework to build the various tiers and parts of an enterprise Java application: transactions, web and presentation tiers, deployment, and much more. A full sample application allows you to apply many of the technologies and techniques covered in Pro Spring 5 and see how they work together.\n");
            book.setAuthor("Iuliana Cosmina");
            book.setGithubURL(new URL("https://github.com/Siwoo-Kim/spring5"));
            book.setPublisher("Apress");
            book.setRating(4);
            books.add(book);

            book = new Book();
            book.setTitle("Angular Development with Typescript");
            book.setDescription("This practical book covers real-world development concerns like state management, data and views, user interaction with forms, and communicating with servers, as well as testing and deploying your applications. This new edition has been fully revised to cover the latest Angular CLI along with current best practices and updates to Angular 5.\n");
            book.setAuthor("Yakov Fain");
            book.setReferenceURL(new URL("https://do-code.herokuapp.com/"));
            book.setPublisher("Manning Publications");
            book.setRating(4);
            books.add(book);

        }catch (MalformedURLException e) {
            log.error("Error: Wrong formatted url "+ e.getMessage());
            return null;
        }
        return books;
    }

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
        topic.setDescription("Introduction to components\n" + "\n" + "You define a component's application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.\n" + "\n" + "For example, the HeroListComponent has a heroes property that returns an array of heroes that it acquires from a service. HeroListComponent also has a selectHero() method that sets a selectedHero property when the user clicks to choose a hero from that list." + "\n" + "The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata. In the example code below, you can see that HeroListComponent is just a class, with no special Angular notation or syntax at all. It's not a component until mark it as one with the @Component decorator.\n" + "\n" + "The metadata for a component tells Angular where to get the major building blocks it needs to create and present the component and its view. In particular, it associates a template with the component, either directly with inline code, or by reference. Together, the component and its template describe a view.\n" + "\n" + "In addition to containing or pointing to the template, the @Component metadata configures, for example, how the component can be referenced in HTML and what services it requires.");
        topic.setBasicTime(new BasicTime(LocalDateTime.now(),LocalDateTime.now()));
        topic.setDifficulty(3);
        topic.setSection(section);

        Paragraph parent = new Paragraph();
        parent.setTitle("Displaying Data");
        parent.setDescription("You can display data by binding controls in an HTML template to properties of an Angular component.\n" + "\n" + "In this page, you'll create a component with a list of heroes. You'll display the list of hero names and conditionally show a message below the list.\n" + "\n" + "The final UI looks like this");
        parent.setCode("import { Component } from '@angular/core';\n" + "\n" + "@Component({\n" + "  selector: 'app-root',\n" + "  template: `\n" + "    <h1>{{title}}</h1>\n" + "    <h2>My favorite hero is: {{myHero}}</h2>\n" + "    `\n" + "})\n" + "export class AppComponent {\n" + "  title = 'Tour of Heroes';\n" + "  myHero = 'Windstorm';\n" + "}");

        Paragraph child = new Paragraph();
        child.setTopic(topic);
        child.setTitle("Showing component properties with interpolation");
        child.setDescription("The easiest way to display a component property is to bind the property name through interpolation. With interpolation, you put the property name in the view template, enclosed in double curly braces: {{myHero}}.\n" + "\n" + "Follow the quickstart instructions for creating a new project named displaying-data.\n" + "\n" + "Delete the app.component.html file. It is not needed for this example.\n" + "\n" + "Then modify the app.component.ts file by changing the template and the body of the component.\n" + "\n" + "When you're done, it should look like this:");
        child.setCode("template: `\n" + "  <h1>{{title}}</h1>\n" + "  <h2>My favorite hero is: {{myHero}}</h2>\n" + "  `");
        parent.addChild(child);
        topic.addParagraph(parent);

        parent = new Paragraph();
        parent.setTitle("Template inline or template file?");
        parent.setDescription("You can store your component's template in one of two places. You can define it inline using the template property, or you can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator's templateUrl property.\n" + "\n" + "The choice between inline and separate HTML is a matter of taste, circumstances, and organization policy. Here the app uses inline HTML because the template is small and the demo is simpler without the additional HTML file.\n" + "\n" + "In either style, the template data bindings have the same access to the component's properties.");
        parent.setCode("template: `\n" + "  <h1>{{title}}</h1>\n" + "  <h2>My favorite hero is: {{myHero}}</h2>\n" + "  <p>Heroes:</p>\n" + "  <ul>\n" + "    <li *ngFor=\"let hero of heroes\">\n" + "      {{ hero }}\n" + "    </li>\n" + "  </ul>");

        child = new Paragraph();
        child.setTopic(topic);
        child.setTitle("Showing an array property with *ngFor");
        child.setDescription("To display a list of heroes, begin by adding an array of hero names to the component and redefine myHero to be the first name in the array.");
        child.setCode("template: `\n" + "  <h1>{{title}}</h1>\n" + "  <h2>My favorite hero is: {{myHero}}</h2>\n" + "  <p>Heroes:</p>\n" + "  <ul>\n" + "    <li *ngFor=\"let hero of heroes\">\n" + "      {{ hero }}\n" + "    </li>\n" + "  </ul>\n" + "`");
        parent.addChild(child);
        topic.addParagraph(parent);
        topics.add(topic);

        topic = new Topic();
        topic.setName("Module");
        topic.setDescription("Introduction to modules Module\n" + "Angular apps are modular and Angular has its own modularity system called NgModules. An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. It can contain components, service providers, and other code files whose scope is defined by the containing NgModule. It can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.\n" + "\n" + "Every Angular app has at least one NgModule class, the root module, which is conventionally named AppModule and resides in a file named app.module.ts. You launch your app by bootstrapping the root NgModule.\n" + "\n" + "While a small application might have only one NgModule, most apps have many more feature modules. The root NgModule for an app is so named because it can include child NgModules in a hierarchy of any depth.");
        topic.setBasicTime(new BasicTime(LocalDateTime.now(),LocalDateTime.now()));
        topic.setDifficulty(4);
        topic.setSection(section);

        parent = new Paragraph();
        parent.setTitle("The basic NgModule");
        parent.setDescription("Modules are a great way to organize an application and extend it with capabilities from external libraries.\n" + "\n" + "Angular libraries are NgModules, such as FormsModule, HttpClientModule, and RouterModule. Many third-party libraries are available as NgModules such as Material Design, Ionic, and AngularFire2.\n" + "\n" + "NgModules consolidate components, directives, and pipes into cohesive blocks of functionality, each focused on a feature area, application business domain, workflow, or common collection of utilities.\n" + "\n" + "Modules can also add services to the application. Such services might be internally developed, like something you'd develop yourself or come from outside sources, such as the Angular router and HTTP client.\n" + "\n" + "Modules can be loaded eagerly when the application starts or lazy loaded asynchronously by the router.\n" + "\n" + "NgModule metadata does the following:\n" + "\n" + "Declares which components, directives, and pipes belong to the module.\n" + "Makes some of those components, directives, and pipes public so that other module's component templates can use them.\n" + "Imports other modules with the components, directives, and pipes that components in the current module need.\n" + "Provides services that the other application components can use.\n" + "Every Angular app has at least one module, the root module. You bootstrap that module to launch the application.\n" + "\n" + "The root module is all you need in a simple application with a few components. As the app grows, you refactor the root module into feature modules that represent collections of related functionality. You then import these modules into the root module.");
        parent.setCode("// imports\n" + "import { BrowserModule } from '@angular/platform-browser';\n" + "import { NgModule } from '@angular/core';\n" + "import { FormsModule } from '@angular/forms';\n" + "import { HttpModule } from '@angular/http';\n" + "\n" + "import { AppComponent } from './app.component';\n" + "import { ItemDirective } from './item.directive';\n" + "\n" + "\n" + "// @NgModule decorator with its metadata\n" + "@NgModule({\n" + "  declarations: [\n" + "    AppComponent,\n" + "    ItemDirective\n" + "  ],\n" + "  imports: [\n" + "    BrowserModule,\n" + "    FormsModule,\n" + "    HttpModule\n" + "  ],\n" + "  providers: [],\n" + "  bootstrap: [AppComponent]\n" + "})\n" + "export class AppModule { }");
        topic.addParagraph(parent);

        topics.add(topic);



        return topics;
    }

}
