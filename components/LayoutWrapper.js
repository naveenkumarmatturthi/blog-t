import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo2.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 sticky top-0 z-20 mt-0 flex w-full items-center justify-between rounded border-none  bg-white bg-opacity-30 px-10 py-4 backdrop-blur-lg backdrop-saturate-150 backdrop-filter dark:bg-gray-900 dark:bg-opacity-30 ">
          <nav className="mx-auto flex w-full max-w-2xl items-start justify-start px-4 sm:px-6 sm:py-2 xl:max-w-3xl xl:px-0">
            <div className="hidden">
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo />
                  </div>
                  {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
                </div>
              </Link>
            </div>
            <div className="mx-auto flex w-full items-center justify-start text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 first:pl-0 hover:text-primary-500 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </nav>
        </header>
        <main className="mx-auto mb-auto xl:max-w-3xl">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
