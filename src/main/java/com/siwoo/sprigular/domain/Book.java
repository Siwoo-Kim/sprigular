package com.siwoo.sprigular.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.net.URL;

@Getter @Setter @ToString
@Entity @Table(name ="tbl_book")
public class Book {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_id")
    private Long id;

    @Column(name="book_title")
    private String title;

    @Column(name="book_publisher")
    private String publisher;

    @Column(name="book_author")
    private String author;

    @Column(name="book_description",length = 700)
    private String description;

    @Column(name="book_impl_url")
    private URL referenceURL;

    @Column(name="book_github_url")
    private URL githubURL;

    @Max(5) @Min(0)
    @Column(name="book_rating")
    private int rating;

}
