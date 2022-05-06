import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from 'flowbite-react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';

const SingleResult = ({ test }) => {
  return (
    <div>

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
            Option A
          </Accordion.Title>
          <Accordion.Content>
            content
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
            Option B
          </Accordion.Title>
          <Accordion.Content>
            content
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
            Option C
          </Accordion.Title>
          <Accordion.Content>
            content
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
            Option D
          </Accordion.Title>
          <Accordion.Content>
            content
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
            Option E
          </Accordion.Title>
          <Accordion.Content>
            content
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

    </div>
  );
};

SingleResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  test: PropTypes.object.isRequired,
};

export default SingleResult;
