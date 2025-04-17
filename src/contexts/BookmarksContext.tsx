import React, { createContext, useContext, useState, useEffect } from 'react';

interface Bookmark {
  courseId: string;
  lessonId: string;
  title: string;
  courseName: string;
}

interface BookmarksContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (courseId: string, lessonId: string) => void;
  isBookmarked: (courseId: string, lessonId: string) => boolean;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(undefined);

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const saved = localStorage.getItem('lesson-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('lesson-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks(prev => [...prev, bookmark]);
  };

  const removeBookmark = (courseId: string, lessonId: string) => {
    setBookmarks(prev => 
      prev.filter(b => !(b.courseId === courseId && b.lessonId === lessonId))
    );
  };

  const isBookmarked = (courseId: string, lessonId: string) => {
    return bookmarks.some(b => b.courseId === courseId && b.lessonId === lessonId);
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarksProvider');
  }
  return context;
}