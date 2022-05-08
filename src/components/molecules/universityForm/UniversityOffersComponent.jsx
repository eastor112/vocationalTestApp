import { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Alert, Button } from 'flowbite-react';
import { ChevronDoubleDownIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../../organisms/modal/ModalComponent';
import OfferFormComponent from '../../organisms/offerForm/OfferFormComponent';
import { deleteUniversityOfferAction, setIsEditingModal } from '../../../context/actions/universities-actions';

const UniversityOffersComponent = ({ universityId }) => {
  const {
    activeUniversity: { offer: academicOffers },
  } = useSelector((state) => state.universities);

  const dispatch = useDispatch();

  const [activeOffer, setActiveOffer] = useState({});

  const [creating, setCreating] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    dispatch(setIsEditingModal(true));
    setIsOpen(true);
  };

  const closeModal = () => {
    dispatch(setIsEditingModal(false));
    setIsOpen(false);
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

  const handleDeleteOffer = (id) => {
    dispatch(deleteUniversityOfferAction(id));
  };

  return (
    <>
      <div>
        <Button
          data-cy='open-modal-button'
          className='my-6'
          onClick={handleCreateOffer}
        >
          Add academic offer
        </Button>

        {
          academicOffers.length === 0 && (
            <Alert className='mt-2' color='yellow'>
              <span>
                <span className='font-medium mr-1'>
                  Info!
                </span>
                You haven&apos;t added any academic offer yet
              </span>
            </Alert>
          )
        }
        <Accordion>
          {
            academicOffers.map((academicOffer) => (
              <Accordion.Panel key={uuidv4()}>
                <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
                  {academicOffer.name}
                </Accordion.Title>
                <Accordion.Content>
                  <div className='bg-gray-100 flex flex-col lg:flex-row gap-4 rounded-lg py-2'>
                    <figure className='max-h-40 max-w-xs overflow-hidden'>
                      {
                        academicOffer.photo !== ''
                        && <img className='max-w-full max-h-40' src={academicOffer.photo} alt={academicOffer.name} />
                      }
                    </figure>
                    <div>
                      <p aria-label='offer-description' className='mb-2 text-sm'>
                        {
                          academicOffer.description === ''
                            ? (
                              <span className='text-gray-400'>
                                No descriptions
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
                              <a
                                className='text-blue-500 hover:text-blue-600 hover:underline'
                                href={academicOffer.url}
                                target='_blank'
                                rel='noreferrer'
                              >
                                {academicOffer.url}
                              </a>
                            )
                        }
                      </p>
                      <div className='flex gap-2 mt-6'>
                        <Button data-cy='update-offer-open' color='yellow' onClick={() => handleUpdateOffer(academicOffer._id)}>
                          <PencilAltIcon className='mr-2 h-5 w-5' />
                          Update
                        </Button>
                        <Button data-cy='delete-offer-open' color='red' onClick={() => handleDeleteOffer(academicOffer._id)}>
                          <TrashIcon className='mr-2 h-5 w-5' />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            ))
          }
        </Accordion>

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
};

export default UniversityOffersComponent;
