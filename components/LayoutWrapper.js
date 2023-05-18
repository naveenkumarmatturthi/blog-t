import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <SectionContainer>
        <div className="flex min-h-screen flex-col justify-between">
          <main>{children}</main>
        </div>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
