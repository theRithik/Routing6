import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const Details =()=>{
    let params= useParams();
    let [searchParams] = useSearchParams();
    return(
        <div>
            <div className="card ">
  <h5 className="card-header bg-warning">{params.topic}Details</h5>
  <div className="card-body">
    <h5 className="card-title">{params.topic}Details</h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   <h5>your are in page number{searchParams.getAll('page')}</h5>
  </div>
  </div>
        </div>
    )
}
export default Details;