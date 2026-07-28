import React, { useEffect, useState } from "react";
import { courses, quizzes } from "../../assets/data";
import { useNavigate, useParams } from "react-router-dom";

const LessonQuiz = () => {
  const { courseId, sectionId, lessonId } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.id === Number(courseId)
  );

  const lessonQuiz = quizzes.find(
    (item) =>
      item.courseId === Number(courseId) &&
      item.sectionId === Number(sectionId) &&
      item.lessonId === Number(lessonId)
  );

  // Hooks
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setSelectedAnswer("");
    setIsSubmitted(false);
    setScore(0);
  }, [courseId, sectionId, lessonId]);

  if (!course || !lessonQuiz) {
    return <h1>Quiz Not Found</h1>;
  }

  const question = lessonQuiz.questions[0];

  const handleAnswer = (option) => {
    if (isSubmitted) return;

    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore(1);
    }

    setIsSubmitted(true);
  };

  const handleNextLesson = () => {
    const currentSection = course.content[Number(sectionId)];

    const currentLessonIndex = currentSection.lessons.findIndex(
      (lesson) => lesson.id === Number(lessonId)
    );

    // Lesson بعدی در همین Section
    if (currentLessonIndex < currentSection.lessons.length - 1) {
      const nextLesson =
        currentSection.lessons[currentLessonIndex + 1];

      navigate(
        `/course/${courseId}/lesson/${sectionId}/${nextLesson.id}`
      );
      return;
    }

    // اولین Lesson در Section بعدی
    if (Number(sectionId) < course.content.length - 1) {
      const nextSection = Number(sectionId) + 1;
      const firstLesson =
        course.content[nextSection].lessons[0];

      navigate(
        `/course/${courseId}/lesson/${nextSection}/${firstLesson.id}`
      );
      return;
    }

    alert("🎉 Course Completed");
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-8">
        Lesson Quiz
      </h1>

      <h2 className="text-xl font-semibold mb-6">
        {question.question}
      </h2>

      <div className="flex flex-col gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`border p-4 rounded-lg text-left
              ${
                isSubmitted &&
                option === question.answer
                  ? "bg-green-500 text-white"
                  : ""
              }
              ${
                isSubmitted &&
                option === selectedAnswer &&
                option !== question.answer
                  ? "bg-red-500 text-white"
                  : ""
              }
              ${
                !isSubmitted
                  ? "hover:bg-blue-100"
                  : ""
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>

      {isSubmitted && (
        <>
          <h2 className="mt-8 text-xl font-bold">
            Score: {score}/1
          </h2>

          <button
            onClick={() => {handleNextLesson(), window.scrollTo(0,0)}}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Next Lesson
          </button>
        </>
      )}
    </section>
  );
};

export default LessonQuiz;