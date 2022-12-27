import { CashIcon, ChatIcon, CheckCircleIcon, ChevronRightIcon, ClockIcon, DocumentTextIcon, SupportIcon } from '@heroicons/react/solid'
import Head from "next/head";
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { withApollo } from '../lib/withApollo';

const advantages = [
  {
    name: 'Support 1-1',
    description: 'Ask questions directly with our dev team ready to save you from that unexpected bug.',
    icon: SupportIcon,
  },
  {
    name: 'Certifications',
    description: 'Issue a certificate of completion that truly shows your success in the course.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Community',
    description: 'Share your learning journey with thousands of others on a daily basis with the exclusive community.',
    icon: ChatIcon,
  },
  {
    name: 'Practical Challenges',
    description: 'Receive real-world challenges to test your skills with each technique learned during courses.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Recommendations',
    description: 'Receive recommendations for great jobs to start your career in programming at the end of the course.',
    icon: CashIcon,
  },
  {
    name: 'Lifetime Access',
    description: 'Take your time to study, receive lifetime access to course content to study whenever you want.',
    icon: ClockIcon,
  },
]
const blogPosts = [
  {
    id: 1,
    title: 'How to create a study schedule using Notion',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'What is the difference between a comfortable environment when programming?',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Dicas para manter seu setup de estudos ergonômico',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
]


function Home() {
  return (
    <>
      <Head>
        <title>Programming Courses</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>

      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <a
                        href="#"
                        className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                          We are hiring
                        </span>
                        <span className="ml-4 text-sm">check our career </span>
                        <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                      </a>
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">Lets</span>
                        <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                          Programming
                        </span>
                      </h1>
                      <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                        Learn how to build a personal website using Tailwind CSS and React.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <Image
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                        alt=""
                        width={490}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with grid */}
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Everything that you need</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Advantages of studying with us
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((advantage) => (
                      <div key={advantage.name} className="pt-6">
                        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                <advantage.icon className="h-6 w-6 text-white" aria-hidden="true" />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{advantage.name}</h3>
                            <p className="mt-5 text-base text-gray-500">{advantage.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial section */}
            <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="relative lg:-my-8">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <Image
                        className="object-cover lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                      <div>
                        <svg
                          className="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-6 text-2xl font-medium text-white">
                        After I started studying on this platform, I was able to take on my own personal projects, work at the company of my dreams and see the next steps in my career.
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-white">Carolina Torres</p>
                        <p className="text-base font-medium text-cyan-100">Software Engineer @ EmpresaDosSonhos</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog section */}
            <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
              <div className="relative">
                <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Aprenda mais</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Last post of our blog
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-cyan-600">
                            <a href={post.category.href} className="hover:underline">
                              {post.category.name}
                            </a>
                          </p>
                          <a href={post.href} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                            <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <a href={post.author.href}>
                              <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <a href={post.author.href} className="hover:underline">
                                {post.author.name}
                              </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.datetime}>{post.date}</time>
                              <span aria-hidden="true">&middot;</span>
                              <span>{post.readingLength} read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default withApollo(Home)