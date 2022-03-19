import React from 'react';
import NavBar from '../components/organisms/navBar/NavBar';
import Footer from '../components/organisms/footer/Footer';

const VocationalTestResultPage = () => (
  <section>
    <NavBar />
    <section>
      <article>
        <div className='wrapper'>
          <div
            className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-2 mb-20 mx-20 mt-20'
          >
            <div
              className='bg-cover bg-center ml-10 border border-yellow border-dashed h-90 w-50'
            >
              <img
                src='../assets/girl-choosing.jpg'
                alt=''
                className='bg-cover bg-center'
              />
            </div>

            <div className='mx-10 h-50 border border-yellow border-dashed h-50'>
              <h3 className='text-3xl font-medium mb-8'>Excellent Jhon!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, deleniti. Excepturi recusandae repellendus atque fuga
                impedit nulla numquam incidunt. Voluptatibus. Alias libero illo
                facere suscipit adipisci quis. Reprehenderit, expedita soluta!
                Sequi quod modi amet pariatur sapiente optio ea iste quibusdam.
                Eos qui quisquam officiis in sapiente accusamus sit ducimus
                temporibus?
              </p>
              <ul className='my-10'>
                <li>
                  <a
                    href='./vocationalTestResults.html'
                    className='text-md hover:font-semibold whitespace-nowrap hover:bg-purple-300 hover:px-2 hover:py-2 hover:rounded-md hover:font-bold hover:text-white cursor-pointer'
                  >
                    Suggestion 1
                  </a
                  >
                </li>
                <li>
                  <a
                    href='./vocationalTestResults.html'
                    className='text-md hover:font-semibold whitespace-nowrap hover:bg-purple-300 hover:px-2 hover:py-2 hover:rounded-md hover:font-bold hover:text-white cursor-pointer'
                  >
                    Suggestion 2
                  </a
                  >
                </li>
                <li>
                  <a
                    href='./vocationalTestResults.html'
                    className='text-md hover:font-semibold whitespace-nowrap hover:bg-purple-300 hover:px-2 hover:py-2 hover:rounded-md hover:font-bold hover:text-white cursor-pointer'
                  >
                    Suggestion 3
                  </a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <script src='test.js' />
      </article>
    </section>
    <Footer />
  </section>
);

export default VocationalTestResultPage;
