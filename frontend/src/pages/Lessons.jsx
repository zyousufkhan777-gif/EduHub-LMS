import React from "react";
import LessonVideoPlayer from "../components/Lessons/LessonVideoPlayer";
import LessonSidebar from "../components/Lessons/LessonSidebar";
const Lessons = () => {




  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <LessonSidebar />
      <LessonVideoPlayer />
    </section>
  );
};

export default Lessons;
