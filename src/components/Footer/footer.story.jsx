import React from 'react'
import { ChevronRight, Facebook, Linkedin, Rss, Twitter } from 'react-feather'
import Footer from './index'
import Link from '../Link'
import Title from '../Title'
import SsbLogo from '../../media/ssb-logo-white.svg'
import Button from '../Button'

export default {
  title: 'Footer',
}

export const Default = () => (
  <div style={{ width: '1200px' }}>
    <Footer>
      <div className='top-row flex-row justify-space-between flex-wrap'>
        <SsbLogo alt='ssb-logo' />
        <Button negative onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
          Til Toppen
        </Button>
      </div>
      <div className='footer-content'>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, auto)' }}>
          <div>
            <Title size={5} negative>
              Category
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
            </div>
          </div>
          <div>
            <Title size={5} negative>
              Category
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
            </div>
          </div>
          <div>
            <Title size={5} negative>
              Category
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
            </div>
          </div>
          <div>
            <Title size={5} negative>
              Category
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
            </div>
          </div>
          <div>
            <Title size={5} negative>
              Category
            </Title>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
              <Link icon={<ChevronRight />} href=' ' negative>
                A link
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-row flex-row justify-space-between flex-wrap'>
        <div className='global-links'>
          <Link href='https://www.ssb.no/' isExternal negative>
            Statistisk sentralbyrå © 2019
          </Link>
          <Link href='https://www.ssb.no/a-aa' isExternal negative>
            A-Å
          </Link>
          <Link href='https://www.ssb.no/nettstedskart' isExternal negative>
            Nettstedskart
          </Link>
        </div>
        <div className='social-links'>
          <Link
            href='https://www.facebook.com/statistisksentralbyra/'
            isExternal
            negative
            icon={<Facebook size={24} />}
          />
          <Link href='https://twitter.com/ssbnytt' isExternal negative icon={<Twitter size={24} />} />
          <Link
            href='https://www.linkedin.com/company/statistics-norway/'
            isExternal
            negative
            icon={<Linkedin size={24} />}
          />
          <Link href='https://www.ssb.no/informasjon/rss' isExternal negative icon={<Rss size={24} />} />
        </div>
      </div>
    </Footer>
  </div>
)
