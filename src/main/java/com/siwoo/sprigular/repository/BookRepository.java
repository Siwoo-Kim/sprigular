package com.siwoo.sprigular.repository;

import com.siwoo.sprigular.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {

}
