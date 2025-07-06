package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
	public BookService() {
		System.out.println("Service started....");
	}
	
	private BookRepository bookRepository;

	public BookRepository getBookRepository() {
		return bookRepository;
	}

	public void setBookRepository(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}

}
