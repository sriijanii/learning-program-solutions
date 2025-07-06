package com.springcore.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.repository.BookRepository;
import com.library.service.BookService;

public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        /*BookService bookService = (BookService) context.getBean("bookService");
        System.out.println("Book service initialized....");
        BookRepository bookRepository = (BookRepository) context.getBean("bookRepository");
        System.out.println("Book repository initialized....");
        */
    	
    	BookService bookService = context.getBean("bookService", BookService.class);
        bookService.displayBooks();
    
    }
}
