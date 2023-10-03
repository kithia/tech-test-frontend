import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CardDetail() {
  const [cardDetail, setCardDetail] = useState(null);
  const [documentTitle, setDocumentTitle] = useState('Moonpig')
  const { id } = useParams();

  document.title = documentTitle;

  useEffect(() => {
    const loadCardDetail = async () => {
        fetch(`https://moonpig.github.io/tech-test-frontend/product/${id}.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCardDetail(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    loadCardDetail();
    
    if (cardDetail) { 
      setDocumentTitle(`${cardDetail.Title} | Moonpig`);
    }

}, [setCardDetail, cardDetail, id])

  return (
    <div>CardDetail</div>
  )
}
