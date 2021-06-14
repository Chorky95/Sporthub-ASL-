import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

function Video() {
  const data = useLocation();
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);

  const labels = {
    0.5: 'Hate it',
    1: "Don't like it",
    1.5: 'Bad',
    2: 'Not good',
    2.5: 'Ok',
    3: 'Not bad',
    3.5: 'Good',
    4: 'Nice',
    4.5: 'Excellent',
    5: 'Awesome',
  };

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflow: 'hidden',
      alignItems: 'center',
    },
  });
  const classes = useStyles();

  return (
    <div className='video-container'>
      <div className='video__player' key={data.state.id}>
        <h3 className='video__player__title'>
          {data.state.description}
        </h3>
        <div className='video__player__wrapper'>
          <ReactPlayer
            controls={true}
            url={`${data.state.video.url}`}
            width='100%'
            height='100%'
            playing={true}
            loop={true}
          />
        </div>
        <p>{`Uploaded by: ${data.state.author}, ${data.state.release}`}</p>
        <p>{`Views: ${data.state.views}`}</p>
        <div className={classes.root}>
          <Rating
            name='hover-feedback'
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </div>
        <br />
        <FacebookShareButton
          url={`${data.state.video.url}`}
          quote={data.state.description}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>{' '}
        <TwitterShareButton
          title={data.state.description}
          url={`${data.state.video.url}`}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>{' '}
        <WhatsappShareButton
          title={data.state.description}
          url={`${data.state.video.url}`}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <div className='athlete'>
          <h3>Athlete info</h3>
          <p>Name: {`${data.state.athlete.name}`}</p>
          <p>Age: {`${data.state.athlete.age}`}</p>
          <p>
            Country: {`${data.state.athlete.country.name}`}{' '}
            <img
              className='athlete__country-icon'
              src={`${data.state.athlete.country.icon}`}
              alt={`${data.state.athlete.country.slug}`}
            />
          </p>
          <p>
            Sport: {`${data.state.athlete.sport.name}`}{' '}
            <img
              className='athlete__sport-icon'
              src={`${data.state.athlete.sport.icon}`}
              alt={`${data.state.athlete.sport.slug}`}
            />
          </p>
          <p>Club: {`${data.state.athlete.club}`}</p>
        </div>
      </div>
      <Link to='/'>
        <button className='button'>Go back</button>
      </Link>
    </div>
  );
}

export default Video;
