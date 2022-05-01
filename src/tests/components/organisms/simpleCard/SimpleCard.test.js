import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SimpleCard from '../../../../components/organisms/simpleCard/SimpleCard';

describe('testing SimpleCard', () => {
  test('should render SimpleCard', () => {
    render(
      <BrowserRouter>
        <SimpleCard
          id='324h234kj'
          name='Harvard University'
          logo='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png'
          mission='The mission of Harvard College is to educate the citizens'
          campus={['https://imagenes.elpais.com/resizer/45yvpB28CP3x0S4ONn0Dw5eQ87c=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XYIG265EYVE2ZPKJN6SCBFIVTU.jpg', 'https://image.cnbcfm.com/api/v1/image/106604493-1594057373282harvarduniversitysdunsterhouseincambridgema.jpg', 'https://st1.agmeducation.com/media/2021/08/Harvard_Law.jpg', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/18/16/snowplow-parent-harvard.jpg', 'https://cloudinary.hbs.edu/hbsit/image/upload/s--RT4pjs57--/f_auto,c_fill,h_720,w_1280,/v20200101/F96DC40F927B7A3CD77B56CDA0727595.jpg']}
        />
      </BrowserRouter>,
    );

    const button = screen.getByText(/see more/i);
    userEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
