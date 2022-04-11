import React from 'react';

const FileUpload = () => {
  return (
    <>

      <label className='mb-2 text-sm font-medium text-gray-900' htmlFor='user_avatar'>Upload Profile Picture</label>
      <input
        data-testid='file-upload'
        className='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none focus:border-transparent '
        aria-describedby='user_avatar_help'
        id='user_avatar'
        type='file'
      />
      <div className='mt-1 text-sm text-gray-500' id='user_avatar_help'>A profile picture is useful to confirm your are logged into your account</div>
    </>
  );
};

export default FileUpload;
