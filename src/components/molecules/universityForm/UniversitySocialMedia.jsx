import InputV2 from '../../atoms/input/InputV2';

const UniversitySocialMedia = () => {
  return (
    <form>
      <InputV2
        type='url'
        name='facebook'
        label='Facebook'
      // value={socialMedia.linkedIn}
      // onChange={handleFormChange}
      />

      <InputV2
        type='url'
        name='linkedIn'
        label='LinkedIn'
      // value={socialMedia.facebook}
      // onChange={handleFormChange}
      />

      <InputV2
        type='url'
        name='twitter'
        label='Twitter'
      // value={socialMedia.twitter}
      // onChange={handleFormChange}
      />

      <InputV2
        type='url'
        name='instagram'
        label='Instagram'
      // value={socialMedia.instagram}
      // onChange={handleFormChange}
      />
    </form>
  );
};

export default UniversitySocialMedia;
