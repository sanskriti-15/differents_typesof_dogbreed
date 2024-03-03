import {useState} from "react";

function Card({id,name,info,image,price,removeTours})
{
    const [readMore,setreadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0, 200)}....`;
    function readMoreHandler()
    {
        setreadMore(!readMore);
    }

 return(
  <div className="card">
  <img src={image} className="image" alt="img"/>
  <div className="tourInfo">
      <div className="tourDetails">
          <h4 className="tourPrice">{price}</h4>
          <h4 className="tourName">{name}</h4>
      </div>
      <div className="description">
          {description}
  <span className="readMore" 
  onClick={readMoreHandler}>
    {readMore?`showless`: `readMore`};
  </span>
</div>
</div>
<button className="btnRed"
onClick={()=>{removeTours(id)}}>
    Not Interested
</button>
</div>
 )   

}

export default Card;