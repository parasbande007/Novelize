import React, { useState } from 'react';
import {useLoaderData, useParams} from 'react-router-dom'
import { Button, Label, TextInput, Textarea } from "flowbite-react";


const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Adventure",
    "Action",
    "Programming",
    "Science-Fiction",
    "Fantasy",
    "Romance",
    "Horror",
    "Mystery",
    "Autobiography",
    "Business",
    "Art",
    "Memoir",
    "Education",
    "Children",
    "Manga/Anime",
    "Travel",
    "Religion",
    "Magzines",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => { 
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj ={
      bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL
    };

    fetch(`http://localhost:5000/book/${id}`,{
      method : "PATCH",
      headers :{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)

    }).then(res => res.json())
    .then(data => {
      alert("Book updated successfully!!!");
      
    })


  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1100px] flex-col flex-wrap gap-4" >
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" defaultValue={bookTitle} required  />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName}/>
          </div>
        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book image URL" />
            </div>
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book image URL" required defaultValue={imageUrl}/>
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write description for your book..." required rows={4} defaultValue={bookDescription}/>
        </div>

        {/*Pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="book pdf url" required defaultValue={bookPDFURL} />
        </div>
        
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks
