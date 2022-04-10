import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UniversityCard from '../../../components/organisms/simpleCard/UniversityCard';

describe('testing UniversityCard', () => {
  test('should render UniversityCard', () => {
    const university = {
      id: 1,
      name: 'Harvard University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png',
      campus: ['https://imagenes.elpais.com/resizer/45yvpB28CP3x0S4ONn0Dw5eQ87c=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XYIG265EYVE2ZPKJN6SCBFIVTU.jpg', 'https://image.cnbcfm.com/api/v1/image/106604493-1594057373282harvarduniversitysdunsterhouseincambridgema.jpg', 'https://st1.agmeducation.com/media/2021/08/Harvard_Law.jpg', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/18/16/snowplow-parent-harvard.jpg', 'https://cloudinary.hbs.edu/hbsit/image/upload/s--RT4pjs57--/f_auto,c_fill,h_720,w_1280,/v20200101/F96DC40F927B7A3CD77B56CDA0727595.jpg'],
      ranking: {
        national: 1,
        worldwide: 1,
      },
      mission: 'The mission of Harvard College is to educate the citizens and citizen-leaders for our society. We do this through our commitment to the transformative power of a liberal arts and sciences education.',
      vision: 'Harvard College sets the standard for residential liberal arts and sciences education. We have committed to creating and sustaining the conditions that enable all Harvard College students to experience an unparalleled educational journey that is intellectually, socially, and personally transformative.',
      process: ['Start the College Application Process.',
        'Complete the application form.',
        'Fill Out the Common App.',
        'Write a Standout College Essay.',
        'Ask for Recommendation Letters.',
        'Learn the Ins and Outs of Financial Aid.',
        'Decipher College Tuition Costs.',
        'Find Scholarships to Pay for College.',
      ],
      location: {
        city: 'Cambridge',
        Department: 'MA',
        Country: 'USA',
      },
      offer: [{
        code: 11,
        career: 'Liberal Arts & Sciences',
        duration: '4 semesters',
        description: "The undergraduate degree is designed with flexibility in mind: you set your own academic goals, and we'll help you plan coursework to meet them—while also ensuring you receive a broad liberal arts and sciences education.",

      },
      {
        code: 12,
        career: 'Molecular and Cellular Biology',
        duration: '10 semesters',
        description: 'The Molecular and Cellular Biology (MCB) concentration emphasizes the intersection of modern cellular biology research with medicine and society. It is rooted in the investigation of biological processes based on the study of molecules and their interactions in the context of cells and tissues, and how the genome orchestrates cell behavior. ',

      },
      ],
      url: 'https://www.harvard.edu/',
    };

    render(
      <BrowserRouter>
        <UniversityCard university={university} />
      </BrowserRouter>,
    );

    const tag = screen.getByText(/location:/i);
    const campusImg = screen.getByAltText(`campus ${university.name}`);
    const logoImg = screen.getByAltText(university.name);
    const adreess = screen.getByText(new RegExp(university.location.city, 'i'));

    expect(tag).toBeInTheDocument();
    expect(campusImg).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
    expect(adreess).toBeInTheDocument();
    expect(university.logo).toContain(logoImg.src);
  });
});
