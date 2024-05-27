


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { $host } from '../http/axios';

const Videos = () => {
  const { courseId } = useParams();
  const [videos, setVideos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await $host.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };
    fetchDatas();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await $host.get(`/course/${courseId}`);
        setVideos(response.data);
        setVideoCount(response.data.length);  // Обновляем количество видео
      } catch (error) {
        console.error('Error fetching video data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [courseId]);

  return (
    <div>
      <section className="course-details">
        <h1 className="heading">Информация о курсе</h1>
        <div className="row">
          <div className="column">
            <div className="thumb">
            {courses.map(course => (
                <div key={course.id}>
                  {course.image && <img src={`http://localhost:3001/images/${course.image}`} alt={course.title} />}
                </div>
              ))}
              <span>Количество видео: {videoCount}</span>
            </div>
          </div>
          <div className="column">
            <div className="details">
              {courses.map(course => (
                <div key={course.id}>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p>{course.maxDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="course-videos">
        <h1 style={{ marginBottom: '10px' }}>Видео курса</h1>
        {isLoading ? (
          <p>Загрузка...</p>
        ) : (
          <div className="box-container">
            {videos.map(video => (
              <a key={video.id} href={`/video/${video.id}`} className="box">
                <img src={`/images/post-2-3.png`} alt={video.title} />
                <h3>{video.title}</h3>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Videos;
