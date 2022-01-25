import { Logo } from '@/components/Elements';

export const Landing = () => {
  return (
    <div className='text-center'>
      <header className='bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-xl'>
        <Logo />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. changes
        </p>
        <a
          className='text-[#61dafb]'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
};
