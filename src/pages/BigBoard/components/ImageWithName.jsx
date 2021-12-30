import StarRateIcon from '@mui/icons-material/StarRate';
import './css/ImageWithName.css';

const ImageWithName = ({ image, name, rating, onClick }) => {
  return(
    <div className="image-with-name" onClick={onClick}>
      <img src={image} alt={name} />
      <div className="name-rating-box">
        <p>{name}</p>
        <div className='rating'>
          <p>{rating}</p>
          <StarRateIcon/>
        </div>
      </div>
    </div>
  );
}

export default ImageWithName;