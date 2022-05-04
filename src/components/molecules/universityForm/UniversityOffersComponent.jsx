import { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Button } from 'flowbite-react';
import { ChevronDoubleDownIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useModal } from '../../../hooks/useModal';
import ModalComponent from '../../organisms/modal/ModalComponent';
import OfferFormComponent from '../../organisms/offerForm/OfferFormComponent';
import { destroyOffer } from '../../../services/offersServices';

const UniversityOffersComponent = ({ universityId, offer }) => {
  const [activeOffer, setActiveOffer] = useState({});
  const [academicOffers, setAcademicOffers] = useState(offer);
  const [creating, setCreating] = useState(false);

  const { isOpen, openModal, closeModal } = useModal(false);

  const handleDeleteOffer = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(() => {
      Swal.fire({
        title: 'Updating...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      destroyOffer(id)
        .then(() => {
          Swal.fire({
            title: 'Success!',
            icon: 'success',
            html: 'Offer deleted successfully!',
            confirmButtonText: 'Ok',
          }).then(() => {
            Swal.close();
          });
        })
        .catch((err) => {
          Swal.fire({
            title: 'Error!',
            icon: 'error',
            html: err.message,
            confirmButtonText: 'Ok',
          }).then(() => {
            Swal.close();
          });
        });
    });
  };

  const handleCreateOffer = () => {
    setCreating(true);
    setActiveOffer({});
    openModal();
  };

  const handleUpdateOffer = (id) => {
    setCreating(false);
    setActiveOffer(academicOffers.find((offerr) => offerr._id === id));
    openModal();
  };

  return (
    <>
      <div>
        <Button
          className='my-6'
          onClick={handleCreateOffer}
        >
          Add academic offer
        </Button>
        {
          academicOffers.map((academicOffer) => (
            <Accordion key={uuidv4()}>
              <Accordion.Panel>
                <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
                  {academicOffer.name}
                </Accordion.Title>
                <Accordion.Content>
                  <div className='bg-gray-100 flex flex-col lg:flex-row gap-4'>
                    <figure className='h-40 max-w-xs overflow-hidden'>
                      {
                        academicOffer.photo !== ''
                        && <img className='w-full' src={academicOffer.photo} alt={academicOffer.name} />
                      }
                    </figure>
                    <div>
                      <p aria-label='offer-description' className='mb-2 text-sm'>
                        {
                          academicOffer.description === ''
                            ? (
                              <span className='text-gray-400'>
                                No description
                              </span>
                            )
                            : academicOffer.description
                        }
                      </p>

                      <p aria-label='offer-duration'>
                        <span className='mr-1 font-medium'>
                          Duration:
                        </span>
                        {academicOffer.duration}
                      </p>

                      <p aria-label='offer-career'>
                        <span className='mr-1 font-medium'>
                          Career:
                        </span>
                        {
                          academicOffer.career
                            ? (
                              <Link
                                to={`/careers/${academicOffer.career._id}`}
                                className='text-blue-500 hover:text-blue-600 hover:underline'
                              >
                                {academicOffer.career.name}
                              </Link>
                            )
                            : (
                              <span className='text-gray-400'>
                                No career selected
                              </span>
                            )
                        }

                      </p>

                      <p aria-label='more-info'>
                        <span className='mr-1 font-medium'>
                          More info:
                        </span>
                        {
                          academicOffer.url === ''
                            ? (
                              <span className='text-gray-400'>
                                No link
                              </span>
                            )
                            : (
                              <a href='_blank'>
                                {academicOffer.url}
                              </a>
                            )
                        }
                      </p>
                      <div className='flex gap-2 mt-6'>
                        <Button color='yellow' onClick={() => handleUpdateOffer(academicOffer._id)}>
                          <PencilAltIcon className='mr-2 h-5 w-5' />
                          Update
                        </Button>
                        <Button color='red' onClick={() => handleDeleteOffer(academicOffer._id)}>
                          <TrashIcon className='mr-2 h-5 w-5' />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

            </Accordion>
          ))
        }

      </div>

      <ModalComponent
        isOpen={isOpen}
        closeModal={closeModal}
        closeOnOverlayClick={false}
      >
        <OfferFormComponent
          universityId={universityId}
          closeModal={closeModal}
          creating={creating}
          setCreating={setCreating}
          activeOffer={activeOffer}
        />

      </ModalComponent>
    </>
  );
};

UniversityOffersComponent.propTypes = {
  universityId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  offer: PropTypes.array.isRequired,
};

export default UniversityOffersComponent;
