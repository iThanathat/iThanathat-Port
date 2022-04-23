import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as SolidIcon from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

type NavBarProps = {
  theme: 'dark' | 'corporate';
  onToggleTheme: () => void;
  path: string;
};

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  path: string;
};

const NavLink: React.FC<NavLinkProps> = ({href, path, children}) => {
  const active = path === href;
  return (
    <div className={`${active ? 'active' : 'inactive'}`}>
      <Link href={href} passHref>
        {children}
      </Link>
    </div>
  );
};

const NavBar: React.FC<NavBarProps> = ({onToggleTheme, theme, path}) => {
  return (
    <div
      className={'w-full bg-base-100 bg-opacity-75 backdrop-blur-sm fixed z-10'}
    >
      <div className="flex justify-center items-center p-2">
        <Link href="/" passHref>
          <div className="flex items-center">
            <>
              <Image
                src="/images/AnimojiMe.png"
                alt="iThanathat"
                width={30}
                height={30}
                className="cursor-pointer"
              />
              <p
                className={`text-xl ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                } cursor-pointer`}
              >
                Thanathat Surakhup
              </p>
            </>
          </div>
        </Link>
        <div className="ml-4">
          <NavLink path={path} href="/experiences">
            <p
              className={`text-xl ${
                theme === 'dark' ? 'text-white' : 'text-black'
              } cursor-pointer hover:underline mx-2`}
            >
              Experiences
            </p>
          </NavLink>
          {/* <Link href={'/experiences'} passHref>
            <p
              className={`text-xl ${
                theme === 'dark' ? 'text-white' : 'text-black'
              } cursor-pointer hover:underline`}
            >
              Experiences
            </p>
          </Link> */}
        </div>
        <div className="ml-6">
          <Link
            href={'https://github.com/iThanathat/iThanathat-Space'}
            passHref
          >
            <a target="_blank">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className={`text-primary-content ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                />
                <p
                  className={`ml-2 text-xl ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  } cursor-pointer hover:underline`}
                >
                  Source
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div onClick={() => onToggleTheme()} className="ml-6 cursor-pointer">
          <FontAwesomeIcon
            icon={theme === 'corporate' ? SolidIcon.faMoon : SolidIcon.faSun}
            size="2x"
            className={`text-xl ${
              theme === 'dark' ? 'text-white' : 'text-black'
            } transition ease-in duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
