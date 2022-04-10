import { render, screen } from '@testing-library/react';
import FullWidthCard from '../../../components/organisms/fullWidthCard/FullWidthCard';

describe('testing fullWidthCard', () => {
  test('should render fullWidthCard', () => {
    const props = {
      name: 'name',
      field: ['field_1', 'field_2', 'field_3', 'field_4'],
      skills: ['skills_1', 'skills_2', 'skills_3', 'skills_4'],
      photo: 'photo',
    };

    render(
      <FullWidthCard
        name={props.name}
        field={props.field}
        skills={props.skills}
        photo={props.photo}

      />,
    );

    const title = screen.getByText(props.name);
    const fields = screen.getByText(`${props.field[0]} ${props.field[1]} ${props.field[2]}`);
    const skills = screen.getByText(`${props.skills[0]}, ${props.skills[1]}, ${props.skills[2]}.`);
    const img = screen.getByAltText(`${props.name}.jpg`);

    expect(title).toBeInTheDocument();
    expect(fields).toBeInTheDocument();
    expect(skills).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
