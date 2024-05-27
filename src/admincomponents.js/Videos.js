import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { $host } from '../http/axios';

const Videos = () => {
  const { courseId } = useParams();
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $host.get(`/course/${courseId}`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };
    fetchData();
  }, [courseId]);



  return (
    <div>
      <section className='course-videos'>
      <h1 style={{marginBottom:'10px'}}>Видео курса</h1>
      <div className="box-container">
        {videos.map(video => (
          <a key={video.id} href={`/admin/video/${video.id}`} className="box">
            <img src={`/images/post-2-3.png`} alt={video.title} />
            <h3>{video.title}</h3>
          </a>
          
        ))}
      </div>
      
      </section>
    </div>
  );
};

export default Videos;
